"use client";

import Footer from '@/components/Footer/footer'
import '../styles/global.css'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar/navbar'
import Icons from '@/components/Icons/icons'
import { LazyMotion, domAnimation } from 'framer-motion'

const font = Poppins({ subsets: ['latin', 'devanagari', 'latin-ext'], weight: ['100', '200', '300', '500', '600', '700', '800', '900'] })

export const metadata = {
    title: 'Soumya Prakash Sahu | Portfolio',
    description: 'Soumya Prakash Sahu | Portfolio | Appication Developer | Software Developer',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={font.className}>
                <LazyMotion features={domAnimation}>
                    <Navbar />
                    <main>
                        {children}
                    </main>
                    <Icons />
                    <Footer />
                </LazyMotion>
            </body>
        </html>
    )
}
