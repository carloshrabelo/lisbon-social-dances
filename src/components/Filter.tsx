import type { Dispatch } from "react";
import type { Genre } from "../const/GENRES";
import { Box, Paper } from "@mui/material";
import { genreToPalette, palette } from "../utils/all";
import Tag from "./Tag";
import { ArrowPathIcon } from '@heroicons/react/16/solid'


const Zezo = Object.entries(genreToPalette)
	.map(([name, value]) => ({
		name: name as Genre,
		palette: palette[value] || palette.Gray,
	}))
	.sort((a, b) => (a.name < b.name ? -1 : 1));

export default function Filter({
	selected = [],
	onChange,
}: { selected: Genre[]; onChange: Dispatch<React.SetStateAction<Genre[]>> }) {
	const toggleButton = (genre: Genre) => () =>
		onChange((selected) =>
			selected.includes(genre)
				? selected.filter((e) => e !== genre)
				: [...selected, genre],
		);

	return (
		<Paper
			sx={{ top: 0, position: "sticky", zIndex: 1, pt: 2, pb: 3 }}
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
				}}
			>
				{Zezo.map(({ name, palette: color }) => (
					<Tag
						key={name}
						myColor={
							!selected.length || selected.includes(name)
								? color
								: palette.Gray
						}
						onClick={toggleButton(name)}
					>
						{name}
					</Tag>
				))}
				<Tag
					myColor={ palette.Gray
					}
					onClick={() =>onChange([])}
				>
					<ArrowPathIcon width='1em'/>
				</Tag>
			</Box>
		</Paper>
	);
}
