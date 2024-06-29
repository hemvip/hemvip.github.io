"use client"

import cn from 'clsx';
import { HEMSPEED_WEBSOCKET } from '@/utils/urlEndpoint';
import { useEffect, useRef, useState } from 'react';

export default function AttentionCheck() {
    const [recording, setRecording] = useState(false);
    const [translation, setTranslation] = useState('');
    const [audioURL, setAudioURL] = useState(null);
    const socketRef = useRef(null);
    const recorderRef = useRef(null);
    const audioChunksRef = useRef([]);

    useEffect(() => {
        intializeWebSocket();

        return () => {
            if (socketRef.current) {
                socketRef.current.close();
            }
        };
    }, []);

    function intializeWebSocket() {
        // Establish WebSocket connection
        socketRef.current = new WebSocket(HEMSPEED_WEBSOCKET);

        socketRef.current.onopen = () => {
            console.log('WebSocket connection established33');
        };

        socketRef.current.onerror = (error) => {
            console.log('WebSocket error11:', error);
        };

        socketRef.current.onclose = () => {
            console.log('WebSocket connection closed22');
        };

        socketRef.current.onmessage = (event) => {
            setTranslation(JSON.stringify(event.data));
        };
    }

    const startRecording = async () => {
        if (socketRef.current === null) intializeWebSocket();

        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        recorderRef.current = new MediaRecorder(stream);
        recorderRef.current.ondataavailable = event => {
            audioChunksRef.current.push(event.data);
        };
        recorderRef.current.start();
        setRecording(true);
    };

    const stopRecording = () => {
        recorderRef.current.stop();
        recorderRef.current.onstop = async () => {
            const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
            audioChunksRef.current = [];

            // Create a URL for the audio blob
            const audioURL = URL.createObjectURL(audioBlob);
            setAudioURL(audioURL);

            // Check if WebSocket is in OPEN state before sending
            if (socketRef.current.readyState === WebSocket.OPEN) {
                const data = await audioBlob.arrayBuffer()
                console.log("audioBlob", audioBlob, audioBlob.type, audioBlob.size);
                socketRef.current.send(audioBlob);
            } else {
                console.error('WebSocket connection is not open.');
                // Handle error or retry logic if needed
            }
            // socketRef.current.close()

        };

        // if (recorderRef.current.state !== 'inactive') {
        //     const tracks = recorderRef.current.stream.getTracks();
        //     tracks.forEach(track => track.stop());
        // }

        const tracks = recorderRef.current.stream.getTracks();
        tracks.forEach(track => track.stop());

        setRecording(false);
    };

    return (
        <div className='flex flex-col gap-4 justify-center text-center p-24 border border-gray-500 shadow-xl rounded-xl'>
            <h3 className='font-semibold tracking-tight text-slate-900 dark:text-slate-100 text-2xl'>Attention Check</h3>
            <p>Please turn on audio and say "I ready".</p>
            {audioURL && (
                <div className='text-center'>
                    <audio controls src={audioURL}></audio>
                </div>
            )}
            <button
                onClick={recording ? stopRecording : startRecording}
                className={cn("  hover:bg-white w-full h-10 py-1 text-white hover:text-black border rounded-md text-sm transition-all",
                    recording ? "bg-black  border-black" : "bg-green-600  border-green-600")}>
                {recording ? 'Stop Recording' : 'Start Recording'}
            </button>
            {
                translation && (<p className='text-slate-900 dark:text-slate-100 text-lg'>Speed Result {translation}</p>)
            }
        </div>
    );
}
