import { handleOptions } from "./handleOptions";
import { response } from "./utils";

export default {
	async fetch(request, env, ctx) {
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
			if (!audioBlob) {
				return response('Audio file is missing', 400);
			}

			try {
				// Transcribe the audio using Whisper model
				const transcribedText = await transcribeAudioWithWhisper(audioBlob, env);

				// Send the transcribed text back to the client
				server.send(transcribedText);
				return response(transcribedText, 200);
			} catch (error) {
				console.error('Error processing audio:', error);
				server.send('Error processing audio');
				return response('Error processing audio', 400);
			}
		});

		return new Response(null, {
			status: 101,
			webSocket: client
		});
	}
}

async function transcribeAudioWithWhisper(audioFile, env) {
	const inputs = {
		audio: [...new Uint8Array(audioFile)]
	};
	const response = await env.AI.run('@cf/openai/whisper', inputs);

	return response.text;
}
