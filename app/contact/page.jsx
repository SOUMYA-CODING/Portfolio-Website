import AnimatedText from "@/components/Animations/animated-text"
import TransitionEffect from "@/components/Animations/transition-effect"
import ContactForm from "@/components/Contact/contact-form"
import Layout from "@/components/Layout/layout"

const Contact = () => {
    return (
        <>
            <TransitionEffect />
            <div className={`w-full mb-16 flex flex-col items-center justify-center`}>
                <Layout className={`pt-10`}>
                    <AnimatedText text="I'm excited to hear from you! Get in touch and let's bring your ideas to life!" className={`!text-6xl mb-16 lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-8`} />
                    <ContactForm />
                </Layout>
            </div>
        </>
    )
}

export default Contact