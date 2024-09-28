// tailwind.config.js
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                'pastel-green': '#4ade80',
                'dark-green': '#10b981', // Add this line
              },    
              fontFamily: {
                algerian: ['Algerian', 'sans-serif'],
              },
              fontSize: {
                '2xl': '28px',
              },
            
        },
    },
    plugins: [require("daisyui")],
};
 
  