import React from 'react'
import styled from '@emotion/styled'
import { defaultTheme } from '../style'

import eyeslash from '/eyeslash.svg'
import eye from '/eye.svg'

const InputWrapper = styled.div({
	position: 'relative',
	width: '100%',
})

const InputStyle = styled.input({
	width: '100%',
	height: '40px',
	border: '1px solid ' + defaultTheme.colors.green,
	borderRadius: '15px',
	marginTop: '5px',
	padding: '8px',
	paddingRight: '40px', // Add padding to the right to make space for the icon
	boxSizing: 'border-box',
})

const ShowPasswordStyle = styled.img({
	position: 'absolute',
	top: '60%',
	right: '10px', // Position the icon inside the input on the right
	transform: 'translateY(-50%)',
	width: '20px', // Adjust width as needed
	height: '20px', // Adjust height as needed
	cursor: 'pointer',
})

const ShowPassword = ({ onClick, iconstate }: { onClick: () => void; iconstate: boolean }) => {
	return (
		<ShowPasswordStyle src={iconstate ? eye : eyeslash} onClick={onClick} />
	)
}

const Input = ({ title, titleSize, width, hidden }: { title: string; titleSize: string; width: number, hidden?: boolean }) => {

	const [passwordVisible, setPasswordVisible] = React.useState(false)

	const handleShowPassword = () => {
		setPasswordVisible(!passwordVisible)
	}

	return (
		<div style={{ maxWidth: width, width: '100%', marginTop: '10px' }}>
			<label style={{ fontSize: titleSize, fontWeight: defaultTheme.fontsizes.medium }}>{title}</label>
			<InputWrapper>
				<InputStyle type={hidden ? (passwordVisible ? 'text' : 'password') : 'text'} />
				{hidden && <ShowPassword onClick={handleShowPassword} iconstate={passwordVisible} />}
			</InputWrapper>
		</div>
	)
}

export default Input