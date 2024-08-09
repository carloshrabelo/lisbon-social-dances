import useEventAPI, { type EventImproved } from "../../store/useEventAPI";
import type { Genre } from "../../const/GENRES";
import Item from "../Item";
import * as S from "./styled";
import groupBy from "lodash/groupBy";
import { Box, Drawer } from "@mui/material";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import Tag from "../Tag";
import { palette } from "../../utils/all";

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
			<div>
				{Object.entries(xpto).map(
					([date, sociais]: [string, EventImproved[]]) => (
						<div key={date}>
							<S.Head>
								{new Intl.DateTimeFormat("pt-BR", {
									dateStyle: "medium",
								}).format(new Date(date))}
							</S.Head>
							<S.Content>
								{sociais?.map((ev) => (
									<Item
										{...ev}
										key={ev.id}
										onClick={() => setSelectedSocial(ev)}
									/>
								))}
							</S.Content>
							<S.Footer>
								{new Intl.DateTimeFormat("pt-BR", {
									dateStyle: "medium",
								}).format(new Date(date))}
							</S.Footer>
						</div>
					),
				)}
			</div>

			<Drawer
				open={!!selectedSocial}
				onClose={() => setSelectedSocial(null)}
				anchor="right"
			>
				<Box>
					<S.Head>
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
								<Tag
									myColor={palette.Red}
									onClick={() => setSelectedSocial(null)}
								>
									<XMarkIcon width="1em" />
								</Tag>
							</div>
						</Box>
					</S.Head>
					<Box
						sx={{
							whiteSpaceCollapse: "preserve",
							p: 2,
							maxWidth: "100%",
							textWrap: "wrap",
						}}
					>
						{selectedSocial?.description}
					</Box>
				</Box>
			</Drawer>
		</>
	);
}
