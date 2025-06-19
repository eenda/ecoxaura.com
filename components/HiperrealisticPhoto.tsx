import React from 'react';
import Image from 'next/image';

export default function HiperrealisticPhoto() {
    const images = [
        '/img/hyperrealistic_photographs/bebe1.webp',
        '/img/hyperrealistic_photographs/bebe2.webp',
        '/img/hyperrealistic_photographs/bebe3.webp',
        '/img/hyperrealistic_photographs/bebe4.webp',
    ];

    return (
        <section className='relative py-16'>
            <div className='absolute inset-0'>
                <Image
                    src='/img/PATRON-LOGO_PARA-WEB_ECOX-AURA.webp'
                    alt='Patron logo ecox aura'
                    fill
                    className='object-cover'
                />
                <div className='absolute inset-0 bg-black/40' />
            </div>
            <h2 className='relative mb-8 text-3xl font-bold text-center text-white'>
                Ecografía Hiperrealista
            </h2>
            <div className='container relative flex flex-col items-center justify-center gap-2 px-6 mx-auto text-white lg:flex-row'>
                <div className='flex flex-col items-center gap-4 text-center md:text-left lg:items-start'>
                    <p className='text-lg md:text-xl'>
                        Una experiencia hiperrealista para conocer a tu bebé
                        ¿Quieres ver el rostro de tu bebé con una nitidez
                        impactante antes de tenerlo en tus brazos?
                    </p>
                    <p className='text-lg md:text-xl'>
                        En <span className='font-bold'>Ecox Aura</span> te
                        ofrecemos la posibilidad de añadir la{' '}
                        <span className='font-bold'>
                            ecografía hiperrealista 5D con IA
                        </span>{' '}
                        a tu sesión habitual. Gracias a la inteligencia
                        artificial, las imágenes se procesan en tiempo real para
                        eliminar sombras y mejorar los rasgos, ofreciéndote una
                        visualización increíblemente real de su carita, como si
                        ya estuviera aquí.
                    </p>
                    <p className='text-lg md:text-xl'>
                        Este extra está disponible a partir de la{' '}
                        <span className='font-bold'>semana 25</span> y es ideal
                        para quienes desean un recuerdo único, claro y muy
                        emocionante.
                    </p>
                    <div>
                        <p className='text-lg md:text-xl'>
                            Una imagen que no solo se ve, se siente.
                        </p>
                        <p className='text-lg font-bold md:text-xl'>
                            Añádelo a tu sesión por solo 30€.
                        </p>
                        <p className='text-lg md:text-xl'>
                            Solo tienes que indicarlo al hacer tu reserva.
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:mt-0'>
                    {images.map((src, idx) => (
                        <div
                            key={'bebe_' + idx}
                            className='flex justify-center'
                        >
                            <Image
                                src={src}
                                alt={`Galería imagen ${idx + 1}`}
                                width={600}
                                height={600}
                                className='object-cover rounded-xl '
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
