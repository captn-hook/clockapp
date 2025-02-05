import styled from '@emotion/styled'

// Username and Password fields, along with a Forgot Password and a Remember Me
const Fields = styled.div({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
})

const Register = styled.label({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	marginTop: '10px',
	fontSize: '16px',
})

const Checkbox = styled.label({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	marginTop: '10px',
	fontSize: '16px',
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

export { Fields, Register, Checkbox, Input }