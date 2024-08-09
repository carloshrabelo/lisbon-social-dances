import type { Color } from "../theme/palette";
import type { Genre } from "./GENRES";

const Alias = ["Samba de Gafieira & Vários", "Samba de Gafieira"] as const
type PP = (typeof Alias)[number]

type GenreColors = Record<Genre & PP, Color>;

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
	"Samba de Gafieira & Vários": "yellow",
	"Samba de Gafieira": "yellow",
};

export const GENRES_COLORS = Object.entries(genreToPalette)
.filter(([genre]) => !Alias.includes(genre as PP))
	.map(([name, color]) => ({
		name: name as Genre,
		color: color as Color,
	}))
	.sort((a, b) => (a.name < b.name ? -1 : 1))

export default GENRES_COLORS;
