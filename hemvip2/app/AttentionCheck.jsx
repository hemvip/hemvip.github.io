import React, { useRef, useState } from 'react'

export default function AttentionCheck() {
    // const [isRecording, setIsRecording] = useState(false);
    // const [mediaRecorder, setMediaRecorder] = useState(null);
    // const [audioChunks, setAudioChunks] = useState([]);
    // const audioRef = useRef();

    // const startRecording = async () => {
    //     setIsRecording(true);

    //     const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
    //     const recorder = new MediaRecorder(stream);
    //     setMediaRecorder(recorder);

    //     recorder.ondataavailable = event => {
    //         setAudioChunks(prev => [...prev, event.data]);
    //     };

    //     recorder.start();
    // };

    // const stopRecording = () => {
    //     setIsRecording(false);

    //     mediaRecorder.stop();
    //     mediaRecorder.onstop = () => {
    //         const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
    //         const audioUrl = URL.createObjectURL(audioBlob);
    //         audioRef.current.src = audioUrl;

    //         uploadAudio(audioBlob);
    //         setAudioChunks([]);
    //     };
    // };

    // const uploadAudio = async (audioBlob) => {
    //     const formData = new FormData();
    //     formData.append('audio', audioBlob, 'recording.wav');
    //     console.log("formData", formData)

    //     // const response = await fetch('http://localhost:63345', {
    //     //     method: 'POST',
    //     //     body: formData,
    //     // });

    //     // const result = await response.json();
    //     // console.log(result);
    // };


    // return (
    //     <div className='flex flex-col gap-4 justify-center text-center'>
    //         <button className="bg-black disabled:bg-gray-500 disabled:border-gray-500 hover:bg-white border-black w-36 h-8 py-1 text-white hover:text-black border rounded-md text-sm transition-all"
    //             onClick={startRecording} disabled={isRecording}>
    //             Start Recording
    //         </button>
    //         <button className="bg-black disabled:bg-gray-500 disabled:border-gray-500 hover:bg-white border-black w-36 h-8 py-1 text-white hover:text-black border rounded-md text-sm transition-all"
    //             onClick={stopRecording} disabled={!isRecording}>
    //             Stop Recording
    //         </button>
    //         <audio ref={audioRef} controls />
    //     </div>
    // )
    const [isRecording, setIsRecording] = useState(false);
    const mediaRecorderRef = useRef(null);
    const videoChunksRef = useRef([]);
    const videoRef = useRef(null);
    const streamRef = useRef(null);

    const startRecording = async () => {
        try {
            streamRef.current = await navigator.mediaDevices.getUserMedia({
                audio: true,
                // video: true
            });

            if (videoRef.current) {
                videoRef.current.srcObject = streamRef.current;
            }

            mediaRecorderRef.current = new MediaRecorder(streamRef.current);

            mediaRecorderRef.current.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    videoChunksRef.current.push(event.data);
                }
            };

            mediaRecorderRef.current.onstop = () => {
                const videoBlob = new Blob(videoChunksRef.current, { type: 'audio/wav' });
                console.log("videoBlob", videoBlob)
                sendVideoToCloudflare(videoBlob);
                videoChunksRef.current = [];
            };

            mediaRecorderRef.current.start();
            setIsRecording(true);
        } catch (error) {
            console.error("Error accessing media devices:", error);
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);

            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
            }
        }
    };

    const sendVideoToCloudflare = async (videoBlob) => {
        const formData = new FormData();
        formData.append("audio", videoBlob, 'recording.wav');
        // console.log(videoBlob)
        // console.log(formData.get("audio"))
        console.log("formData", formData)

        try {
            const response = await fetch('ws://hemspeed.hemvip.workers.dev', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                console.log("result", result)
            } else {
                console.error('Error sending video to Cloudflare Worker');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='flex flex-col gap-2'>
            <video ref={videoRef} autoPlay muted style={{ width: '100%', maxWidth: '500px' }} />
            <button className="bg-black disabled:bg-gray-500 disabled:border-gray-500 hover:bg-white border-black w-36 h-8 py-1 text-white hover:text-black border rounded-md text-sm transition-all"
                onClick={startRecording} disabled={isRecording}>
                Start Recording
            </button>
            <button className="bg-black disabled:bg-gray-500 disabled:border-gray-500 hover:bg-white border-black w-36 h-8 py-1 text-white hover:text-black border rounded-md text-sm transition-all"
                onClick={stopRecording} disabled={!isRecording}>
                Stop Recording
            </button>
        </div>
    );
}
