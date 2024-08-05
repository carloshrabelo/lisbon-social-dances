import GENRES, { ALIAS } from "../const/GENRES";

const replaceText = (text: string, [key, val]: [string, string]) =>
	text.replace(new RegExp(key, "g"), val);

const replaceAlias = (text: string) =>
	Object.entries(ALIAS).reduce(replaceText, text.toUpperCase());

export const findGenres = (text = "") =>
	GENRES.filter((val) =>
		replaceAlias(text).includes(val.toUpperCase()),
	);

export default findGenres;
