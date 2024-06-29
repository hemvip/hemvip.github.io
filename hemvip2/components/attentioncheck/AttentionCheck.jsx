"use client"

import {
    Dialog,
    DialogPanel,
    TransitionChild,
    Transition,
    DialogBackdrop,
} from "@headlessui/react"
import React, { Fragment, useEffect, useRef, useState } from "react"
import cn from "clsx"
import { HEMSPEED_WEBSOCKET } from "@/utils/urlEndpoint";
import SpeakIcon from "./SpeakIcon";
import CheckMarkIcon from "./CheckMarkIcon";
import ListeningIcon from "./ListeningIcon";
import Loading from "../loading/loading";
import { normalizeCharacters } from "@/utils/utils";

export default function AttentionCheck({ isOpen, onClose, onFinish }) {
    const [recording, setRecording] = useState(false);
    const [translation, setTranslation] = useState('');
    const [audioURL, setAudioURL] = useState(null);
    const [loading, setLoading] = useState(false);
    // const [isReady, setIsReady] = useState("");
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

    useEffect(() => {
        if (translation === "I ready") {
            setTimeout(() => {
                onFinish()
            }, 2000)
        }
    }, [translation])

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
            const transcribed = normalizeCharacters(event.data);
            let text = transcribed
            if (transcribed == "Im ready"
                || transcribed == "I am ready"
                || transcribed == "I really"
                || transcribed == "I'm ready") {
                text = "I ready"
            }
            text = "I ready"

            setTranslation(text);
        };
    }


    const startRecording = async () => {
        setLoading(true)
        // if (socketRef.current === null) intializeWebSocket();

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
                // console.log("audioBlob", audioBlob, audioBlob.type, audioBlob.size);
                socketRef.current.send(audioBlob);
            } else {
                console.error('WebSocket connection is not open.');
                // Handle error or retry logic if needed
            }
            // socketRef.current.close()

        };

        const tracks = recorderRef.current.stream.getTracks();
        tracks.forEach(track => track.stop());

        setRecording(false);
        setLoading(false)
    };

    if (!isOpen) return null

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10 overflow-y-visible" onClose={onClose} transition={false}>
                    <DialogBackdrop className="fixed inset-0 overflow-y-visible bg-black/30" />
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
                    <div className="fixed inset-0 overflow-y-visible">
                        <div className="flex justify-center py-[4%] text-center h-full overflow-y-visible">
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
                                        "flex p-20 w-full bg-white items-center",
                                    )}
                                >
                                    <div className='flex flex-col gap-4 justify-center items-center text-center'>
                                        <h3 className='font-semibold tracking-tight text-slate-900 dark:text-slate-100 text-2xl'>Attention Check</h3>
                                        <div className="w-full">
                                            <SpeakIcon />
                                        </div>
                                        {
                                            translation && <CheckMarkIcon isCorrect={translation === "I ready"} />
                                        }

                                        <p className="leading-7 first:mt-0 ">Please turn on audio and say &quot;I ready&quot; until machine recognize your voice correct.</p>
                                        {audioURL && (
                                            <div className='text-center'>
                                                <audio controls src={audioURL} autoPlay></audio>
                                            </div>
                                        )}
                                        {
                                            loading ? <Loading className={"text-current"} /> :

                                                translation && (<p className='text-slate-900 dark:text-slate-100 '>Your voice:  <span className="text-lg font-bold">{translation}</span></p>)
                                        }
                                        <button
                                            onClick={recording ? stopRecording : startRecording}
                                            className={cn("  hover:bg-white w-full h-10 py-1 text-white hover:text-black border rounded-md text-sm transition-all",
                                                (recording ? "bg-black  border-black" : "bg-green-600  border-green-600")
                                            )}>
                                            <div className="flex gap-2 justify-center items-center ">
                                                <ListeningIcon isListening={recording} />
                                                {recording ?
                                                    'Stop Recording' : 'Start Recording'}
                                            </div>
                                        </button>

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
