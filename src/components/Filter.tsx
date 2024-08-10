import type { Genre } from "../const/GENRES";
import { Box, Paper } from "@mui/material";
import Tag from "./Tag";
import { GENRES_COLORS } from "../const/GENRES_COLORS";
import { ArrowsClockwise } from "@phosphor-icons/react";

export default function Filter({
	selected = [],
	onChange,
	clearFilter,
}: {
	selected: Genre[];
	onChange: (val: Genre) => void;
	clearFilter: () => void;
}) {
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
					color='dark-gray'
					onClick={() =>onChange([])}
				>
					<SealQuestion weight="duotone" size='1.5em'/>
				</Tag> */}
				<Tag color="gray" onClick={clearFilter}>
					<ArrowsClockwise weight="bold" size="1.25em" />
				</Tag>
			</Box>
		</Paper>
	);
}
