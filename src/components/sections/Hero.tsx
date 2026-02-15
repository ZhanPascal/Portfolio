import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '../../data/personal';
import { Button } from '../common/Button';
import heroBg from '../../assets/images/fond.png';

export function Hero() {
  const { t } = useTranslation();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-soft-900/60 backdrop-blur-[2px]" />

      <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="text-lg text-soft-200 mb-3">
            {t('hero.greeting')}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            {personalInfo.name}
          </h1>
          <p className="text-xl md:text-2xl text-soft-200 mb-4 font-light">
            {t('hero.title')}
          </p>
          <p className="text-base text-accent-gold mb-10 font-medium">
            {t('hero.tagline')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button onClick={scrollToContact}>
              {t('hero.cta')}
            </Button>
            <Link to="/cv">
              <Button variant="outline" className="border-white/50 text-white hover:bg-white/10">
                {t('hero.viewCv')}
              </Button>
            </Link>
          </div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          >
            <FiArrowDown className="mx-auto text-soft-300" size={28} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
