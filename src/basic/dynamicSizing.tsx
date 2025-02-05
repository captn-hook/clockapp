import { useState, useEffect } from 'react'

const useDynamicSizing = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    const [calculatedSize, setCalculatedSize] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
            setCalculatedSize(Math.min(window.innerWidth, window.innerHeight) / 10)
        }

        // run the sizing calculation when the page loads
        handleResize()

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return { width, height, calculatedSize }
}

export default useDynamicSizing