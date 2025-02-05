import { useState, useEffect } from 'react'

function calculateSize(width: number, height: number) {
    const size = Math.min(width, height)
    const maxSize = Math.max(width, height)
    return {
        width: width / size,
        medWidth: width * .8,
        maxWidth: width,
        height: height / size,
        maxHeight: height,
        size: size / 10,
        maxSize,
    }
}


const useDynamicSizing = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    const [calculatedSize, setCalculatedSize] = useState(calculateSize(window.innerWidth, window.innerHeight))

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
            setCalculatedSize(calculateSize(window.innerWidth, window.innerHeight))
        }

        // run the sizing calculation when the page loads
        handleResize()

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return { width, height, calculatedSize }
}

export default useDynamicSizing