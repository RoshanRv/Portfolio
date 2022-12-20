import React, { useEffect, useState } from "react"
import CodeText from "./CodeText"
import axios from "axios"

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

const Projects = () => {
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
                    .find((text: string) =>
                        text.includes("user-images.githubusercontent.com")
                    )
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
                console.log({ languages, img_url })
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
        <section className="flex flex-col items-center justify-center min-h-screen ">
            {/*        Title      */}

            <CodeText tag="h1" type="head">
                <h1 className="">
                    <span className="text-sec font-code ">03.</span>
                    Projects
                </h1>
            </CodeText>

            {/*       Projects       */}
            <div className="mt-28">
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
}

export default Projects

const ProjectCard = ({
    data,
    side,
}: {
    data: MyProjectProp
    side: "left" | "right"
}) => {
    return (
        <div
            className={`flex my-20 ${
                side == "left" ? "flex-row" : "flex-row-reverse"
            } `}
        >
            <div className="w-[30rem] h-[20rem]">
                <img
                    src={data.img_url}
                    alt={`${data.name}_img`}
                    className="w-full h-full"
                />
            </div>
            {/*     Right Side     */}
            <div
                className={`flex flex-col ${
                    side == "left" ? "text-right -ml-12" : "-mr-12 "
                }`}
            >
                {/*     Name     */}
                <CodeText tag="h3" type="sub">
                    <h1>{data.name}</h1>
                </CodeText>
                {/*      Desc    */}
                <div className="p-6 bg-black">
                    <CodeText tag="p" type="p" line="multi">
                        <p>{data.description}</p>
                    </CodeText>
                </div>
            </div>
        </div>
    )
}
