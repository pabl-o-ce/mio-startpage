import type { HNSearchResponse } from '$lib/types/hn';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	try {
		const res = await fetch('https://hn.algolia.com/api/v1/search?tags=front_page&hitsPerPage=30');
		if (!res.ok) throw new Error(`HTTP ${res.status}`);
		const data: HNSearchResponse = await res.json();
		return { stories: data.hits };
	} catch {
		return { stories: [] };
	}
};
