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

        ${type == "head" ? "text-7xl text-white font-bold " : ""}
        ${type == "sub" ? "text-4xl text-sub font-semibold " : ""}
        ${type == "p" ? "text-lg text-gray-400 " : ""}
        `}
        >
            <p className="font-code text-code italic  text-sm">{`<${tag}>`}</p>
            {children}
            <p className="font-code text-code italic   text-sm">{`</${tag}>`}</p>
        </div>
    )
}

export default CodeText
