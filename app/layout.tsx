import type { Metadata } from 'next';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';

import 'styles/globals.css';
import Contact from 'components/layout/Contact';

export const metadata: Metadata = {
    title: 'Bienvenida a Ecox Aura',
    description:
        'La tranquilidad de un embarazo cuidado, la emoción de ver a tu bebé',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='es' suppressHydrationWarning>
            <head>
                <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
            </head>
            <body className='min-h-screen tracking-tighter font-sf'>
                <Header />
                <main className='justify-center'>{children}</main>
                <Contact/>
                <Footer />
            </body>
        </html>
    );
}
