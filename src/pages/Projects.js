import { useState, useEffect } from "react";
import { motion, useViewportScroll } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import ParallaxComponent from "../components/ParallaxComponent";
import SlidingText from "../components/SlidingText";

import accessory1 from "../assets/accessory1.svg";
import accessory2 from "../assets/accessory2.svg";
import accessory3 from "../assets/accessory3.svg";
import accessory5 from "../assets/accessory5.svg";
import accessory6 from "../assets/accessory6.svg";
import accessory7 from "../assets/accessory7.svg";
import outline from "../assets/outline.svg";

function Landing() {
	const Logo = () => <h1 className="cursor-pointer text-4xl font-bold">cb</h1>;
	const [isDarkTheme, setIsDarkTheme] = useState(document.documentElement.classList.contains("dark") || localStorage.getItem("dark-theme") === "true");

	useEffect(() => {
		const root = document.documentElement;
		root.classList.toggle("dark", isDarkTheme);
	}, [isDarkTheme, setIsDarkTheme]);

	const links = [
		{ name: "home", href: "/" },
		{ name: "projects", href: "/projects" },
		{
			name: "theme",
			onClick: () => {
				setIsDarkTheme(!isDarkTheme);
				localStorage.setItem("dark-theme", !isDarkTheme);
			},
		},
	];

	return (
		<>
			<Navbar logo={<Logo />} links={links} />
			<section className="w-full h-screen flex flex-col justify-center items-center relative p-12">
				<SlidingText className="text-4xl md:text-6xl text-textDark dark:text-textLight">i think heres</SlidingText>
				<SlidingText y={160} className="text-4xl md:text-6xl p-4 text-textDark dark:text-textLight">
					something missing
				</SlidingText>
				<motion.div
					initial={{
						opacity: 0,
						y: 40,
					}}
					animate={{
						opacity: 1,
						y: 0,
					}}
					transition={{
						ease: [0.6, 0.01, -0.05, 0.95],
						duration: 1,
					}}
				>
					<motion.p
						initial={{
							rotate: 5,
							scale: 1,
						}}
						animate={{
							rotate: -5,
							scale: 1.1,
						}}
						transition={{
							duration: 2,
							ease: [0.6, 0.01, -0.05, 0.95],
							repeat: "Infinity",
							repeatType: "reverse",
						}}
						className="text-10xl"
					>
						🤔
					</motion.p>
				</motion.div>
			</section>
			<Footer>made with 💜</Footer>
		</>
	);
}

const Footer = ({ children }) => {
	return (
		<div className="w-full py-16 px-28 flex justify-around items-center text-textDark dark:text-textLight bg-navbarBackgroundLight dark:bg-navbarBackgroundDark">
			{children}
		</div>
	);
};

const Italic = ({ children }) => <span className="italic">{children}</span>;

export default Landing;
