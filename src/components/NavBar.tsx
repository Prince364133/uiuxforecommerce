'use client';

import React from 'react';
import { Menu, Search, ShoppingCart, User, ChevronDown, Sprout, Settings, Droplets, Microscope, Wind, FlaskConical, Sun, Box, Languages } from 'lucide-react';
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

const NAV_CATEGORIES = [
  { name: 'For You', icon: Sprout },
  { name: 'Machines', icon: Settings },
  { name: 'Aromatics', icon: Droplets },
  { name: 'Agri-Tech', icon: Microscope },
  { name: 'Irrigation', icon: Wind },
  { name: 'Nutrients', icon: FlaskConical },
  { name: 'Energy', icon: Sun },
  { name: 'Supplies', icon: Box },
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

  const categories = [
    { name: t('nav.categories.for_you'), icon: Sprout },
    { name: t('nav.categories.machines'), icon: Settings },
    { name: t('nav.categories.aromatics'), icon: Droplets },
    { name: t('nav.categories.agri_tech'), icon: Microscope },
    { name: t('nav.categories.irrigation'), icon: Wind },
    { name: t('nav.categories.nutrients'), icon: FlaskConical },
    { name: t('nav.categories.energy'), icon: Sun },
    { name: t('nav.categories.supplies'), icon: Box },
  ];

  return (
    <header className={`navbar-wrapper glass ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-top">
          <Link href="/" className="logo">
            <img src="/assets/logo.png" alt="Agromatic Logo" />
          </Link>

          <div className="search-container">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder={t('nav.search')} />
          </div>

          <div className="nav-actions">
            <div className="lang-switcher">
              <button className="lang-btn" onClick={() => setShowLangs(!showLangs)}>
                <Languages size={20} />
                <span>{LANGUAGES.find(l => l.code === i18n.language)?.name || 'हिन्दी'}</span>
                <ChevronDown size={14} />
              </button>
              {showLangs && (
                <div className="lang-dropdown glass">
                  {LANGUAGES.map(lang => (
                    <button key={lang.code} onClick={() => changeLanguage(lang.code)}>
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="nav-user">
               <User size={20} />
               <span>{t('nav.user')}</span>
               <ChevronDown size={14} />
            </button>
            <div className="nav-divider"></div>
            <Link href="/cart" className="nav-cart">
              <div className="cart-badge">3</div>
              <ShoppingCart size={22} />
              <span>{t('nav.cart')}</span>
            </Link>
          </div>

          <button className="mobile-menu-btn"><Menu size={24} /></button>
        </div>
      </div>

      {/* Bottom Row: Icons Category Navigation */}
      <div className="navbar-categories">
        <div className="container categories-scroll">
           {categories.map((cat, i) => (
             <div key={i} className={`cat-item ${i === 0 ? 'active' : ''}`}>
               <div className="cat-icon-box">
                 <cat.icon size={20} />
               </div>
               <span>{cat.name}</span>
             </div>
           ))}
        </div>
      </div>
    </header>
  );
};
