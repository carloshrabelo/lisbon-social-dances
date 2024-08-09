import { palette } from "../utils/all";
import type { Genre } from "./GENRES";

type GenreColors = Record<Genre, string>;

// Define the genre to color mapping
export const genreToPalette: GenreColors = {
	Zouk: "Purple",
	Forró: "Brown",
	Salsa: "Red",
	Bachata: "Wine",
	Kizomba: "DarkBlue",
	Semba: "DarkGreen",
	Swing: "LightBlue",
	Tango: "Orange",
	"West Coast Swing": "PowderBlue",
	Bolero: "LightPink",
	Samba: "Yellow",
};

export const GENRES_COLORS: GenreColors = Object.fromEntries(
	Object.entries(genreToPalette).map(([genre, color]) => [
		genre as Genre,
		palette[color].main,
	]),
) as GenreColors;

export default GENRES_COLORS;
