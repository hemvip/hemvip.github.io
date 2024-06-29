"use client"

import {
    Dialog,
    DialogPanel,
    TransitionChild,
    Transition,
} from "@headlessui/react"
import React, { Fragment, useEffect, useRef, useState } from "react"
import cn from "clsx"
import { HEMSPEED_WEBSOCKET } from "@/utils/urlEndpoint";
import SpeakIcon from "./SpeakIcon";

export default function AttentionCheck({ isOpen, onClose }) {
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

    if (!isOpen) return null

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={onClose}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 border" />
                    </TransitionChild>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex justify-center mx-auto py-24 text-center h-screen">
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel
                                    className={cn(
                                        "w-full max-w-lg transform overflow-hidden border border-gray-500 rounded-xl text-center align-middle shadow-xl transition-all",
                                        "mx-auto ",
                                        "flex",
                                        // "select-none"
                                    )}
                                >
                                    <div className='flex flex-col gap-4 justify-center text-center p-24 w-full'>
                                        <h3 className='font-semibold tracking-tight text-slate-900 dark:text-slate-100 text-2xl'>Attention Check</h3>
                                        <div className="w-full">
                                            <SpeakIcon />
                                        </div>
                                        <p className="leading-7 first:mt-0 text-nowrap">Please turn on audio and say "I ready".</p>
                                        {audioURL && (
                                            <div className='text-center'>
                                                <audio controls src={audioURL}></audio>
                                            </div>
                                        )}
                                        <button
                                            onClick={recording ? stopRecording : startRecording}
                                            className={cn(" disabled:bg-gray-500 disabled:border-gray-500 hover:bg-white w-full h-10 py-1 text-white hover:text-black border rounded-md text-sm transition-all",
                                                recording ? "bg-black  border-black" : "bg-green-600  border-green-600")}>
                                            {recording ? 'Stop Recording' : 'Start Recording'}
                                        </button>
                                        {
                                            translation && (<p className='text-slate-900 dark:text-slate-100 text-lg'>Speed Result {translation}</p>)
                                        }
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
