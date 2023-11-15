"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Logo from "./logo";
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter } from "lucide-react";

const CustomLink = ({ href, title, className = "" }) => {
    const pathName = usePathname();
    return (
        <Link href={href} className={`${className} relative group font-semibold`}>
            {title}
            <span className={`h-[3px] inline-block w-0 bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${pathName === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
    const pathName = usePathname();
    const router = useRouter();

    const handleClick = () => {
        toggle();
        router.push(href)
    }

    return (
        <button href={href} className={`${className} relative group font-semibold text-white my-2`} onClick={handleClick}>
            {title}
            <span className={`h-[3px] inline-block w-0 bg-white absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${pathName === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
        </button>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <header className={`w-full px-32 py-2 z-10 font-medium flex items-center justify-between relative lg:px-16 md:px-12 sm:px-8`}>
                <Logo />

                <div className={`w-auto flex items-center justify-between lg:hidden`}>
                    <nav className={`flex items-center justify-center`}>
                        <CustomLink href="/" title="Home" className='mr-4' />
                        <CustomLink href="/about" title="About Me" className='mx-4' />
                        <CustomLink href="/project" title="Projects" className='mx-4' />
                        <CustomLink href="/contact" title="Contact" className='ml-4' />
                    </nav>
                </div>

                {
                    isOpen ?
                        <motion.div className={`min-w-[70vw] bg-black flex flex-col items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 rounded-lg backdrop-blur-md py-32`} initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }} animate={{ scale: 1, opacity: 1 }}>
                            <nav className={`flex flex-col items-center justify-center`}>
                                <CustomMobileLink href="/" title="Home" className='' toggle={handleClick} />
                                <CustomMobileLink href="/about" title="About Me" className='' toggle={handleClick} />
                                <CustomMobileLink href="/project" title="Projects" className='' toggle={handleClick} />
                                <CustomMobileLink href="/contact" title="Contact" className='' toggle={handleClick} />
                                <div className={`flex items-center justify-center mt-3`}>
                                    <Link href={`https://github.com/SOUMYA-CODING`} target='_blank' className={`text-white mx-2`}><Github /></Link>
                                    <Link href={`https://www.linkedin.com/in/soumya-prakash-sahu-68886921b/`} target='_blank' className={`text-white mx-2`}><Linkedin /></Link>
                                    <Link href={`https://twitter.com/soumyap24717773`} target='_blank' className={`text-white mx-2`}><Twitter /></Link>
                                </div>
                            </nav>
                        </motion.div>
                        : null
                }

                <span className={`flex-col justify-center items-center hidden lg:flex`} onClick={handleClick}>
                    <span className={`bg-black transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                    <span className={`bg-black transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`bg-black transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                </span>
            </header>
        </>
    )
}

export default Navbar