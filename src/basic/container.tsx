import styled from '@emotion/styled'

// Styling is done in the JSX to make components completely self-contained
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

// Flex Column to stack elements vertically
const Container = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
	maxWidth: '600px',
    position: 'relative',
})


export { CenteredContainer, FullHeightContainer, Container }