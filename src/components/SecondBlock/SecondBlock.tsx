"use client"

import Link from "next/link"
import { BackgroundRadialLeft } from "../BackgroundRadialLeft"
import { Reveal } from "../Reveal"
import { blockinfodata } from "./Blockinfo.data"
import Image from "next/image"

export function SecondBlock() {
    return (
        <div className="relative px-6 py-20 md:py-40" id="features">
            <BackgroundRadialLeft />
            <div className="grid max-w-5xl mx-auto md:grid-cols-2">
                <div>
                    <Reveal>
                        <h2 className="text-5xl font-semibold">
                            <span className="block degradedBlue bg-blueLight">Tú seguridad </span>
                            es nuestro<br />
                            <span className="block degradedBlue bg-blueLight">principal deber </span>

                        </h2>
                    </Reveal>
                    <Reveal>
                        <p className="max-w-md mt-10">Nuestra Empresa opera mediante un sistema denominado <em>Pro-activo</em>.
                        <br />• Esto significa que no solo respondemos ante el hecho consumado, si no que tratamos de prevenir los problemas, imponiendo y haciendo cumplir todas la medidas necesarios e imprescindibles para tal efecto.
                        <br />• A través de este Sistema logramos evaluar y mejorar la eficiencia y calidad de los servicios prestados a nuestros clientes.</p>
                    
                    </Reveal>   
                </div>

                <div className="grid items-center py-5 md:p-8">
                    {blockinfodata.map(({ id, icon, title, description }) => (
                        <Reveal key={id}>
                            <div className="grid grid-flow-col gap-5 px-4 py-2 rounded-3xl group hover:bg-radialBlack">
                                <Image src={`/assets/${icon}.png`} alt={title} width={40} height={40} />
                                <div>
                                    <h4 className="text-primary">{title}</h4>
                                    <p className="text-primaryDark">{description}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    )
}
