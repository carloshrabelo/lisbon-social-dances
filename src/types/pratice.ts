import type { Genre } from "../const/GENRES";

type Xpto = { date: string } | { dateTime: string };

type Item = {
	kind: string;
	etag: string;
	id: string;
	status: string;
	htmlLink: string;
	created: string;
	updated: string;
	summary: string;
	description: string;
	location: string;
	creator: {
		email: string;
	};
	organizer: {
		email: string;
		self: true;
	};
	start: Xpto;
	end: Xpto;
	transparency: string;
	iCalUID: string;
	sequence: number;
	eventType: string;
};

type Calendar = {
	kind: string;
	etag: string;
	summary: string;
	description: string;
	updated: string;
	timeZone: string;
	accessRole: string;
	defaultReminders: string;
	nextSyncToken: string;
	items: Item[];
};

export type EventImproved = Event & {
	genre: Genre[];
}