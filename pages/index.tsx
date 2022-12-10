import Head from "next/head"
import Image from "next/image"
import Education from "../components/Education"
import HomeHero from "../components/HomeHero"

export default function Home() {
    return (
        <main className="font-disp selection:bg-sec bg-gradient-to-br from-gray-900 to-slate-900 ">
            <HomeHero />
            <Education />
            <img
                src="Rv.svg"
                alt=""
                className="text-yellow-200 fill-slate-50"
            />
        </main>
    )
}
