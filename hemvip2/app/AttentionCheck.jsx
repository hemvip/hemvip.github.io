import React, { useRef, useState } from 'react'

export default function AttentionCheck() {
    const [isRecording, setIsRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const [audioChunks, setAudioChunks] = useState([]);
    const audioRef = useRef();

    const startRecording = async () => {
        setIsRecording(true);

        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);

        recorder.ondataavailable = event => {
            setAudioChunks(prev => [...prev, event.data]);
        };

        recorder.start();
    };

    const stopRecording = () => {
        setIsRecording(false);

        mediaRecorder.stop();
        mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
            const audioUrl = URL.createObjectURL(audioBlob);
            audioRef.current.src = audioUrl;

            uploadAudio(audioBlob);
            setAudioChunks([]);
        };
    };

    const uploadAudio = async (audioBlob) => {
        const formData = new FormData();
        formData.append('audio', audioBlob, 'recording.wav');

        const response = await fetch('http://localhost:65207', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();
        console.log(result);
    };


    return (
        <div className='flex flex-col gap-4 justify-center text-center'>
            <button className="bg-black hover:bg-white border-black w-36 h-8 py-1 text-white hover:text-black border rounded-md text-sm transition-all"
                onClick={startRecording} disabled={isRecording}>
                Start Recording
            </button>
            <button className="bg-black hover:bg-white border-black w-36 h-8 py-1 text-white hover:text-black border rounded-md text-sm transition-all"
                onClick={stopRecording} disabled={!isRecording}>
                Stop Recording
            </button>
            <audio ref={audioRef} controls />
        </div>
    )
}
