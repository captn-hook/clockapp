import { CSSObject } from '@emotion/react'
import '@fontsource/ibm-plex-mono'

export enum AppColor {
	Green = 'green',
	BlueGreen = 'bluegreen',
	White = 'white',
	Black = 'black',
	Grey = 'grey',
	Raspberry = 'raspberry',
}

const colors: AppColors = {
	green: '#78BE43',
	bluegreen: '#0C8AD633',
	white: '#FFFFFF',
	black: '#133C55',
	grey: '#808080',
	raspberry: '##D81E5B',
}

export type AppColors = {
	[name in AppColor]: string
}

export const globalStyle: CSSObject = {
	'html': {
		backgroundColor: colors.green,
	},
	'body': {
		backgroundColor: colors.green,
		color: colors.white,
		fontFamily: `'IBM Plex Mono', monospace`,
	},
	'#reactroot': {
		display: 'flex',
		minHeight: '100vh',
	},
}

// Quick replacement of mui's theme.spacing() function
// Specify CSS measurements in .5x or 1x multiples of 8px units
type SpacingFunc = (...n: number[]) => string
const spacing: SpacingFunc = (...n) => n.map(n => `${n * 8}px`).join(' ')

export interface AppTheme {
	colors: AppColors
	spacing: SpacingFunc
}

export const defaultTheme: AppTheme = {
	colors,
	spacing,
}
