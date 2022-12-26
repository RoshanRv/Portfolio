import React from "react"

interface LanguageProp {
    name: string
    style: string
    hoverStyle: string
}

interface SkillProps {
    hoverState: string
    languages: LanguageProp[]
}

const Skill = ({ hoverState, languages }: SkillProps) => {
    return (
        <div className="absolute inset-0 z-0 flex flex-wrap h-full text-gray-800 md:text-gray-700 md:relative md:w-5/12 gap-x-8 gap-y-4 ">
            {languages.map((lang, i) => (
                <h1
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
                </h1>
            ))}
        </div>
    )
}

export default Skill
