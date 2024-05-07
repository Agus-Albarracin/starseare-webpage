"use client"
import Link from "next/link"
import { BackgroundRadialRight } from "../BackgroundRadialRight"
import { MotionTransition } from "../MotionTransition"
import Image from "next/image"
import { Reveal } from "../Reveal"


export function FirstBlock() {
    return (
        <div className="relative p-4 md:py-40">
            <BackgroundRadialRight />
            <div className="grid max-w-5xl mx-auto md:grid-cols-2">
                <div>
                    <Reveal>
                        <h1 className="text-5xl font-semibold">
                            Seguridad
                            <span className="block degradedBlue bg-blueLight">
                                Privada
                            </span>
                            para todos
                        </h1>   
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10">Somos una empresa de seguridad tanto pública como privada, con personal altamente capacitado bajo disciplinas comprobables.
                        <br /> Utilizamos metodologías de acción tecnológicas y de alta sofisticación para lograr y cumplir los objetivos.
                        <br /> Nuestro servicio es responsable de una reputación solida dentro del marco legal y responsabilidad.</p>
                    </Reveal>
                </div>
                <MotionTransition className="flex items-center justify-center">
                    <Image src="/assets/first-block-animation.gif" alt="Card" width={450} height={450} className="h-auto w-72 md:w-full" />
                </MotionTransition>
            </div>
        </div>
    )
}
