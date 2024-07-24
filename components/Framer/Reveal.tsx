"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
    CustomClass?: string | "";
}

export const Reveal = ({ children, width = "fit-content", CustomClass = "" }: Props) => {
    const ref = useRef(null);
    const mainControl = useAnimation();
    const isInView = useInView(ref, { once: true });

    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 75 },
    };

    useEffect(() => {
        if (isInView) {
            mainControl.start("visible");
        }
    }, [isInView]);

    return (
        <div ref={ref} className={cn("overflow-hidden relative", CustomClass)}>
            <motion.div
                initial="hidden"
                variants={variants}
                animate={mainControl}
                transition={{
                    duration: 0.6,
                    delay: 0.25,
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};
