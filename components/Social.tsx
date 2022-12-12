import React from "react"
import { motion } from "framer-motion"
import { TbBrandGithub, TbBrandTwitter } from "react-icons/tb"
import { HiOutlineMail } from "react-icons/hi"
import { FiLinkedin } from "react-icons/fi"
import useScroll from "../hooks/useScroll"

const Social = () => {
    const { scrollYProgress } = useScroll()
    return (
        <motion.div
            style={{ bottom: `calc(${scrollYProgress}% + 5rem)` }}
            className="fixed  left-6 text-[1.6rem] transition-all duration-500"
        >
            <div className="h-screen w-[1px] bg-gray-800 absolute -translate-x-1/2 left-1/2 -top-10 -translate-y-full"></div>
            <div className="flex flex-col gap-y-8">
                <button className="text-sub/70 hover:text-sec hover:-translate-y-2 duration-500 transition-all">
                    <TbBrandGithub />
                </button>
                <button className="text-sub/70 hover:text-sec hover:-translate-y-2 duration-500 transition-all">
                    <FiLinkedin />
                </button>
                <button className="text-sub/70 hover:text-sec hover:-translate-y-2 duration-500 transition-all">
                    <TbBrandTwitter />
                </button>
                <button className="text-sub/70 hover:text-sec hover:-translate-y-2 duration-500 transition-all">
                    <HiOutlineMail />
                </button>
            </div>
        </motion.div>
    )
}

export default Social
