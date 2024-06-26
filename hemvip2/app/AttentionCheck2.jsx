"use client"

import { useEffect, useRef, useState } from 'react';

export default function AttentionCheck() {
    const [recording, setRecording] = useState(false);
    const [translation, setTranslation] = useState('');
    const socketRef = useRef(null);
    const recorderRef = useRef(null);
    const audioChunksRef = useRef([]);

    useEffect(() => {
        // Establish WebSocket connection
        socketRef.current = new WebSocket('ws://localhost:8099');

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

        return () => {
            if (socketRef.current) {
                socketRef.current.close();
            }
        };
    }, []);

    const startRecording = async () => {
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

        setRecording(false);
    };

    return (
        <div className='flex flex-col gap-2'>
            <h1>WebSocket Audio Recorder</h1>
            <button onClick={recording ? stopRecording : startRecording} className="bg-black disabled:bg-gray-500 disabled:border-gray-500 hover:bg-white border-black w-36 h-8 py-1 text-white hover:text-black border rounded-md text-sm transition-all">
                {recording ? 'Stop Recording' : 'Start Recording'}
            </button>
            <p>Translation: {translation}</p>
        </div>

        // <video ref={videoRef} autoPlay muted style={{ width: '100%', maxWidth: '500px' }} />
        // <button className="bg-black disabled:bg-gray-500 disabled:border-gray-500 hover:bg-white border-black w-36 h-8 py-1 text-white hover:text-black border rounded-md text-sm transition-all"
        //     onClick={startRecording} disabled={isRecording}>
        //     Start Recording
        // </button>
        // <button className="bg-black disabled:bg-gray-500 disabled:border-gray-500 hover:bg-white border-black w-36 h-8 py-1 text-white hover:text-black border rounded-md text-sm transition-all"
        //     onClick={stopRecording} disabled={!isRecording}>
        //     Stop Recording
        // </button>
    );
}
