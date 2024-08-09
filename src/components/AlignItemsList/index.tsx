import useEventAPI, { type EventImproved } from "../../store/useEventAPI";
import type { Genre } from "../../const/GENRES";
import Item from "../Item";
import * as S from "./styled";
import groupBy from "lodash/groupBy";

export default function AlignItemsList({ filters }: { filters: Genre[] }) {
	const { data, isLoading, error } = useEventAPI({ genres: filters });

	if (isLoading) return null;
	if (error) return error;

	const xpto = groupBy(data, ({ start }: EventImproved) => {
		const currentDate = new Date(start.toISOString());
		currentDate.setUTCHours(0, 0, 0, 0);
		return currentDate.toISOString();
	});

	return (
		<>
			{/* {JSON.stringify(Object.groupBy(data, ({ creator }) => creator))} */}
			<div>
				{Object.entries(xpto).map(([date, sociais]: [string, EventImproved[]]) => (
					<div key={date}>
						<S.Head>
							{new Intl.DateTimeFormat("pt-BR", {
								dateStyle: "medium",
							}).format(new Date(date))}
						</S.Head>
						<S.Content>
							{sociais?.map((ev) => (
								<Item {...ev} key={ev.id} />
							))}
						</S.Content>
						<S.Footer>
							{new Intl.DateTimeFormat("pt-BR", {
								dateStyle: "medium",
							}).format(new Date(date))}
						</S.Footer>
					</div>
				))}
			</div>
		</>
	);
}
