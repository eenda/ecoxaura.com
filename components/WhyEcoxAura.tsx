import React from 'react';
import Image from 'next/image';

export default function WhyEcoxAura() {
    return (
        <section className='py-16'>
            <div className='container relative mx-auto'>
                <div className='absolute hidden mt-4 w-14 right-2 xl:-right-8 -top-16 lg:w-16 md:block'>
                    <Image
                        src='/img/iconos/ECOX_AURA_ICONO_4.webp'
                        alt='Logo Ecox Aura'
                        width={80}
                        height={80}
                        className='object-contain'
                    />
                </div>
                <div className='flex flex-col-reverse items-center gap-8 px-6 mx-auto md:flex-row md:items-start'>
                    <div className='flex flex-1 gap-2'>
                        <div className='flex flex-col flex-1 gap-2 pt-4'>
                            <div className='flex w-2/3 overflow-hidden rounded-lg shadow-lg h-2/3 place-self-end'>
                                <Image
                                    src='/img/5d_foto/bebe_1.webp'
                                    alt='feature'
                                    width={200}
                                    height={200}
                                    className='object-cover w-full h-full border rounded-lg'
                                />
                            </div>
                            <div className='flex w-full h-full overflow-hidden rounded-lg shadow-lg'>
                                <Image
                                    src='/img/ECOGRAFIA-5D_1920X1080.webp'
                                    alt='feature'
                                    width={200}
                                    height={200}
                                    className='object-cover w-full h-full border rounded-lg'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col flex-1 gap-2 pb-4'>
                            <div className='flex w-full h-full overflow-hidden rounded-lg shadow-lg'>
                                <Image
                                    src='/img/5d_foto/women_scan.webp'
                                    alt='feature'
                                    width={200}
                                    height={200}
                                    className='object-cover w-full h-full border rounded-lg'
                                />
                            </div>
                            <div className='flex w-2/3 overflow-hidden rounded-lg shadow-lg h-2/3 place-self-start'>
                                <Image
                                    src='/img/5d_foto/bebe_2.webp'
                                    alt='feature'
                                    width={200}
                                    height={200}
                                    className='object-cover w-full h-full border rounded-lg'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center flex-1 space-y-6 text-center md:self-center md:text-left'>
                        <h2 className='text-2xl font-bold lg:text-3xl'>
                            ¿Por Qué Elegir{' '}
                            <span className='italic text-raspberry-pink'>
                                Ecox Aura
                            </span>{' '}
                            ?
                        </h2>
                        <ul className='space-y-2 lg:text-lg'>
                            <li className='flex flex-col text-start'>
                                <strong>Tu bebé en alta definición</strong>
                                <p>
                                    Tecnología 5D avanzada para ver cada
                                    detalle.
                                </p>
                            </li>
                            <li className='flex flex-col text-start'>
                                <strong>Recuerdos inolvidables</strong>
                                <p>
                                    Fotos impresas, videos en HD y archivos
                                    digitales.
                                </p>
                            </li>
                            <li className='flex flex-col text-start'>
                                <strong>Ubicación accesible en Tenerife</strong>
                                <p>
                                    Un entorno cálido y acogedor para que
                                    disfrutes este momento.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
