/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				custom: {
					colorOne: "#3A5A40",
					colorTwo100: "#DAD7CD",
					colorTwo200: "#c9c4b6",
					colorTwo300: "#b3ad98",
					colorTwo400: "#9d957b",
					colorThree: "#588157",
				},
			},
		},
		fontFamily: {
			pop: ["Poppins"],
		},
	},
	plugins: [],
};
