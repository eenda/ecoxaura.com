import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className='shadow-sm bg-raspberry-pink'>
            <div className='container flex items-center justify-between px-4 py-4 mx-auto'>
                <div className='flex items-center md:hidden'>
                    <Link href='/'>
                        <Image
                            src={'/img/iconos/ECOX_AURA_ICONO_4.webp'}
                            alt='section-image'
                            width={100}
                            height={100}
                            className='rounded-full shadow-md shadow-white'
                        />
                    </Link>
                </div>
                <div className='items-center hidden md:flex '>
                    <Link href='/'>
                        <Image
                            src={
                                '/img/logos_relleno/LOGO_ECOX_AURA_2_HRZT_ICON_SOLID_3.webp'
                            }
                            alt='EcoxAura'
                            width={500}
                            height={500}
                            className='w-1/2'
                        />
                    </Link>
                </div>
                <nav className='flex items-center'>
                    <ul className='flex mr-2 space-x-2 text-xl text-white'>
                        <li>
                            <Link href='/' className='px-2 '>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href='/blog' className='px-2 '>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href='/contact' className='px-2 '>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
