import { FaCheck } from 'react-icons/fa';

const Pack = (pack: Pack) => {
    return (
        <div
            key={pack.title}
            className='flex flex-col flex-1 h-full bg-white shadow-lg rounded-xl'
        >
            <div className={`${pack.headerBg} p-6 rounded-t-xl`}>
                <h3 className='text-lg font-bold text-black '>{pack.title}</h3>
                <span className='text-sm'>{pack.time}</span>
            </div>
            <div className='flex flex-col flex-1 p-6'>
                <div className='flex items-center'>
                    <span className='text-4xl font-bold text-raspberry-pink'>
                        {pack.price} €
                    </span>
                    <span className='ml-1 text-sm'>/session</span>
                </div>
                <p className='mt-4 text-lg lg:text-xl'>{pack.duration}</p>
                <ul className='flex-1 mt-4 space-y-2'>
                    {pack.features.map((feature) => (
                        <li key={feature} className='flex items-start'>
                            <FaCheck className='flex-shrink-0 w-5 h-5 mt-1 mr-2 text-raspberry-pink' />
                            <span className='text-sm font-bold lg:text-lg'>
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Pack;
