"use client"

import Image from "next/image"
import { MotionTransition } from "../MotionTransition"
import { Reveal } from "../Reveal"

export function AdicionalBlock() {
    return (
        <div className="relative p-4 py-20 md:py-20">
            <div className="flex flex-col-reverse max-w-5xl mx-auto md:flex-row place-content-evenly">
                <MotionTransition className="flex-1 p-6 md:p-8">
                    <Image src="/assets/last-block-animation.gif" alt="Control Business" width="580" height={411} className="w-full h-auto" />
                </MotionTransition>
                <div className="flex-1 p-6 md:p-8">
                    <Reveal>
                        <h2 className="text-5xl font-semibold">
                            Equipo de trabajo <br />
                            altamente capacitado.
                        </h2>
                    </Reveal>   
                    <Reveal>
                        <p className="max-w-md mt-10">La selección del mismo es el resultado de un proceso de exámenes físicos, psicológicos y psicotécnicos, llevados  acabo por profesionales competentes que certifican su aptitud e idoneidad para ejercer los diferentes cargos, conjuntamente con un exhaustivo de antecedentes y curriculum de cada postulante.</p>
                    </Reveal>
                </div>
            </div>
        </div>
    )
}
