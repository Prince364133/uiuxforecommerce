'use client';

import React, { useState, useEffect } from 'react';
import './HeroCarousel.css';
import { ArrowRight, Cpu, Sprout, ShieldCheck, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const HeroCarousel = () => {
  const { t } = useTranslation('common');
  const [current, setCurrent] = useState(0);

  const SLIDES = [
    {
      id: 1,
      type: 'image',
      image: '/assets/hero_agri_ai.png',
      title: t('hero_carousel.slides.1.title'),
      subtitle: t('hero_carousel.slides.1.subtitle'),
      bgColor: '#005a32'
    },
    {
      id: 2,
      type: 'image',
      image: '/assets/hero_soil_tech.png',
      title: t('hero_carousel.slides.2.title'),
      subtitle: t('hero_carousel.slides.2.subtitle'),
      bgColor: '#1d1d1d'
    },
    {
      id: 3,
      type: 'image',
      image: '/assets/hero_agri_tech.png',
      title: t('hero_carousel.slides.3.title'),
      subtitle: t('hero_carousel.slides.3.subtitle'),
      bgColor: '#222'
    },
    {
      id: 4,
      type: 'image',
      image: '/assets/hero_agri_drone.png',
      title: t('hero_carousel.slides.4.title'),
      subtitle: t('hero_carousel.slides.4.subtitle'),
      bgColor: '#333'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${current * 100}%)` }}>
        {SLIDES.map((slide) => (
          <div 
            key={slide.id} 
            className="carousel-slide" 
            style={{ backgroundColor: slide.bgColor }}
          >
            {slide.type === 'image' && (
              <img src={slide.image} alt={slide.title} className="slide-bg-img" />
            )}
            <div className="slide-overlay"></div>
            <div className="slide-content container">
              <div className="slide-box">
                {slide.type === 'icon' && <div className="slide-icon">{slide.icon}</div>}
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <div className="slide-actions">
                  <button className="btn-primary">{t('hero_carousel.explore')} <ArrowRight size={18} /></button>
                  <button className="btn-secondary">{t('hero_carousel.learn')}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-dots">
        {SLIDES.map((_, idx) => (
          <button 
            key={idx} 
            className={`dot ${current === idx ? 'active' : ''}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </section>
  );
};
