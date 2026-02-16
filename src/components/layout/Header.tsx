import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../hooks/useTheme';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const sections = ['about', 'experience', 'education', 'projects', 'skills', 'contact'];

export function Header() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useScrollSpy(sections);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-soft-900/80 backdrop-blur-lg border-b border-soft-100 dark:border-soft-800 z-50">
      <nav className="container mx-auto px-6 py-4 max-w-5xl">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-lg font-bold text-soft-900 dark:text-soft-50 hover:text-primary-500 transition-colors">
            <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-full object-cover" />
            Pascal ZHAN
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-5">
            {isHome && sections.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === s
                    ? 'text-primary-500'
                    : 'text-soft-500 dark:text-soft-400 hover:text-primary-500'
                }`}
              >
                {t(`nav.${s}`)}
              </button>
            ))}
            <Link
              to="/cv"
              className="text-sm font-medium px-4 py-1.5 rounded-xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/50 transition-colors"
            >
              {t('nav.cv')}
            </Link>
            <button
              onClick={toggleLang}
              className="text-sm font-medium px-3 py-1.5 rounded-xl bg-soft-100 dark:bg-soft-700 text-soft-600 dark:text-soft-300 hover:bg-soft-200 dark:hover:bg-soft-600 transition-colors"
            >
              {i18n.language === 'fr' ? 'EN' : 'FR'}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-soft-100 dark:bg-soft-700 hover:bg-soft-200 dark:hover:bg-soft-600 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FiMoon className="w-4 h-4 text-soft-600" /> : <FiSun className="w-4 h-4 text-accent-gold" />}
            </button>
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            <button onClick={toggleLang} className="text-sm px-3 py-1.5 rounded-xl bg-soft-100 dark:bg-soft-700">
              {i18n.language === 'fr' ? 'EN' : 'FR'}
            </button>
            <button onClick={toggleTheme} className="p-2 rounded-xl bg-soft-100 dark:bg-soft-700" aria-label="Toggle theme">
              {theme === 'light' ? <FiMoon className="w-4 h-4" /> : <FiSun className="w-4 h-4 text-accent-gold" />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-soft-600 dark:text-soft-300">
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-soft-100 dark:border-soft-800 pt-4 space-y-2">
            {isHome && sections.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className="block w-full text-left py-2 text-soft-600 dark:text-soft-300 hover:text-primary-500 text-sm"
              >
                {t(`nav.${s}`)}
              </button>
            ))}
            <Link
              to="/cv"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-left py-2 text-primary-600 dark:text-primary-300 font-medium text-sm"
            >
              {t('nav.cv')}
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
