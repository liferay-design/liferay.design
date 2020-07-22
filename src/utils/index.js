const { deburr, replace, startCase } = require(`lodash`)

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

export function slugToTitle(baseSlug, title) {
	const rawTitle = replace(title, baseSlug, '');
	const titleCase = startCase(rawTitle);
	return titleCase
}

export function slugToIcon(baseSlug, icon) {
	const rawIcon = replace(icon, baseSlug, '');
	const replaceHyphen = rawIcon.replace("-", "_");
	const iconName = replaceHyphen.replace("/", "");
	return iconName
}