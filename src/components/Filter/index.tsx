import type { Genre } from "../../const/GENRES";
import { Box } from "@mui/material";
import Tag from "../Tag";
import { GENRES_COLORS } from "../../const/GENRES_COLORS";
import { ArrowsClockwise, CaretUp, Funnel } from "@phosphor-icons/react";
import * as S from "./styles";
import { useState } from "react";

export default function Filter({
	selected = [],
	onChange,
	clearFilter,
}: {
	selected: Genre[];
	onChange: (val: Genre) => void;
	clearFilter: () => void;
}) {
	const [active, setActive] = useState(false)
	const toggleButton = (genre: Genre) => () => onChange(genre);

	return (
		<>
		<S.Wrapper active={active}>
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
			{active ? 
			<S.CloseBtn onClick={() => setActive(false)} >				
				<CaretUp weight="duotone" size="1.25em" />
			</S.CloseBtn> : null
			}
		</S.Wrapper>
			{active ? null : 
			<S.ShowFilter onClick={() => setActive(true)} >				
				<S.Badge badgeContent={selected.length} color="primary">
					<Funnel weight="duotone" size="1.25em" />
				</S.Badge>
			</S.ShowFilter>
			}
		</>
	);
}
