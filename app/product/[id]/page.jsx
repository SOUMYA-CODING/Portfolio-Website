"use client"

import { useParams } from "next/navigation"
import ProductData from "@/components/Data/product-data"
import TransitionEffect from "@/components/Animations/transition-effect"
import AnimatedText from "@/components/Animations/animated-text"

import Image from "next/image"
import Layout from "@/components/Layout/layout"

const ProductDetails = () => {
    const params = useParams()
    const project = ProductData.find((x) => x.id === params.id)

    if (!project) {
        return <div>Project not found</div>
    }

    return (
        <>
            <TransitionEffect />
            <div className={`w-full mb-16 flex flex-col items-center justify-center`}>
                <Layout className={`pt-10`}>
                    <div className={`px-16 xl:px-0`}>
                        <div className="flex items-center justify-center">
                            <Image
                                src={project.projectBanner || "/placeholder.svg"}
                                alt={project.projectBannerAlt}
                                className="w-full h-auto"
                            />
                        </div>

                        <h2 className={`font-bold text-6xl mt-24 mb-8 w-full text-left md:text-4xl md:my-12`}>Project Overview</h2>

                        <div className={`grid grid-cols-8 gap-16 sm:gap-8`}>
                            <div className={`col-span-5 lg:col-span-8`}>
                                {project.fullDescription.map((fullDescription, index) => (
                                    <p key={index} className={`font-medium my-4 text-justify`}>
                                        {fullDescription}
                                    </p>
                                ))}
                                <h2 className={`font-bold text-3xl mt-24 mb-8 w-full text-left md:my-12`}>Key Features</h2>
                                <div>
                                    <ul className="space-y-2 list-disc list-inside">
                                        {project.features.map((feature, index) => (
                                            <li key={index} className="pl-1 leading-relaxed">
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className={`col-span-3 lg:col-span-8 space-y-8`}>
                                <div className={`h-max relative border-2 border-solid border-black bg-white p-6`}>
                                    <div className={`absolute top-1 -right-3 -z-10 w-[100%] h-[102%] bg-black`} />
                                    <section className={`flex flex-col items-start justify-center`}>
                                        <p className={`font-bold text-3xl mb-5 w-full text-left`}>Tech Used</p>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {project.tech.map((tech, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>

                        <div className="mt-24">
                            <h2 className={`font-bold text-4xl mb-8 w-full text-left md:text-3xl`}>Mobile Application Screenshots</h2>
                            <div className="grid grid-cols-6 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                                {project.mobileImages.map((image, index) => (
                                    <div
                                        key={index}
                                        className="relative overflow-hidden rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <Image
                                            src={image || "/placeholder.svg"}
                                            alt={`${project.title} Mobile Screenshot ${index + 1}`}
                                            width={800} // adjust as needed
                                            height={0}
                                            className="w-full h-auto object-cover transition-transform duration-300"
                                        />
                                    </div>

                                ))}
                            </div>
                        </div>

                        <div className="mt-24">
                            <h2 className={`font-bold text-4xl mb-8 w-full text-left md:text-3xl`}>Web Application Screenshots</h2>
                            <div className="grid grid-cols-3 gap-6 lg:grid-cols-2 sm:grid-cols-1">
                                {project.webImages.map((image, index) => (
                                    <div
                                        key={index}
                                        className="aspect-video relative overflow-hidden rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <Image
                                            src={image || "/placeholder.svg"}
                                            alt={`${project.title} Web Screenshot ${index + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-300"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-24">
                            <h2 className={`font-bold text-4xl mb-8 w-full text-left md:text-3xl`}>Upcomming Features</h2>
                            <div className="grid grid-cols-3 gap-6 lg:grid-cols-2 sm:grid-cols-1">
                                <ul className="space-y-2 list-disc list-inside">
                                    {project.upcommingFeatures.map((feature, index) => (
                                        <li key={index} className="pl-1 leading-relaxed">
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
        </>
    )
}

export default ProductDetails
