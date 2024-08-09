import type { Dispatch } from "react";
import type { Genre } from "../const/GENRES";
import { Box, Paper } from "@mui/material";
import { genreToPalette, getContrastingColor, palette } from "../utils/all";

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
		<Paper sx={{ top: 0, position: "sticky", zIndex: 1, pt:2, pb:3 }} elevation={0}>
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
					<Box
						onClick={toggleButton(name)}
						sx={{
							backgroundColor:
								!selected.length || selected.includes(name)
									? color.main
									: palette.Gray.main,
							color: getContrastingColor(
								!selected.length || selected.includes(name)
									? color.main
									: palette.Gray.main,
							),
							flex: "1",
							textWrap: "nowrap",
							textAlign: "center",
							wordBreak: "keep-all",
							fontWeight: 700,
							padding: "4px 12px",
							position: "relative",
							borderRadius: "10px",
							cursor: "pointer",
							"&:active": {
								transform: "translateY(4px) translateZ(0)",
							},
							"&:active:before": {
								boxShadow: "none",
							},
							"&:before": {
								borderRadius: "12px",
								bottom: "0",
								boxShadow: "0 4px 0",
								color:
									!selected.length || selected.includes(name)
										? color.dark
										: palette.Gray.dark,
								content: "''",
								left: "0",
								position: "absolute",
								right: "0",
								top: "0",
								zIndex: "-1",
							},
						}}
						key={name}
					>
						{name}
					</Box>
				))}
			</Box>
		</Paper>
	);
}
