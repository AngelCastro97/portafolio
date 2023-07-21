import { useState, useEffect } from 'react';
import { HiOutlineArrowCircleDown } from 'react-icons/hi';
import { Link } from 'react-scroll';

import pdf from '../assets/CV-LuisAngelCastroRuiz.pdf';

export const Navbar = () => {
    
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Limpia el event listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <nav
            className={`fixed z-20 w-full flex flex-col md:flex-row justify-between gap-4 items-center px-6 lg:px-48 py-4 mb-5 ${isScrolled ? 'blur-on-scroll bg-white/80' : ''
                }`}
        >
            <div className="w-full md:w-auto px-1 flex md:flex-col justify-between items-center">
                <header className="text-black font-bold text-2xl cursor-pointer">
                    <Link 
                        to="sobre-mi" 
                        spy={true} 
                        smooth={true} 
                        offset={0} 
                        duration={500}
                    >
                        <span className="text-2xl text-blue-800">{'{ '}</span>
                        Angel Castro
                        <span className="text-2xl text-blue-800">{' }'}</span>
                    </Link> 
                </header>
                <a href={pdf} target="_blank" download="CV_Luis_Angel_Castro_Ruiz.pdf" className="md:hidden px-4 py-3 rounded-lg bg-blue-800 text-white hover:bg-blue-900 focus:ring-4">
                    Descargar CV
                </a>
            </div>
            <ul className="flex gap-10">
                <li className="cursor-pointer">
                    <Link 
                        to="sobre-mi" 
                        spy={true} 
                        smooth={true} 
                        offset={-150} 
                        duration={500}
                        activeClass="font-semibold text-blue-800 border-b-2 border-blue-800 pb-3"
                    >
                        Sobre mí
                    </Link> 
                </li>
                <li className="cursor-pointer">
                    <Link 
                        to="proyectos" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={500}
                        activeClass="font-semibold text-blue-800 border-b-2 border-blue-800 pb-3"
                    >
                        Proyectos
                    </Link> 
                </li>
                <li className="cursor-pointer">
                    <Link 
                        to="contacto" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={500}
                        activeClass="font-semibold text-blue-800 border-b-2 border-blue-800 pb-3"
                    >
                        Contacto
                    </Link> 
                </li>
            </ul>
            <a href={pdf} target="_blank" download="CV_Luis_Angel_Castro_Ruiz.pdf" className="hidden md:flex justify-between items-center gap-2 px-4 py-2.5 lg:py-3 rounded-lg bg-blue-800 text-white hover:bg-blue-900 focus:ring-4">
                Descargar CV
                <HiOutlineArrowCircleDown size="20" />
            </a>
        </nav>
    )
}
