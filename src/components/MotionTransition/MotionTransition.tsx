"use client"

import { MotionTransitionProps } from "./MotionTransition.types";
import { motion, useReducedMotion } from "framer-motion";

export function MotionTransition({ children, className }: MotionTransitionProps) {
    const reduceMotion = useReducedMotion()

    return (
        <div>
            <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut" }}
                className={className}
            >
                {children}
            </motion.div>
        </div>
    )
}
