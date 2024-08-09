import type { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
	components: {
		MuiChip: {
			styleOverrides: {
				sizeSmall: {
					fontSize: "12px",
					height: "20px",
				},
			},
		},
	},
});

export default function Theme({
	children,
}: { children: ReactNode }) {
	return (
		<ThemeProvider theme={theme}>
			{children}
		</ThemeProvider>
	);
}
