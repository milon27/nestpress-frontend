/** @type {import('tailwindcss').Config} */

const TailwindTheme = require("./src/config/theme/tailwind.theme.json")

export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: TailwindTheme,
    plugins: [],
}
