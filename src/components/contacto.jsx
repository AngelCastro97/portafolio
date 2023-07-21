import React, { useMemo, useState } from 'react';
import { HiOutlineArrowSmRight } from 'react-icons/hi';
import { ImSpinner2 } from 'react-icons/im';
import emailjs from '@emailjs/browser';
import { enqueueSnackbar } from 'notistack';


const initialFormState = {
    nombre: '',
    correo: '',
    mensaje: ''
}


export const Contacto = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [formValues, setFormValues] = useState(initialFormState);

    const isFormValid = useMemo(() => {
        const { nombre, correo, mensaje } = formValues;
        
        if( nombre == '' || correo == '' || mensaje == '' ) {
            return false;
        }

        return true;
    }, [ formValues ]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormValues({
            ...formValues,
            [ name ]: value
        });
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if(!isFormValid) return;

        setIsLoading(true);

        emailjs.send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID, 
            formValues, 
            import.meta.env.VITE_PUBLIC_KEY
        )
            .then(() => {
                enqueueSnackbar('Se envió su información con exíto, pronto lo contactare', { variant: 'success' });
                setIsLoading(false);
                setFormValues(initialFormState);
            }, () => {
                enqueueSnackbar('Ocurrio un error al enviar la información, intentelo nuevamente mas tarde', { variant: 'error' });
                setIsLoading(false);
            });
    }

    return (
        <div id="contacto" className="w-full p-8 h-screen md:px-16 lg:px-0">
            <div className="flex flex-col items-center text-center">
                <h2 className="text-3xl lg:text-5xl font-bold mb-3">Pongase en contacto conmigo</h2>
                <p className="text-xl max-w-4xl text-slate-500">
                    Listo para colaborar. Si necesita un desarrollador para su empresa o un proyecto donde pueda contribuir, contácteme. ¡Unamos fuerzas para alcanzar sus objetivos!
                </p>
            </div>
            <form className="flex flex-col mt-10 max-w-lg mx-auto" onSubmit={onSubmit}>
                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-lg font-medium text-slate-800">Nombre</label>
                    <input 
                        className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800" 
                        type="text" 
                        id="nombre" name="nombre" 
                        placeholder="Ingrese su nombre"
                        onChange={onInputChange} 
                        value={formValues.nombre}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="correo" className="block text-lg font-medium text-slate-800">Correo</label>
                    <input 
                        className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800" 
                        type="email" 
                        id="correo" name="correo" 
                        placeholder="Ingrese su correo"
                        onChange={onInputChange}
                        value={formValues.correo}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="mensaje" className="block text-lg font-medium text-slate-800">Mensaje</label>
                    <textarea 
                        className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800" 
                        id="mensaje" name="mensaje" 
                        rows="4" 
                        placeholder="Ingrese su mensaje"
                        onChange={onInputChange}
                        value={formValues.mensaje}
                    ></textarea>
                </div>
                <button
                    type="submit" 
                    className="w-full flex justify-between py-4 px-4 rounded-md bg-blue-800 text-white hover:bg-blue-900 focus:ring-4 disabled:bg-blue-300"
                    disabled={ !isFormValid || isLoading }
                >
                    { !isLoading
                        ? ( 
                            <>
                                Enviar
                                <HiOutlineArrowSmRight size="24" />
                            </>
                        ) : (
                            <>
                                Enviando
                                <ImSpinner2 className="animate-spin" size="20" />
                            </>
                        )

                    }
                </button>
            </form>
        </div>
    )
}
