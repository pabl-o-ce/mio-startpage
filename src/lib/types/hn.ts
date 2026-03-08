export interface HNStory {
	objectID: string;
	title: string;
	url: string | null;
	author: string;
	points: number;
	num_comments: number;
	created_at: string;
	created_at_i: number;
}

export interface HNSearchResponse {
	hits: HNStory[];
}

export type HNSortMode = 'new' | 'points' | 'comments';
