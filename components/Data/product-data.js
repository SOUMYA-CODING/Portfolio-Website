import BharatKhabarBanner from '../../public/assets/products/bharatkhabar/bharatkhabarbanner.png'
import BharatKhabarLogo from '../../public/assets/products/bharatkhabar/full_logo_dark.png'
// Bharat Khabar Project Images List
import Mob1 from '../../public/assets/products/bharatkhabar/mob1.png'
import Mob2 from '../../public/assets/products/bharatkhabar/mob2.png'
import Mob3 from '../../public/assets/products/bharatkhabar/mob3.png'
import Mob4 from '../../public/assets/products/bharatkhabar/mob4.png'
import Mob5 from '../../public/assets/products/bharatkhabar/mob5.png'
import Mob6 from '../../public/assets/products/bharatkhabar/mob6.png'
import Mob7 from '../../public/assets/products/bharatkhabar/mob7.png'
import Mob8 from '../../public/assets/products/bharatkhabar/mob8.png'
import Mob9 from '../../public/assets/products/bharatkhabar/mob9.png'
import Mob10 from '../../public/assets/products/bharatkhabar/mob10.png'
import Mob11 from '../../public/assets/products/bharatkhabar/mob11.png'
import Mob12 from '../../public/assets/products/bharatkhabar/mob12.png'

import Web1 from '../../public/assets/products/bharatkhabar/web1.png'
import Web2 from '../../public/assets/products/bharatkhabar/web2.png'
import Web3 from '../../public/assets/products/bharatkhabar/web3.png'
import Web4 from '../../public/assets/products/bharatkhabar/web4.png'
import Web5 from '../../public/assets/products/bharatkhabar/web5.png'
import Web6 from '../../public/assets/products/bharatkhabar/web6.png'
import Web7 from '../../public/assets/products/bharatkhabar/web7.png'
import Web8 from '../../public/assets/products/bharatkhabar/web8.png'
import Web9 from '../../public/assets/products/bharatkhabar/web9.png'       

const ProductData = [
    {
        id: '1',
        logo: BharatKhabarLogo,
        projectBanner: BharatKhabarBanner,
        projectBannerAlt: 'Soumya Prakash Sahu | Product - 1 | Bharat Khabar',
        type: 'Software Development',
        tag: ['RSS News Aggerator', 'News Application'],
        title: 'Bharat Khabar',
        shortDescription: 'All-in-One News Platform with Live Streaming, Breaking News, and Subscription-Based Publishing',
        fullDescription: [
            'This project is a dynamic and feature-rich news platform designed to offer a seamless experience for both readers and content creators. Users can explore a wide variety of news articles organized into categories, including featured stories, recent updates, and eye-catching slider articles. The platform also delivers real-time content through live streaming and supports short-lived breaking news that remains highlighted for two hours, ensuring users stay updated with the latest developments.',
            'A key aspect of the platform is its subscription-based model, which allows only paid users to publish articles. This helps maintain content quality while also enabling monetization. Readers can enjoy a clean and engaging experience enhanced with both custom and standard advertisements placed strategically throughout the app.',
            'Additional features include automatic integration of external news sources through RSS feeds, fast and accurate search functionality, and a built-in text-to-speech option for hands-free news consumption. The entire system is optimized to deliver rich functionality while maintaining a lightweight footprint, making it quick to load and easy to use on all devices.',
        ],
        tech: ['Flutter (Hybrid Mobile Application)', 'Riverpod', 'Django (Backend)', 'Django Rest Framework', 'Cloudinary (Form Images and Video)', 'Bootstrap', 'PostgreSQL', 'Redis', 'Firebase', 'Celery', 'Nextjs (Webiste)', 'Tailwind CSS', 'Gemini', 'Railway (Backend Deployment)', 'Vercel (Website Deployment)'],
        features: [
            'Multi-Language Support',
            'Live Streaming (supports RTMP & YouTube sources)',
            'Breaking News (highlighted for 2 hours)',
            'Subscription-Based Publishing (paid users only)',
            'RSS News Aggregation from external sources',
            'Featured, Slider, and Recent Article Sections',
            'Custom and Google Ad Integration',
            'Text-to-Speech Functionality for hands-free reading',
            'Advanced Search with lightning-fast results',
            'Real-Time Notifications for new articles and updates',
            'Role-Based Access Control (admins, publishers, readers)',
            'User-Friendly News Submission Interface',
            'Multi-Device Experience (web and mobile)',
            'Content Categorization and Tagging',
            'Engaging UI with dynamic news presentation',
            'Performance Optimized for low-end devices',
        ],
        mobileImages:[Mob1, Mob2, Mob3, Mob4, Mob5, Mob6, Mob7, Mob8, Mob9, Mob10, Mob11, Mob12],
        webImages:[Web1, Web2, Web3, Web4, Web5, Web6, Web7, Web8, Web9],
        upcommingFeatures: [
            'Enhanced User Profiles with social sharing options',
            'Advanced Analytics Dashboard for publishers',
            'Website Will be available soon',
            'Magazine Features',
        ],
    },
]

export default ProductData