import { handleOptions } from "./handleOptions";

export default {
	async fetch(request, env) {
		if (request.method === "OPTIONS") {
			// Handle CORS preflight requests
			return handleOptions(request);
		}

		if (request.method === 'GET') {
			return new Response('API Active, but please use POST for audio.', { status: 200 });
		}

		try {
			if (request.method !== 'POST') {
				return new Response('Method Not Allowed', { status: 405 });
			}
			const formData = await request.formData();
			const audioFile = formData.get('audio');
			if (!audioFile) {
				return new Response('Audio file is missing', { status: 400 });
			}
			const blob = await audioFile.arrayBuffer();

			const inputs = {
				audio: [...new Uint8Array(blob)]
			};
			const response = await env.AI.run('@cf/openai/whisper', inputs);

			return Response.json({ inputs, response });
		} catch (error) {
			return new Response('Error processing request: ' + error.message, { status: 500 });
		}
	}
};
