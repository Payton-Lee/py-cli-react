import { defineConfig } from "windicss/helpers";
import formsPlugin from "windicss/plugin/forms";
export default defineConfig({
  darkMode: "class",
  safelist: "p-3 p-4 p-5",
  theme: {
    extend: {
      colors: {
        teal: {
          100: "#096",
        },
      },
    },
  },
  shortcuts: {
    btn: "py-2 px-4 font-semibold rounded-lg shadow-md",
    "btn-green": "text-white bg-green-500 hover:bg-green-700",
  },
  plugins: [formsPlugin],
});
