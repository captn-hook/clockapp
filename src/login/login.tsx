import React from 'react'
import styled from '@emotion/styled'
import { defaultTheme } from '../style'

// Username and Password fields, along with a Forgot Password and a Remember Me
const FieldsStyle = styled.form({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	maxWidth: '100%',
})

const Fields = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => {
	return <FieldsStyle style={style}>{children}</FieldsStyle>
}

const RegisterStyle = styled.label({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	marginTop: '10px',
	maxWidth: '100%',
	fontSize: defaultTheme.fontsizes.fontsmall,
	fontWeight: defaultTheme.fontsizes.medium,
})

const Register = ({ children }: { children: React.ReactNode }) => {
	return <RegisterStyle>{children}</RegisterStyle>
}

const CheckboxStyle = styled.label({
    display: 'block',
    position: 'relative',
    paddingLeft: '35px',
    marginBottom: '12px',
    cursor: 'pointer',
	fontWeight: defaultTheme.fontsizes.medium,
    userSelect: 'none',
})

const CheckboxInput = styled.input({
    position: 'absolute',
    opacity: 0,
    cursor: 'pointer',
    height: 0,
    width: 0,
    '&:hover ~ .checkmark': {
        backgroundColor: defaultTheme.colors.grey
    },
    '&:checked ~ .checkmark': {
        backgroundColor: defaultTheme.colors.white,
    },
    '&:checked ~ .checkmark:after': {
        display: 'block',
    },
})

const Checkmark = styled.span({
    position: 'absolute',
    top: '-3px',
    left: 0,
    height: '25px',
    width: '25px',
    backgroundColor: defaultTheme.colors.white,
	borderRadius: '25%',
    '&:after': {
        content: '""',
        position: 'absolute',
        display: 'none',
        left: '9px',
        top: '5px',
        width: '5px',
        height: '10px',
        border: 'solid ' + defaultTheme.colors.green,
        borderWidth: '0 3px 3px 0',
        transform: 'rotate(45deg)',
    },
})

const Checkbox = ({ children }: { children: React.ReactNode }) => (
    <CheckboxStyle>
        <CheckboxInput type='checkbox' />
        <Checkmark className="checkmark" />
        {children}
    </CheckboxStyle>
);


export { Fields, Register, Checkbox }