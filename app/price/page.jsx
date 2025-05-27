import ContactForm from "@/components/Contact/contact-form"
import { Check, Database, Smartphone, Globe, Server, Zap, Shield, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

const technologies = {
    mobile: [
        { name: "Flutter", icon: "📱", description: "Cross-platform mobile development" },
        { name: "Dart", icon: "🎯", description: "Modern programming language" },
        { name: "Firebase", icon: "🔥", description: "Backend-as-a-Service platform" },
        { name: "REST APIs", icon: "🔗", description: "API integration and development" },
    ],
    web: [
        { name: "Next.js", icon: "⚡", description: "React framework for production" },
        { name: "React", icon: "⚛️", description: "Modern UI library" },
        { name: "Tailwind CSS", icon: "🎨", description: "Utility-first CSS framework" },
        { name: "Shadcn UI", icon: "🧩", description: "Beautiful component library" },
        { name: "TypeScript", icon: "📘", description: "Type-safe JavaScript" },
        { name: "Vercel", icon: "▲", description: "Deployment and hosting" },
    ],
    backend: [
        { name: "Django", icon: "🐍", description: "Python web framework" },
        { name: "Django Ninja", icon: "🥷", description: "Fast API framework" },
        { name: "PostgreSQL", icon: "🐘", description: "Advanced relational database" },
        { name: "Railway", icon: "🚂", description: "Cloud deployment platform" },
        { name: "Redis", icon: "🔴", description: "In-memory data structure store" },
    ],
}

const TailwindCompatiblePricing = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-white">
                <div className="absolute inset-0 bg-blue-50 opacity-50"></div>
                <div className="relative max-w-7xl mx-auto px-4 lg:px-6 xl:px-8 py-20 md:py-16 sm:py-12">
                    <div className="text-center">
                        <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-medium text-blue-800 mb-6">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                            Transparent Pricing • No Hidden Costs
                        </div>

                        <h1 className="text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold text-gray-900 mb-6">
                            <span className="text-blue-600">Software Development</span>
                            <br />
                            <span className="text-purple-600">Pricing</span>
                        </h1>

                        <p className="text-xl lg:text-lg md:text-base sm:text-sm text-gray-600 max-w-4xl lg:max-w-3xl md:max-w-2xl mx-auto leading-relaxed mb-8">
                            Comprehensive breakdown of my software development pricing structure for mobile and web applications, as well as backend services. All prices are in Indian Rupees (INR).
                        </p>

                        <div className="flex lg:flex-col md:flex-col sm:flex-col gap-4 justify-center">
                            <Link href='/contact' className="inline-flex items-center px-8 py-4 md:px-6 md:py-3 sm:px-4 sm:py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                                Get Custom Quote
                                <ArrowRight className="ml-2 h-5 w-5 md:h-4 md:w-4" />
                            </Link>
                            <Link href='/' className="inline-flex items-center px-8 py-4 md:px-6 md:py-3 sm:px-4 sm:py-2 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors">
                                View Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 lg:px-6 xl:px-8 py-12 md:py-8 sm:py-6">
                <div className="mb-20 md:mb-16 sm:mb-12">
                    <div className="text-center mb-16 md:mb-12 sm:mb-8">
                        <h2 className="text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold text-gray-900 mb-4">
                            Technologies
                        </h2>
                        <p className="text-xl lg:text-lg md:text-base sm:text-sm text-gray-600 max-w-3xl mx-auto">
                            I leverage cutting-edge technologies to build scalable, performant, and maintainable applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 md:grid-cols-1 gap-8 md:gap-6 sm:gap-4">
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-blue-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="bg-blue-600 p-8 lg:p-6 md:p-4">
                                <div className="flex items-center mb-4">
                                    <Smartphone className="h-8 w-8 md:h-6 md:w-6 text-white mr-3" />
                                    <h3 className="text-2xl lg:text-xl md:text-lg font-bold text-white">Mobile Development</h3>
                                </div>
                                <p className="text-blue-100">Cross-platform mobile solutions</p>
                            </div>
                            <div className="p-8 lg:p-6 md:p-4">
                                <div className="space-y-4 md:space-y-3">
                                    {technologies.mobile.map((tech, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center p-4 md:p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                                        >
                                            <span className="text-2xl md:text-xl mr-4 md:mr-3">{tech.icon}</span>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 md:text-sm">{tech.name}</h4>
                                                <p className="text-sm md:text-xs text-gray-600">{tech.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-green-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="bg-green-600 p-8 lg:p-6 md:p-4">
                                <div className="flex items-center mb-4">
                                    <Globe className="h-8 w-8 md:h-6 md:w-6 text-white mr-3" />
                                    <h3 className="text-2xl lg:text-xl md:text-lg font-bold text-white">Web Development</h3>
                                </div>
                                <p className="text-green-100">Modern web applications</p>
                            </div>
                            <div className="p-8 lg:p-6 md:p-4">
                                <div className="space-y-4 md:space-y-3">
                                    {technologies.web.map((tech, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center p-4 md:p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                                        >
                                            <span className="text-2xl md:text-xl mr-4 md:mr-3">{tech.icon}</span>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 md:text-sm">{tech.name}</h4>
                                                <p className="text-sm md:text-xs text-gray-600">{tech.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-purple-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="bg-purple-600 p-8 lg:p-6 md:p-4">
                                <div className="flex items-center mb-4">
                                    <Server className="h-8 w-8 md:h-6 md:w-6 text-white mr-3" />
                                    <h3 className="text-2xl lg:text-xl md:text-lg font-bold text-white">Backend Development</h3>
                                </div>
                                <p className="text-purple-100">Robust server solutions</p>
                            </div>
                            <div className="p-8 lg:p-6 md:p-4">
                                <div className="space-y-4 md:space-y-3">
                                    {technologies.backend.map((tech, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center p-4 md:p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                                        >
                                            <span className="text-2xl md:text-xl mr-4 md:mr-3">{tech.icon}</span>
                                            <div>
                                                <h4 className="font-semibold text-gray-900 md:text-sm">{tech.name}</h4>
                                                <p className="text-sm md:text-xs text-gray-600">{tech.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-20 md:mb-16 sm:mb-12">
                    <div className="grid grid-cols-3 md:grid-cols-1 gap-8 md:gap-6 sm:gap-4">
                        <div className="text-center p-8 lg:p-6 md:p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="inline-flex items-center justify-center w-16 h-16 md:w-12 md:h-12 bg-blue-100 rounded-full mb-6 md:mb-4">
                                <Zap className="h-8 w-8 md:h-6 md:w-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl md:text-lg font-bold text-gray-900 mb-4 md:mb-2">Fast Development</h3>
                            <p className="text-gray-600 md:text-sm">Quick turnaround times without compromising on quality</p>
                        </div>
                        <div className="text-center p-8 lg:p-6 md:p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="inline-flex items-center justify-center w-16 h-16 md:w-12 md:h-12 bg-green-100 rounded-full mb-6 md:mb-4">
                                <Shield className="h-8 w-8 md:h-6 md:w-6 text-green-600" />
                            </div>
                            <h3 className="text-xl md:text-lg font-bold text-gray-900 mb-4 md:mb-2">Secure & Reliable</h3>
                            <p className="text-gray-600 md:text-sm">Enterprise-grade security and reliability standards</p>
                        </div>
                        <div className="text-center p-8 lg:p-6 md:p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="inline-flex items-center justify-center w-16 h-16 md:w-12 md:h-12 bg-purple-100 rounded-full mb-6 md:mb-4">
                                <Star className="h-8 w-8 md:h-6 md:w-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl md:text-lg font-bold text-gray-900 mb-4 md:mb-2">Premium Quality</h3>
                            <p className="text-gray-600 md:text-sm">High-quality code following industry best practices</p>
                        </div>
                    </div>
                </div>

                <div className="mb-20 md:mb-16 sm:mb-12">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100">
                        <div className="bg-blue-600 px-8 lg:px-6 md:px-4 py-8 lg:py-6 md:py-4">
                            <div className="flex lg:flex-col md:flex-col items-center lg:items-start md:items-start justify-between">
                                <div className="flex items-center lg:mb-4 md:mb-3">
                                    <Smartphone className="h-10 w-10 md:h-8 md:w-8 text-white mr-4 md:mr-3" />
                                    <div>
                                        <h2 className="text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold text-white">
                                            Mobile Application Development
                                        </h2>
                                        <p className="text-blue-100 mt-2 md:text-sm">Flutter - Android/iOS Cross-Platform</p>
                                    </div>
                                </div>
                                <div className="lg:hidden md:hidden">
                                    <div className="bg-blue-500 rounded-lg p-4 md:p-3">
                                        <p className="text-white font-semibold md:text-sm">Starting from</p>
                                        <p className="text-2xl md:text-xl font-bold text-white">₹2,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 lg:p-6 md:p-4">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b-2 border-blue-200">
                                            <th className="text-left py-4 px-4 md:py-3 md:px-2 font-bold text-gray-900 md:text-sm">
                                                Service Type
                                            </th>
                                            <th className="text-left py-4 px-4 md:py-3 md:px-2 font-bold text-gray-900 md:text-sm">
                                                Description
                                            </th>
                                            <th className="text-left py-4 px-4 md:py-3 md:px-2 font-bold text-gray-900 md:text-sm">
                                                Pricing (INR)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr className="hover:bg-blue-50 transition-colors">
                                            <td className="py-4 px-4 md:py-3 md:px-2 font-semibold text-gray-900 md:text-sm">
                                                Per Screen (Without API)
                                            </td>
                                            <td className="py-4 px-4 md:py-3 md:px-2 text-gray-600 md:text-sm">
                                                Screen design and functionality without external API integration
                                            </td>
                                            <td className="py-4 px-4 md:py-3 md:px-2">
                                                <span className="text-2xl lg:text-xl md:text-lg font-bold text-blue-600">₹2,000 – ₹3,500</span>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-blue-50 transition-colors">
                                            <td className="py-4 px-4 md:py-3 md:px-2 font-semibold text-gray-900 md:text-sm">
                                                Per Screen (With API)
                                            </td>
                                            <td className="py-4 px-4 md:py-3 md:px-2 text-gray-600 md:text-sm">
                                                Screen design and functionality with integration to an existing API
                                            </td>
                                            <td className="py-4 px-4 md:py-3 md:px-2">
                                                <span className="text-2xl lg:text-xl md:text-lg font-bold text-blue-600">₹3,000 – ₹5,000</span>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-blue-50 transition-colors">
                                            <td className="py-4 px-4 md:py-3 md:px-2 font-semibold text-gray-900 md:text-sm">
                                                Additional Integration
                                            </td>
                                            <td className="py-4 px-4 md:py-3 md:px-2 text-gray-600 md:text-sm">
                                                Integration with third-party services or custom APIs
                                            </td>
                                            <td className="py-4 px-4 md:py-3 md:px-2">
                                                <span className="text-2xl lg:text-xl md:text-lg font-bold text-blue-600">
                                                    ₹7,000 - ₹15,000+
                                                </span>
                                                <p className="text-sm md:text-xs text-gray-500 mt-1">(varies based on complexity)</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-20 md:mb-16 sm:mb-12">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-green-100">
                        <div className="bg-green-600 px-8 lg:px-6 md:px-4 py-8 lg:py-6 md:py-4">
                            <div className="flex lg:flex-col md:flex-col items-center lg:items-start md:items-start justify-between">
                                <div className="flex items-center lg:mb-4 md:mb-3">
                                    <Globe className="h-10 w-10 md:h-8 md:w-8 text-white mr-4 md:mr-3" />
                                    <div>
                                        <h2 className="text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold text-white">
                                            Website Development
                                        </h2>
                                        <p className="text-green-100 mt-2 md:text-sm">Next.js, React, Tailwind CSS, Shadcn UI</p>
                                    </div>
                                </div>
                                <div className="lg:hidden md:hidden">
                                    <div className="bg-green-500 rounded-lg p-4 md:p-3">
                                        <p className="text-white font-semibold md:text-sm">Starting from</p>
                                        <p className="text-2xl md:text-xl font-bold text-white">₹1,800</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 lg:p-6 md:p-4">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b-2 border-green-200">
                                            <th className="text-left py-4 px-4 md:py-3 md:px-2 font-bold text-gray-900 md:text-sm">
                                                Service Type
                                            </th>
                                            <th className="text-left py-4 px-4 md:py-3 md:px-2 font-bold text-gray-900 md:text-sm">
                                                Description
                                            </th>
                                            <th className="text-left py-4 px-4 md:py-3 md:px-2 font-bold text-gray-900 md:text-sm">
                                                Pricing (INR)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr className="hover:bg-green-50 transition-colors">
                                            <td className="py-4 px-4 md:py-3 md:px-2 font-semibold text-gray-900 md:text-sm">
                                                Per Page (Without API)
                                            </td>
                                            <td className="py-4 px-4 md:py-3 md:px-2 text-gray-600 md:text-sm">
                                                Page design and functionality without external API integration
                                            </td>
                                            <td className="py-4 px-4 md:py-3 md:px-2">
                                                <span className="text-2xl lg:text-xl md:text-lg font-bold text-green-600">
                                                    ₹1,800 - ₹10,000
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-green-50 transition-colors">
                                            <td className="py-4 px-4 md:py-3 md:px-2 font-semibold text-gray-900 md:text-sm">
                                                Per Page (With API)
                                            </td>
                                            <td className="py-4 px-4 md:py-3 md:px-2 text-gray-600 md:text-sm">
                                                Page design and functionality with integration to an existing API
                                            </td>
                                            <td className="py-4 px-4 md:py-3 md:px-2">
                                                <span className="text-2xl lg:text-xl md:text-lg font-bold text-green-600">
                                                    ₹2,500 - ₹10,000
                                                </span>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-green-50 transition-colors">
                                            <td className="py-4 px-4 md:py-3 md:px-2 font-semibold text-gray-900 md:text-sm">
                                                Additional Integration
                                            </td>
                                            <td className="py-4 px-4 md:py-3 md:px-2 text-gray-600 md:text-sm">
                                                Integration with third-party services, databases, or custom APIs
                                            </td>
                                            <td className="py-4 px-4 md:py-3 md:px-2">
                                                <span className="text-2xl lg:text-xl md:text-lg font-bold text-green-600">
                                                    ₹15,000 - ₹25,000+
                                                </span>
                                                <p className="text-sm md:text-xs text-gray-500 mt-1">(varies based on complexity)</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-20 md:mb-16 sm:mb-12">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-purple-100">
                        <div className="bg-purple-600 px-8 lg:px-6 md:px-4 py-8 lg:py-6 md:py-4">
                            <div className="flex lg:flex-col md:flex-col items-center lg:items-start md:items-start justify-between">
                                <div className="flex items-center lg:mb-4 md:mb-3">
                                    <Server className="h-10 w-10 md:h-8 md:w-8 text-white mr-4 md:mr-3" />
                                    <div>
                                        <h2 className="text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold text-white">
                                            Backend Development
                                        </h2>
                                        <p className="text-purple-100 mt-2 md:text-sm">Django, PostgreSQL, Railway, Firebase</p>
                                    </div>
                                </div>
                                <div className="lg:hidden md:hidden">
                                    <div className="bg-purple-500 rounded-lg p-4 md:p-3">
                                        <p className="text-white font-semibold md:text-sm">Starting from</p>
                                        <p className="text-2xl md:text-xl font-bold text-white">₹15,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 lg:p-6 md:p-4">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b-2 border-purple-200">
                                            <th className="text-left py-4 px-4 md:py-3 md:px-2 font-bold text-gray-900 md:text-sm">
                                                Service Type
                                            </th>
                                            <th className="text-left py-4 px-4 md:py-3 md:px-2 font-bold text-gray-900 md:text-sm">
                                                Description
                                            </th>
                                            <th className="text-left py-4 px-4 md:py-3 md:px-2 font-bold text-gray-900 md:text-sm">
                                                Starting Pricing (INR)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr className="hover:bg-purple-50 transition-colors">
                                            <td className="py-4 px-4 md:py-3 md:px-2 font-semibold text-gray-900 md:text-sm">
                                                Basic Module Development
                                            </td>
                                            <td className="py-4 px-4 md:py-3 md:px-2 text-gray-600 md:text-sm">
                                                Core functionality for data management and API endpoints
                                            </td>
                                            <td className="py-4 px-4 md:py-3 md:px-2">
                                                <span className="text-2xl lg:text-xl md:text-lg font-bold text-purple-600">₹15,000+</span>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-purple-50 transition-colors">
                                            <td className="py-4 px-4 md:py-3 md:px-2 font-semibold text-gray-900 md:text-sm">
                                                Complex Module Development
                                            </td>
                                            <td className="py-4 px-4 md:py-3 md:px-2 text-gray-600 md:text-sm">
                                                Advanced features, complex logic, and data processing
                                            </td>
                                            <td className="py-4 px-4 md:py-3 md:px-2">
                                                <span className="text-lg md:text-base font-bold text-purple-600">Varies significantly</span>
                                                <p className="text-sm md:text-xs text-gray-500 mt-1">based on complexity</p>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-purple-50 transition-colors">
                                            <td className="py-4 px-4 md:py-3 md:px-2 font-semibold text-gray-900 md:text-sm">
                                                Database Management
                                            </td>
                                            <td className="py-4 px-4 md:py-3 md:px-2 text-gray-600 md:text-sm">
                                                Setup, optimization, and maintenance of PostgreSQL or Firebase databases
                                            </td>
                                            <td className="py-4 px-4 md:py-3 md:px-2">
                                                <span className="text-lg md:text-base font-bold text-purple-600">Custom Quote</span>
                                                <p className="text-sm md:text-xs text-gray-500 mt-1">based on requirements</p>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-purple-50 transition-colors">
                                            <td className="py-4 px-4 md:py-3 md:px-2 font-semibold text-gray-900 md:text-sm">
                                                Deployment & Hosting
                                            </td>
                                            <td className="py-4 px-4 md:py-3 md:px-2 text-gray-600 md:text-sm">
                                                Configuration and deployment using Railway or other platforms
                                            </td>
                                            <td className="py-4 px-4 md:py-3 md:px-2">
                                                <span className="text-2xl lg:text-xl md:text-lg font-bold text-purple-600">
                                                    ₹1,000 - ₹80,000
                                                </span>
                                                <p className="text-sm md:text-xs text-gray-500 mt-1">per month based on scale</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-10 lg:p-8 md:p-6 sm:p-4 mb-16 md:mb-12 sm:mb-8">
                    <h3 className="text-3xl lg:text-2xl md:text-xl font-bold text-amber-800 mb-8 md:mb-6 flex items-center">
                        <Database className="h-8 w-8 md:h-6 md:w-6 mr-3" />
                        Important Notes & Terms
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-6 sm:gap-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-8 h-8 md:w-6 md:h-6 bg-amber-200 rounded-full flex items-center justify-center mr-4 md:mr-3 mt-1">
                                <Check className="h-5 w-5 md:h-4 md:w-4 text-amber-700" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-amber-800 mb-2 md:text-sm">Flexible Pricing</h4>
                                <p className="text-amber-700 md:text-sm">
                                    These are estimated starting prices. Actual costs may vary based on the detailed project scope and
                                    requirements.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-8 h-8 md:w-6 md:h-6 bg-amber-200 rounded-full flex items-center justify-center mr-4 md:mr-3 mt-1">
                                <Check className="h-5 w-5 md:h-4 md:w-4 text-amber-700" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-amber-800 mb-2 md:text-sm">Additional Services</h4>
                                <p className="text-amber-700 md:text-sm">
                                    Additional revisions, support, or maintenance may incur separate charges.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-8 h-8 md:w-6 md:h-6 bg-amber-200 rounded-full flex items-center justify-center mr-4 md:mr-3 mt-1">
                                <Check className="h-5 w-5 md:h-4 md:w-4 text-amber-700" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-amber-800 mb-2 md:text-sm">Market Updates</h4>
                                <p className="text-amber-700 md:text-sm">
                                    Prices are subject to change based on market conditions and technology updates.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 w-8 h-8 md:w-6 md:h-6 bg-amber-200 rounded-full flex items-center justify-center mr-4 md:mr-3 mt-1">
                                <Check className="h-5 w-5 md:h-4 md:w-4 text-amber-700" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-amber-800 mb-2 md:text-sm">Custom Quotes</h4>
                                <p className="text-amber-700 md:text-sm">
                                    Contact us for a detailed quote based on your specific project requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full ">
                    <div className="text-center">
                        <h3 className="text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold mb-6 md:mb-4">
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-xl lg:text-lg md:text-base sm:text-sm mb-12 md:mb-8 mx-auto leading-relaxed">
                            Get a detailed quote tailored to your specific requirements. Our team is ready to bring your vision to
                            life with cutting-edge technology and exceptional quality.
                        </p>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default TailwindCompatiblePricing
