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
                            position="Mobile Application Developer"
                            company="Easy Technologies Pvt. Ltd"
                            companyLink="http://easytechnologies.co.in/"
                            time="July 2023 - Present"
                            address="(Onsite) Bhubaneswar, Odisha"
                            work="Designed and developed multiple mobile applications using Flutter with Getx as state management. Using MVVM, MVC pattern with clean architecture.
                            Created web applications for admin site purposes with Next.js, Tailwind CSS, and shadcn/ui. Used Firebase as backend database
                            Developed and worked on POS, HRMS, and CMS applications. Implement Razorpay payment system in my applications.
                            Written optimized code which increase the app performance by 20%. Made the app component-based and reusable code." 
                        />

                        <Details
                            position="Android Developer Intern"
                            company="Argus News"
                            companyLink="https://argusnews.in/"
                            time="October 2022 - July 2023"
                            address="(Onsite) Bhubaneswar, Odisha"
                            work="Developed & integrated Odisha state filter feature, search 
                            functionality, text-to-speech feature, and Google Ads Mob. Through 
                            optimization techniques, I managed to reduce the app size by 10% 
                            and witnessed a remarkable 25% increase in user engagement. 
                            Additionally, I gained valuable experience in Django REST 
                            Framework, Retrofit API calling, Firebase integration, 
                            JWT Token-based authentication."
                        />
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Experience