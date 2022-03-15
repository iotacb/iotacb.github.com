import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar({ logo, links, onChange = () => {}, onLogoClick = () => {}, scrollThreshold = 60 }) {
	const nav = useNavigate();
	const [isOpen, setIsOpen] = useState();
	const [isScrolled, setIsScrolled] = useState();

	useEffect(() => {
		const checkScroll = () => {
			if (scrollThreshold > -1) {
				setIsScrolled(window.pageYOffset > scrollThreshold);
			}
		};

		window.addEventListener("scroll", () => checkScroll());
		checkScroll();

		return window.removeEventListener("scroll", checkScroll);
	}, [scrollThreshold]);

	const LinkItem = ({ link, className }) => {
		return (
			<motion.div
				className={`cursor-pointer text-textDark dark:text-textLight ${className}`}
				onClick={() => {
					if (link.href) {
						nav(link.href);
					} else {
						if (link.onClick) {
							link.onClick();
						}
					}
				}}
			>
				{link.name ? link.name : link.component ? link.component : <></>}
			</motion.div>
		);
	};

	const handleBurgerClick = () => {
		onChange();
		setIsOpen(!isOpen);
	};

	return (
		<>
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
					duration: 1,
				}}
				className={`fixed top-0 left-0 w-full h-[85px] flex text-textDark dark:text-textLight justify-around items-center z-50 backdrop-blur-md bg-navbarBackgroundLight/80 dark:bg-navbarBackgroundDark/80`}
			>
				<div onClick={() => {nav("/"); onLogoClick()}} className="cursor-pointer">
					{logo}
				</div>
				<div className="hidden gap-4 md:flex items-center">
					{links &&
						links.map((link, index) => (
							<LinkItem index={index} key={index} link={link} />
						))}
				</div>
				<div
					onClick={handleBurgerClick}
					className="w-10 h-8 flex flex-col justify-between relative cursor-pointer md:hidden"
				>
					<div
						className={`w-full h-1 bg-backgroundDark dark:bg-backgroundLight duration-300 ${
							isOpen && "rotate-45 translate-y-4"
						}`}
					></div>
					<div
						className={`w-full h-1 bg-backgroundDark dark:bg-backgroundLight duration-300 ${
							isOpen && "opacity-0 scale-50"
						}`}
					></div>
					<div
						className={`w-full h-1 bg-backgroundDark dark:bg-backgroundLight duration-300 ${
							isOpen && "-rotate-45 -translate-y-3"
						}`}
					></div>
				</div>
			</motion.div>
			<div
				className={`fixed top-0 left-0 duration-300 w-screen h-screen flex justify-center items-center bg-navbarBackgroundLight/80 dark:bg-navbarBackgroundDark/80 z-40 backdrop-blur-md ${
					!isOpen && "translate-x-full"
				} md:hidden`}
			>
				<div className="flex flex-col gap-4">
					{links &&
						links.map((link, index) => (
							<LinkItem
								key={index}
								link={link}
								className="text-3xl duration-150 hover:tracking-wider text-center"
							/>
						))}
				</div>
			</div>
		</>
	);
}

export default Navbar;
