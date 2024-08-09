
export interface ColorEntry {
  main: string;
  dark: string;
  light: string;
}
const PALETTE_KEY= [
  "sky-blue",
  "steel-blue",
  "teal",
  "powder-blue",
  "coral",
  "green",
  "light-green",
  "dark-green",
  "light-blue",
  "dark-blue",
  "red",
  "wine",
  "light-yellow",
  "yellow",
  "light-pink",
  "pink",
  "dark-gray",
  "gray",
  "brown",
  "orange",
  "purple"
] as const;

export type Color = typeof PALETTE_KEY[number];

export const palette: Record<Color, ColorEntry> = {
  "sky-blue": { main: "#87CEEB", dark: "#00BFFF", light: "#B0E0E6" },
  "steel-blue": { main: "#4682B4", dark: "#4169E1", light: "#B0C4DE" },
  "teal": { main: "#008080", dark: "#004d4d", light: "#e0f2f1" },
  "powder-blue": { main: "#B0E0E6", dark: "#B0C4DE", light: "#E6F0F3" },
  "coral": { main: "#FF7F50", dark: "#FF6347", light: "#FFDAB9" },
  "green": { main: "#58CC02", dark: "#45A202", light: "#A4D92B" },
  "light-green": { main: "#76FF03", dark: "#64DD17", light: "#B9FBC0" },
  "dark-green": { main: "#378A19", dark: "#2A6B14", light: "#7CFC00" },
  "light-blue": { main: "#00CFFF", dark: "#00A3CC", light: "#B2EBF2" },
  "dark-blue": { main: "#2979FF", dark: "#1B5EBA", light: "#8C9EFF" },
  "red": { main: "#FF4B4B", dark: "#CC3B3B", light: "#FF9A9A" },
  "wine": { main: "#8B1C62", dark: "#6A144A", light: "#D81B60" },
  "light-yellow": { main: "#FFF176", dark: "#FDD835", light: "#FFFF6B" },
  "yellow": { main: "#FFD700", dark: "#CCAC00", light: "#FFFF00" },
  "light-pink": { main: "#FF80AB", dark: "#E066A3", light: "#FFB2B2" },
  "pink": { main: "#F06292", dark: "#C2185B", light: "#F8BBD0" },
  "dark-gray": { main: "#4A4A4A", dark: "#3A3A3A", light: "#9E9E9E" },
  "gray": { main: "#F7F7F7", dark: "#D3D3D3", light: "#FFFFFF" },
  "brown": { main: "#8D6E63", dark: "#6D4C41", light: "#BCAAA4" },
  "orange": { main: "#FF6F00", dark: "#E65100", light: "#FFCC80" },
  "purple": { main: "#7E57C2", dark: "#5D3D99", light: "#AB8DF0" }
};
