import type { Config } from 'tailwindcss'

const config: Config = {
   content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
   theme: {
      extend: {
         fontFamily: {
            'abc-regular': ['ABCRegular', 'sans-serif'],
            'abc-medium': ['ABCMedium', 'sans-serif'],
         },
         backgroundColor: {
            primary: '#ff4800',
         },
         textColor: {
            primary: '#ff4800',
         },
      },
   },
   plugins: [],
}
export default config
