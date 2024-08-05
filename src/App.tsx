import { type MouseEvent, useState } from "react";
import "./App.css";
import AlignItemsList from "./components/AlignItemsList";
import GENRES, { type Genre } from "./const/GENRES";
import { Badge, Paper, ToggleButton, ToggleButtonGroup } from "@mui/material";
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
		<div className="App">
			<h1>Hello CodeSandbox</h1>
			<h2>Start editing to see some magic happen!</h2>
			<Paper sx={{ top: 0, position: "sticky", zIndex: 1 }} elevation={0}>
				<ToggleButtonGroup
					sx={{ top: 0, position: "sticky" }}
					color="primary"
					value={selectedGenres}
					onChange={handleFormat}
					aria-label="text formatting"
				>
					{GENRES.map((genre) => (
						<ToggleButton value={genre} key={genre}>
							{genre}
							<Badge sx={{'span':{ backgroundColor: GENRES_COLORS[genre] }}} variant="dot">
								&nbsp;
							</Badge>
						</ToggleButton>
					))}
				</ToggleButtonGroup>
			</Paper>
			<br />
			<AlignItemsList filters={selectedGenres} />
		</div>
		</OverrideCallbackCssBaseline>
	);
}
