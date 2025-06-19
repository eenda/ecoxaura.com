import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='bg-alabaster'>
            <div className='container grid items-center grid-cols-1 gap-8 px-8 py-8 mx-auto md:grid-cols-2'>
                <div className='flex justify-center'>
                    <Image
                        src='/img/logos_relleno/LOGO_ECOX_AURA_2_HRZT_ICON_SOLID_4.webp'
                        alt='ECOX_AURA'
                        width={250}
                        height={250}
                    />
                </div>
                <div className='space-y-6 '>
                    <div className='flex items-start'>
                        <svg
                            className='w-5 h-5 mt-1 mr-2 text-button-blue'
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
                    </div>
                    <div className='flex items-start'>
                        <svg
                            className='w-5 h-5 mt-1 mr-2 text-button-blue'
                            fill='currentColor'
                            viewBox='0 0 24 24'
                        >
                            <path d='M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' />
                        </svg>
                        <div>
                            <p className='font-semibold'>Envíanos un mensaje</p>
                            <p className='text-sm'>info@ecoxaura.com</p>
                        </div>
                    </div>
                </div>
                <div className='justify-center space-y-4 md:col-span-2'>
                    <h1 className='text-xl font-bold text-center'>
                        Redes Sociales
                    </h1>
                    <div className='flex justify-center space-x-4'>
                        <a
                            href='https://www.facebook.com/profile.php?id=61575582971887'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='p-4 transition-transform duration-300 transform bg-white rounded-full shadow-lg hover:scale-110'
                        >
                            <FaFacebookF className='text-2xl text-blue-600 sm:text-3xl' />
                        </a>
                        <a
                            href='#'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='p-4 transition-transform duration-300 transform bg-white rounded-full shadow-lg hover:scale-110'
                        >
                            <FaInstagram className='text-2xl text-raspberry-pink sm:text-3xl' />
                        </a>
                        <a
                            href='#'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='p-4 transition-transform duration-300 transform bg-white rounded-full shadow-lg hover:scale-110'
                        >
                            <FaWhatsapp className='text-2xl text-green-500 sm:text-3xl' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex justify-center px-8 mb-4 space-x-6'>
                <a
                    href='/docs/aviso-legal.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-sm text-gray-600 hover:underline'
                >
                    Aviso Legal
                </a>
                <a
                    href='/docs/politica-privacidad.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-sm text-gray-600 hover:underline'
                >
                    Política de Privacidad
                </a>
                <a
                    href='/docs/politica-cookies.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-sm text-gray-600 hover:underline'
                >
                    Política de Cookies
                </a>
            </div>

            {/* Copyright */}
            <div className='py-4 text-sm text-center border-t-2 border-t-gray-300'>
                Copyright {currentYear} - Ecox Aura
            </div>
        </footer>
    );
};

export default Footer;
