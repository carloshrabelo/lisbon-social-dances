import { useEffect, useState } from "react";
import "./App.css";
import AlignItemsList from "./components/AlignItemsList";
import Filter from "./components/Filter";
// import Xpto from "./components/Xxpto";

import type { Genre } from "./const/GENRES";
import { Box } from "@mui/material";
import Theme from "./theme";
import { useQueryParams } from "./hook/useQueryParams";

export default function App() {
	const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);
	const { queryParams, setQueryParam, removeQueryParam } = useQueryParams();

	const handleFilters = () => {
		setSelectedGenres([]);
		removeQueryParam("genres");
	};
	useEffect(() => {
		const genres = queryParams?.genres || [];
		setSelectedGenres(Array.isArray(genres) ? genres : [genres]);
	}, [queryParams]);

	return (
		<Theme>
			<Box>
				<Filter
					selected={selectedGenres}
					onChange={(genre) =>
						setQueryParam(
							"genres",
							selectedGenres.includes(genre)
								? selectedGenres.filter((e) => e !== genre)
								: [...selectedGenres, genre],
						)
					}
					clearFilter={handleFilters}
				/>
				{/* <Xpto/> */}
				<AlignItemsList filters={selectedGenres} />
			</Box>
		</Theme>
	);
}
