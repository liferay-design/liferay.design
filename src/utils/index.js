import { useEffect, useState } from 'react'
const { firebase } = require('@firebase/app')

const { deburr, replace, startCase } = require(`lodash`)

function onAuthStateChange(callback) {
	return firebase.auth().onAuthStateChanged(user => {
		if (user) {
			callback({ loggedIn: true })
		} else {
			callback({ loggedIn: false })
		}
	})
}
export function isAuthenticated() {
	const [user, setUser] = useState({ loggedIn: false })
	useEffect(() => {
		const unsubscribe = onAuthStateChange(setUser)
		return () => {
			unsubscribe()
		}
	}, [])

	if (!user.loggedIn) {
		return false
	}
	return true
}

export function isLive(eventStart, eventEnd) {
	// now
	var now = new Date()
	var currentUTCDay = now.getUTCDay()
	var currentUTCHours = now.getUTCHours()
	var currentUTCMinutes = now.getUTCMinutes()
	var currentTime = currentUTCHours + ':' + currentUTCMinutes

	// event start
	var eventStartDate = new Date(eventStart)
	var eventStartUTCDay = eventStartDate.getUTCDay()
	var eventStartUTCHours = eventStartDate.getUTCHours()
	var eventStartUTCMinutes = eventStartDate.getUTCMinutes()
	var eventStartTime = eventStartUTCHours + ':' + eventStartUTCMinutes

	// event end
	var eventEndDate = new Date(eventEnd)
	var eventEndUTCDay = eventEndDate.getUTCDay()
	var eventEndUTCHours = eventEndDate.getUTCHours()
	var eventEndUTCMinutes = eventEndDate.getUTCMinutes()
	var eventEndTime = eventEndUTCHours + ':' + eventEndUTCMinutes

	if (currentUTCDay >= eventStartUTCDay && currentTime >= eventStartTime) {
		if (currentUTCDay >= eventEndUTCDay && currentTime >= eventEndTime) {
			return 'is dead'
		} else {
			return 'is live'
		}
	}
}

const imagePath = '/images/headshots/'

export function makeAuthorSlug(input) {
	const normalizedInput = deburr(input.toLowerCase())
	const stringToArray = normalizedInput.split(' ')
	const authorSlug = stringToArray.reverse().join('-')
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
	const rawTitle = replace(title, baseSlug, '')
	const titleCase = startCase(rawTitle)
	return titleCase
}

export function slugToIcon(baseSlug, icon) {
	const rawIcon = replace(icon, baseSlug, '')
	const replaceHyphen = rawIcon.replace('-', '_')
	const iconName = replaceHyphen.replace('/', '')
	return iconName
}

export function firstWord(input) {
	const string = input.split(' ')[0]
	return string
}

export function slugToSection(input) {
	const section = input.split('/')[1]
	return section
}
