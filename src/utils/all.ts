import type { Genre } from "../const/GENRES";
import { palette } from "../theme/palette";
export { palette } from "../theme/palette";
export type { ColorEntry } from "../theme/palette";

// Define the genre to color mapping
export const genreToPalette: Record<Genre, string> = {
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
    Samba: "Yellow"
};


export const ColorPalette = () => {
    // Create an array combining colors with and without genre associations
    const combinedColors = Object.entries(palette).map(([colorName, colorValues]) => {
        // Determine the genre associated with this color, if any
        const genre = Object.keys(genreToPalette).find((key) => genreToPalette[key as Genre] === colorName) as Genre;

        // Return the color in the desired format with an extra field for sorting
        return {
            name: genre || colorName,
            colorValues,
            colorName: genre ? genreToPalette[genre] : undefined,
        };
    }).sort((a, b) => a.name < b.name ? -1 : 1)

    return [...combinedColors.filter(c => c.name in genreToPalette), ...combinedColors.filter(c => !(c.name in genreToPalette))];
};

export const combinedColors = ColorPalette()

export default ColorPalette;
