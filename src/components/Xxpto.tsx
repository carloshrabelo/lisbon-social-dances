import Box from "@mui/material/Box";
import ColorBox from "./ColorBox";
import { genreToPalette } from "../const/GENRES_COLORS";
import { palette } from "../theme/palette";
import { getContrastingColor } from "../utils/getContrastingColor";
import { combinedColors } from "../utils/all";

const Zezo = Object.entries(genreToPalette).map(([name, value]) => ({
	name,
	palette: palette[value] || palette.gray,
})).sort((a, b) => a.name < b.name ?  -1 : 1)

export default function Xpto() {

	return (
		<>
			<div>
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
					{Zezo.map(({ name, palette }) => (
						<Box
							sx={{
								backgroundColor: palette.main,
								color: getContrastingColor(palette.main),
								flex: "1",
								textWrap: 'nowrap',
								textAlign: "center",
								wordBreak: "keep-all",
								fontWeight: 700,
								padding: "4px 12px",
								position: "relative",
								borderRadius: "10px",
								cursor: "pointer",
								"&:active": {
									transform: 'translateY(4px) translateZ(0)'
								},
								"&:active:before": {
									boxShadow: 'none'
								},
								"&:before": {
									borderRadius: "12px",
									bottom: "0",
									boxShadow: "0 4px 0",
									color: palette.dark,
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

				<Box
					sx={{
						display: "flex",
						maxWidth: "100%",
						position: "relative",
						gap: 1,
						flexWrap: "wrap",
						mb: 2,
						mt: 2
					}}
				>
					{Zezo.map(({ name, palette }) => (
						<Box
							sx={{
								backgroundColor: palette.main,
								color: getContrastingColor(palette.main),
								fontSize: '12px',
								padding: "2px 8px 0",
								position: "relative",
								borderRadius: "15px",
								"&:before": {
									borderRadius: "12px",
									bottom: "0",
									boxShadow: "0 4px 0",
									color: palette.dark,
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
