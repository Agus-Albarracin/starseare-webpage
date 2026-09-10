"use client"
import CountUp from "react-countup";
import { useReducedMotion } from "framer-motion";
import { MotionTransition } from "../MotionTransition";
import { dataCounter } from "./CounterData.data";

export function CounterData() {
    const reduceMotion = useReducedMotion();

    return (
        <section aria-label="Disponibilidad del servicio" className="px-6 py-8 md:py-12">
            <MotionTransition className="max-w-5xl mx-auto border-y border-white/10 py-8 md:py-10">
                <dl className="grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                    {dataCounter.map(({ id, startNumber, endNumber, text }) => (
                        <div key={id} className="flex flex-col items-center gap-3 px-6 py-6 text-center">
                            <dt className="text-base text-primaryDark">{text}</dt>
                            <dd className="order-first text-5xl font-semibold tabular-nums tracking-tight md:text-6xl">
                                <span className="sr-only">{endNumber}</span>
                                <span aria-hidden="true">
                                    {reduceMotion ? endNumber : (
                                        <CountUp start={startNumber} end={endNumber} duration={1.5} enableScrollSpy scrollSpyOnce />
                                    )}
                                </span>
                            </dd>
                        </div>
                    ))}
                </dl>
            </MotionTransition>
        </section>
    )
}
