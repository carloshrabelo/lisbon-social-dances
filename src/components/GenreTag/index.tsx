import { genreToPalette } from "../../const/GENRES_COLORS";
import { ALIAS, type Genre } from "../../const/GENRES";

import Tag from "../Tag";

const getGenre = (genre: string) => {
	const _genre = genre.toLocaleUpperCase() as keyof typeof ALIAS;
	if (!ALIAS[_genre]) return genre as Genre;
	const [f, s] = (
		ALIAS[_genre][0] + ALIAS[_genre].toLocaleLowerCase().slice(1)
	).split(" ");
	return s ? genre : f;
};

const getGenreColor = (genre: Genre) => {
	return genreToPalette[getGenre(genre) as keyof typeof genreToPalette];
};

export default ({
	genre,
	small,
	color,
	className,
}: { genre: Genre; color?: string; small?: boolean; className?: any }) => {
	return (
		<Tag
			className={className}
			color={getGenreColor(genre) || color}
			size={small ? "small" : "medium"}
		>
			{genre}
		</Tag>
	);
};
