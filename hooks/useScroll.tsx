import React, { useState, useEffect } from "react"

const useScroll = () => {
    const [scrollYProgress, setScollYProgress] = useState(0)

    const handleScroll = (e: Event) => {
        const percentage =
            ((document.documentElement.scrollTop + document.body.scrollTop) /
                (document.documentElement.scrollHeight -
                    document.documentElement.clientHeight)) *
            100
        setScollYProgress(percentage)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return { scrollYProgress }
}

export default useScroll
