import AnimatedText from "@/components/Animations/animated-text"
import TransitionEffect from "@/components/Animations/transition-effect"
import Layout from "@/components/Layout/layout"
import Button from "@/components/ui/button"
import ProfilePic from "../public/assets/profile_image.png"
import Image from "next/image"

const Home = () => {
    return (
        <>
            <TransitionEffect />
            <div className={`flex items-center text-black w-full min-h-screen`}>
                <Layout className={`pt-0 md:pt-16 sm:pt-8`}>
                    <div className={`px-40 flex flex-col items-start justify-start w-full xl:px-0`}>
                        <AnimatedText text="Hello! there I'am," className={`!text-3xl !text-left lg:!text-start sm:!text-xl`} />
                        <AnimatedText text="Soumya Prakash Sahu" className={`!text-5xl !text-left xl:!text-5xl lg:!text-start md:!text-4xl sm:!text-2xl !uppercase !font-extrabold`} />
                        <AnimatedText text="- App & Software Developer" className={`!text-5xl !text-left xl:!text-5xl lg:!text-start md:!text-5xl sm:!text-2xl !uppercase !font-extrabold !text-blue-700`} />
                        <p className={`my-4 text-xl font-medium md:text-base`}>
                            As a skilled developer specializing in building exceptional digital experiences,
                            I am dedicated to turning ideas into innovative app and web applications,
                            with the ultimate goal of creating user-friendly applications.
                        </p>
                        <Button title={`About Me`} className={`mt-4`} href={`/about`} />
                    </div>
                </Layout>

            </div>
        </>
    )
}

export default Home