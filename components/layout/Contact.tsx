import React from 'react';
import { FaClock } from 'react-icons/fa';

export default function Contact() {
    return (
        <section className='relative'>
            <div className='py-6 text-white bg-raspberry-pink'>
                <div className='flex flex-col items-center justify-around px-8 mx-auto space-y-6 text-center lg:p-6 md:flex-row md:text-left md:space-y-0'>
                    <div className='flex items-center space-x-3'>
                        <FaClock className='w-8 h-8 lg:h-10 lg:w-10' />
                        <div className='text-sm lg:text-lg xl:text-2xl'>
                            <p>Lun - Jue 10:00 – 14:00, 15:00 – 19:00</p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <svg
                            className='w-8 h-8 lg:h-10 lg:w-10'
                            fill='currentColor'
                            viewBox='0 0 24 24'
                        >
                            <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5a2.5 2.5 0 112.5-2.5 2.5 2.5 0 01-2.5 2.5z' />
                        </svg>
                        <div className='text-sm lg:text-lg xl:text-2xl'>
                            <p>C. Castro, Centro comercial Guajara local 4</p>
                            <p>38611 San Isidro, Santa Cruz de Tenerife</p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-3'>
                        <svg
                            className='w-8 h-8 lg:h-10 lg:w-10'
                            fill='currentColor'
                            viewBox='0 0 24 24'
                        >
                            <path d='M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.29 21 3 13.71 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.43 2.43z' />
                        </svg>
                        <div className='text-sm lg:text-lg xl:text-2xl'>
                            <p>+34 660 63 02 97</p>
                            <p>info@ecoxaura.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-auto rounded-lg'>
                <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1480.064628812957!2d-16.558844944138865!3d28.079234976481057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a9f5439c7f64b%3A0xe0f4d009fcdd29d!2sEcox%20Aura!5e0!3m2!1ses!2ses!4v1749465066923!5m2!1ses!2ses'
                    className='w-full rounded-lg h-96'
                    loading='lazy'
                    allowFullScreen
                />
            </div>
        </section>
    );
}
