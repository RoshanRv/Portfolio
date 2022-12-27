import { motion } from "framer-motion"
import React, { ForwardedRef, forwardRef, LegacyRef, useRef } from "react"
import { HomeProp } from "../pages"
import CodeText from "./CodeText"
import { container, item } from "./HomeHero"

const Education = forwardRef(function Education(
    _prop,
    ref: ForwardedRef<HTMLElement>
) {
    return (
        <section
            ref={ref}
            id="education"
            style={{
                backgroundImage: `url('college.svg')`,
                backgroundSize: "35%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 50%",
                fill: "red",
            }}
            className="flex items-center justify-center min-h-screen px-4 pb-8"
        >
            <motion.div
                variants={container}
                initial={"hidden"}
                whileInView={"show"}
            >
                <motion.div variants={item} className="">
                    <CodeText type="head" tag="h1">
                        <h1 className="">
                            <span className="text-sec font-code">02.</span>
                            Education
                        </h1>
                    </CodeText>
                </motion.div>

                {/*   Timeline     */}
                <div className="mt-8 ml-16 md:ml-0 2xl:mt-16 md:mt-10">
                    {/*     Tagore     */}
                    <motion.div
                        variants={item}
                        className="relative flex flex-col p-4 border-l-2 md:border-l-4 border-l-sec 2xl:p-8 md:p-6 gap-y-2 2xl:gap-y-4"
                    >
                        <EducationCard
                            name="Tagore Vidyalayam Matriculation Higher Seconday
                                School"
                            std="LKG - 10th"
                            year={"2008"}
                        />
                    </motion.div>
                    {/*     TVS     */}
                    <motion.div
                        variants={item}
                        className="relative flex flex-col p-4 border-l-2 md:border-l-4 border-sec 2xl:p-8 md:p-6 gap-y-2 2xl:gap-y-4"
                    >
                        <EducationCard
                            name="The TVS School"
                            std="11th - 12th"
                            year={"2019"}
                        />
                    </motion.div>
                    {/*     KCET     */}
                    <motion.div
                        variants={item}
                        className="relative flex flex-col p-4 border-l-2 md:border-l-4 border-sec 2xl:p-8 md:p-6 gap-y-2 2xl:gap-y-4"
                    >
                        <EducationCard
                            name="Kamaraj College of Engineering & Technology"
                            std="B.Tech. - Artificial Intelligence & Data Science"
                            year={"2021"}
                        />
                        <Year year="Present" end={true} />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
})

export default Education

const EducationCard = ({
    name,
    std,
    year,
}: {
    name: string
    std: string
    year: string
}) => {
    return (
        <>
            <Year year={year} />

            <CodeText type="sub" tag="h3">
                <h1 className="text-lg 2xl:text-4xl md:text-3xl">{name}</h1>
            </CodeText>
            <CodeText type="p" tag="p" line="single">
                <p className="text-sm md:text-base lg:text-lg">{std}</p>
            </CodeText>
        </>
    )
}

const Year = ({ year, end = false }: { year: string; end?: boolean }) => {
    return (
        <div
            className={`absolute  left-0  flex items-center gap-x-2 md:gap-x-6
            ${
                end
                    ? "top-full -translate-y-1/2 -translate-x-[92%] "
                    : "top-0 -translate-y-1/2 -translate-x-[90%]"
            }
            `}
        >
            <h1 className="text-sm font-semibold text-white md:text-2xl">
                {year}
            </h1>
            <div className="w-4 h-4 border rounded-full md:border-2 md:w-6 md:h-6 bg-code border-sec "></div>
        </div>
    )
}
