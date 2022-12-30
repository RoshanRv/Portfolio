import React from "react"

interface CodeTextProps {
    tag: "h1" | "p" | "section" | "h3"
    children: React.ReactNode
    type: "head" | "sub" | "p"
    line?: "single" | "multi"
}

const CodeText = ({ tag, children, type, line = "multi" }: CodeTextProps) => {
    return (
        <div
            className={`
        flex
        ${
            line == "multi"
                ? "flex-col gap-y-2"
                : "flex-row gap-x-1 items-center"
        }    

        ${
            type == "head"
                ? "2xl:text-7xl lg:text-6xl md:text-5xl text-4xl text-white font-bold "
                : ""
        }
        ${
            type == "sub"
                ? "2xl:text-4xl lg:text-3xl text-2xl text-sub font-semibold "
                : ""
        }
        ${type == "p" ? "lg:text-lg text-base text-gray-400 " : ""}
        `}
        >
            <p className="text-xs italic lg:text-sm font-code text-code">{`<${tag}>`}</p>
            {children}
            <p className="text-xs italic lg:text-sm font-code text-code">{`</${tag}>`}</p>
        </div>
    )
}

export default CodeText
