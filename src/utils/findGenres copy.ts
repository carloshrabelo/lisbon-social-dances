export const findDjs = (text = "") =>{
	const djNames = text.match(/Dj\s+[A-Za-z]+(?:\s+[A-Za-z]+)*/g);
	// const djNames = text.match(/(?:Dj|DJ|dj)\s*[A-Za-z]+(?:\s*[A-Za-z]+)*/g);
	//  const djNames = text.match(/\b(?:Dj|DJ|dj)\s*[A-Za-z]+(?:\s*[A-Za-z]+)*\b|@\w+/g);
	//  const djNames = text.match(/(?:🎧\s*|DJ\s*|dj\s*)[A-Za-zÀ-ÿ]+(?:\s+[A-Za-zÀ-ÿ]+)?(?:\s+[A-Za-zÀ-ÿ]+)?|@\w+/g);
	//	const djNames = text.match(/(?:🎧\s*|DJ\s*|Dj\s*|dj\s*)[A-Za-zÀ-ÿ]+(?:\s+[A-Za-zÀ-ÿ]+)?(?:\s+[A-Za-zÀ-ÿ]+)?/g);
	return djNames
}
export default findDjs;
