import styled from '@emotion/styled'
import { defaultTheme } from '../style'

const LinkStyle = styled.a({
	color: defaultTheme.colors.white,
	textDecoration: 'underline',
	cursor: 'pointer',
	fontWeight: defaultTheme.fontsizes.bold,
})

// Links are unimplemented now, shows a Coming Soon! popup
const Link = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => {
	return (
		<LinkStyle style={style} onClick={() => alert('Coming Soon!')}>
			{children}
		</LinkStyle>
	)
}

export default Link