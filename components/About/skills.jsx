import { Braces, Database, Palette, GitBranch, Code, CurlyBraces } from 'lucide-react'

const Skill = ({ title, skillList, skillIcon }) => {
    return (
        <div className={`col-span-2 relative w-full h-64 border-2 border-solid border-black bg-white p-8 md:w-[65%] xs:w-full xl:col-span-4 md:col-span-8 cursor-pointer`}>
            <div className={`absolute top-1 -right-3 -z-10 w-[100%] h-[103%] bg-black`} />
            {skillIcon}
            <p className={`font-bold pt-7 text-3xl`}>
                {title}
            </p>
            <p className={`font-medium pt-3 text-1xl`}>
                {skillList}
            </p>
        </div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className={`font-bold text-6xl mt-64 w-full text-center mb-24 md:text-5xl md:mt-32`}>
                Skills
            </h2>
            <div className={`grid w-full grid-cols-8 gap-10 md:justify-center md:items-center`}>
                <Skill skillIcon={<Code className={`h-8 w-8`} />} title='Language' skillList='Dart, Typescript, Python' />
                <Skill skillIcon={<CurlyBraces className={`h-8 w-8`} />} title='Framwork' skillList='Flutter, Next.js, Django' />
                <Skill skillIcon={<Palette className={`h-8 w-8`} />} title='Design' skillList='Adobe XD, Figma' />
                <Skill skillIcon={<GitBranch className={`h-8 w-8`} />} title='Others' skillList='Git, Linux' />
            </div>
        </>
    )
}

export default Skills