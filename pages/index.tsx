import Head from "next/head"
import Image from "next/image"
import { useRef } from "react"
import About from "../components/About"
import Contact from "../components/Contact"
import Education from "../components/Education"
import Header from "../components/Header"
import HomeHero from "../components/HomeHero"
import Projects from "../components/Projects"
import Social from "../components/Social"
import useActiveNav from "../hooks/useActiveNav"

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
        <>
            <Head>
                {/* <!-- Primary Meta Tags --> */}
                <title>Roshan Kumar | Full-Stack Developer</title>
                <meta
                    name="title"
                    content="Roshan Kumar | Full-Stack Developer"
                />
                <meta
                    name="description"
                    content="Hi, I'm Roshan Kumar. I'm building useful web applications in an effort to make everyone's life easier."
                />

                {/* <!-- Open Graph / Facebook --/> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://metatags.io/" />
                <meta
                    property="og:title"
                    content="Roshan Kumar | Full-Stack Developer"
                />
                <meta
                    property="og:description"
                    content="Hi, I'm Roshan Kumar. I'm building useful web applications in an effort to make everyone's life easier."
                />
                <meta property="og:image" content="meta.png" />

                {/* <!-- Twitter --/> */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://metatags.io/" />
                <meta
                    property="twitter:title"
                    content="Roshan Kumar | Full-Stack Developer"
                />
                <meta
                    property="twitter:description"
                    content="Hi, I'm Roshan Kumar. I'm building useful web applications in an effort to make everyone's life easier."
                />
                <meta property="twitter:image" content="meta.png" />
            </Head>
            <main className="overflow-hidden font-disp selection:bg-sec bg-gradient-to-br from-gray-900 to-slate-900 ">
                <Header activeSection={activeSection} />
                <HomeHero ref={heroRef} />
                <About ref={aboutRef} />
                <Education ref={educationRef} />
                <Projects ref={projectRef} />
                <Contact ref={contactRef} />
                <Social />
            </main>
        </>
    )
}
