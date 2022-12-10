/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                disp: ["Raleway", "sans-serif"],
                code: ["Source Code Pro", "monospace"],
            },
            colors: {
                code: "#8b5cf6",
                sub: "#a78bfa",
                sec: "#facc15",
            },
        },
    },
    plugins: [],
}
