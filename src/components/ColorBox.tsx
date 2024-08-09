import { Box } from "@mui/material";
import type { ColorEntry } from "../theme/palette";
import { getContrastingColor } from "../utils/getContrastingColor";

export const ColorBox = ({
	name,
	colorValues,
	colorName,
}: { name: string; colorValues: ColorEntry; colorName?: string }) => {
	return (
		<Box
			sx={{
				backgroundColor: colorValues.main,
				padding: 2,
				margin: 1,
				borderRadius: 3,
				display: "flex",
				flexDirection: "column",
				boxShadow: 3,
				minWidth: "180px",
				flex: 1,
			}}
		>
			<Box
				sx={{
					backgroundColor: colorValues.main,
					color: getContrastingColor(colorValues.main),
					padding: 1,
					borderRadius: 5,
					flex:1
				}}
			>
				{colorName && (
					<b>
						{name} <br />
					</b>
				)}
				{colorName || name} : {colorValues.main}
			</Box>
			<Box
				sx={{
					backgroundColor: colorValues.dark,
					color: getContrastingColor(colorValues.dark),
					padding: 1,
					borderRadius: 2,
					marginTop: 1,
				}}
			>
				Dark: {colorValues.dark}
			</Box>
			<Box
				sx={{
					backgroundColor: colorValues.light,
					color: getContrastingColor(colorValues.light),
					padding: 1,
					borderRadius: 2,
					marginTop: 1,
				}}
			>
				Light: {colorValues.light}
			</Box>
		</Box>
	);
};

export default ColorBox;
