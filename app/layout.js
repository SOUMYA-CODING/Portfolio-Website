import Footer from '@/components/Footer/footer'
import '../styles/global.css'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar/navbar'
import Icons from '@/components/Icons/icons'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

const font = Poppins({ subsets: ['latin', 'devanagari', 'latin-ext'], weight: ['100', '200', '300', '500', '600', '700', '800', '900'] })

export const metadata = {
    title: 'Soumya Prakash Sahu | Portfolio',
    description: 'Soumya Prakash Sahu | Portfolio | Appication Developer | Software Developer',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={font.className}>
                <Navbar />
                <main>
                    {children}
                </main>
                <Icons />
                <Footer />
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    )
}
