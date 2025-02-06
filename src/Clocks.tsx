import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { ThemeProvider } from '@emotion/react'
import { defaultTheme } from './style'
import { useAppSelector, useAppDispatch } from './redux/storeTypes'

import { updateTime, selectClockTime } from './redux/time'

import Button from './basic/button'
import Background from './basic/background'
import Clock from './clocks/clock'
import useDynamicSizing from './basic/dynamicSizing'
import { FullHeightContainer, CenteredContainer, Container } from './basic/container'

const Locations = {
    'Las Vegas': 'America/Los_Angeles',
    'Taipei': 'Asia/Taipei',
}

// Two clocks and a button to log out (redirect to /)
const Clocks = () => {
    const navigate = useNavigate()
    const booted = useAppSelector(state => state.app.booted)
    const dispatch = useAppDispatch()
    const clockTime = useAppSelector(selectClockTime)
    const { calculatedSize } = useDynamicSizing()

    const [locationTimes, setLocationTimes] = useState({
        'Las Vegas': new Date().toLocaleTimeString('en-US', { timeZone: Locations['Las Vegas'] }),
        'Taipei': new Date().toLocaleTimeString('en-US', { timeZone: Locations['Taipei'] }),
    })

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(updateTime(new Date().toLocaleTimeString()))
            setLocationTimes({
                'Las Vegas': new Date().toLocaleTimeString('en-US', { timeZone: Locations['Las Vegas'] }),
                'Taipei': new Date().toLocaleTimeString('en-US', { timeZone: Locations['Taipei'] }),
            })
        }, 1000)
        return () => clearInterval(interval)
    }, [dispatch])

    if (!booted) {
        return null
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <FullHeightContainer>
                <Background width={calculatedSize.maxWidth} height={calculatedSize.maxHeight} />
                <CenteredContainer>
                    <Container style={{ gap: calculatedSize.size / 2, width: calculatedSize.medWidth }}>
                        <Clock title="Las Vegas" time={locationTimes['Las Vegas']} style={{ maxHeight: calculatedSize.maxHeight / 2.5, maxWidth: calculatedSize.maxHeight / 2.5}} />
                        <Clock title="Taipei" time={locationTimes['Taipei']} style={{ maxHeight: calculatedSize.maxHeight / 2.5, maxWidth: calculatedSize.maxHeight / 2.5 }} />
                        <Button onClick={() => navigate('/')}>Log out</Button>
                    </Container>
                </CenteredContainer>
            </FullHeightContainer>
        </ThemeProvider>
    )
}

export default Clocks