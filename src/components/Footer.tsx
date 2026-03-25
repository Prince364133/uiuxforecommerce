import React from 'react';
import './Footer.css';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { MessageCircle, Globe, Camera, Briefcase, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col about">
            <span className="footer-text-logo">Agromatic.</span>
            <p>{t('footer.about')}</p>
            <div className="footer-socials">
              <a href="#"><MessageCircle size={20} /></a>
              <a href="#"><Globe size={20} /></a>
              <a href="#"><Camera size={20} /></a>
              <a href="#"><Briefcase size={20} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>{t('footer.products')}</h4>
            <ul>
              <li><Link href="/category/seeds">Premium Seeds</Link></li>
              <li><Link href="/category/machines">Agri-Machines</Link></li>
              <li><Link href="/category/iot">IoT Devices</Link></li>
              <li><Link href="/category/nutrients">Plant Nutrients</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer.quick_links')}</h4>
            <ul>
              <li><Link href="/about">Our Story</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/partners">Stakeholder Portal</Link></li>
              <li><Link href="/blog">Agri-Insights</Link></li>
            </ul>
          </div>

          <div className="footer-col contact">
            <h4>{t('footer.contact')}</h4>
            <ul>
              <li><MapPin size={18} /> Pune Headquarters, Phase 3, Hinjewadi, MH</li>
              <li><Phone size={18} /> 1800-AGRO-LIVE</li>
              <li><Mail size={18} /> support@agromatic.in</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
          <div className="bottom-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
