import Box from "@mui/material/Box";
import { Divider, Grid } from "@mui/material";
import { genreToPalette } from "../../const/GENRES_COLORS";
import type { Genre } from "../../const/GENRES";
import type { Event } from "../../types/event";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { palette } from "../../utils/all";
import * as S from "./styled";
import Tag from "../Tag";

type EventImproved = Event & {
	genre: Genre[];
};

export default function Item({
	onClick,
	...ev
}: EventImproved & { onClick: any }) {
	const handleClick = (ev: any) => ev.target.tagName !== "A" && onClick();

	const [match, ...restOfText] = ev.summary.split(/(.*?)\s•\s/).filter(Boolean);

	return (
		<Box
			sx={{
				padding: 1,
				borderTop: 0,
				borderBottom: 0,
				a: {
					color: "inherit",
					textDecorationStyle: "dotted",
				},
			}}
			onClick={handleClick}
		>
			<S.Title>
				<S.Tag
					color={
						(match in genreToPalette && genreToPalette[match as keyof typeof genreToPalette]) ||
						"dark-gray"
					}
				>
					{match}
				</S.Tag>
				{restOfText.join(" • ")}
			</S.Title>
			<Box
				sx={{
					display: "flex",
					width: "100%",
					position: "relative",
					gap: 1,
				}}
			>
				<Box
					sx={{
						maxWidth: "3.5em",
						position: "relative",
						alignContent: "start",
					}}
				>
					<Box
						sx={{
							position: "sticky",
							top: "32px",
							bottom: "32px",
							background: palette.gray.main,
							textAlign: "center",
							p: "4px",
							borderRadius: "4px",
						}}
					>
						<small>
							{Intl.DateTimeFormat("pt-BR", {
								timeStyle: "short",
							}).format(ev.start)}
							<Divider sx={{ mx: 1 }} />
							{Intl.DateTimeFormat("pt-BR", {
								timeStyle: "short",
							}).format(ev.end)}
						</small>
					</Box>
				</Box>
				<Box sx={{ display: "flex", flex: 1, flexDirection: "column", ml: 1 }}>
					<Box sx={{ flex: 1 }}>
						<small>
							<a
								href={`https://www.google.com/maps?q=${ev.location}`}
								target="_blank"
								rel="noreferrer"
							>
								<MapPinIcon width=".9em" /> {ev.location}
							</a>
						</small>
						<Grid
							container
							sx={{
								justifyContent: "flex-end",
								gap: 1,
								mt: 1,
							}}
						>
							{ev.genre.map((genre) => (
								<Tag color={genreToPalette[genre as keyof typeof genreToPalette]} key={genre} size="small">
									{genre}
								</Tag>
							))}
						</Grid>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
