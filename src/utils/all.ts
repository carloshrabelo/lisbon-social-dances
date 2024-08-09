import type { Genre } from "../const/GENRES";

export interface ColorEntry {
    main: string;
    dark: string;
    light: string;
}

// Define the palette
export const palette: Record<string, ColorEntry> = {
    SkyBlue: { main: "#87CEEB", dark: "#00BFFF", light: "#B0E0E6" },
    SteelBlue: { main: "#4682B4", dark: "#4169E1", light: "#B0C4DE" },
    Teal: { main: "#008080", dark: "#004d4d", light: "#e0f2f1" },
    PowderBlue: { main: "#B0E0E6", dark: "#B0C4DE", light: "#E6F0F3" },
    Coral: { main: "#FF7F50", dark: "#FF6347", light: "#FFDAB9" },
    Green: { main: "#58CC02", dark: "#45A202", light: "#A4D92B" },
    LightGreen: { main: "#76FF03", dark: "#64DD17", light: "#B9FBC0" },
    DarkGreen: { main: "#378A19", dark: "#2A6B14", light: "#7CFC00" },
    LightBlue: { main: "#00CFFF", dark: "#00A3CC", light: "#B2EBF2" },
    DarkBlue: { main: "#2979FF", dark: "#1B5EBA", light: "#8C9EFF" },
    Red: { main: "#FF4B4B", dark: "#CC3B3B", light: "#FF9A9A" },
    Wine: { main: "#8B1C62", dark: "#6A144A", light: "#D81B60" },
    LightYellow: { main: "#FFF176", dark: "#FDD835", light: "#FFFF6B" },
    Yellow: { main: "#FFD700", dark: "#CCAC00", light: "#FFFF00" },
    LightPink: { main: "#FF80AB", dark: "#E066A3", light: "#FFB2B2" },
    Pink: { main: "#F06292", dark: "#C2185B", light: "#F8BBD0" },
    DarkGray: { main: "#4A4A4A", dark: "#3A3A3A", light: "#9E9E9E" },
    Gray: { main: "#F7F7F7", dark: "#D3D3D3", light: "#FFFFFF" },
    Brown: { main: "#8D6E63", dark: "#6D4C41", light: "#BCAAA4" },
    Orange: { main: "#FF6F00", dark: "#E65100", light: "#FFCC80" },
    Purple: { main: "#7E57C2", dark: "#5D3D99", light: "#AB8DF0" }
};

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

// Function to get contrasting color (white or black) for text
export function getContrastingColor(hex: string): string {
    const r = Number.parseInt(hex.slice(1, 3), 16);
    const g = Number.parseInt(hex.slice(3, 5), 16);
    const b = Number.parseInt(hex.slice(5, 7), 16);
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luminance > 128 ? '#000000' : '#FFFFFF';
}


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
    }).sort((a, b) => a.name < b.name ?  -1 : 1)

    return [...combinedColors.filter( c => c.name in genreToPalette),...combinedColors.filter( c => !(c.name in genreToPalette))];
};

export const combinedColors = ColorPalette()

export default ColorPalette;
