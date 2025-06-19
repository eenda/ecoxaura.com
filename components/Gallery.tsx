import Image from 'next/image';
import React from 'react';

const images = [
    '/img/5d_foto/bebe_1.webp',
    '/img/5d_foto/bebe_2.webp',
    '/img/5d_foto/bebe_3.webp',
    '/img/5d_foto/women_scan.webp',
];

export default function Gallery() {
    return (
        <section className='py-16'>
            <div className='container px-6 mx-auto'>
                <h2 className='mb-8 text-3xl font-bold text-center'>Galería</h2>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
                    {images.map((src, idx) => (
                        <div
                            key={'bebe_'+idx}
                            className='flex justify-center'
                        >
                            <Image
                                src={src}
                                alt={`Galería imagen ${idx + 1}`}
                                width={600}
                                height={600}
                                className='object-cover transition-transform rounded-xl hover:scale-105'
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
