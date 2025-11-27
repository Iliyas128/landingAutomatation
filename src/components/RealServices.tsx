import MagicBento from './MagicBento'
import { useLanguage } from '@/locales/LanguageContext';

const RealServices = () => {
  const { t } = useLanguage();
  
  return (
    <div id="real-services" className="py-20 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">{t.realServices.title}</h2>
        </div>
        <div className='flex justify-center items-center'>
            <MagicBento 
                textAutoHide={true}
                enableStars={false}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={false}
                clickEffect={false}
                spotlightRadius={300}
                particleCount={8}
                glowColor="132, 0, 255"
            />
        </div>
    </div>
  )
};

export default RealServices