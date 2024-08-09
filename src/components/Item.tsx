import Box from "@mui/material/Box";
import { Chip, Grid } from "@mui/material";
import GENRES_COLORS from "../const/GENRES_COLORS";
import type { Genre } from "../const/GENRES";
import type { Event } from "../types/event";


type EventImproved = Event & {
	genre: Genre[];
}

export default function Item(ev:EventImproved) {
	return (<Box
		sx={{
			display: "flex",
			width: "100%",
			position: "relative",
			mb: "1rem",

			padding: 2,
			boxShadow: 3,
			borderRadius: 3,
		}}
	>
		<Box sx={{ maxWidth: "3.5em" }}>
			<div>
				{new Intl.DateTimeFormat("pt-BR", {
					month: "numeric",
					day: "numeric",
				}).format(ev.start)}
			</div>
			<div>
				{Intl.DateTimeFormat("pt-BR", {
					timeStyle: "short",
				}).format(ev.start)}
				{" - "}
				{Intl.DateTimeFormat("pt-BR", {
					timeStyle: "short",
				}).format(ev.end)}
			</div>
		</Box>
		<Box sx={{ display: "flex", flex: 1, flexDirection: "column" }}>
			<Box sx={{ flex: 1 }}>
				<div>{ev.summary}</div>
				<small>{ev.location}</small>
			</Box>
			<Box>
				<Grid
					container
					sx={{
						// maxWidth: "10em",
						justifyContent: "flex-end",
						gap: 1,
						// position: "absolute",
						bottom: "8px",
						right: "8px",
					}}
				>
					{ev.genre.map((genre) => (
						<Chip
							sx={{ background: GENRES_COLORS[genre], color: "#fff" }}
							key={genre}
							label={genre}
							size="small"
						/>
					))}
				</Grid>
			</Box>
		</Box>
	</Box>);
}
