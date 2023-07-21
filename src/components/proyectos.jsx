import { useState, useRef } from 'react';
import { TarjetaProyecto } from './tarjetaProyecto';
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

import palapasImg from '../assets/palapas/1.png';
import mitImg from '../assets/mit/1.png';
import taquitoImg from '../assets/gastos/principal.png';

import tsImg from '../assets/tecnologias/ts.png';
import nestImg from '../assets/tecnologias/nestjs.png';
import reactImg from '../assets/tecnologias/reactjs.png';
import reduxImg from '../assets/tecnologias/redux.png';
import awsImg from '../assets/tecnologias/aws-ec2.png';
import mysqlImg from '../assets/tecnologias/mysql.jpg';
import dartImg from '../assets/tecnologias/dart.png';
import flutterImg from '../assets/tecnologias/flutter.png';

export const Proyectos = () => {

    const thumbnailsRef = useRef(null);
    const zoomRef = useRef(null);

    const [openGallery, setOpenGallery] = useState(false);
    const [slides, setSlides] = useState([]);

    const onClickButton = ( proyect ) => {
        switch ( proyect ) {
            case 'balneario':
                setSlides([
                    { src: './src/assets/palapas/1.png' },
                    { src: './src/assets/palapas/2.png' },
                    { src: './src/assets/palapas/3.png' },
                    { src: './src/assets/palapas/4.png' },
                    { src: './src/assets/palapas/5.png' },
                    { src: './src/assets/palapas/6.png' },
                    { src: './src/assets/palapas/7.png' },
                    { src: './src/assets/palapas/8.png' },
                ]);
            break;
            case 'mit':
                setSlides([
                    { src: './src/assets/mit/1.png' },
                    { src: './src/assets/mit/2.png' },
                    { src: './src/assets/mit/3.png' },
                    { src: './src/assets/mit/4.png' },
                    { src: './src/assets/mit/5.png' },
                    { src: './src/assets/mit/6.png' },
                    { src: './src/assets/mit/7.png' },
                    { src: './src/assets/mit/8.png' },
                    { src: './src/assets/mit/9.png' },
                ]);
            break;
            case 'taquito':
                setSlides([
                    { src: './src/assets/gastos/1.jpeg' },
                    { src: './src/assets/gastos/2.jpeg' },
                    { src: './src/assets/gastos/3.jpeg' },
                    { src: './src/assets/gastos/4.jpeg' },
                    { src: './src/assets/gastos/5.jpeg' },
                    { src: './src/assets/gastos/6.jpeg' },
                    { src: './src/assets/gastos/7.jpeg' },
                    { src: './src/assets/gastos/8.jpeg' },
                    { src: './src/assets/gastos/9.jpeg' },
                    { src: './src/assets/gastos/10.jpeg' },
                    { src: './src/assets/gastos/11.jpeg' },
                ]);
            break;
        }

        setOpenGallery(true);
    }

    return (
        <>
            <div id="proyectos" className="w-full p-8 md:px-16 lg:px-0">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-3">Proyectos que he desarrollado</h2>
                    <p className="text-xl max-w-4xl text-slate-500">
                        En esta sección, tengo el placer de compartir una selección de proyectos en los que he trabajado como apasionado ingeniero de software.
                    </p>
                </div>
                <div className="grid mt-10 gap-5 pb-10">
                    <TarjetaProyecto
                        imagen={palapasImg}
                        titulo={'Balneario las palapas (texcoco)'}
                        subtitulo={'Desarrollo e implementación de aplicación web para la gestion de pagos virtuales VPAY.'}
                        onClickButton={() => onClickButton('balneario')}
                    >
                        <ul className="list-disc list-outside my-3 ml-5">
                            <li>Realice la ingenieria de requerimientos utilizando el estandar IEEE830.</li>
                            <li>Diseñé el modelo relacional de la base de datos datos.</li>
                            <li>Creé una RESTFul API con TypeScript, NestJS y TypeORM.</li>
                            <li>Desarrollé una SPA con TypeScript, ReactJS y Redux.</li>
                            <li>Desplegué el proyecto en un servidor Ubuntu 22.04 en una instancia EC2 de AWS.</li>
                        </ul>

                        <div className="mb-4">
                            <p className="font-semibold">Tecnologias:</p>
                            <div className="flex gap-2 p-3 overflow-auto">
                                <img src={mysqlImg} alt="logo mysql" className="w-12" />
                                <img src={tsImg} alt="logo typescript" className="w-12" />
                                <img src={nestImg} alt="logo nestjs" className="w-12" />
                                <img src={reactImg} alt="logo reactjs" className="w-12" />
                                <img src={reduxImg} alt="logo react redux toolkit" className="w-12" />
                                <img src={awsImg} alt="logo aws ec2" className="w-12" />
                            </div>
                        </div>
                    </TarjetaProyecto>
                    <TarjetaProyecto
                        imagen={mitImg}
                        titulo={'Residencias Profesionales, MIT Digital'}
                        subtitulo={'Desarrollo de aplicación web como apoyo en el proceso de selección y reclutamiento de personal en la empresa MIT Digital.'}
                        onClickButton={() => onClickButton('mit')}
                    >
                        <ul className="list-disc list-outside my-3 ml-5">
                            <li>Se aplicó la metodología XP para el desarrollo del software.</li>
                            <li>Recolecté datos a través de historias de usuario, tareas de ingeniería y tarjetas CRC.</li>
                            <li>
                                Realicé el modelado UML, incluyendo casos de uso y estados, para definir la arquitectura y funcionalidad
                                del sistema de manera visual
                            </li>
                            <li>Utilicé el diagrama entidad-relación para diseñar y estructurar la base de datos.</li>
                            <li>Implementé el Sistema de Gestión de Bases de Datos MySQL para crear y administrar la base de datos.</li>
                            <li>Desarrollé una RESTFul API utilizando Typescript con NestJS y el ORM TypeORM.</li>
                            <li>
                                Creé una Single Page Application (SPA) en Typescript con ReactJS, Redux como gestor de estados y Tailwind
                                CSS para una interfaz de usuario atractiva y altamente funcional.
                            </li>
                        </ul>

                        <div className="mb-4">
                            <p className="font-semibold">Tecnologias:</p>
                            <div className="flex gap-2 p-3 overflow-auto">
                                <img src={mysqlImg} alt="logo mysql" className="w-12" />
                                <img src={tsImg} alt="logo typescript" className="w-12" />
                                <img src={nestImg} alt="logo nestjs" className="w-12" />
                                <img src={reactImg} alt="logo reactjs" className="w-12" />
                                <img src={reduxImg} alt="logo react redux toolkit" className="w-12" />
                            </div>
                        </div>
                    </TarjetaProyecto>
                    <TarjetaProyecto
                        imagen={taquitoImg}
                        classImage="md:max-w-lg flex justify-self-center"
                        titulo={'El taquito del sur (texcoco)'}
                        subtitulo={'Desarrollo e implementación de aplicación móvil para asignación de presupuestos y gestión de gastos en las diferentes sucursales del Taquito del sur.'}
                        onClickButton={() => onClickButton('taquito')}
                    >
                        <ul className="list-disc list-outside my-3 ml-5">
                            <li>Diseñé el modelo relacional de la base de dato.</li>
                            <li>Utilicé MySQL como SGBD para la base de datos.</li>
                            <li>Creé una RESTFul API con Java Script y NodeJS con Express.</li>
                            <li>Desarrollé una aplicacion movil con Dart y el SDK de Flutter.</li>
                            <li>Desplegué la API en un servidor local con Windows Server 2019.</li>
                        </ul>

                        <div className="mb-4 overflow-y-auto">
                            <p className="font-semibold">Tecnologias:</p>
                            <div className="flex gap-2 p-3 overflow-auto">
                                <img src={mysqlImg} alt="logo mysql" className="w-12" />
                                <img src={tsImg} alt="logo typescript" className="w-12" />
                                <img src={dartImg} alt="logo dart" className="w-12" />
                                <img src={flutterImg} alt="logo flutter" className="w-12" />
                                <img src={nestImg} alt="logo nestjs" className="w-12" />
                                <img src={reactImg} alt="logo reactjs" className="w-12" />
                                <img src={reduxImg} alt="logo react redux toolkit" className="w-12" />
                            </div>
                        </div>
                    </TarjetaProyecto>
                </div>
            </div>
            <Lightbox
                open={openGallery}
                close={() => setOpenGallery(false)}
                slides={slides}
                plugins={[Thumbnails, Zoom, Counter]}
                counter={{ container: { style: { top: "unset", bottom: 0 } } }}
                thumbnails={{ ref: thumbnailsRef, showToggle: true }}
                zoom={{ ref: zoomRef }}
                on={{
                  click: () => {
                    (thumbnailsRef.current?.visible
                      ? thumbnailsRef.current?.hide
                      : thumbnailsRef.current?.show)?.();
                    zoomRef.current?.zoomIn();
                  },
                }}
            />
        </>
    )
}
