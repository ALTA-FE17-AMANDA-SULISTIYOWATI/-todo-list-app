/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      backgroundImage: (_) => ({
        "custom-background": "url('./src/assets/background.jpg')",
      }),
    },
  },
  plugins: [],
}
