import { Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Icons = () => {
    return (
        <>
            <div className={`fixed left-16 bottom-0 flex flex-col items-center justify-center xl:hidden`}>
                <Link href={`https://github.com/SOUMYA-CODING`} target='_blank' className={`p-1 my-2 rounded`}><Github className={`h-7 w-7`} /></Link>
                <Link href={`https://www.linkedin.com/in/soumya-prakash-sahu-68886921b/`} target='_blank' className={`p-1 my-2 rounded`}><Linkedin className={`h-7 w-7`} /></Link>
                <Link href={`https://twitter.com/soumyap24717773`} target='_blank' className={`p-1 my-2 rounded`}><Twitter className={`h-7 w-7`} /></Link>
                <span className={`w-[2px] h-[180px] bg-black rounded`}></span>
            </div>
        </>
    )
}

export default Icons