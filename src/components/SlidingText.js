import React from "react";
import { motion } from "framer-motion";

function SlidingText({ className, viewport, children, duration = 1, delay, y = 100 }) {
	return viewport === undefined ? (
		<motion.div className={`overflow-hidden flex items-center ${className}`}>
			<motion.span
				initial={{
					y: y,
				}}
				animate={{
					y: 0,
				}}
				transition={{
					ease: [0.6, 0.01, -0.05, 0.95],
					duration: duration,
					delay: delay,
				}}
				className="relative inline-block whitespace-nowrap"
			>
				{children}
			</motion.span>
		</motion.div>
	) : (
		<motion.div viewport={viewport} initial="initial" whileInView="animate" className={`overflow-hidden flex items-center ${className}`}>
			<motion.span
				variants={{
					initial: {
						y: y
					},
					animate: {
						y: 0,
						transition: {
							ease: [0.6, 0.01, -0.05, 0.95],
							duration: duration,
							delay: delay,
						}
					}
				}}
				className="relative inline-block whitespace-nowrap"
			>
				{children}
			</motion.span>
		</motion.div>
	);
}

export default SlidingText;
export {};
