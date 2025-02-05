import { CSSObject } from '@emotion/react'
import '@fontsource/ibm-plex-mono'

export enum AppColor {
	Green = 'green',
	BlueGreen = 'bluegreen',
	White = 'white',
	Black = 'black',
	Grey = 'grey',
	Raspberry = 'raspberry',
	Transparent = 'transparent',
}

const colors: AppColors = {
	green: '#78BE43',
	bluegreen: '#0C8AD633',
	white: '#FFFFFF',
	black: '#133C55',
	grey: '#808080',
	raspberry: '#D81E5B',
	transparent: 'transparent',
}

export type AppColors = {
	[name in AppColor]: string
}

export const globalStyle: CSSObject = {
    '@font-face': [
        {
            fontFamily: 'Figtree',
            src: 'url(/ttf/figtree-latin-200-normal.ttf) format("truetype")',
            fontWeight: 200,
            fontStyle: 'normal',
        },
        {
            fontFamily: 'Figtree',
            src: 'url(/ttf/figtree-latin-600-normal.ttf) format("truetype")',
            fontWeight: 600,
            fontStyle: 'normal',
        },
        {
            fontFamily: 'Figtree',
            src: 'url(/ttf/figtree-latin-700-normal.ttf) format("truetype")',
            fontWeight: 700,
            fontStyle: 'normal',
        },
    ],
	'html': {
		backgroundColor: colors.green,
	},
	'body': {
		backgroundColor: colors.transparent,
		color: colors.white,
		fontFamily: 'Figtree, sans-serif',
		fontWeight: 400,
		overflow: 'hidden',
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
	fontsizes: {
		fontsmall: string
		fontmedium: string
		fontlarge: string
		normal: number
		medium: number
		bold: number
	}
}

export const defaultTheme: AppTheme = {
	colors,
	spacing,
	fontsizes: {
		fontsmall: '0.8rem',
		fontmedium: '1rem',
		fontlarge: '1.2rem',
		normal: 400,
		medium: 600,
		bold: 700,
	},
}
