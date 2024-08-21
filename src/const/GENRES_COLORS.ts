import type { Color } from "../theme/palette";
import type { Genre } from "./GENRES";

type GenreColors = Record<Genre,Color>;

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
	"West Coast Swing": "teal",
};

export const GENRES_COLORS = Object.entries(genreToPalette)
	.map(([name, color]) => ({
		name: name as Genre,
		color: color as Color,
	}))
	.sort((a, b) => (a.name < b.name ? -1 : 1))

export default GENRES_COLORS;
