/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#ffffff",
            tracker: {
                100: "#ffe6f3",
                200: "#ff99cf",
                300: "#ff66b8",
                400: "#ff33a0",
                500: "#ff0088", //center
                600: "#e6007a",
                700: "#cc006d",
                800: "#b3005f",
                900: "#990052",
            },
            // ...
        },
    },
    plugins: [],
};
