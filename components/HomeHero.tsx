import React, { ForwardedRef, forwardRef } from "react"
import { motion, Variants } from "framer-motion"
import Button from "./Button"
import CodeText from "./CodeText"
import Goal from "./Goal"
import { ContactButton } from "./Contact"

//  animation
export const container: Variants = {
    hidden: {
        opacity: 0,
    },

    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

export const item: Variants = {
    hidden: {
        scale: 0,
    },
    show: {
        scale: 1,
    },

    hover: {
        scale: 1.1,
    },
}

const HomeHero = forwardRef(function HomeHero(
    _prop,
    ref: ForwardedRef<HTMLDivElement>
) {
    return (
        <div
            ref={ref}
            id={"hero"}
            style={{
                backgroundImage: `url('Rv.svg')`,
                backgroundSize: "30%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "40% 55%",
                fill: "red",
            }}
            className="flex flex-col items-center justify-center w-full min-h-screen px-3 md:justify-around md:flex-row -z-50 gap-y-10 "
        >
            <motion.div
                variants={container}
                initial={"hidden"}
                whileInView={"show"}
                className="flex flex-col gap-y-6 md:gap-y-8"
            >
                <motion.div variants={item} className="">
                    <CodeText tag="p" type="p" line="single">
                        <p className="">This is</p>
                    </CodeText>
                </motion.div>

                {/* Name  */}
                <motion.div className="" variants={item}>
                    <CodeText tag="h1" type="head">
                        {/* <h1 className="pl-6">Roshan Kumar</h1> */}

                        <div className="flex pl-6">
                            {" "}
                            <span className="transition-all cursor-pointer hover:text-code hover:scale-125">
                                R
                            </span>
                            <span className="transition-all cursor-pointer hover:text-code hover:scale-125">
                                o
                            </span>
                            <span className="transition-all cursor-pointer hover:text-code hover:scale-125">
                                s
                            </span>
                            <span className="transition-all cursor-pointer hover:text-code hover:scale-125">
                                h
                            </span>
                            <span className="transition-all cursor-pointer hover:text-code hover:scale-125">
                                a
                            </span>
                            <span className="transition-all cursor-pointer hover:text-code hover:scale-125">
                                n
                            </span>
                            &nbsp;
                            <span className="transition-all cursor-pointer hover:text-code hover:scale-125">
                                K
                            </span>
                            <span className="transition-all cursor-pointer hover:text-code hover:scale-125">
                                u
                            </span>
                            <span className="transition-all cursor-pointer hover:text-code hover:scale-125">
                                m
                            </span>
                            <span className="transition-all cursor-pointer hover:text-code hover:scale-125">
                                a
                            </span>
                            <span className="transition-all cursor-pointer hover:text-code hover:scale-125">
                                r
                            </span>{" "}
                        </div>
                    </CodeText>
                </motion.div>

                <motion.div className="" variants={item}>
                    <CodeText tag="h3" type="sub" line="single">
                        <p className="">Full-Stack Developer</p>
                    </CodeText>
                </motion.div>
                <motion.div className="flex mt-8 " variants={item} style={{}}>
                    <Button link={"#contact"}>{" Hire Me "}</Button>
                </motion.div>
            </motion.div>
            <Goal />
        </div>
    )
})

export default HomeHero
