import { useState } from "react";
import "./App.css";
import AlignItemsList from "./components/AlignItemsList";
import Filter from "./components/Filter";
// import Xpto from "./components/Xxpto";


import type { Genre } from "./const/GENRES";
import { Box } from "@mui/material";
import Theme from "./theme";

export default function App() {
	const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);
	return (
		<Theme>
			<Box>
				<Filter selected={selectedGenres} onChange={setSelectedGenres} />
				{/* <Xpto/> */}
				<AlignItemsList filters={selectedGenres} />
			</Box>
		</Theme>
	);
}
