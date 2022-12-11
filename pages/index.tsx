import Head from "next/head"
import Image from "next/image"
import About from "../components/About"
import Education from "../components/Education"
import Header from "../components/Header"
import HomeHero from "../components/HomeHero"
import Logo from "../components/Logo"

export default function Home() {
    return (
        <main className="font-disp selection:bg-sec bg-gradient-to-br from-gray-900 to-slate-900 ">
            <Header />
            <HomeHero />
            <About />
            <Education />
        </main>
    )
}
