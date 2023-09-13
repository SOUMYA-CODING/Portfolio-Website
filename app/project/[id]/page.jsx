"use client";

import { useParams } from "next/navigation"
import ProjectData from "@/components/Data/project-data"
import TransitionEffect from "@/components/Animations/transition-effect"
import AnimatedText from "@/components/Animations/animated-text"

import Image from "next/image"
import Button from "@/components/ui/button"
import Layout from "@/components/Layout/layout"
import Link from "next/link";
import { Github, Youtube, YoutubeIcon } from "lucide-react";

const ProjectDetails = () => {
    const params = useParams()
    const project = ProjectData.find((x) => x.id === params.id)

    const checkYoutubeUrl = () => {
        if (project.isThereYoutubeUrl === "yes") {
            return (
                <Button title="Youtube" href={project.youTubeUrl} />
            )
        } else {
            return null
        }
    }

    return (
        <>
            <TransitionEffect />
            <div className={`w-full mb-16 flex flex-col items-center justify-center`}>
                <Layout className={`pt-10`}>
                    <AnimatedText text={project.title} className={`!text-6xl mb-16 lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-8`} />
                    <div className={`px-16 xl:px-0`}>
                        <div className={`mb-16 w-full h-auto flex flex-wrap items-center justify-center md:items-start md:justify-start`}>
                            {
                                project.tech.map((tech) => (
                                    <span key={tech} className={`mx-4 my-1 p-1 cursor-pointer text-primary font-semibold text-xl`}>#{tech}</span>
                                ))
                            }
                        </div>
                        <Image src={project.projectBanner} alt={project.projectBannerAlt} />
                        <h2 className={`font-bold text-6xl mt-24 mb-8 w-full text-left md:text-4xl md:my-12`}>
                            Overview
                        </h2>
                        <div className={`grid grid-cols-8 gap-16 sm:gap-8`}>
                            <div className={`col-span-5 lg:col-span-8`}>
                                {
                                    project.fullDescription.map((fullDescription) => (
                                        <p key={fullDescription} className={`font-medium my-4 text-justify`}>
                                            {fullDescription}
                                        </p>
                                    ))
                                }
                            </div>
                            <div className={`col-span-3 lg:col-span-8`}>
                                <div className={`h-max relative border-2 border-solid border-black bg-white p-6`}>
                                    <div className={`absolute top-1 -right-3 -z-10 w-[100%] h-[102%] bg-black`} />
                                    <section className={`flex flex-col items-start justify-center`}>
                                        <p className={`font-bold text-3xl mb-5 w-full text-left`}>Key Features</p>
                                        <ul>
                                            {
                                                project.features.map((features) => (
                                                    <li key={features} className={`font-medium my-1`}>- &nbsp; {features}</li>
                                                ))
                                            }
                                        </ul>
                                    </section>
                                </div>
                            </div>

                        </div>
                        <div className={`w-full flex items-start justify-start md:mt-16 md:flex-col`}>
                            <span className={'font-bold '}>
                                Links : &nbsp;
                            </span>
                            <Link className={`mx-2 flex items-center justify-center md:mx-0 font-medium underline `} href="https://www.linkedin.com/in/soumya-prakash-sahu-68886921b/" target={`_blank`}>
                                <Github className={`mx-2 text-black`} />
                                Get the project from Github
                            </Link>
                            <Link className={`mx-2 flex items-center justify-center md:mx-0 font-medium underline `} href="https://www.linkedin.com/in/soumya-prakash-sahu-68886921b/" target={`_blank`}>
                                <Youtube className={`mx-2 text-red-700`} />
                                Watch on Youtube
                            </Link>
                        </div>
                    </div>
                </Layout>
            </div>
        </>
    )
}

export default ProjectDetails