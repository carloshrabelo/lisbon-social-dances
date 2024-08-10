import { genreToPalette } from "../../const/GENRES_COLORS";
import { Genre } from "../../const/GENRES";

import Tag from "../Tag";

const getGenreColor =(genre : Genre) =>{
    return genreToPalette[genre as keyof typeof genreToPalette]
}

export default ({genre, small, color, className}:{genre: Genre,color?: string, small?:boolean, className?:any}) =>{
    return(
        <Tag className={className} color={getGenreColor(genre) || color } size={small ? "small" : "medium"}>
            {genre}
        </Tag>
    )
}