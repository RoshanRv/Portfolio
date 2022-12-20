import Head from "next/head"
import Image from "next/image"
import About from "../components/About"
import Contact from "../components/Contact"
import Education from "../components/Education"
import Header from "../components/Header"
import HomeHero from "../components/HomeHero"
import Logo from "../components/Logo"
import Projects from "../components/Projects"
import Social from "../components/Social"
import useScroll from "../hooks/useScroll"

export default function Home() {
    const { scrollYProgress } = useScroll()

    return (
        <main className="overflow-hidden font-disp selection:bg-sec bg-gradient-to-br from-gray-900 to-slate-900 ">
            <Header />
            <HomeHero />
            <About />
            <Education />
            <Projects />
            <Contact />
            <Social />
        </main>
    )
}
