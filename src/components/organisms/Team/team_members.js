// Make sure the shape of this data stays consistent
// Also ensure that the id starts at 0 and increases by 1

import { withPrefix } from 'gatsby-link'

const imageDir = 'images/headshots'

const teamMembers = [
	{
		id: 0,
		name: 'Juan Anton',
		imageUrl: withPrefix(`${imageDir}/anton_juan.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/anton_juan_h.jpg`),
	},
	{
		id: 1,
		name: 'David Aragones',
		imageUrl: withPrefix(`${imageDir}/aragones_david.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/aragones_david_h.jpg`),
	},
	{
		id: 2,
		name: 'Cassandra Balbas',
		imageUrl: withPrefix(`${imageDir}/balbas_cassandra.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/balbas_cassandra_h.jpg`),
	},
	{
		id: 3,
		name: 'Julia Chan',
		imageUrl: withPrefix(`${imageDir}/chan_julia.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/chan_julia_h.jpg`),
	},
	{
		id: 4,
		name: 'Rachel Cheng',
		imageUrl: withPrefix(`${imageDir}/cheng_rachel.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/cheng_rachel_h.jpg`),
	},
	{
		id: 5,
		name: 'Emiliano Cicero',
		imageUrl: withPrefix(`${imageDir}/cicero_emiliano.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/cicero_emiliano_h.jpg`),
	},
	{
		id: 6,
		name: 'Ryan Connolly',
		imageUrl: withPrefix(`${imageDir}/connolly_ryan.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/connolly_ryan_h.jpg`),
	},
	{
		id: 7,
		name: 'Jadson Dantas',
		imageUrl: withPrefix(`${imageDir}/dantas_jadson.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/dantas_jadson_h.jpg`),
	},
	{
		id: 8,
		name: 'Vitor Fernandes',
		imageUrl: withPrefix(`${imageDir}/fernandes_vitor.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/fernandes_vitor_h.jpg`),
	},
	{
		id: 9,
		name: 'Rafael Fernandes',
		imageUrl: withPrefix(`${imageDir}/fernandes_rafael.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/fernandes_rafael_h.jpg`),
	},
	{
		id: 10,
		name: 'Markus Hammer',
		imageUrl: withPrefix(`${imageDir}/hammer_markus.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/hammer_markus_h.jpg`),
	},
	{
		id: 11,
		name: 'Paul Hanaoka',
		imageUrl: withPrefix(`${imageDir}/hanaoka_paul.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/hanaoka_paul_h.jpg`),
	},
	{
		id: 12,
		name: 'Abel Hancock',
		imageUrl: withPrefix(`${imageDir}/hancock_abel.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/hancock_abel_h.jpg`),
	},
	{
		id: 13,
		name: 'Juan Hidalgo',
		imageUrl: withPrefix(`${imageDir}/hidalgo_juan.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/hidalgo_juan_h.jpg`),
	},
	{
		id: 14,
		name: 'Naoki Hisamoto',
		imageUrl: withPrefix(`${imageDir}/hisamoto_naoki.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/hisamoto_naoki_h.jpg`),
	},
	{
		id: 15,
		name: 'Bryan Ho',
		imageUrl: withPrefix(`${imageDir}/ho_bryan.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/ho_bryan_h.jpg`),
	},
	{
		id: 16,
		name: 'Chris Jeong',
		imageUrl: withPrefix(`${imageDir}/jeong_chris.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/jeong_chris_h.jpg`),
	},
	{
		id: 17,
		name: 'Jessica Lee',
		imageUrl: withPrefix(`${imageDir}/lee_jessica.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/lee_jessica_h.jpg`),
	},
	{
		id: 18,
		name: 'Beatriz Martin',
		imageUrl: withPrefix(`${imageDir}/martin_beatriz.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/martin_beatriz_h.jpg`),
	},
	{
		id: 19,
		name: 'Nathalia Moura',
		imageUrl: withPrefix(`${imageDir}/moura_nathalia.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/moura_nathalia_h.jpg`),
	},
	{
		id: 20,
		name: 'Cassia Oliveira',
		imageUrl: withPrefix(`${imageDir}/oliveira_cassia.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/oliveira_cassia_h.jpg`),
	},
	{
		id: 21,
		name: 'Patrick Pentz',
		imageUrl: withPrefix(`${imageDir}/pentz_patrick.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/pentz_patrick_h.jpg`),
	},
	{
		id: 22,
		name: 'Felipe Pires',
		imageUrl: withPrefix(`${imageDir}/pires_felipe.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/pires_felipe_h.jpg`),
	},
	{
		id: 23,
		name: 'Davi Shamá',
		imageUrl: withPrefix(`${imageDir}/shama_davi.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/shama_davi_h.jpg`),
	},
	{
		id: 24,
		name: 'Paul Tiplea',
		imageUrl: withPrefix(`${imageDir}/tiplea_paul.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/tiplea_paul_h.jpg`),
	},
	{
		id: 25,
		name: 'Victor Valle',
		imageUrl: withPrefix(`${imageDir}/valle_victor.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/valle_victor_h.jpg`),
	},
	{
		id: 26,
		name: 'Susana Vázquez',
		imageUrl: withPrefix(`${imageDir}/vazquez_susana.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/vazquez_susana_h.jpg`),
	},
	{
		id: 27,
		name: 'Sharon Wong',
		imageUrl: withPrefix(`${imageDir}/wong_sharon.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/wong_sharon_h.jpg`),
	},
	{
		id: 28,
		name: 'Rebecca Wu',
		imageUrl: withPrefix(`${imageDir}/wu_rebecca.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/wu_rebecca_h.jpg`),
	},
	{
		id: 29,
		name: 'Angelo Youn',
		imageUrl: withPrefix(`${imageDir}/youn_angelo.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/youn_angelo_h.jpg`),
	},
	{
		id: 30,
		name: 'Emily Young',
		imageUrl: withPrefix(`${imageDir}/young_emily.jpg`),
		imageHoverUrl: withPrefix(`${imageDir}/young_emily_h.jpg`),
	},
]

export default teamMembers
