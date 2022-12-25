import React, { RefObject, useEffect, useState } from "react"

const useActiveNav = (
    heroRef: RefObject<HTMLDivElement>,
    aboutRef: RefObject<HTMLElement>,
    educationRef: RefObject<HTMLElement>,
    projectRef: RefObject<HTMLElement>,
    contactRef: RefObject<HTMLElement>
) => {
    const sectionRefs = [
        heroRef,
        aboutRef,
        educationRef,
        projectRef,
        contactRef,
    ]
    const [activeSection, setActiveSection] = useState<string | null>("")

    const handleScoll = () => {
        sectionRefs.forEach((section) => {
            if (section.current) {
                const top = section.current?.offsetTop
                const height = section.current?.offsetHeight
                const scrollY = window.scrollY

                if (scrollY >= top && scrollY < top + height) {
                    setActiveSection(section.current.getAttribute("id"))
                }
            }
        })
    }

    useEffect(() => {
        document.addEventListener("scroll", handleScoll)
    })

    return { activeSection }
}

export default useActiveNav
