import SpotifyClone from '../../public/assets/projects/spotify-clone.webp'
import SiliconGuestHouse from '../../public/assets/projects/silicon-guest-house.webp'
import SamBlog from '../../public/assets/projects/sam-blog.webp'
import EarthyNews from '../../public/assets/projects/earthy-news.png'

const ProjectData = [
    // {
    //     id: '1',
    //     projectBanner: EarthyNews,
    //     projectBannerAlt: 'Soumya Prakash Sahu | Projects - 1 | Silicon Guest House',
    //     type: 'App Development',
    //     title: 'Earthy News - News Application',
    //     shortDescription: 'Website for Silicon Guest House, featuring tech-equipped guest rooms for a comfortable stay experience.',
    //     fullDescription: [
    //         'Navigating our website is a breeze. I have created an intuitive and aesthetically pleasing user interface to ensure that finding information, exploring our guest house, and making reservations are effortless.',
    //         'Implemented a straightforward and efficient booking system that leverages robust backend logic. This allows users to input their check-in and check-out dates, select room preferences, and complete reservations swiftly.',
    //         'Recognizing the prevalence of mobile browsing, this website is fully responsive. Also developed a custom admin panel to empower administrators with the tools they need to manage reservations, room availability, and guest interactions efficiently.',
    //     ],
    //     tech: ['Django', 'Django REST Framework', 'SQLite', 'Firebase', 'Next.js 13 (App Router)', 'Shadcn/ui library', 'Flutter', 'Riverpod'],
    //     features: [
    //         'User-Friendly UI',
    //         'Easy Booking Process',
    //         'Mobile Responsiveness',
    //         'Custom Admin Panel',
    //         'Report Generation',
    //         'Bill Generation'
    //     ],
    //     gitHubLink: 'https://github.com/SOUMYA-CODING/Earthly-News',
    // },
    {
        id: '1',
        projectBanner: SpotifyClone,
        projectBannerAlt: 'Soumya Prakash Sahu | Projects - 1 | Spotify Clone',
        type: 'Web Development',
        title: 'Music application - Spotify Clone',
        shortDescription: ' Spotify your destination for seamless music streaming, blending technology and music in perfect harmony',
        fullDescription: [
            'Spotify, where music meets innovation. This platform offers seamless song uploads, secure Stripe payment integration, and a sleek Tailwind-designed UI with captivating animations. Enjoy a fully responsive experience on all your devices, knowing your credentials are protected through Supabase and GitHub authentication.',
            'Manage your music effortlessly with Supabase storage, client form validation, and error handling. Dive into your favorites, create playlists, and elevate your audio journey with our advanced Player component. We even simplify Stripe recurring payment management and offer easy subscription cancellation.',
            'Learn how to handle routes and fetch data directly in server React components for ultimate control.',
        ],
        tech: ['Next.js 13 (App Router)', 'React.js', 'Tailwind CSS', 'Supabase', 'Stripe'],
        features: [
            'User-firendly',
            'SEO Optimized',
            'Strip Payment',
            'Advanced Player component',
            'Github authentication',
            'Full responsiveness for all devices'
        ],
        gitHubLink: 'https://github.com/SOUMYA-CODING/spotify-clone',
    },
    {
        id: '2',
        projectBanner: SamBlog,
        projectBannerAlt: 'Soumya Prakash Sahu | Projects - 2 | Sam Blog',
        type: 'Web Development',
        title: 'SamBlog - Blog Website',
        shortDescription: 'A blog website is an online platform for sharing articles, stories, and opinions on various topics with a global audience.',
        fullDescription: [
            'SamBlog is a testament to the cutting-edge technologies and advanced features that power it. Built with Next.js 13 using the powerful App Router, your site ensures seamless navigation and fast load times, providing an exceptional user experience. The incorporation of React.js further enhances the interactivity and responsiveness of your content.',
            'Prisma and MongoDB combine to create a robust and flexible database system, allowing for efficient data storage and retrieval. Firebase, on the other hand, brings real-time capabilities and secure authentication options, such as Google and Github authentication, ensuring that your data remains safe.',
            'Its SEO optimization, making it more discoverable in search engines. The inclusion of Server Side Components ensures that makes pages load quickly and efficiently',
        ],
        tech: ['Next.js 13 (App Router)', 'React.js', 'Prisma', 'MongoDB', 'Firebase'],
        features: [
            'SEO Optimized',
            'Server Side Components',
            'Custom CSS',
            'Next Auth',
            'Google authentication',
            'Github authentication',
        ],
        gitHubLink: 'https://github.com/SOUMYA-CODING/SamBlog',
    },
    {
        id: '3',
        projectBanner: SiliconGuestHouse,
        projectBannerAlt: 'Soumya Prakash Sahu | Projects - 3 | Silicon Guest House',
        type: 'Web Development',
        title: 'Guest House Website for Silicon Guest House',
        shortDescription: 'Website for Silicon Guest House, featuring tech-equipped guest rooms for a comfortable stay experience.',
        fullDescription: [
            'Navigating our website is a breeze. I have created an intuitive and aesthetically pleasing user interface to ensure that finding information, exploring our guest house, and making reservations are effortless.',
            'Implemented a straightforward and efficient booking system that leverages robust backend logic. This allows users to input their check-in and check-out dates, select room preferences, and complete reservations swiftly.',
            'Recognizing the prevalence of mobile browsing, this website is fully responsive. Also developed a custom admin panel to empower administrators with the tools they need to manage reservations, room availability, and guest interactions efficiently.',
        ],
        tech: ['Django', 'MySQL', 'HTML', 'CSS', 'Bootstrap'],
        features: [
            'User-Friendly UI',
            'Easy Booking Process',
            'Mobile Responsiveness',
            'Custom Admin Panel',
            'Report Generation',
            'Bill Generation'
        ],
        gitHubLink: 'https://github.com/SOUMYA-CODING/Silicon-Guest-House',
    },
]

export default ProjectData