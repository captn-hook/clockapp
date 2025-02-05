import styled from '@emotion/styled'
import clockLogo from '/clock.svg'

interface LogoProps {
    width?: number
    height?: number
    alt?: string
}

const LogoStyle = styled.img({
    maxWidth: '100%',
    maxHeight: '100%',
    src: clockLogo,
})

const Logo = ({ width, height }: LogoProps) => {
    return <LogoStyle width={width} height={height} src={clockLogo} alt="CLOCK!" />
}

export default Logo