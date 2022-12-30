import React, { ForwardedRef, forwardRef, useState } from "react"
import { HomeProp } from "../pages"
import CodeText from "./CodeText"
import Skill from "./Skill"
import { motion, Variants } from "framer-motion"
import { container, item } from "./HomeHero"

const languages = [
    {
        name: "Javascript",
        style: " text-3xl md:text-4xl 2xl:text-5xl m-2 lg:m-4 lg:mx-6 hover:text-[#f1d43b] ",
        hoverStyle: "text-[#f1d43b]   ",
    },
    {
        name: "Typescript",
        style: " text-2xl md:text-3xl 2xl:text-4xl my-2 hover:text-[#174e9c] ",
        hoverStyle: "text-[#174e9c]   ",
    },
    {
        name: "ReactJS",
        style: " text-3xl md:text-5xl 2xl:text-7xl m-3 hover:text-[#00cdf2] ",
        hoverStyle: "text-[#00cdf2]   ",
    },
    {
        name: "NextJS",
        style: " text-2xl md:text-4xl 2xl:text-5xl my-1 lg:mx-2 hover:text-white",
        hoverStyle: "text-white  ",
    },
    {
        name: "MongoDB",
        style: " text-2xl md:text-3xl 2xl:text-5xl m-3 lg:m-6 hover:text-[#4ba13e] ",
        hoverStyle: "text-[#4ba13e]    ",
    },
    {
        name: "MySql",
        style: " text-2xl md:text-3xl  2xl:text-4xl mx-3 my-2 lg:m-4 hover:text-[#f29d17] ",
        hoverStyle: "text-[#f29d17]    ",
    },
    {
        name: "NodeJS",
        style: " text-xl md:text-2xl 2xl:text-3xl m-3  hover:text-[#4f9640] ",
        hoverStyle: "text-[#4f9640]    ",
    },
    {
        name: "ExpressJS",
        style: " text-2xl md:text-3xl  2xl:text-4xl mx-2 my-3 lg:m-6 hover:text-white ",
        hoverStyle: "text-white  ",
    },
    {
        name: "TailwindCSS",
        style: " text-3xl md:text-4xl 2xl:text-6xl m-2 hover:text-[#35b3eb] ",
        hoverStyle: "text-[#35b3eb]    ",
    },
    {
        name: "Git",
        style: " text-3xl md:text-4xl 2xl:text-6xl m-4 hover:text-[#e44c30] ",
        hoverStyle: "text-[#e44c30]    ",
    },
    {
        name: "React Native",
        style: " text-xl  2xl:text-2xl m-1 hover:text-[#00cdf2] ",
        hoverStyle: "text-[#00cdf2]   ",
    },
    {
        name: "Socket.io",
        style: " text-xl md:text-2xl 2xl:text-3xl m-3 hover:text-white ",
        hoverStyle: "text-white  ",
    },
]

const About = forwardRef(function About(_prop, ref: ForwardedRef<HTMLElement>) {
    const [hoverState, setHoverState] = useState("")

    return (
        <section
            ref={ref}
            id="about"
            className="relative z-0 flex flex-col-reverse items-center justify-center min-h-screen px-4 mb-10 overflow-hidden lg:px-6 md:px-2 md:mb-0 md:flex-row gap-x-6 2xl:gap-x-10"
        >
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                className="z-40 w-full md:w-5/12 "
            >
                <motion.div className="" variants={item}>
                    <CodeText type="head" tag="h1">
                        <h1 className="">
                            <span className="text-sec font-code">01.</span>
                            About
                        </h1>
                    </CodeText>
                </motion.div>

                {/*        About Context       */}
                <div className="flex flex-col w-full mt-2 2xl:gap-y-8 gap-y-4 2xl:mt-8 md:mt-4 ">
                    <motion.div
                        variants={item}
                        className="flex flex-col xl:gap-y-8 gap-y-4"
                    >
                        <CodeText type="p" tag="p">
                            <div className="flex flex-col gap-y-2 2xl:gap-y-4 ">
                                <p>
                                    {`
                                    Hi, I'm Roshan Kumar. My interest in web
                                    development started in 2021. I've been
                                    learning a lot of new skills since that day
                                    and have begun my path as a full-stack
                                    developer.`}
                                </p>
                                <p className="">
                                    {`Building useful web applications in an
                                    effort to make everyone's life easier.`}
                                </p>
                                <p className="">
                                    {`Interested in the entire full-stack spectrum
                                    and working on ambitious project with
                                    positive people.`}
                                </p>
                            </div>
                        </CodeText>

                        <CodeText type="p" tag="p" line="single">
                            <p>
                                Here are a few technologies I’ve been working
                                with recently
                            </p>
                        </CodeText>
                    </motion.div>

                    {/*      Skills    */}
                    <motion.div
                        variants={item}
                        className="grid grid-cols-1 gap-2 ml-6 md:grid-cols-2 md:ml-8 w-max 2xl:gap-4 gap-x-8"
                    >
                        {languages.map((lang, i) => (
                            <h1
                                onMouseEnter={() => setHoverState(lang.name)}
                                onMouseLeave={() => setHoverState("")}
                                key={i}
                                className={`text-lg text-gray-400 flex items-center gap-x-2 group hover:text-white transition-all font-code cursor-pointer z-50`}
                            >
                                <div className="h-[5px] w-1 rounded-full bg-sec "></div>
                                <span className="transition-all text-code group-hover:text-sub">
                                    {" < "}
                                </span>
                                {lang.name}
                                <span className="transition-all text-code group-hover:text-sub">
                                    {" />"}
                                </span>
                            </h1>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
            {/*       Right Side Skill       */}
            <Skill hoverState={hoverState} languages={languages} />
        </section>
    )
})

export default About
