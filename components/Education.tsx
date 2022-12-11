import React from "react"
import CodeText from "./CodeText"

const Education = () => {
    return (
        <section
            id="education"
            style={{
                backgroundImage: `url('college.svg')`,
                backgroundSize: "35%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "50% 50%",
                fill: "red",
            }}
            className="flex justify-center items-center min-h-screen pb-8"
        >
            <div>
                <CodeText type="head" tag="h1">
                    <h1 className="font-cod">
                        <span className="text-sec font-code">02.</span>
                        Education
                    </h1>
                </CodeText>

                {/*   Timeline     */}
                <div className="mt-16">
                    {/*     Tagore     */}
                    <div className="border-l-4 border-l-sec p-8  flex flex-col gap-y-4  relative">
                        <EducationCard
                            name="Tagore Vidyalayam Matriculation Higher Seconday
                                School"
                            std="LKG - 10th"
                            year={"2008"}
                        />
                    </div>
                    {/*     TVS     */}
                    <div className="border-l-4 border-sec p-8 flex flex-col gap-y-4  relative">
                        <EducationCard
                            name="The TVS School"
                            std="11th - 12th"
                            year={"2019"}
                        />
                    </div>
                    {/*     KCET     */}
                    <div className="border-l-4 border-sec p-8 flex flex-col gap-y-4  relative">
                        <EducationCard
                            name="Kamaraj College of Engineering & Technology"
                            std="B.Tech. - Artificial Intelligence & Data Science"
                            year={"2021"}
                        />
                        <Year year="Present" end={true} />
                    </div>
                </div>
            </div>
        </section>
    )
}

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
                <h1>{name}</h1>
            </CodeText>
            <CodeText type="p" tag="p" line="single">
                <p className="">{std}</p>
            </CodeText>
        </>
    )
}

const Year = ({ year, end = false }: { year: string; end?: boolean }) => {
    return (
        <div
            className={`absolute  left-0  flex items-center gap-x-6
            ${
                end
                    ? "top-full -translate-y-1/2 -translate-x-[92%] "
                    : "top-0 -translate-y-1/2 -translate-x-[90%]"
            }
            `}
        >
            <h1 className="text-white text-2xl font-semibold">{year}</h1>
            <div className="rounded-full w-6 h-6 bg-code border-2 border-sec "></div>
        </div>
    )
}
