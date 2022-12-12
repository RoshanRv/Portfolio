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
        <div className="flex flex-wrap h-full md:w-5/12 text-gray-700 gap-x-8 gap-y-4 ">
            {languages.map((lang, i) => (
                <h1
                    key={i}
                    className={`font-semibold cursor-pointer select-none transition-all font-code hover:scale-150 ${
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
