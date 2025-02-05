import React from 'react'
import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'
import { defaultTheme } from './style'
import { useAppSelector } from './redux/storeTypes'

import { Fields, Register, Checkbox, Input } from './login/login'
import clockLogo from '/clock.svg'
import Link from './basic/link'
import Button from './basic/button'
import Logo from './login/logo'
import useDynamicSizing from './basic/dynamicSizing'

const Background = styled.div({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	backgroundColor: defaultTheme.colors.green,
})

// Flex Column to stack elements vertically
const LoginPageContainer = styled.div({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	marginLeft: 'auto',
	marginRight: 'auto',
	height: '100vh',
	width: 'auto',
	position: 'relative',
})

const Sphere = styled.div<{ x: number, y: number, r: number, color: string }>((props) => ({
	position: 'absolute',
	top: `${props.y}vh`,
	left: `${props.x}vw`,
	width: `${props.r}vw`,
	height: `${props.r}vw`,
	borderRadius: '50%',
	backgroundColor: props.color,
	//opacity: props.color === 'transparent' ? 0 : 0.2,
}))


const AppRoot = () => {
	const booted = useAppSelector(state => state.app.booted)
	const { calculatedSize } = useDynamicSizing()

	if (!booted) {
		return null
	}
	// Login page is 4 elements: Logo, Fields, Submit, and Register
	return (
		<ThemeProvider theme={defaultTheme}>
			<Background>
				<Sphere x={-30} y={-15} r={70} color={defaultTheme.colors.bluegreen}>
					<Sphere x={-25} y={-25} r={150} color={defaultTheme.colors.bluegreen}>
					<Sphere x={-15} y={-30} r={250} color={defaultTheme.colors.bluegreen} />
					</Sphere>
				</Sphere>
			</Background>
			<LoginPageContainer style={{ gap: calculatedSize }}>
				<Logo src={clockLogo} alt="CLOCK!" />
				<Fields>
					<Input title="Username" />
					<Input title="Password" />
					<Link href="/forgot">Forgot Password?</Link>
					<Checkbox>Remember me for 30 days</Checkbox>
				</Fields>
				<Button>Login</Button>
				<Register>Dont have an account?<Link href="/register" style={{ marginLeft: '10px' }}>Register</Link></Register>
			</LoginPageContainer>
		</ThemeProvider>
	)
}

export default AppRoot
