/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [require('prettier-plugin-tailwindcss')],
};
