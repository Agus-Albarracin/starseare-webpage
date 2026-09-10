"use client"

import { motion, useReducedMotion } from "framer-motion"

export function Reveal({ children }: { children: React.ReactNode }) {
    const reduceMotion = useReducedMotion()

    return (
        <motion.div
            className="relative min-w-0"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    )
}
