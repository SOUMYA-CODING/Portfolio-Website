/** @type {import('tailwindcss').Config} */
export const content = [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
    extend: {
        colors: {
            primary: "#e11d48",
        },
    },
    screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }
        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }
        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }
        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
        xs: { max: "479px" },
        // => @media (max-width: 479px) { ... }
    },
};
export const plugins = [];
