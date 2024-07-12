import { colors } from "./src/styles/theme/colors.ts";
import { fontFamily } from "./src/styles/theme/fontFamily.ts";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      fontFamily
    },
  },
  plugins: [],
};
