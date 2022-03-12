import { useState, useEffect, Fragment } from "react";
import { motion } from "framer-motion";
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
	const [isDarkTheme, setIsDarkTheme] = useState(
		document.documentElement.classList.contains("dark") ||
			localStorage.getItem("dark-theme") === "true"
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

	return (
		<>
			<Navbar logo={<Logo />} links={links} />
			<section className="w-full h-[50vh] md:h-screen flex justify-center items-center relative">
				<Title />
				<Accessories />
				<SeeMore />
			</section>
			<section className="w-full relative flex flex-col items-center justify-center gap-12 px-8 pb-20 md:px-40 md:py-40">
				<AboutMe />
				<Projects />
			</section>
			<Footer>made with 💜</Footer>
		</>
	);
}

const Title = () => (
	<div className="font-bold text-textDark dark:text-textLight text-6xl md:text-8xl lg:text-10xl lg:leading-[10rem]">
		<SlidingText y={160} delay={0.2}>
			Hey there,
		</SlidingText>
		<SlidingText y={160} delay={0.4} className="xl:-ml-20">
			i'm <span className="italic">chris</span>.
		</SlidingText>
	</div>
);

const Accessories = () => {
	const images = [
		{
			style: "hidden lg:block absolute md:left-[10%] md:top-52",
			src: accessory1,
			rotate: true,
		},
		{
			style: "hidden md:block absolute md:left-[8%] md:top-36",
			src: accessory2,
			rotate: true,
		},
		{
			style: "hidden md:block absolute md:left-[20%] md:top-[80vh]",
			src: accessory3,
			rotate: true,
		},
		{
			style: "hidden md:block absolute md:right-20 md:top-[70vh]",
			src: accessory5,
			rotate: true,
		},
		{
			style: "hidden md:block absolute md:top-48 md:right-56",
			src: accessory6,
			rotate: true,
		},
		{
			style: "hidden md:block absolute md:top-[70vh] md:left-[60%]",
			src: accessory7,
			rotate: true,
		},
		{
			style: "hidden md:block absolute md:right-[20%] md:top-[100vh]",
			src: accessory3,
			rotate: true,
		},
		{
			style:
				"absolute left-0 top-20 md:top-0 scale-150 md:scale-100 rotate-[320deg] md:rotate-0 w-[150vw] -z-10",
			path: {
				d: "M1924,1075.29c-227.83-73-338-181.07-396.45-265.08-70.48-101.28-55.44-152.86-143.37-316.68-64-119.23-213.87-356.31-302.14-332.44C997.44,184,1057.54,422.84,944.34,475.82,848.86,520.49,733.14,384.68,507,288.19,314.35,206,121.42,191.25-6.93,192.5",
				stroke: "#7B57C6",
				opacity: 0.5,
				width: 3,
			},
		},
	];
	return (
		<div className="absolute -z-10 w-full h-full">
			{images &&
				images.map((image, i) => (
					<Fragment key={i}>
						{image.path === undefined ? (
							<ParallaxComponent speed={image.noParallax ? 0 : i + 1}>
								<motion.img
									src={image.src}
									className={image.style}
									initial={{
										rotate: !image.rotate ? 0 : i % 2 === 0 ? -45 : 45,
										y: !image.rotate ? 0 : i % 2 === 0 ? -50 : 50,
										opacity: 0,
									}}
									animate={{
										rotate: 0,
										y: 0,
										opacity: 1,
									}}
									transition={{
										duration: 1,
										delay: image.noParallax ? 0.5 : (images.length - i) * 0.1,
										type: "spring",
										bounce: 0.5,
									}}
								/>
							</ParallaxComponent>
						) : (
							<div className={image.style}>
								<svg viewBox="0 0 1920 1080">
									<motion.path
										initial={{
											pathLength: 0,
										}}
										animate={{
											pathLength: 1,
										}}
										transition={{
											duration: 2,
										}}
										d={image.path.d}
										fill="none"
										stroke={image.path.stroke}
										strokeWidth={image.path.width}
										strokeOpacity={image.path.opacity}
									/>
								</svg>
							</div>
						)}
					</Fragment>
				))}
		</div>
	);
};

