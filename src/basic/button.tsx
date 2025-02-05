import styled from '@emotion/styled'
import { defaultTheme } from '../style'

const Button = styled.button({
	width: '100%',
	height: '40px',
	border: 'none',
	borderRadius: '15px',
	backgroundColor: defaultTheme.colors.raspberry,
	color: defaultTheme.colors.white,
	fontSize: '16px',
	cursor: 'pointer',
	outline: 'none',
	'&:hover': {
		outline: '1px solid ' + defaultTheme.colors.white,
	},
	'&:active': {
		outline: '2px solid ' + defaultTheme.colors.bluegreen,
	},
	transitions: 'all 0.3s',
})

export default Button