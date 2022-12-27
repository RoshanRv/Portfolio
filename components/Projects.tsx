import React, { ForwardedRef, forwardRef, useEffect, useState } from "react"
import CodeText from "./CodeText"
import axios from "axios"
import { TbBrandGithub } from "react-icons/tb"
import { FiExternalLink } from "react-icons/fi"
import { motion, Variants } from "framer-motion"
import { item } from "./HomeHero"

interface OwnerProp {
    login: string
    id: number
}
interface StarredProjectProp {
    id: number
    name: string
    owner: OwnerProp
    html_url: string
    description: string
    languages_url: string
    homepage: string
    topics: string[]
}

interface MyProjectProp extends StarredProjectProp {
    img_url: string
    languages: object
}

type StarredProjects = StarredProjectProp[]
type ProjectsProps = MyProjectProp[]

const Projects = forwardRef((_prop, ref: ForwardedRef<HTMLElement>) => {
    const [projects, setProjects] = useState([] as ProjectsProps)

    //         ***** . Get Project Lang     *****
    const getProjectLanguages = async (
        project: StarredProjectProp
    ): Promise<object | undefined> => {
        try {
            return (await axios.get(project.languages_url)).data
        } catch (e) {
            console.log(e)
        }
    }

    //              *** .  Get Project Img      ****
    const getProjectImage = async (project: StarredProjectProp) => {
        try {
            const readme = await axios.get(
                `https://raw.githubusercontent.com/RoshanRv/${project.name}/main/README.md`
            )
            const imgUrl = JSON.stringify(
                readme.data
                    .split(" ")
                    .find((text: string) => text.includes("image"))
            )
                .split(/[()]/)
                .find((word) => word.includes("http"))

            return imgUrl
        } catch (e) {
            console.log(e)
        }
    }

    const getProjects = async () => {
        try {
            const starredProjects = await axios.get<StarredProjects>(
                "https://api.github.com/users/RoshanRv/starred"
            )

            const myProjects = starredProjects.data.filter(
                (projects) => projects.owner.login === "RoshanRv"
            )

            myProjects.map(async (project, i) => {
                const languages = await getProjectLanguages(project)
                const img_url = await getProjectImage(project)
                const projectData = { ...project, languages, img_url }
                myProjects[i] = projectData
            })

            setProjects(myProjects as ProjectsProps)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getProjects()
    }, [])

    return (
        <section
            ref={ref}
            className="flex flex-col items-center justify-center min-h-screen px-3 "
            id="projects"
        >
            {/*        Title      */}
            <motion.div
                variants={item}
                initial={"hidden"}
                whileInView={"show"}
                className=""
            >
                <CodeText tag="h1" type="head">
                    <h1 className="">
                        <span className="text-sec font-code ">03.</span>
                        Projects
                    </h1>
                </CodeText>
            </motion.div>

            {/*       Projects       */}
            <div className="mt-0 md:mt-4">
                {projects.map((project, i) => (
                    <ProjectCard
                        key={i}
                        data={project}
                        side={i % 2 == 0 ? "left" : "right"}
                    />
                ))}
            </div>
        </section>
    )
})

export default Projects

//      animation

const projectAni: Variants = {
    hiddenLeft: {
        x: "-100%",
    },
    hiddenRight: {
        x: "100%",
    },
    show: {
        x: 0,
        transition: {
            duration: 0.2,
            damping: 15,
            bounce: 0.7,
            type: "spring",
        },
    },
}

const ProjectCard = ({
    data,
    side,
}: {
    data: MyProjectProp
    side: "left" | "right"
}) => {
    return (
        <motion.div
            variants={projectAni}
            initial={side == "left" ? "hiddenLeft" : "hiddenRight"}
            whileInView={"show"}
            className={`flex flex-col gap-y-4 my-32 justify-center
             ${side == "left" ? "md:flex-row" : "md:flex-row-reverse"} `}
        >
            {/*      Img        */}
            <div className="2xl:w-[40rem] 2xl:h-[25rem] md:w-[35rem] md:[h-20rem] relative peer">
                <a
                    href={data.homepage}
                    rel="noopener noreferrer"
                    target="_blank"
                    className=""
                >
                    <img
                        src={data.img_url}
                        alt={`${data.name}_img`}
                        className="w-full h-full transition-all origin-center border-2 rounded-lg shadow-xl md:border-4 border-sec shadow-black/80 hover:scale-110"
                    />
                </a>
            </div>
            {/*    Name and Desc     */}
            <div
                className={`flex flex-col gap-y-6 z-30  md:max-w-[40%] w-full transition-all  duration-500 ${
                    side == "left"
                        ? "text-right md:-ml-12 md:peer-hover:-translate-x-12 "
                        : "md:-mr-12 md:peer-hover:translate-x-12"
                }`}
            >
                {/*     Name  for tab/lap   */}
                <div className="hidden md:block">
                    <CodeText tag="h3" type="sub">
                        <h1>{data.name}</h1>
                    </CodeText>
                </div>

                {/*      Desc    */}

                <div className="p-6 bg-black border-2 shadow-lg shadow-black/60 border-sec/70">
                    {/*     Name  mob   */}
                    <div className="block mb-2 md:hidden">
                        <CodeText tag="h3" type="sub">
                            <h1>{data.name}</h1>
                        </CodeText>
                    </div>
                    <CodeText tag="p" type="p" line="multi">
                        <p>{data.description}</p>
                        {/*     topics     */}
                        <div className="flex flex-wrap w-full gap-4">
                            {data.topics.map((topic) => (
                                <p className="px-2 py-1 text-sm transition-all rounded-full md:text-sm bg-code/70 hover:text-white">
                                    {topic}
                                </p>
                            ))}
                        </div>
                    </CodeText>
                </div>
                {/*   Links   */}
                <div
                    className={`flex  gap-x-10 ${
                        side == "left"
                            ? "justify-end"
                            : "justify-end flex-row-reverse "
                    }`}
                >
                    {/*   Demo Link   */}
                    <a
                        href={data.homepage}
                        className="p-3 text-2xl transition-all duration-500 border-2 hover:text-code hover:scale-90 text-sub border-sec rounded-xl"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <FiExternalLink className="" />
                    </a>
                    {/*    Github Link  */}
                    <a
                        href={data.html_url}
                        className="p-3 text-2xl transition-all duration-500 border-2 hover:text-code hover:scale-90 text-sub border-sec rounded-xl"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <TbBrandGithub className="" />
                    </a>
                </div>
            </div>
            {/* </div> */}
        </motion.div>
    )
}
