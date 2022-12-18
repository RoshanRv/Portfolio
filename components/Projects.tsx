import React from "react"
import CodeText from "./CodeText"

const Projects = () => {
    return (
        <section className="flex flex-col items-center justify-center">
            <div className="w-full h-screen overflow-hidden ">
                <div className="mx-auto w-max">
                    <CodeText tag="h1" type="head">
                        <h1 className="">
                            <span className="text-sec font-code ">03.</span>
                            Projects
                        </h1>
                    </CodeText>
                </div>

                {/*     Project Slider     */}
                <div className="w-[50vh] bg-slate-700 h-[100vw] -rotate-90 translate-x-[148%] -translate-y-1/4 overflow-auto">
                    <div className="w-screen h-[50vh] rotate-90 bg-red-500">
                        <h1 className="text-white">Hello</h1>
                    </div>
                    <div className="w-screen h-[50vh] rotate-90 bg-blue-500">
                        <h1 className="text-white">Hello</h1>
                    </div>
                    <div className="w-20 h-[100vw] bg-blue-500"></div>
                </div>
            </div>

            {/*     Demo     */}
            {/* <div className="w-40 h-40 overflow-auto -rotate-90 bg-blue-800 overflow-scrll">
                <div className="">
                    <div className="flex-shrink-0 w-32 h-32 rotate-90 bg-pink-300">
                        <h1 className="-translate-y-full roate-90 ">Hello</h1>
                    </div>
                    <div className="flex-shrink-0 w-32 h-32 bg-green-300"></div>
                </div>
            </div> */}
        </section>
    )
}

export default Projects
