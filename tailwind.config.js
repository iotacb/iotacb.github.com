module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/assets/*/*.{svg}"],
	darkMode: "class",
	theme: {
		extend: {
			transitionTimingFunction: {
				hover: "var(--transition)",
			},
			transitionProperty: {
				nav: "backdrop-filter, filter, color, background",
			},
			colors: {
				textDark: "#121212",
				textLight: "#E9E9E9",
				navbarBackgroundLight: "#FFFFFF",
				navbarBackgroundDark: "#343434",
				backgroundLight: "#F1F1F1",
				backgroundDark: "#121212",
				accent: "#5727bd",
				accentLight: "#6d44cb",
			},
			fontSize: {
				"10xl": "10rem",
			},
			boxShadow: {
				smooth: [
					"3.4px 3.4px 3.4px -20px rgba(0, 0, 0, 0.016)",
					"8.7px 8.7px 8.7px -20px rgba(0, 0, 0, 0.022)",
					"17.7px 17.7px 17.7px -20px rgba(0, 0, 0, 0.028)",
					"36.5px 36.5px 36.5px -20px rgba(0, 0, 0, 0.034)",
					"100px 100px 100px -20px rgba(0, 0, 0, 0.05)"
				],
			},
			dropShadow: {
				smooth: [
					"3.4px 3.4px 3.4px -20px rgba(0, 0, 0, 0.016)",
					"8.7px 8.7px 8.7px -20px rgba(0, 0, 0, 0.022)",
					"17.7px 17.7px 17.7px -20px rgba(0, 0, 0, 0.028)",
					"36.5px 36.5px 36.5px -20px rgba(0, 0, 0, 0.034)",
					"100px 100px 100px -20px rgba(0, 0, 0, 0.05)"
				],
			},
		},
		fontFamily: {
			averta: "Averta",
			poppins: "Poppins",
			aclonica: "Aclonica",
		},
	},
	plugins: [],
};