const SeeMore = ({ onClick }) => {
	return (
		<motion.div
			initial={{
				y: -40,
				opacity: 0,
			}}
			animate={{
				y: 0,
				opacity: 1,
			}}
			transition={{
				ease: [0.6, 0.01, -0.05, 0.95],
				duration: 1,
				delay: 1,
			}}
			onClick={onClick}
			className={`hidden absolute text-textDark dark:text-textLight cursor-pointer md:flex flex-col justify-center items-center bottom-20`}
		>
			<motion.a
				initial={{
					y: -5,
				}}
				animate={{
					y: 0,
				}}
				transition={{
					duration: 1,
					type: "spring",
					repeat: "Infinity",
					repeatType: "reverse",
					bounce: 0.5,
				}}
				href="#about"
			>
				See more
			</motion.a>
			<motion.div
				animate={{
					scale: [0.9, 1],
				}}
				transition={{
					duration: 1,
					type: "spring",
					repeat: "Infinity",
					repeatType: "reverse",
					bounce: 0.5,
				}}
				className="w-80 h-1 bg-backgroundDark/50 dark:bg-backgroundLight/50 rounded-sm"
			></motion.div>
		</motion.div>
	);
};

const AboutMe = () => {
	return (
		<div
			id="about"
			className="xl:self-start w-full xl:w-1/2 scroll-m-40 flex flex-col gap-8"
		>
			<div className="relative w-fit">
				<SlidingText
					viewport={{
						amount: 1,
						once: true,
					}}
					className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold inline-block text-textDark dark:text-textLight"
				>
					'bout me
				</SlidingText>
				<motion.img
					initial={{
						opacity: 0,
					}}
					whileInView={{
						opacity: 1,
					}}
					viewport={{
						amount: 1,
						once: true,
					}}
					transition={{
						ease: [0.6, 0.01, -0.05, 0.95],
						duration: 0.6,
					}}
					className="absolute top-2 -right-8 lg:top-6 -z-10"
					src={outline}
				/>
			</div>
			<motion.div
				initial={{
					y: 100,
					opacity: 0,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				viewport={{
					amount: 0.1,
					once: true,
				}}
				transition={{
					ease: [0.6, 0.01, -0.05, 0.95],
					duration: 1,
				}}
				className="font-medium text-2xl md:text-4xl xl:text-6xl text-textDark dark:text-textLight"
			>
				i’m a <Italic>20 year old</Italic> developer from{" "}
				<Italic>germany</Italic>. I mainly work with <Italic>javascript</Italic>{" "}
				and <Italic>react</Italic> at the moment. i like to build
				<Italic>web pages</Italic> and <Italic>beautiful ui</Italic>.
			</motion.div>
		</div>
	);
};

const Projects = () => {
	const nav = useNavigate();
	return (
		<div
			id="projects"
			className="xl:self-end w-full xl:w-1/2 scroll-m-40 flex flex-col gap-8"
		>
			<div className="relative w-fit">
				<SlidingText
					viewport={{
						amount: 1,
						once: true,
					}}
					className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold inline-block text-textDark dark:text-textLight"
				>
					my projects
				</SlidingText>
				<motion.img
					initial={{
						opacity: 0,
					}}
					whileInView={{
						opacity: 1,
					}}
					viewport={{
						amount: 1,
						once: true,
					}}
					transition={{
						ease: [0.6, 0.01, -0.05, 0.95],
						duration: 0.6,
					}}
					className="absolute top-2 -right-8 lg:top-6 -z-10"
					src={outline}
				/>
			</div>
			<motion.div
				initial={{
					y: 100,
					opacity: 0,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				viewport={{
					amount: 0.1,
					once: true,
				}}
				transition={{
					ease: [0.6, 0.01, -0.05, 0.95],
					duration: 1,
				}}
				className="font-medium text-2xl md:text-4xl xl:text-6xl text-textDark dark:text-textLight"
			>
				<p>
					<p
						onClick={() => nav("/projects")}
						className="text-accent hover:text-accentLight transition-colors cursor-pointer"
					>
						here
					</p>{" "}
					you can a all of my projects and get information about them
				</p>
			</motion.div>
		</div>
	);
};

const Footer = ({ children }) => {
	return (
		<div className="w-full py-16 px-28 flex justify-around items-center text-textDark dark:text-textLight bg-navbarBackgroundLight dark:bg-navbarBackgroundDark">
			{children}
		</div>
	);
};

const Italic = ({ children }) => <span className="italic">{children}</span>;

export default Landing;
