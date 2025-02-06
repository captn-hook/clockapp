import styled from '@emotion/styled'
import watchface from '/watchface.svg'
import { defaultTheme } from '../style'

const HandStyled = styled.svg({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -100%)', 
    width: '100%',
    height: '100%',
})

const Hand = ({ type, time }: { type: 'hour' | 'minute' | 'second', time: number }) => {
    
    // need to offset the time by 12 hours for the hour hand
    let offset = type === 'hour' ? 12 : 0
    let rotation = (time - offset) * (360 / (type === 'hour' ? 12 : 60))
    // Formatted as (x1, y1, x2, y2, width)
    let handsizes = {
        hour: [50, 50, 50, 36, 1.5],
        minute: [50, 50, 50, 20, 1.5],
        second: [50, 50, 50, 22, .5],
    }
    let [x1, y1, x2, y2, width] = handsizes[type]

    return (
        <HandStyled
            viewBox="0 0 100 100"
            style={{ transform: `translate(-50%, -50%) rotate(${rotation}deg)` }} 
        >
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={defaultTheme.colors.raspberry} strokeWidth={width} />
            <circle cx={50} cy={50} r={2} fill={defaultTheme.colors.blue} />
        </HandStyled>
    )
}

const ClockStyled = styled.div({
    position: 'relative',
    width: '100%',
    height: '100%',
})

const Face = styled.img({
    width: '100%',
    height: '100%',
    objectFit: 'contain',
})

const Clock = ({ title, time, style }: { title: string, time: string, style?: any }) => {
    var hour = parseInt(time.split(':')[0])
    var minute = parseInt(time.split(':')[1])
    var second = parseInt(time.split(':')[2])

    // this small adjustment uses the time from the next specifity to make the clock more accurate
    minute += second / 60
    hour += minute / 60


    return (
        <ClockStyled style={style}>
            <Face src={watchface} />
            <label style={{ position: 'absolute', bottom: '30%', left: '50%', transform: 'translateX(-50%)', color: defaultTheme.colors.softblue, fontSize: defaultTheme.fontsizes.fontxlarge }}>{title}</label>
            <Hand type="hour" time={hour} />
            <Hand type="minute" time={minute} />
            <Hand type="second" time={second} />
        </ClockStyled>
    )
}

export default Clock