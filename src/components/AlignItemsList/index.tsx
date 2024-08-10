import useEventAPI, { type EventImproved } from "../../store/useEventAPI";
import type { Genre } from "../../const/GENRES";
import Item from "../Item";
import * as S from "./styled";
import groupBy from "lodash/groupBy";
import { Box, Divider, Drawer } from "@mui/material";
import { Fragment, useState } from "react";
import { X } from "@phosphor-icons/react";
import { palette } from "../../theme/palette";

export default function AlignItemsList({ filters }: { filters: Genre[] }) {
	const { data, isLoading, error } = useEventAPI({ genres: filters });
	const [selectedSocial, setSelectedSocial] = useState<EventImproved | null>(
		null,
	);

	if (isLoading) return null;
	if (error) return error;

	const xpto = groupBy(data, ({ start }: EventImproved) => {
		const currentDate = new Date(start.toISOString());
		currentDate.setUTCHours(0, 0, 0, 0);
		return currentDate.toISOString();
	});

	return (
		<>
			<Box sx={{ px: 2 }}>
				{Object.entries(xpto).map(
					([date, sociais]: [string, EventImproved[]]) => (
						<div key={date}>
							<S.Head>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "space-between",
										gap: 2,
									}}
								>
								<Box
									sx={{
										color: palette['dark-gray'].main,
										textTransform: "capitalize",
										fontSize: "12px"
									}}>
									{new Intl.DateTimeFormat("pt-BR", {
										weekday: "long",
									}).format(new Date(date))}
								</Box>
									<div>
										{new Intl.DateTimeFormat("pt-BR", {
											day: "2-digit", month: "long"
										}).format(new Date(date))}
									</div>
									<Box
									sx={{
										textTransform: "capitalize",
										fontSize: "12px"
									}}>
										{new Intl.DateTimeFormat("pt-BR", {
											weekday: "long",
										}).format(new Date(date))}
									</Box>
								</Box>
							</S.Head>
							<S.Content>
								{sociais?.map((ev, key) => (
									<Fragment key={ev.id}>
										{!!key && <Divider sx={{ mx: 2 }} />}
										<Item {...ev} onClick={() => setSelectedSocial(ev)} />
									</Fragment>
								))}
							</S.Content>
							<S.Footer>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "space-between",
										gap: 2,
									}}
								>
								<Box
									sx={{
										color: palette['dark-gray'].main,
										textTransform: "capitalize",
										fontSize: "12px"
									}}>
									{new Intl.DateTimeFormat("pt-BR", {
										weekday: "long",
									}).format(new Date(date))}
								</Box>
									<div>
										{new Intl.DateTimeFormat("pt-BR", {
											day: "2-digit", month: "long"
										}).format(new Date(date))}
									</div>
									<Box
									sx={{
										textTransform: "capitalize",
										fontSize: "12px"
									}}>
										{new Intl.DateTimeFormat("pt-BR", {
											weekday: "long",
										}).format(new Date(date))}
									</Box>
								</Box>
							</S.Footer>
						</div>
					),
				)}
			</Box>

			<Drawer
				open={!!selectedSocial}
				onClose={() => setSelectedSocial(null)}
				anchor="right"
			>
				<Box>
					<S.Head xpto>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								gap: 2,
							}}
						>
							{selectedSocial?.summary}
							<div>
								<S.CloseBtn color="red" onClick={() => setSelectedSocial(null)}>
									<X weight="bold"/>
								</S.CloseBtn>
							</div>
						</Box>
					</S.Head>
					<Box
						sx={{
							whiteSpaceCollapse: "preserve",
							p: 2,
							maxWidth: "calc(100vw - 32px)",
							textWrap: "wrap",
							overflow: "auto",
						}}
					>
						{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
						<div
							dangerouslySetInnerHTML={{
								__html: selectedSocial?.description || "",
							}}
						/>
					</Box>
				</Box>
			</Drawer>
		</>
	);
}
