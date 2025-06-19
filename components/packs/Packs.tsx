import React from 'react';
import Image from 'next/image';
import { packData } from 'data/Pack';
import Pack from './Pack';

export default function Packs() {
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
            <div className='relative z-10 mx-auto'>
                <h2 className='text-4xl font-bold text-center text-white'>
                    Descubre nuestros Packs y recuerdos
                </h2>
                <div className='grid items-stretch grid-cols-1 gap-8 px-6 my-12 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
                    {packData.map((pack) => (
                        <Pack key={pack.title} {...pack} />
                    ))}
                </div>
            </div>
        </section>
    );
}
