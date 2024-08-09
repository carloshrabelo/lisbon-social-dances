import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Chip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import useEventAPI from "../../store/useEventAPI";
// import CircleIcon from "@mui/icons-material/Circle";
// import GENRES_COLORS from "../../const/GENRES_COLORS";
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
						<IconButton edge="end" aria-label="delete">
							<DeleteIcon />
							<Chip color="primary" label="data.label" size="small"  />
						</IconButton>
					}
				>
					<ListItemText
						secondary={
							<>
								{Intl.DateTimeFormat("pt-BR", {
									timeStyle: "short",
								}).format(ev.start)}{" "}
								-
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
					<ListItemText secondary={ev.location} >
            <div>
              {ev.summary}
            </div>
            <div>
						{/* {ev.genre.map((genre) => (
							<Chip
								sx={{  background: GENRES_COLORS[genre], color: "#fff"}}
								key={genre}
                label={genre}
                size="small" 
							/>
						))} */}
            </div>
          </ListItemText>
				</ListItem>
			))}
		</List>
	);
}
