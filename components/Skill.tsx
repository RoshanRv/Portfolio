import { motion, Variants } from "framer-motion"
import React from "react"
import { container } from "./HomeHero"

interface LanguageProp {
    name: string
    style: string
    hoverStyle: string
}

interface SkillProps {
    hoverState: string
    languages: LanguageProp[]
}

const opacityItem: Variants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
    },
}

const Skill = ({ hoverState, languages }: SkillProps) => {
    return (
        <motion.div
            variants={container}
            initial={"hidden"}
            whileInView={"show"}
            className="absolute inset-0 z-0 flex flex-wrap h-full text-gray-800 md:text-gray-700 md:relative md:w-5/12 gap-x-8 gap-y-4 "
        >
            {languages.map((lang, i) => (
                <motion.h1
                    variants={opacityItem}
                    key={i}
                    className={`font-semibold cursor-pointer select-none transition-all font-code hover:scale-150 z-0 ${
                        lang.style
                    } ${
                        hoverState === lang.name
                            ? lang.hoverStyle + "scale-150"
                            : ""
                    } `}
                >
                    {lang.name}
                </motion.h1>
            ))}
        </motion.div>
    )
}

export default Skill
