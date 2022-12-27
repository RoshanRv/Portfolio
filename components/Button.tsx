import Link from "next/link"
import React, { ReactNode } from "react"

interface ButtonProps {
    // text: string
    styles?: string
    link: string
    children: ReactNode
}

const Button = ({ children, styles, link }: ButtonProps) => {
    return (
        <>
            <Link
                href={link}
                scroll={false}
                className={`border-sec border-2  px-10 py-2 text-white  relative transiton-all  w-max after:absolute after:w-28 after:h-3 after:contents-[''] after:bg-gray-900 after:-top-2 after:-right-1 hover:after:w-0 after:transition-all before:absolute before:w-28 before:h-3 before:contents-[''] before:bg-gray-900 before:-bottom-2 before:-left-1 hover:before:w-0 before:transition-all shadow-md duration-500 hover:shadow-sec hover:scale-110 font-code text-lg my-4 btn-shadow outline-0 ${styles} `}
            >
                <span className="text-sx text-code">{"<"}</span>
                {children}
                <span className="text-sx text-code">{"/>"}</span>
            </Link>
        </>
    )
}

export default Button
