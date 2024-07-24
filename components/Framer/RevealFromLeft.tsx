"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
    CustomClass?: string | "";
    delayVariant?:{ duration: number, delay: number }
}

export const RevealFromLeft = ({ children, width = "fit-content", CustomClass = "",  delayVariant={ duration: 0.5, delay: 0.25} }: Props) => {
    const ref = useRef(null);
    const mainControl = useAnimation();
    const isInView = useInView(ref, { once: true });

    const variants = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -75 },
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
                transition={delayVariant}>
                {children}
            </motion.div>
        </div>
    );
};
