import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load() {
	try {
		const response = await fetch('http://localhost:9000/api/shortener/all');
		const data = await response.json();

		return {
			...data
		};
	} catch (error) {
		redirect(301, '/');
	}
}
