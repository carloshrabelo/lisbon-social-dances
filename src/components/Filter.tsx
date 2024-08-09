import type { Genre } from "../const/GENRES";
import { Box, Paper } from "@mui/material";
import Tag from "./Tag";
import { ArrowPathIcon } from "@heroicons/react/16/solid";
import { GENRES_COLORS } from "../const/GENRES_COLORS";

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
				{GENRES_COLORS.map(({ name, color }) => (
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
