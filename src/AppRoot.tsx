import React, { useState } from 'react'
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
import { useNavigate } from 'react-router-dom'
import { FullHeightContainer, CenteredContainer, Container } from './basic/container'

// Landing page for the app is the login screen
const AppRoot = () => {
    
    const navigate = useNavigate()
    const booted = useAppSelector(state => state.app.booted)
    const { calculatedSize } = useDynamicSizing()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    // Fake login function that sends a POST request to dummyjson, use one of their usernames and passwords to login
    const handleLogin = async () => {
        try {
            const response = await fetch('/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username,
                    password,
                    expiresInMins: 30,
                }),
                credentials: 'include',
            })
            const data = await response.json()
            if (response.ok) {
                // Navigate to Clocks screen at /clocks, IRL we would want to store the JWT in the Redux store
                navigate('/clocks')
            } else {
                alert(`Login failed: ${data.message}`)
            }
        } catch (error) {
            alert(`Login failed: ${error}`)
        }
    }

    if (!booted) {
        return null
    }

    // Login page is 4 elements: Logo, Fields, Submit, and Register
    return (
        <ThemeProvider theme={defaultTheme}>
            <FullHeightContainer>
                <Background width={calculatedSize.maxWidth} height={calculatedSize.maxHeight} />
                <CenteredContainer>
                    <Container style={{ gap: calculatedSize.size, width: calculatedSize.medWidth }}>
                        <Logo alt="CLOCK!" width={calculatedSize.medWidth} />
                        <Fields style={{ width: calculatedSize.medWidth }}>
                            <Input
                                title="Email, Phone, or Username"
                                titleSize={defaultTheme.fontsizes.fontsmall}
                                width={calculatedSize.medWidth}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <Input
                                title="Password"
                                titleSize={defaultTheme.fontsizes.fontsmall}
                                width={calculatedSize.medWidth}
                                hidden
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Link style={{ alignSelf: 'flex-end', marginTop: '14px', fontSize: defaultTheme.fontsizes.fontsmall }}>Forgot Password?</Link>
                            <Checkbox>Remember me for 30 days</Checkbox>
                        </Fields>
                        <Button onClick={handleLogin}>Login</Button>
                        <Register>Dont have an account?<Link style={{ marginLeft: '10px', fontSize: defaultTheme.fontsizes.fontsmall }}>Register</Link></Register>
                    </Container>
                </CenteredContainer>
            </FullHeightContainer>
        </ThemeProvider>
    )
}

export default AppRoot