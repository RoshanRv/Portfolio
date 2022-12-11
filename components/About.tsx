import React, { useState } from "react"
import CodeText from "./CodeText"
import Skill from "./Skill"

const languages = [
    {
        name: "Javascript",
        style: "text-5xl m-4",
        hoverStyle: "text-[#f1d43b]   ",
    },
    {
        name: "Typescript",
        style: "text-4xl ",
        hoverStyle: "text-[#174e9c]   ",
    },
    {
        name: "ReactJS",
        style: "text-7xl m-3",
        hoverStyle: "text-[#00cdf2]   ",
    },
    { name: "NextJS", style: "text-5xl ", hoverStyle: "text-white  " },
    {
        name: "MongoDB",
        style: "text-5xl m-6",
        hoverStyle: "text-[#4ba13e]    ",
    },
    {
        name: "MySql",
        style: "text-4xl m-8",
        hoverStyle: "text-[#f29d17]    ",
    },
    {
        name: "NodeJS",
        style: "text-3xl m-4 ",
        hoverStyle: "text-[#4f9640]    ",
    },
    {
        name: "ExpressJS",
        style: "text-4xl m-6",
        hoverStyle: "text-white  ",
    },
    {
        name: "TailwindCSS",
        style: "text-6xl m-4",
        hoverStyle: "text-[#35b3eb]    ",
    },
    {
        name: "Git",
        style: "text-6xl m-4",
        hoverStyle: "text-[#e44c30]    ",
    },
    {
        name: "React Native",
        style: "text-2xl m-1",
        hoverStyle: "text-[#00cdf2]   ",
    },
    {
        name: "Socket.io",
        style: "text-3xl m-3",
        hoverStyle: "text-white  ",
    },
]

const About = () => {
    const [hoverState, setHoverState] = useState("")

    return (
        <section
            id="about"
            className="flex justify-around items-center min-h-screen overflow-hidden"
        >
            <div className="md:w-5/12">
                <CodeText type="head" tag="h1">
                    <h1 className="">
                        <span className="text-sec font-code">01.</span>
                        About
                    </h1>
                </CodeText>
                {/*        About Context       */}
                <div className="flex flex-col gap-y-8 mt-8 w-full  ">
                    <CodeText type="p" tag="p">
                        <div className="flex flex-col gap-y-4 ">
                            <p>
                                Hi, I'm Roshan Kumar. My interest in web
                                development started in 2021. I've been learning
                                a lot of new skills since that day and have
                                begun my path as a full-stack developer.
                            </p>
                            <p className="">
                                Building useful web applications in an effort to
                                make everyone's life easier.
                            </p>
                            <p className="">
                                Interested in the entire full-stack spectrum and
                                working on ambitious project with positive
                                people.
                            </p>
                        </div>
                    </CodeText>
                    <CodeText type="p" tag="p" line="single">
                        <p>
                            Here are a few technologies I’ve been working with
                            recently
                        </p>
                    </CodeText>
                    <div className="grid grid-cols-2 w-max gap-4 gap-x-8 ml-8">
                        {languages.map((lang, i) => (
                            <h1
                                onMouseEnter={() => setHoverState(lang.name)}
                                onMouseLeave={() => setHoverState("")}
                                key={i}
                                className={`text-lg text-gray-400 flex items-center gap-x-2 group hover:text-white transition-all font-code cursor-pointer`}
                            >
                                <div className="h-[5px] w-1 rounded-full bg-sec "></div>
                                <span className="text-code group-hover:text-sub transition-all">
                                    {" < "}
                                </span>
                                {lang.name}
                                <span className="text-code group-hover:text-sub transition-all">
                                    {" />"}
                                </span>
                            </h1>
                        ))}
                    </div>
                </div>
            </div>
            <Skill hoverState={hoverState} languages={languages} />
        </section>
    )
}

export default About
