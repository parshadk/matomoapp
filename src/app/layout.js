
"use client";

import { useEffect } from 'react';
import { MatomoScript } from './matomo';
import './globals.css';

export default function RootLayout({ children }) {
  useEffect(() => {
    const handleRouteChange = () => {
      if (typeof window !== 'undefined' && window._paq) {
        window._paq.push(['setCustomUrl', window.location.pathname]);
        window._paq.push(['trackPageView']);
      }
    };

    handleRouteChange();
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <MatomoScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
