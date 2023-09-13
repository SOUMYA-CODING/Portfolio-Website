import Link from 'next/link'

const Button = ({ title, href, target = "", icon = "", className = "" }) => {
    return (
        <Link href={href} target={target} className={`relative  -top-1 -left-1 bg-primary py-2.5 px-6 text-lg font-semibold text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-primary before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0 md:p-2 md:px-4 md:text-base ${className}`}>
            {title}
            {icon}
        </Link>
    )
}

export default Button