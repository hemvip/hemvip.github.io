export function toJSON(data, status = 200) {
	let body = JSON.stringify(data, null, 2);
	let headers = { 'content-type': 'application/json' };
	return new Response(body, { headers, status });
}
export function toError(error, status = 400) {
	return toJSON({ error }, status);
}
export function reply(output) {
	if (output != null)
		return toJSON(output, 200);
	return toError('Error with query', 500);
}

export function addCORS(response) {
	response.headers.set('Access-Control-Allow-Origin', '*');
	response.headers.set('Access-Control-Allow-Methods', 'GET,HEAD,POST,OPTIONS');
	response.headers.set('Access-Control-Max-Age', '86400');

	return response
}
