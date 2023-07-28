/** @type {import('tailwindcss').Config} */
import tailwind from "@astrojs/tailwind";
// import Emotion from "@emotion/css";
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [],
  integrations: [tailwind()],
};
