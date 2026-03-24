'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../lib/i18n';

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!localStorage.getItem('i18nextLng')) {
      i18n.changeLanguage('hi');
    }
  }, [i18n]);

  // Remove the !mounted guard to allow SSR/Prerendering of children
  return <>{children}</>;
};
