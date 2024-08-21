import Box from "@mui/material/Box";
import ColorBox from "./ColorBox";
import { combinedColors } from "../utils/combinedColors";

export default function Xpto() {

	return (
		<>
			<div>
				<Box
					sx={{
						display: "flex",
						maxWidth: "100%",
						position: "relative",
						mb: "2rem",
						flexWrap: "wrap",
					}}
				>
					{combinedColors.map(({ name, colorValues, colorName }) => (
						<ColorBox
							key={name}
							name={name}
							colorValues={colorValues}
							colorName={colorName}
						/>
					))}
				</Box> 
			</div>
		</>
	);
}
