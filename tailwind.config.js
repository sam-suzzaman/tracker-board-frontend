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
            green: {
                100: "#e6f2e6",
                200: "#cce6cc",
                300: "#4da64d",
                400: "#1a8d1a",
                500: "#008000", //center
                600: "#006600",
                700: "#005a00",
                800: "#004000",
                900: "#002600",
            },
            orange: {
                100: "#ffedcc",
                200: "#ffe4b3",
                300: "#ffc966",
                400: "#ffb733",
                500: "#ffa500", //center
                600: "#e69500",
                700: "#cc8400",
                800: "#b37300",
                900: "#805300",
            },
            red: {
                100: "#ffe6e6",
                200: "#ff6666",
                300: "#ff4d4d",
                400: "#ff3333",
                500: "#ff0000", //center
                600: "#e60000",
                700: "#cc0000",
                800: "#b30000",
                900: "#990000",
            },
            white: "#fff",
            black: "#000",
            // ...
        },
    },
    plugins: [],
};
