

export async function fetchAll(client) {
	try {

	} catch (error) {
		return {
			errors: error,
			success: false,
			data: null,
			msg: "Internal server error",
		}
	}
}
