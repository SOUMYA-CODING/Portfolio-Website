import Link from 'next/link'

const Logo = () => {
    return (
        <>
            <div className={`flex items-center justify-center mt-2`}>
                <Link href="/" className={`h-14 text-black flex items-center justify-center rounded-full text-3xl font-extrabold`}>
                    <span className={`text-primary`}>{`S`}</span>
                    <span>{`OUMYA.`}</span>
                </Link>
            </div>
        </>
    )
}

export default Logo