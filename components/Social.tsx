import React from "react"
import { motion } from "framer-motion"
import { TbBrandGithub, TbBrandTwitter } from "react-icons/tb"
import { HiOutlineMail } from "react-icons/hi"
import { FiLinkedin } from "react-icons/fi"
import { ImProfile } from "react-icons/im"
import useScroll from "../hooks/useScroll"
import { container } from "./HomeHero"

const Social = () => {
    const { scrollYProgress } = useScroll()
    return (
        <motion.div
            variants={container}
            initial={"hidden"}
            animate={"show"}
            style={{ bottom: `calc(${scrollYProgress}% + 5rem)` }}
            className="fixed  left-6 text-lg lg:text-[1.6rem] transition-all duration-500 hidden md:block "
        >
            <div className="h-screen w-[1px] bg-gray-800 absolute -translate-x-1/2 left-1/2 -top-10 -translate-y-full"></div>
            <div className="flex flex-col gap-y-8">
                <a
                    href={"https://github.com/RoshanRv"}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="transition-all duration-500 text-sub/70 hover:text-sec hover:-translate-y-2"
                >
                    <TbBrandGithub />
                </a>
                <a
                    href={"https://www.linkedin.com/in/roshan-kumar--/"}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="transition-all duration-500 text-sub/70 hover:text-sec hover:-translate-y-2"
                >
                    <FiLinkedin />
                </a>
                <a
                    href={"https://twitter.com/RoshanK18328680"}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="transition-all duration-500 text-sub/70 hover:text-sec hover:-translate-y-2"
                >
                    <TbBrandTwitter />
                </a>
                <a
                    href={"mailto:nkroshankumar@gmail.com"}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="transition-all duration-500 text-sub/70 hover:text-sec hover:-translate-y-2"
                >
                    <HiOutlineMail />
                </a>
                {/*       Resume   */}
                <a
                    href={
                        "https://drive.google.com/file/d/17qKn0MhnzwkKTorr6CKfXJ3-BozsJ7K4/view?usp=sharing"
                    }
                    rel="noopener noreferrer"
                    target="_blank"
                    className="transition-all duration-500 text-sub/70 hover:text-sec hover:-translate-y-2"
                >
                    <ImProfile />
                </a>
            </div>
        </motion.div>
    )
}

export default Social
