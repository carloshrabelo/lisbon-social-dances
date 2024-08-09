import { palette, type Color } from "../theme/palette";
import type { Genre } from "./GENRES";

type GenreColors = Record<Genre, Color>;

export const genreToPalette: GenreColors = {
	Bachata: "wine",
	Bolero: "pink",
	Forró: "brown",
	Kizomba: "dark-blue",
	Salsa: "red",
	Samba: "yellow",
	Semba: "dark-green",
	Swing: "light-blue",
	Tango: "orange",
	Zouk: "purple",
	"West Coast Swing": "teal"
};

export const GENRES_COLORS: GenreColors = Object.fromEntries(
	Object.entries(genreToPalette).map(([genre, color]) => [
		genre as Genre,
		palette[color].main,
	]),
) as GenreColors;

export default GENRES_COLORS;
