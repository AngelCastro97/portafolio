import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';

import angelImg from "../assets/fondo-angel-castro-sm.svg";

export const Inicio = () => {
    return (
        <div id="sobre-mi" className="w-full flex flex-col-reverse lg:flex-row justify-between pt-32 md:pt-24 p-8 md:px-16 lg:px-0">
            <section className="m-auto text-center lg:text-left">
                <h3 className="text-4xl">Hola a todos,</h3>
                <h1 className="text-6xl font-bold mb-4">Soy Angel Castro</h1>
                <h5 className="text-3xl font-medium text-blue-800">Ingeniero de Software</h5>
                <p className="text-lg text-center lg:text-justify my-6 text-slate-500 w-full lg:w-[33rem]">
                    Con experiencia en el desarrollo de proyectos independientes. Capaz de analizar requerimientos, diseñar propuestas y participar en implementaciones exitosas. Apasionado por la tecnología y comprometido con la excelencia en el desarrollo de soluciones.
                </p>
                <div className="flex gap-3 items-center justify-center lg:justify-start">
                    <a 
                        href="https://www.linkedin.com/in/luis-angel-castro-ruiz-01248327b/" target="_blank" className="rounded-full p-2 hover:bg-blue-100"
                    >
                        <FaLinkedin className="text-blue-700" size="32" />
                    </a>
                    <a 
                        href="https://github.com/AngelCastro97" target="_blank" 
                        className="rounded-full p-2 hover:bg-stone-200"
                    >
                        <FaGithub size="32" />
                    </a>
                    <a 
                        href="mailto:castroruizluisangel@gmail.com" target="_blank" 
                        className="rounded-full p-2 hover:bg-red-100"
                    >
                        <BiLogoGmail className="text-red-500" size="44" />
                    </a>
                </div>
            </section>    
            <div className="flex justify-center lg:justify-end mb-5">
                <figure>
                    <img src={angelImg} alt="Imagen de Angel Castro"/>
                </figure>
            </div>
        </div>
    )
}
