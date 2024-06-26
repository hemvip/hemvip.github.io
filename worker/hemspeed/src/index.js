import { handleOptions } from "./handleOptions";
import { responseJSON } from "./utils";

const corsHeaders = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
	"Access-Control-Max-Age": "86400",
}

export default {
	async fetch(request, env, ctx) {
		console.log("start websocket go here")
		// if (request.method === "OPTIONS") {
		// 	// Handle CORS preflight requests
		// 	return handleOptions(request)
		// }

		if (request.headers.get('Upgrade') !== 'websocket') {
			return new Response('Expected websocket', { status: 400 });
		}

		const [client, server] = Object.values(new WebSocketPair())
		server.accept();

		server.addEventListener('message', async event => {
			const audioBlob = event.data;
			console.log("message")
			if (!audioBlob) {
				return responseJSON('Audio file is missing', 400);
			}

			try {
				console.log("audioBlob", audioBlob, typeof audioBlob)
				// Transcribe the audio using Whisper model
				const transcribedText = await transcribeAudioWithWhisper(audioBlob, env);
				console.log("transcribedText", transcribedText)

				// Send the transcribed text back to the client
				server.send(transcribedText);
			} catch (error) {
				console.error('Error processing audio:', error);
				server.send('Error processing audio');
			}
		});

		return new Response(null, {
			status: 101,
			webSocket: client
		});
	}
}

async function transcribeAudioWithWhisper(audioFile, env) {
	if (!audioFile) {
		return responseJSON('Audio file is missing', 400);
	}
	// const blob = await audioFile.arrayBuffer();

	const inputs = {
		audio: [...new Uint8Array(audioFile)]
	};
	const response = await env.AI.run('@cf/openai/whisper', inputs);
	// console.log("response", response)

	return response.text;
}


async function blobToBase64(blob) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(blob);
		reader.onloadend = () => {
			// @ts-ignore
			const base64data = reader.result.split(',')[1];
			resolve(base64data);
		};
		reader.onerror = error => reject(error);
	});
}
