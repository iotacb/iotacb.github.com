import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SlidingText from "../components/SlidingText";

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

export default Landing;
