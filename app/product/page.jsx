/* eslint-disable @next/next/no-img-element */
import AnimatedText from '@/components/Animations/animated-text'
import TransitionEffect from '@/components/Animations/transition-effect'
import ProductData from '@/components/Data/product-data'
import Layout from '@/components/Layout/layout'
import Button from '@/components/ui/button'
import Image from 'next/image'

const FromLTR = ({ id, projectBanner, projectBannerAlt, type, title, shortDescription }) => (
    <div className="grid grid-cols-8 gap-16 sm:gap-8">
        <div className="col-span-4 lg:col-span-8 md:order-1">
            <div className="h-max relative border-2 border-solid border-black bg-white p-6">
                <div className="absolute top-1 -right-3 -z-10 w-full h-[102%] bg-black" />
                <Image
                    src={projectBanner}
                    alt={projectBannerAlt}
                    className="h-auto"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
        </div>
        <div className="col-span-4 lg:col-span-8 md:order-2">
            <section className="flex flex-col h-full items-start justify-center p-5 md:p-0">
                <p className="font-bold text-black text-center py-1.5 uppercase">{type}</p>
                <p className="font-extrabold text-3xl my-4">{title}</p>
                <p>{shortDescription}</p>
                <Button title="View" href={`/product/${id}`} className="mt-5" />
            </section>
        </div>
    </div>
)

const ProjectList = ({ project }) => {
    return project.id % 2 !== 0 ? <FromLTR {...project} /> : null
}

const Product = () => (
    <>
        <TransitionEffect />
        <div className="w-full mb-16 flex flex-col items-center justify-center">
            <Layout className="pt-10">
                <AnimatedText
                    text="A collection of ideas turned into reality — thoughtfully designed, passionately developed."
                    className="!text-6xl mb-16 lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-8"
                />
                <div className="px-28 xl:px-0 space-y-10">
                    {ProductData.map(project => (
                        <ProjectList key={project.id} project={project} />
                    ))}
                </div>
            </Layout>
        </div>
    </>
)

export default Product
