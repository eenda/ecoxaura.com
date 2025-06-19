import { ServiceData } from 'data/Service';
import Service from './Service';

const Services: React.FC<ServicesProps> = ({ services = ServiceData }) => {
    return (
        <section id='services' className='py-16 '>
            <div className='px-6 text-center'>
                <h2 className='text-3xl font-bold'>
                    Nuestros{' '}
                    <span className='italic text-raspberry-pink'>
                        Servicios
                    </span>
                </h2>
            </div>
            <div className='grid grid-cols-1 gap-4 px-6 my-12 md:grid-cols-2 lg:grid-cols-3'>
                {services.map((service) => (
                    <Service key={service.title} {...service} />
                ))}
            </div>
        </section>
    );
};

export default Services;
