import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import { Chip, Grid } from "@mui/material";
import useEventAPI from "../../store/useEventAPI";
import GENRES_COLORS from "../../const/GENRES_COLORS";
import type { Genre } from "../../const/GENRES";

export default function AlignItemsList({ filters }: { filters: Genre[] }) {
	const { data, isLoading, error } = useEventAPI({ genres: filters });
	// const { data, isLoading, error } = useEvent()

	// const data = [{}]

	if (isLoading) return null;
	if (error) return error;
	// return JSON.stringify(data[0], null, 2)

	return (
		<>
			<div>
				{data?.map((ev) => (
					<Box key={ev.iCalUID} sx={{ display: "flex", width: '100%', position: 'relative', mb:'2rem' }}>
						<Box sx={{ maxWidth: "3.5em" }}>
							<div>
								{new Intl.DateTimeFormat("pt-BR", {
									month: 'numeric',
									day: 'numeric'
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
						<Box sx={{ display: "flex", flex: 1  }}>
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
										position: "absolute",
										top: '-1em',
										right:0
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
					</Box>
				))}
			</div>
		</>
	);
}
