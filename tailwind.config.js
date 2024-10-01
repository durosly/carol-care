/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],

	theme: {
		extend: {
			colors: {
				"brand-primary": "#38ad44",
				"brand-secondary": "#009f93",
			},

			animation: {
				shimmer: "shimmer 2s linear infinite",
			},
			keyframes: {
				shimmer: {
					from: {
						backgroundPosition: "0 0",
					},
					to: {
						backgroundPosition: "-200% 0",
					},
				},
			},
		},
		fontFamily: {
			sans: ["var(--font-daikon)"],
		},
		letterSpacing: {
			tightest: "-.075em",
			tighter: "-.05em",
			tight: "-.025em",
			normal: "0",
			wide: ".025em",
			wider: ".05em",
			widest: ".30em",
		},
		aspectRatio: {
			none: 0,
			square: [1, 1],
			"16/9": [16, 9],
			"4/3": [4, 3],
			"21/9": [21, 9],
		},
	},
	variants: {
		aspectRatio: ["responsive"],
		extend: {},
	},
	daisyui: {
		themes: false,
	},
	plugins: [require("daisyui"), require("@tailwindcss/aspect-ratio")],
};
