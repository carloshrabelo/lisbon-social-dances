import type { Genre } from "../const/GENRES";
import { Box, Paper } from "@mui/material";
import Tag from "./Tag";
import { ArrowPathIcon } from "@heroicons/react/16/solid";
import type { Color } from "../theme/palette";
import { genreToPalette } from "../const/GENRES_COLORS";

const Zezo = Object.entries(genreToPalette)
	.map(([name, color]) => ({
		name: name as Genre,
		color: color as Color,
	}))
	.sort((a, b) => (a.name < b.name ? -1 : 1));

export default function Filter({
	selected = [],
	onChange,
	clearFilter
}: { selected: Genre[]; onChange: (val:Genre) => void ; clearFilter: () => void }) {
	const toggleButton = (genre: Genre) => () => onChange(genre);

	return (
		<Paper
			sx={{
				top: 0,
				position: "sticky",
				zIndex: 1,
				p: 2,
				mb: 2,
				boxShadow: 3,
			}}
			elevation={0}
		>
			<Box
				sx={{
					display: "flex",
					maxWidth: "100%",
					position: "relative",
					gap: 1,
					flexWrap: "wrap",
					justifyContent: "space-between",
					"&>div": {
						flex: 1,
					},
				}}
			>
				{Zezo.map(({ name, color }) => (
					<Tag
						key={name}
						color={!selected.length || selected.includes(name) ? color : "gray"}
						onClick={toggleButton(name)}
					>
						{name}
					</Tag>
				))}
				{/* <Tag
					color='DarkGray'
					onClick={() =>onChange([])}
				>
					<QuestionMarkRounded width='1em'/>
				</Tag> */}
				<Tag color="gray" onClick={clearFilter}>
					<ArrowPathIcon width="1em" />
				</Tag>
			</Box>
		</Paper>
	);
}
