import Typography from 'typography'

const typography = new Typography({
	baseFontSize: '16px',
	// baseLineHeight: 1.666,
	headerFontFamily: ['inherit'],
	bodyFontFamily: ['inherit'],
	googleFonts: [
		{
			name: 'Source Sans Pro',
			styles: ['300', '400', '700', '900'],
		},
		{
			name: 'Source Code Pro',
			styles: ['300', '400', '700', '900'],
		},
	],
})

export default typography
