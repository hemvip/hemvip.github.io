addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request));
});

async function handleRequest(request, env) {
	if (request.headers.get('Upgrade') !== 'websocket') {
		return new Response('Expected a WebSocket request', { status: 426 });
	}

	// const [client, server] = new WebSocketPair();
	const [client, server] = Object.values(new WebSocketPair())
	handleWebSocketSession(server, env);
	return new Response(null, {
		status: 101,
		webSocket: client,
	});
}

function handleWebSocketSession(webSocket, env) {
	webSocket.accept();

	webSocket.addEventListener('message', async event => {
		// Echo the received message back to the client
		console.log("object", JSON.stringify(event))
		const audioFile = event.data
		const blob = await audioFile.arrayBuffer();

		const inputs = {
			audio: [...new Uint8Array(blob)]
		};
		const response = await env.AI.run('@cf/openai/whisper', inputs);
		webSocket.send({ inputs, response });

		// console.log("object", event.data)
		// webSocket.send(`Received: ${event.data}`);
	});

	webSocket.addEventListener('close', () => {
		console.log('WebSocket connection closed');
	});

	webSocket.addEventListener('error', err => {
		console.error('WebSocket error:', err);
	});
}
