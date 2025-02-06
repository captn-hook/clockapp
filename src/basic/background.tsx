import styled from '@emotion/styled'
import { defaultTheme } from '../style'

// Background is just 3 spheres, but there is some math for responsive design
interface BackgroundProps {
    width: number
    height: number
}

const BackgroundStyle = styled.div<{ width?: number; height?: number }>(({ width, height }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : '100%',
    zIndex: -1,
    backgroundColor: defaultTheme.colors.green,
    overflow: 'hidden',
}))

const Background = ({ width, height }: BackgroundProps) => {

    // This makes the circles try fo fill as much width as possible while keeping the radius about 70% of the height
    var r = width * 0.2
    if (r > height * 0.75) {
        r = height * 0.75
    }

    var circleSizes = [5.5, 4, 2.5]
    var circleHeights = ['30', '20', '10']
    circleSizes.forEach((size, index) => {
        circleSizes[index] = size * (r || 100)

        if (height / width > 1.5) {
            circleHeights[index] = (parseInt(circleHeights[index].toString()) - (height / width * 3)).toString() + 'vh'
        } else {
            circleHeights[index] = (parseInt(circleHeights[index].toString())).toString() + 'vh'
        }
    })

    return (
        <BackgroundStyle width={width} height={height}>
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width || 100} ${height || 100}`} width="100%" height="100%">
                <ellipse cx="3vw" cy={circleHeights[0]} rx={circleSizes[0]} ry={circleSizes[0]} fill="#0C8AD6" fillOpacity="0.2"/>
                <ellipse cx="2vw" cy={circleHeights[1]} rx={circleSizes[1]} ry={circleSizes[1]} fill="#0C8AD6" fillOpacity="0.2"/>
                <ellipse cx="1vw" cy={circleHeights[2]} rx={circleSizes[2]} ry={circleSizes[2]} fill="#0C8AD6" fillOpacity="0.2"/>
            </svg>
        </BackgroundStyle>
    )
}

export default Background