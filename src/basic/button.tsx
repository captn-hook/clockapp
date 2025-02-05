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
})

export default Button