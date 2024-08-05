import { Genre } from "../const/GENRES";
import useFetch from "../hook/useFetch";
import type { Event } from "../types/event";
import findGenres from "../utils/findGenres";

const baseUrl =
	"https://clients6.google.com/calendar/v3/calendars/pasdedeux.pt@gmail.com/events?";
const currentDate = new Date();
const currentDateISO = currentDate.toISOString();

const params1 = new URLSearchParams({
	sanitizeHtml: "true",
	calendarId: "pasdedeux.pt@gmail.com",
	timeMin: currentDateISO,
	key: "AIzaSyBNlYH01_9Hc5S1J9vuFmu2nUqBZJNAXxs",
}).toString();

const d = (t: Xpto) => new Date("date" in t ? t.date : t.dateTime);

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

type EventImproved = Event & {
	genre: Genre[];
}

// Garantir que o API e o ICS tenham a mesma estrutura Base
export const normalize = (items: Item[]): Event[] =>
	items
		.map((item) => ({ ...item, start: d(item.start), end: d(item.end) }))

const transformData = (result: Calendar) => normalize(result.items)
	.map((item) => ({ ...item, genre: findGenres(`${item.description } ${item.summary}`) }))
	.sort((a, b) => a.start.getTime() - b.start.getTime()) satisfies EventImproved[]

export const useEventAPI = (
	{
		genres,
	}: {
		genres: Genre[];
	} = { genres: [] },
) => {
	const { data, ...mod } = useFetch<EventImproved[], Calendar>(baseUrl + params1, {
		type: "json",
		transformData,
	});
	return {
		...mod,
		data: !genres.length ? data : data?.filter(val => genres.some((qq: Genre) => val.genre.includes(qq)))
	};
};

export default useEventAPI;
