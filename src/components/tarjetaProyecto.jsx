import React from 'react';
import { HiPhotograph } from 'react-icons/hi';

export const TarjetaProyecto = ({ imagen, classImage, titulo, subtitulo, onClickButton, children }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-10 border-2 lg:mx-14 p-7 rounded-lg">
            <img src={ imagen } alt="Imagen de proyecto" className={`cursor-pointer ${classImage}`}  onClick={onClickButton} />
            <div className="flex flex-col justify-between"> 
                <div>
                    <h3 className="text-2xl font-semibold">
                        { titulo }
                    </h3>
                    <h4 className="text-lg text-slate-400">
                        { subtitulo }
                    </h4>
                    { children }
                </div>
                <div className="flex justify-end">
                    <button 
                        className="w-full md:w-1/2 flex justify-between py-4 px-4 rounded-md bg-blue-800 text-white hover:bg-blue-900 focus:ring-4"
                        onClick={onClickButton}
                    >
                        Ver todas imagenes
                        <HiPhotograph size="22" />
                    </button>
                </div>
            </div>
        </div>
    )
}
