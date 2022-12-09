import Head from "next/head"
import Image from "next/image"
import HomeHero from "../components/HomeHero"

export default function Home() {
    return (
        <main className="font-disp selection:bg-yellow-300">
            <HomeHero />
            <HomeHero />
        </main>
    )
}
