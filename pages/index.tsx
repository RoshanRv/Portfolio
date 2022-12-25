import Head from "next/head"
import Image from "next/image"
import { useRef } from "react"
import About from "../components/About"
import Contact from "../components/Contact"
import Education from "../components/Education"
import Header from "../components/Header"
import HomeHero from "../components/HomeHero"
import Logo from "../components/Logo"
import Projects from "../components/Projects"
import Social from "../components/Social"
import useActiveNav from "../hooks/useActiveNav"
import useScroll from "../hooks/useScroll"

export interface HomeProp {
    ref: HTMLElement
}

export default function Home() {
    const heroRef = useRef<HTMLDivElement>(null)
    const aboutRef = useRef<HTMLElement>(null)
    const educationRef = useRef<HTMLElement>(null)
    const projectRef = useRef<HTMLElement>(null)
    const contactRef = useRef<HTMLElement>(null)

    const { activeSection } = useActiveNav(
        heroRef,
        aboutRef,
        educationRef,
        projectRef,
        contactRef
    )

    return (
        <main className="overflow-hidden font-disp selection:bg-sec bg-gradient-to-br from-gray-900 to-slate-900 ">
            <Header activeSection={activeSection} />
            <HomeHero ref={heroRef} />
            <About ref={aboutRef} />
            <Education ref={educationRef} />
            <Projects ref={projectRef} />
            <Contact ref={contactRef} />
            <Social />
        </main>
    )
}
