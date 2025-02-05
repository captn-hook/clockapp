import React from 'react'
import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'
import { defaultTheme } from './style'
import { useAppSelector } from './redux/storeTypes'
import clockLogo from '/clock.svg'

// Flex Column to stack elements vertically
const LoginPageContainer = styled.div({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	height: '100vh',
})

const Logo = styled.img({
	width: '240px',
})

// Username and Password fields, along with a Forgot Password and a Remember Me
const Fields = styled.div({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
})

const Submit = styled.button({
	width: '100%',
	height: '40px',
	border: 'none',
	borderRadius: '4px',
	backgroundColor: '#00a2ed',
	color: '#fff',
	fontSize: '16px',
	cursor: 'pointer',
})

const Register = styled.button({
	width: '100%',
	height: '40px',
	border: 'none',
	borderRadius: '4px',
	backgroundColor: '#00a2ed',
	color: '#fff',
	fontSize: '16px',
	cursor: 'pointer',
})

const Checkbox = styled.label({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	marginTop: '10px',
	fontSize: '16px',
	cursor: 'pointer',
})

const Link = styled.a({
	color: '#00a2ed',
	textDecoration: 'none',
	cursor: 'pointer',
})

const Input = styled.input({
	width: '100%',
	height: '40px',
	border: '1px solid #ccc',
	borderRadius: '4px',
	marginTop: '10px',
	padding: '0 10px',
	fontSize: '16px',
})


const AppRoot = () => {
	const booted = useAppSelector(state => state.app.booted)

	if(!booted) {
		return null
	}
	// Login page is 4 elements: Logo, Fields, Submit, and Register
	return (
		<ThemeProvider theme={defaultTheme}>
			<LoginPageContainer>
				<Logo src={clockLogo} alt="CLOCK!" />
				<Fields>
					<Input title="Username" />
					<Input title="Password" />
					<Link href="/forgot">Forgot Password?</Link>
					<Checkbox>Remeber me for 30 days</Checkbox>
				</Fields>
				<Submit>Login</Submit>
				<Register>Dont have an account?<Link href="/register">Register</Link></Register>
			</LoginPageContainer>
		</ThemeProvider>
	)
}

export default AppRoot
