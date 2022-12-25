import React, { useEffect, useRef, useState } from "react"
import { BiMenu } from "react-icons/bi"
import Link from "next/link"
import useScroll from "../hooks/useScroll"

const HeaderButton = ({
    name,
    num,
    activeSection,
}: {
    name: string
    num: string
    activeSection: string | null
}) => {
    return (
        <Link href={`#${name.toLowerCase()}`} scroll={false}>
            <button
                className={`font-code text-white p-2 pt-0 hover:scale-110 duration-700 relative text-sm before:contents-['']  before:absolute before:bottom-0 before:left-0 before:w-0 before:hover:w-full before:transition-all before:duration-500 before:h-[1px] before:bg-sec after:contents-['']  after:absolute after:-bottom-0 after:right-0 after:h-0 after:hover:h-full after:transition-all after:duration-500 after:w-[1px] after:bg-sec head-btn-shadow transition-all outline-0
            ${activeSection == name.toLowerCase() ? "active-sec " : ""}
            `}
            >
                <span className="text-sm text-sec">{`0${num}. `}</span>
                <span className="text-sm text-code">{"< "}</span>
                {name}
                <span className="text-sm text-code">{" />"}</span>
            </button>
        </Link>
    )
}
const Header = ({ activeSection }: { activeSection: string | null }) => {
    const [isMovingUp, setIsMovingUp] = useState(false)
    const { scrollYProgress } = useScroll()
    const scrollPos = useRef<number>(scrollYProgress)
    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        if (scrollPos.current > scrollYProgress) {
            setIsMovingUp(true)
        } else {
            setIsMovingUp(false)
        }

        scrollPos.current = scrollYProgress
    }, [scrollYProgress])

    return (
        <>
            {/*       Lap/ Tab Nav       */}
            <nav
                className={`fixed z-50 left-0 shadow-lg md:shadow-none  w-full  items-center justify-around  py-4 bg-gray-900 transition-all duration-500 hidden md:flex ${
                    scrollYProgress > 8 ? "shadow-md" : ""
                } ${
                    !isMovingUp && scrollYProgress > 8 ? "-top-full" : "top-0"
                } shadow-black/80
            
            `}
            >
                {/*    1.    */}
                <HeaderButton
                    name={"About"}
                    num={"1"}
                    activeSection={activeSection}
                />

                {/*    2.    */}
                <HeaderButton
                    name={"Education"}
                    num={"2"}
                    activeSection={activeSection}
                />

                {/*    3. LOGO    */}
                <Link href={"#"} className="hidden md:block">
                    <svg
                        version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="235.000000pt"
                        height="150.000000pt"
                        viewBox="0 0 235.000000 150.000000"
                        preserveAspectRatio="xMidYMid meet"
                        style={{ width: "60px", height: "60px" }}
                        className="transition-all scale-110 fill-sub logo-shadow"
                    >
                        <g
                            transform="translate(0.000000,150.000000) scale(0.100000,-0.100000)"
                            stroke="none"
                        >
                            <path
                                d="M2091 1433 c-68 -117 -210 -365 -416 -724 -109 -191 -206 -357 -216
-370 -18 -23 -19 -8 -19 559 l0 582 -85 0 -85 0 0 -735 0 -735 103 0 102 1
100 176 c55 97 151 264 214 372 63 108 157 270 209 361 52 91 146 255 210 365
63 110 117 203 119 208 2 4 -41 7 -96 7 l-100 0 -40 -67z"
                            />
                            <path
                                d="M70 1396 l0 -86 244 0 c134 0 267 -5 297 -10 67 -13 116 -45 154
-100 28 -40 30 -50 30 -131 0 -81 -2 -90 -30 -130 -17 -24 -53 -57 -79 -74
l-49 -30 -284 -3 -283 -3 0 -415 0 -414 90 0 90 0 0 330 0 330 193 0 c224 0
264 8 359 73 67 46 138 138 158 204 7 21 14 70 17 108 13 169 -80 325 -237
399 l-65 31 -302 3 -303 3 0 -85z"
                            />
                            <path
                                d="M1983 518 c-49 -80 -75 -138 -70 -150 3 -7 51 -89 105 -183 l99 -170
97 -3 c53 -1 96 0 96 4 0 7 -289 514 -300 527 -4 5 -16 -6 -27 -25z"
                            />
                            <path
                                d="M512 460 c2 -5 59 -108 128 -229 l125 -220 98 -1 c53 0 97 3 97 7 0
3 -21 43 -46 87 -91 158 -121 212 -163 289 l-42 77 -101 0 c-60 0 -98 -4 -96
-10z"
                            />
                        </g>
                    </svg>
                </Link>

                {/*    4.    */}
                <HeaderButton
                    name={"Projects"}
                    num={"3"}
                    activeSection={activeSection}
                />

                {/*    5.    */}
                <HeaderButton
                    name={"Contact"}
                    num={"4"}
                    activeSection={activeSection}
                />
            </nav>

            {/*       Mob Nav       */}
            <nav
                className={`fixed z-50 w-full bg-gray-900 shadow-lg md:hidden transition-all duration-500 ${
                    scrollYProgress > 8 ? "shadow-md" : ""
                } ${
                    !isMovingUp && scrollYProgress > 8 ? "-top-full" : "top-0"
                } `}
            >
                <div className="relative flex items-center justify-between w-full px-10">
                    <Link href={"#"} className="block md:hidden">
                        <svg
                            version="1.0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="235.000000pt"
                            height="150.000000pt"
                            viewBox="0 0 235.000000 150.000000"
                            preserveAspectRatio="xMidYMid meet"
                            style={{ width: "60px", height: "60px" }}
                            className="transition-all scale-110 fill-sub logo-shadow"
                        >
                            <g
                                transform="translate(0.000000,150.000000) scale(0.100000,-0.100000)"
                                stroke="none"
                            >
                                <path
                                    d="M2091 1433 c-68 -117 -210 -365 -416 -724 -109 -191 -206 -357 -216
-370 -18 -23 -19 -8 -19 559 l0 582 -85 0 -85 0 0 -735 0 -735 103 0 102 1
100 176 c55 97 151 264 214 372 63 108 157 270 209 361 52 91 146 255 210 365
63 110 117 203 119 208 2 4 -41 7 -96 7 l-100 0 -40 -67z"
                                />
                                <path
                                    d="M70 1396 l0 -86 244 0 c134 0 267 -5 297 -10 67 -13 116 -45 154
-100 28 -40 30 -50 30 -131 0 -81 -2 -90 -30 -130 -17 -24 -53 -57 -79 -74
l-49 -30 -284 -3 -283 -3 0 -415 0 -414 90 0 90 0 0 330 0 330 193 0 c224 0
264 8 359 73 67 46 138 138 158 204 7 21 14 70 17 108 13 169 -80 325 -237
399 l-65 31 -302 3 -303 3 0 -85z"
                                />
                                <path
                                    d="M1983 518 c-49 -80 -75 -138 -70 -150 3 -7 51 -89 105 -183 l99 -170
97 -3 c53 -1 96 0 96 4 0 7 -289 514 -300 527 -4 5 -16 -6 -27 -25z"
                                />
                                <path
                                    d="M512 460 c2 -5 59 -108 128 -229 l125 -220 98 -1 c53 0 97 3 97 7 0
3 -21 43 -46 87 -91 158 -121 212 -163 289 l-42 77 -101 0 c-60 0 -98 -4 -96
-10z"
                                />
                            </g>
                        </svg>
                    </Link>

                    <button
                        onClick={() => setShowMenu((e) => !e)}
                        className="text-2xl text-sub "
                    >
                        <BiMenu />
                    </button>
                    {/*     Drop Down Menu     */}
                    <div
                        className={`absolute top-full flex flex-col items-center justify-center w-full py-10 bg-gray-900  gap-y-10 transition-all z-30 ${
                            showMenu ? "left-0" : "-left-full"
                        } `}
                    >
                        {/*    1.    */}
                        <HeaderButton
                            name={"About"}
                            num={"1"}
                            activeSection={activeSection}
                        />

                        {/*    2.    */}
                        <HeaderButton
                            name={"Education"}
                            num={"2"}
                            activeSection={activeSection}
                        />

                        {/*    4.    */}
                        <HeaderButton
                            name={"Projects"}
                            num={"3"}
                            activeSection={activeSection}
                        />

                        {/*    5.    */}
                        <HeaderButton
                            name={"Contact"}
                            num={"4"}
                            activeSection={activeSection}
                        />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
