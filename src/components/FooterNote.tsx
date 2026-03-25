import React from 'react';
import './FooterNote.css';
import { Truck, ShieldCheck, Clock, PhoneCall } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const FooterNote = () => {
  const { t } = useTranslation('common');

  return (
    <div className="footer-note-wrapper container">
      <div className="footer-note-content">
        <div className="note-card">
          <Truck size={32} className="note-icon" />
          <div className="note-text">
            <h4>{t('footer_note.delivery.title')}</h4>
            <p>{t('footer_note.delivery.p')}</p>
          </div>
        </div>
        <div className="note-card">
          <ShieldCheck size={32} className="note-icon" />
          <div className="note-text">
            <h4>{t('footer_note.quality.title')}</h4>
            <p>{t('footer_note.quality.p')}</p>
          </div>
        </div>
        <div className="note-card">
          <Clock size={32} className="note-icon" />
          <div className="note-text">
            <h4>{t('footer_note.support.title')}</h4>
            <p>{t('footer_note.support.p')}</p>
          </div>
        </div>
        <div className="note-card">
          <PhoneCall size={32} className="note-icon" />
          <div className="note-text">
            <h4>{t('footer_note.call.title')}</h4>
            <p>{t('footer_note.call.p')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
