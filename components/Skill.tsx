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
        <div className="flex flex-wrap h-full w-5/12 text-gray-700 gap-x-8 gap-y-4 ">
            {languages.map((lang, i) => (
                <h1
                    key={i}
                    className={`font-semibold transition-all font-code ${
                        lang.style
                    } ${
                        hoverState === lang.name
                            ? lang.hoverStyle + "scale-150 txt-shadow"
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
