import { handleOptions } from "./handleOptions";
import { responseJSON } from "./utils";

export default {
	async fetch(request, env, ctx) {
		if (request.headers.get('Upgrade') !== 'websocket') {
			return new Response('Expected websocket', { status: 400 });
		}

		const [client, server] = new WebSocketPair();
		server.accept();

		server.addEventListener('message', async event => {
			const audioBlob = event.data;
			try {
				// Transcribe the audio using Whisper model
				const transcribedText = await transcribeAudioWithWhisper(audioBlob, env);

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
	const blob = await audioFile.arrayBuffer();

	const inputs = {
		audio: [...new Uint8Array(blob)]
	};
	const response = await env.AI.run('@cf/openai/whisper', inputs);

	if (!response.ok) {
		throw new Error(`Failed to transcribe audio: ${response.statusText}`);
	}

	const result = await response.json();
	if (result && result.data && result.data.text) {
		return result.data.text;
	} else {
		throw new Error('No transcription result');
	}
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
