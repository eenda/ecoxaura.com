'use client';

import Image from 'next/image';

export default function ContactPage() {

    return (
        <section className='container grid items-center justify-center flex-1 min-h-screen grid-cols-1 gap-12 px-8 py-16 mx-auto md:grid-cols-2'>
            <div>
                <div className='w-full h-auto rounded-lg'>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1480.064628812957!2d-16.558844944138865!3d28.079234976481057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a9f5439c7f64b%3A0xe0f4d009fcdd29d!2sEcox%20Aura!5e0!3m2!1ses!2ses!4v1749465066923!5m2!1ses!2ses'
                        className='w-full rounded-lg h-96'
                        loading='lazy'
                        allowFullScreen
                    />
                </div>
                <div className='mt-12'>
                    <h3 className='mb-4 text-xl font-bold '>Nuestra oficina</h3>
                    <div className='overflow-hidden rounded-lg shadow'>
                        <Image
                            src='/img/oficina.webp'
                            alt='Office'
                            width={500}
                            height={300}
                            className='object-cover w-full h-82'
                        />
                        <div className='p-4 bg-lavender-pink'>
                            <p className='text-sm '>
                                Lun - Jue 10:00 – 14:00, 15:00 – 19:00
                            </p>
                        </div>
                    </div>
                    <ul className='mt-6 space-y-4 '>
                        <li className='flex items-start'>
                            <svg
                                className='w-5 h-5 mt-1 mr-2 text-raspberry-pink'
                                fill='currentColor'
                                viewBox='0 0 24 24'
                            >
                                <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z' />
                            </svg>
                            <div>
                                <p className='font-semibold'>
                                    Dirección de la oficina
                                </p>
                                <p className='text-sm'>
                                    C. Castro, Centro comercial Guajara local 4,
                                    38611 San Isidro, Santa Cruz de Tenerife
                                </p>
                            </div>
                        </li>
                        <li className='flex items-start'>
                            <svg
                                className='w-5 h-5 mt-1 mr-2 text-raspberry-pink'
                                fill='currentColor'
                                viewBox='0 0 24 24'
                            >
                                <path d='M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' />
                            </svg>
                            <div>
                                <p className='font-semibold'>
                                    Correo electrónico
                                </p>
                                <p className='text-sm'>info@ecoxaura.com</p>
                            </div>
                        </li>
                        <li className='flex items-start'>
                            <svg
                                className='w-5 h-5 mt-1 mr-2 text-raspberry-pink'
                                fill='currentColor'
                                viewBox='0 0 24 24'
                            >
                                <path d='M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.29 21 3 13.71 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.43 2.43z' />
                            </svg>
                            <div>
                                <p className='font-semibold'>Teléfono</p>
                                <p className='text-sm'>+34 660 63 02 97</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='p-8 bg-gray-200 rounded-lg'>
                <form className='flex flex-col space-y-4'>
                    <input
                        type='text'
                        name='name'
                        placeholder='Your Name'
                        className='w-full px-4 py-3 border rounded-lg '
                        required
                    />
                    <input
                        type='email'
                        name='email'
                        placeholder='Your Email'
                        className='w-full px-4 py-3 border rounded-lg '
                        required
                    />
                    <input
                        type='tel'
                        name='phone'
                        placeholder='Your Phone'
                        className='w-full px-4 py-3 border rounded-lg '
                    />
                    <textarea
                        name='message'
                        placeholder='Your Message'
                        rows={6}
                        className='w-full px-4 py-3 border rounded-lg resize-none '
                        required
                    />
                    <button
                        type='submit'
                        className='px-6 py-3 mt-4 text-white rounded-lg bg-button-blue hover:bg-raspberry-pink'
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
}
