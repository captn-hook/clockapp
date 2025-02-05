import styled from '@emotion/styled'
import { defaultTheme } from '../style'

const LinkStyle = styled.a({
    color: defaultTheme.colors.white,
    textDecoration: 'underline',
    cursor: 'pointer',
	padding: '5px',
	borderRadius: '5px',
    fontWeight: defaultTheme.fontsizes.bold,
    '&:hover': {
		backgroundColor: defaultTheme.colors.grey,
    },
	'&:active': {
		backgroundColor: defaultTheme.colors.green,
	},
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