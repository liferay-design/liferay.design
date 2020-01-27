const { deburr } = require(`lodash`)

const imagePath = '/images/headshots/'

export function makeAuthorSlug(input) {
	const normalizedInput = deburr(input.toLowerCase());
	const stringToArray = normalizedInput.split(' ');
	const authorSlug = stringToArray.reverse().join('-');
	return authorSlug
	
}

export function headshotPath(input) {
	const headshotPath = imagePath + makeAuthorSlug(input) + '.jpg'
	return headshotPath
	
}

export function avatarPath(input) {
	const avatarPath = imagePath + makeAuthorSlug(input) + '-h.jpg'
	return avatarPath
	
}
