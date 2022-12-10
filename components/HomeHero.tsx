import React from "react"
import Button from "./Button"
import CodeText from "./CodeText"
import Goal from "./Goal"

const HomeHero = () => {
    return (
        <div className="h-screen w-full  -z-50 flex justify-around items-center  ">
            <div className="flex flex-col gap-y-4">
                <CodeText tag="p" type="p" line="single">
                    <p className="">This is</p>
                </CodeText>
                <CodeText tag="h1" type="head">
                    <h1 className="pl-6">Roshan Kumar</h1>
                </CodeText>
                <CodeText tag="h3" type="sub" line="single">
                    <p className="">Full-Stack Developer</p>
                </CodeText>
                <Button text=" Hire Me " />
            </div>
            <Goal />
        </div>
    )
}

export default HomeHero
