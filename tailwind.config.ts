import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": "380px",
        "desktop" : "1860px"
      },
      colors: {
        "main-1": "#F8FAFB",
        
        "base-1": "",

        "secondary-1" : "",
      }
    },
  },
  plugins: [],
};
export default config;
