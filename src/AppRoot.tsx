import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'
import { defaultTheme } from './style'
import { useAppSelector } from './redux/storeTypes'

import { Fields, Register, Checkbox } from './login/login'
import Input from './login/input'
import Link from './basic/link'
import Button from './basic/button'
import Background from './basic/background'
import Logo from './login/logo'
import useDynamicSizing from './basic/dynamicSizing'

// Flex Column to stack elements vertically
const LoginPageContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
	maxWidth: '600px',
    position: 'relative',
})

const CenteredContainer = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
	overflow: 'hidden',
})

const FullHeightContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
	overflow: 'hidden',
})

const AppRoot = () => {
    const booted = useAppSelector(state => state.app.booted)
    const { calculatedSize } = useDynamicSizing()

    if (!booted) {
        return null
    }
    // Login page is 4 elements: Logo, Fields, Submit, and Register
    return (
        <ThemeProvider theme={defaultTheme}>
            <FullHeightContainer>
                <Background width={calculatedSize.maxWidth} height={calculatedSize.maxHeight} />
                <CenteredContainer>
                    <LoginPageContainer style={{ gap: calculatedSize.size, width: calculatedSize.medWidth }}>
                        <Logo alt="CLOCK!" width={calculatedSize.medWidth} />
                        <Fields style={{ width: calculatedSize.medWidth }}>
                            <Input title="Email, Phone, or Username" titleSize={defaultTheme.fontsizes.fontsmall} width={calculatedSize.medWidth} />
                            <Input title="Password" titleSize={defaultTheme.fontsizes.fontsmall} width={calculatedSize.medWidth} hidden />
                            <Link style={{ alignSelf: 'flex-end', marginTop: '14px', fontSize: defaultTheme.fontsizes.fontsmall }}>Forgot Password?</Link>
                            <Checkbox>Remember me for 30 days</Checkbox>
                        </Fields>
                        <Button>Login</Button>
                        <Register>Dont have an account?<Link style={{ marginLeft: '10px', fontSize: defaultTheme.fontsizes.fontsmall }}>Register</Link></Register>
                    </LoginPageContainer>
                </CenteredContainer>
            </FullHeightContainer>
        </ThemeProvider>
    )
}

export default AppRoot