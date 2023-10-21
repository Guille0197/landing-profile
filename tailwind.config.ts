import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        spin: "spin calc(var(--speed) * 2) infinite linear",
        slide: "slide var(--speed) ease-in-out infinite alternate",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-50% - var(--gap)/2))" },
        },
        "text-gradient": {
          to: {
            backgroundPosition: "200% center",
          },
        },
        spin: {
          "0%": {
            rotate: "0deg",
          },
          "15%, 35%": {
            rotate: "90deg",
          },
          "65%, 85%": {
            rotate: "270deg",
          },
          "100%": {
            rotate: "360deg",
          },
        },
        slide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  extend: {},
};
export default config;
