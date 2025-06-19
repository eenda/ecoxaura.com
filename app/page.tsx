import Hero from 'components/Hero';
import WhyEcoxAura from 'components/WhyEcoxAura';
import Gallery from 'components/Gallery';
import CTA from 'components/CTA';
import Services from 'components/services/Services';
import Packs from 'components/packs/Packs';
import HiperrealisticPhoto from 'components/HiperrealisticPhoto';

export default function Page() {
    return (
        <div className='flex flex-col min-h-screen'>
            <Hero />
            <WhyEcoxAura />
            <HiperrealisticPhoto />
            <Services />
            <Packs />
            <Gallery />
            <CTA />
        </div>
    );
}
