import AboutMe from "@/components/About/about-me"
import Experience from "@/components/About/experience"
import Skills from "@/components/About/skills"
import AnimatedText from "@/components/Animations/animated-text"
import TransitionEffect from "@/components/Animations/transition-effect"
import Layout from "@/components/Layout/layout"

const About = () => {
    return (
        <>
            <TransitionEffect />
            <div className={`flex w-full flex-col items-center justify-center`}>
                <Layout className={`pt-10`}>
                    <AnimatedText text="Crafting top-notch experiences with every line of code!" className={`!text-6xl mb-16 lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-8`} />
                    <AboutMe />
                    <Skills />
                    <Experience />
                </Layout>
            </div>
        </>
    )
}

export default About