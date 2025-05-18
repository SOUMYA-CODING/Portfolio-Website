"use client";

import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from '../Icons/liIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className={`my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]`}>
            <LiIcon reference={ref} />
            <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
                <h3 className={`capitalize font-bold text-2xl sm:text-xl xs:text-lg`}>{position} &nbsp; <a href={companyLink} target={`_blank`} className={`text-primary capitalize `}>@{company}</a></h3>
                <span className={`capitalize font-medium text-black/75 xs:text-sm`}>
                    {time} | {address}
                </span>
                <p className={`font-medium text-justify w-full md:text-sm`}>
                    {work}
                </p>
            </motion.div>
        </li>
    );
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

    return (
        <>
            <div className={`my-40`}>
                <h2 className={`font-bold text-6xl mt-64 w-full text-center mb-24 md:text-5xl md:mt-32`}>
                    Experiences
                </h2>
                <div className={`w-[80%] mx-auto relative lg:w-[90%] md:w-full`}>
                    <motion.div style={{ scaleY: scrollYProgress }} ref={ref} className={`absolute left-9 top-0 w-[4px] h-full bg-black origin-top md:w-[2px] md:left-[30px] xs:left-[20px]`} />
                    <ul className={`w-full flex flex-col items-start justify-between ml-4 xs:ml-2`}>
                        <Details
                            position="Senior Mobile Developer"
                            company="Easy Technologies Pvt. Ltd"
                            companyLink="http://easytechnologies.co.in/"
                            time="July 2023 - Present"
                            address="(Onsite) Bhubaneswar, Odisha"
                            work="Experienced mobile and web application developer specializing in creating seamless and user-friendly experiences. Proficient in the Flutter Framework, I utilize GetX and BloC for efficient state management and employ MVVM and MVC design patterns to build robust and scalable mobile applications. My web development expertise includes crafting streamlined interfaces with Next.js, Tailwind CSS, and shadcn/ui, as well as creating microservice REST APIs using the Spring Framework. I have successfully integrated payment gateways like Razorpay and IDBI, enhancing the payment processing capabilities of applications. My ability to write optimized code has resulted in a 20% improvement in application performance. By implementing a component-based development approach, I facilitate easier code maintenance and reduce development time. My experience spans multiple domains, including POS, HRMS, CMS, E-Commerce, Classifieds, and Tracking applications. Overall, I prioritize both functionality and performance in my development work, ensuring high-quality outcomes." 
                        />

                        <Details
                            position="Android Developer Intern"
                            company="Argus News"
                            companyLink="https://argusnews.in/"
                            time="October 2022 - July 2023"
                            address="(Onsite) Bhubaneswar, Odisha"
                            work="I have developed and seamlessly integrated essential functionalities such as state-wise filters, search functionality, text-to-speech, and Google Ads into various applications. Through regular maintenance and optimization tasks on Java and Kotlin codebases, I achieved an 11% reduction in app size and boosted user engagement by 25%. My extensive proficiency includes Retrofit API calling, Django Rest Framework, Firebase integration, and JWT token-based authentication, along with hands-on experience working on the SaaS model. Additionally, I have effectively reduced dependencies and optimized app performance, significantly enhancing user satisfaction."
                        />
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Experience