import type { Genre } from "./GENRES";

type GenreColors =  Record<Genre, string> 

export const GENRES_COLORS: GenreColors = {
  "Zouk": "#FF5733",           // Vibrant Orange
  "Forró": "#FFD700",          // Golden Yellow
  "Salsa": "#C70039",          // Rich Red
  "Bachata": "#3498DB",        // Bright Blue
  "Kizomba": "#8E44AD",        // Deep Purple
  "Semba": "#28B463",          // Fresh Green
  "Swing": "#E91E63",          // Bold Pink
  "Tango": "#FF8C00",          // Dark Orange
  "West Coast Swing": "#008080",// Teal
  "Bolero": "#4169E1",         // Royal Blue
	"Samba": "#DC143C" // Crimson
};



export default GENRES_COLORS
