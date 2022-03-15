import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SlidingText from "../components/SlidingText";

import sharringsImage from "../assets/images/projects/sharrings.webp";
import cssBattleImage from "../assets/images/projects/cssbattle.webp";

function Projects() {
	const Logo = () => <h1 className="cursor-pointer text-4xl font-bold">cb</h1>;
	const [isDarkTheme, setIsDarkTheme] = useState(
		document.documentElement.classList.contains("dark") || localStorage.getItem("dark-theme") === "true"
	);

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

	const projects = [
		{
			title: "Sharrings",
			image: sharringsImage,
			description: "Sharrings is a platform to keep all your socials at one place.",
			href: "https://sharrin.gs/",
		},
		{
			title: "CSSBattle Optimizer",
			image: cssBattleImage,
			description: "A website to optimize css code for cssbattle.com",
			href: "https://www.cssbattleoptimizer.com/",
		},
	];

	return (
		<>
			<Navbar logo={<Logo />} links={links} />
			<section className="w-full min-h-screen flex flex-col justify-center items-center relative p-20 mt-10">
				<div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
					{projects &&
						projects.map((project, i) => (
							<ProjectCard
								i={i}
								key={i}
								href={project.href}
								onClick={project.onClick}
								title={project.title}
								image={project.image}
								description={project.description}
							/>
						))}
				</div>
			</section>
			<Footer>made with 💜</Footer>
		</>
	);
}

const ProjectCard = ({ i, title, image, href, description, onClick = () => {} }) => {
	return (
		<motion.a
			initial={{
				opacity: 0,
				y: "-10%",
				rotate: 5,
				scale: 0.8,
			}}
			animate={{
				opacity: 1,
				y: 0,
				rotate: 0,
				scale: 1,
			}}
			transition={{
				delay: 0.1 * i,
				ease: [0.6, 0.01, -0.05, 0.95],
				duration: .6,
				type: "spring",
				bounce: .3,
			}}
			whileHover={{
				scale: 1.01
			}}
			whileTap={{ scale: 0.99 }}
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			onClick={onClick}
			className="flex flex-col rounded-md overflow-hidden bg-navbarBackgroundLight dark:bg-navbarBackgroundDark cursor-pointer shadow-smooth dark:shadow-none"
		>
			<img className="w-full rounded-b-2xl" src={image} />
			<div className="w-full flex flex-col px-6 py-4">
				<h1 className="text-3xl lg:text-4xl font-bold inline-block py-4 text-textDark dark:text-textLight">{title}</h1>
				<p className="text-xl inline-block py-4 text-textDark dark:text-textLight">{description}</p>
			</div>
		</motion.a>
	);
};

export default Projects;
