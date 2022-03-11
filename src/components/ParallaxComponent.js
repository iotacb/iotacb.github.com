import React, { useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

function ParallaxComponent({children, speed = 1, className = ""}) {
    const { scrollYProgress } = useViewportScroll();
    const yOffset = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);

    return <motion.div className={className} style={{ y: yOffset}}>
        {children}
    </motion.div>;
}

export default ParallaxComponent
export {}