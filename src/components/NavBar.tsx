'use client';

import React from 'react';
import { Menu, Search, ShoppingCart, User, Languages } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import './NavBar.css';

const LANGUAGES = [
  { code: 'hi', name: 'हिन्दी' },
  { code: 'en', name: 'English' },
  { code: 'bn', name: 'বাংলা' },
  { code: 'te', name: 'తెలుగు' },
  { code: 'mr', name: 'मराठी' },
  { code: 'ta', name: 'தமிழ்' },
  { code: 'gu', name: 'ગુજરાતી' },
];

export const NavBar = () => {
  const { t, i18n } = useTranslation('common');
  const [showLangs, setShowLangs] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setShowLangs(false);
  };

  return (
    <header className={`navbar-wrapper glass ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-top">
          <Link href="/" className="logo">
            <div className="logo-text">
              Agromatic<span>.</span>
            </div>
          </Link>

          <div className="search-container">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder={t('nav.search')} />
          </div>

          <div className="nav-actions">
            <div className="lang-switcher">
              <button 
                className="lang-btn" 
                onClick={() => setShowLangs(!showLangs)}
                aria-label="Change Language"
              >
                <Languages size={20} />
                <span>{LANGUAGES.find(l => l.code === i18n.language)?.name || 'English'}</span>
              </button>
              
              {showLangs && (
                <div className="lang-dropdown glass shadow-lg">
                  {LANGUAGES.map((lang) => (
                    <button 
                      key={lang.code} 
                      onClick={() => changeLanguage(lang.code)}
                      className={i18n.language === lang.code ? 'active' : ''}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="nav-divider"></div>

            <button className="nav-user">
              <User size={20} />
              <span>{t('nav.user')}</span>
            </button>

            <Link href="/cart" className="nav-cart">
              <ShoppingCart size={22} />
              <div className="cart-badge">3</div>
              <span>{t('nav.cart')}</span>
            </Link>
          </div>

          <button className="mobile-menu-btn"><Menu size={24} /></button>
        </div>
      </div>
    </header>
  );
};
