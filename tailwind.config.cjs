/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#fef6e4",
        button: "#f582ae",
        headline: "#001858",
        paragraph: "#172c66",
        secondary: "#8bd3dd",
        secondBackground: "#f3d2c1",
        backgroundThree: "#fffffe",
      },
      fontSize: {
        "clamp-sm": "clamp(16px, 3vw, 20px)",
        "clamp-md": "clamp(20px, 3vw, 30px)",
        "clamp-lg": "clamp(28px, 5vw, 50px)",
      },
      fontFamily: {
        ubuntu: "Ubuntu",
      },
      height: {
        imgProject: "500px",
      },
    },
  },
  plugins: [],
};
