import { type MouseEvent, useState } from "react";
import "./App.css";
import AlignItemsList from "./components/AlignItemsList";
import GENRES, { type Genre } from "./const/GENRES";
import { Box, Paper, ToggleButton, ToggleButtonGroup } from "@mui/material";
import GENRES_COLORS from "./const/GENRES_COLORS";
import OverrideCallbackCssBaseline from "./theme/OverrideCallbackCssBaseline";

export default function App() {
	const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);

	const handleFormat = (
		_event: MouseEvent<HTMLElement>,
		newFormats: Genre[],
	) => {
		setSelectedGenres(newFormats);
	};

	return (
		<OverrideCallbackCssBaseline>
		<Box >
			<Paper sx={{ top: 0, position: "sticky", zIndex: 1 }} elevation={0}>
				<ToggleButtonGroup
					color="primary"
					value={selectedGenres}
					onChange={handleFormat}
					aria-label="Genre Filter"
				>
					{GENRES.slice(0,5).map((genre) => (
						<ToggleButton value={genre} key={genre} sx={{'&:before':{ content:"''", backgroundColor: GENRES_COLORS[genre], right: '8px', top: '8px', position: 'absolute', width: '10px', height:'10px', borderRadius: '50%' }}} >
							{genre}
						</ToggleButton>
					))}
				</ToggleButtonGroup>
				<ToggleButtonGroup
					color="primary"
					value={selectedGenres}
					onChange={handleFormat}
					aria-label="Genre Filter"
				>
					{GENRES.slice(5,10).map((genre) => (
						<ToggleButton value={genre} key={genre} sx={{'&:before':{ content:"''", backgroundColor: GENRES_COLORS[genre], right: '8px', top: '8px', position: 'absolute', width: '10px', height:'10px', borderRadius: '50%' }}} >
							{genre}
						</ToggleButton>
					))}
				</ToggleButtonGroup>
			</Paper>
			<br />
			<AlignItemsList filters={selectedGenres} />
		</Box>
		</OverrideCallbackCssBaseline>
	);
}
