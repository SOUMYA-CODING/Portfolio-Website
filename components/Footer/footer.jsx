import Link from "next/link"
import Layout from "../Layout/layout"

const Footer = () => {
    return (
        <>
            <footer className={`w-full border-t-2 border-solid border-black font-medium text-lg sm:text-base`}>
                <Layout className={`py-8 flex items-center justify-between lg:flex-col lg:py-6 lg:text-center`}>
                    <span>
                        {new Date().getFullYear()} &copy; All Rights Reserved.
                    </span>
                    <span>
                        Built and design by &nbsp;
                        <Link href='' className={`underline underline-offset-2`}>
                            Soumya Prakash Sahu
                        </Link>
                    </span>
                </Layout>
            </footer>
        </>
    )
}

export default Footer