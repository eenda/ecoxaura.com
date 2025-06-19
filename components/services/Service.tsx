import Image from 'next/image';

function Service({ imageSrc, title }: ServiceData) {
    return (
        <div key={title} className='flex flex-col items-center text-center'>
            <div className='relative w-full h-64 overflow-hidden shadow-xl rounded-xl'>
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className='object-cover object-center'
                />
            </div>
            <h3 className='mt-6 text-xl font-bold'>{title}</h3>
        </div>
    );
}

export default Service;
