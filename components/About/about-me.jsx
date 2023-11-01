"use client";

import React, { useRef, useEffect } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Image from 'next/image';
import ProfilePic from '../../public/assets/profile_image.png'
import Button from '../ui/button';
import { ExternalLink } from 'lucide-react';

const AnimatedNumber = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])


    return <span ref={ref}></span>
}

const AboutMe = () => {
    return (
        <>
            <div className={`px-28 grid w-full grid-cols-8 gap-16 sm:gap-8 xl:px-0`}>
                <div className={`col-span-4 lg:col-span-8`}>
                    <div>
                        <div className={`w-full flex flex-col items-center justify-center`}>
                            <div className={`h-max relative w-full border-2 border-solid border-black bg-white p-8 md:w-[65%] xs:w-full xl:col-span-4 md:col-span-8 cursor-pointer`}>
                                <div className={`absolute top-2 -right-4 -z-10 w-[100%] h-[102%] bg-black`} />
                                <Image src={ProfilePic} alt='soumya' className={`h-auto`} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            </div>
                        </div>
                    </div>
                    <div className={`mt-12 flex flex-row items-center justify-between`}>
                        <div className={`flex flex-col items-center justify-center`}>
                            <span className={`inline-block text-5xl font-bold sm:text-4xl xs:text-xl`}>
                                <AnimatedNumber value={1} />+
                            </span>
                            <h2 className={`text-xl font-medium capitalize text-black/75 text-center md:text-lg sm:text-base xs:text-sm`}>
                                Years of experience
                            </h2>
                        </div>
                        <div className={`flex flex-col items-center justify-center`}>
                            <span className={`inline-block text-5xl font-bold sm:text-4xl xs:text-xl`}>
                                <AnimatedNumber value={6} />+
                            </span>
                            <h2 className={`text-xl font-medium capitalize text-black/75 text-center md:text-lg sm:text-base xs:text-sm`}>
                                Project Completed
                            </h2>
                        </div>
                        <div className={`flex flex-col items-center justify-center`}>
                            <span className={`inline-block text-5xl font-bold sm:text-4xl xs:text-xl`}>
                                <AnimatedNumber value={3} />+
                            </span>
                            <h2 className={`text-xl font-medium capitalize text-black/75 text-center md:text-lg sm:text-base xs:text-sm`}>
                                satisfied Clients
                            </h2>
                        </div>
                    </div>
                </div>

                {/* ======== About Description ======== */}
                <div className={`col-span-4 lg:col-span-8`}>
                    <div>
                        <h2 className={`mb-4 text-3xl font-bold uppercase text-dark/75 dark:text-light/75`}>About Me.</h2>
                        <p className={`font-medium text-justify`}>
                            Hello there! Im Soumya Prakash Sahu, a passionate and dedicated 
                            <span className={`custom-text`}>Application & Software Developer</span>. 
                            My main focus these days is on building accessible and inclusive products 
                            that provide a <span className={`custom-text`}>seamless user experience</span>.
                        </p>
                        <p className={`font-medium my-4 text-justify`}>
                            In my work, I prioritize user-centered design and collaboration with clients to ensure that their
                            vision is fully realized in the final product. I am passionate about staying up-to-date with the
                            latest developments in the tech industry. As a developer, I have a deep passion for adding clarity to complicated concepts
                            by developing them. My expertise lies in <span className={`custom-text`}>App Development and Web Development</span>.
                        </p>
                        <p className={`font-medium my-4 text-justify`}>
                            Whether its building a <span className={`custom-text`}>new mobile app from scratch or customzing existing projects</span>,
                            I am committed to delivering exceptional results with every project I work on.
                            Overall, my goal is to use my <span className={`custom-text`}>skills and knowledge to create innovative, high-quality
                            digital products</span> that make a positive impact on users lives.
                        </p>
                    </div>
                    <div className={`mt-9 flex space-x-3`}>
                        <Button title={`Hire Me`} href={`/contact`} />
                        <Button title={`Resume`} icon={<ExternalLink className={`ml-3`} />} className={`!flex !items-center !justify-center !bg-white !text-black before:!border-white`} target='_blank' href={`https://drive.google.com/file/d/1kEQyLAzS4plTsb2a6g87CgHHq2P6bNzA/view?usp=sharing`} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutMe