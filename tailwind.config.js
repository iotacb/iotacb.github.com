module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
					"2.8px 2.8px 3.9px rgba(0, 0, 0, 0.014)",
					"6.7px 6.7px 9.3px rgba(0, 0, 0, 0.02)",
					"12.5px 12.5px 17.5px rgba(0, 0, 0, 0.025)",
					"22.3px 22.3px 31.3px rgba(0, 0, 0, 0.03)",
					"41.8px 41.8px 58.5px rgba(0, 0, 0, 0.036)",
					"100px 100px 140px rgba(0, 0, 0, 0.05)",
				],
			},
			dropShadow: {
				smooth: [
					"2.8px 2.8px 3.9px rgba(0, 0, 0, 0.014)",
					"6.7px 6.7px 9.3px rgba(0, 0, 0, 0.02)",
					"12.5px 12.5px 17.5px rgba(0, 0, 0, 0.025)",
					"22.3px 22.3px 31.3px rgba(0, 0, 0, 0.03)",
					"41.8px 41.8px 58.5px rgba(0, 0, 0, 0.036)",
					"100px 100px 140px rgba(0, 0, 0, 0.05)",
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
