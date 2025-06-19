import React from 'react';
import Image from 'next/image';

export default function CTA() {
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

            <div className='container relative z-10 flex flex-col items-center justify-center h-full px-6 mx-auto text-white md:flex-row'>
                <div className='flex flex-col items-center px-4 mb-8 md:items-center md:mb-0'>
                    <div className='w-32 h-32 overflow-hidden rounded-full shadow-lg'>
                        <Image
                            src='/img/iconos/ECOX_AURA_ICONO_3.webp'
                            alt='Sophia Jenkins'
                            width={128}
                            height={128}
                            className='object-cover'
                        />
                    </div>
                </div>
                <div className='flex flex-col items-center max-w-2xl text-center md:text-left md:items-start'>
                    <p className='text-lg font-medium md:text-xl'>
                        Tu primera ecografía emocional 5D es totalmente{' '}
                        <span className='italic font-semibold'>GRATIS</span> si
                        reservas cualquier otra sesión con nosotros.
                    </p>
                    <p className='mt-2 text-lg font-medium md:text-xl'>
                        Porque en Ecox Aura creemos{' '}
                        <span className='italic font-semibold'>
                            que cada mamá merece vivir esta conexión única,{' '}
                        </span>
                        sin importar en qué etapa esté.
                    </p>
                </div>
            </div>
        </section>
    );
}
