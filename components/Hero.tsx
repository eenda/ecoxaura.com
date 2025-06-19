import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className='relative w-full h-screen overflow-hidden'>
            <Image
                src='/img/BANNER_ECOX_AURA.webp'
                alt='Fondo de hero'
                fill
                className='object-cover'
                priority
            />
            <div className='absolute inset-0 bg-black/50' />
            <div className='relative z-10 flex items-center justify-center h-full px-6 md:px-16 lg:px-32'>
                <div className='relative flex flex-col max-w-md text-white md:left-20 lg:left-40 2xl:left-96 xl:left-80'>
                    <h1 className='text-4xl font-bold leading-tight md:text-5xl'>
                        Bienvenido a
                    </h1>
                    <span className='self-center block text-5xl italic font-bold text-raspberry-pink md:text-6xl'>
                        Ecox Aura
                    </span>
                    <p className='mt-6 text-lg md:text-xl'>
                        La tranquilidad de un embarazo cuidado, la emoción de
                        ver a tu bebé.
                    </p>
                    <Link
                        href='#services'
                        className='self-center inline-block px-6 py-3 mt-6 font-semibold text-black transition rounded-lg hover:text-white bg-lavender-pink hover:bg-raspberry-pink'
                    >
                        Nuestros Servicios
                    </Link>
                </div>
            </div>
        </section>
    );
}
