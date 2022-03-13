import React from "react";

import SocialButton from "./SocialButton"

import GithubIcon from "../assets/images/GithubIcon";
import CodepenIcon from "../assets/images/CodepenIcon";
import InstagramIcon from "../assets/images/InstagramIcon";

function Footer({ children }) {
	return (
		<div className="w-full py-8 px-28 flex justify-around items-center text-textDark dark:text-textLight bg-navbarBackgroundLight dark:bg-navbarBackgroundDark">
			{children}
			<div className="flex gap-4">
				<SocialButton href="https://github.com/iotacb" image={<GithubIcon/>} className="fill-textLight dark:fill-textDark"/>
				<SocialButton href="https://codepen.io/iotacb" image={<CodepenIcon/>} className="fill-textLight dark:fill-textDark"/>
				<SocialButton href="https://www.instagram.com/chris.brandt09/" image={<InstagramIcon/>} className="fill-textLight dark:fill-textDark"/>
			</div>
		</div>
	);
}

export default Footer;
export {};
