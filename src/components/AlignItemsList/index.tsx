import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Chip, Grid2 } from "@mui/material";
import useEventAPI from "../../store/useEventAPI";
import GENRES_COLORS from "../../const/GENRES_COLORS";
import type { Genre } from "../../const/GENRES";

export default function AlignItemsList({ filters }:{ filters: Genre[] }) {
	const { data, isLoading, error } = useEventAPI({ genres: filters });
	// const { data, isLoading, error } = useEvent()

	// const data = [{}]

	if (isLoading) return null;
	if (error) return error;
	// return JSON.stringify(data[0], null, 2)

	return (
		<List>
			{data?.map((ev, key) => (
				<ListItem
					key={key}
					secondaryAction={
						<Grid2 container spacing={1} sx={{maxWidth: '10em', justifyContent: 'flex-end'}}>
							{ev.genre.map((genre) => (
								<Chip
									sx={{ background: GENRES_COLORS[genre], color: "#fff" }}
									key={genre}
									label={genre}
									size="small"
								/>
							))}
						</Grid2>
					}
				>
					<ListItemText
						sx={{ maxWidth: "6em" }}
						secondary={
							<>
								{Intl.DateTimeFormat("pt-BR", {
									timeStyle: "short",
								}).format(ev.start)}
								{" - "}
								{Intl.DateTimeFormat("pt-BR", {
									timeStyle: "short",
								}).format(ev.end)}
							</>
						}
					>
						<div>
							{new Intl.DateTimeFormat("pt-BR", {
								dateStyle: "short",
							}).format(ev.start)}
						</div>
					</ListItemText>
					<ListItemText secondary={ev.location}>{ev.summary}</ListItemText>
				</ListItem>
			))}
		</List>
	);
}
