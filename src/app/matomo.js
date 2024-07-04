
"use client";

import { useEffect } from 'react';
import Script from 'next/script';

export function MatomoScript() {
  return (
    <Script
      id="matomo-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          var _paq = window._paq = window._paq || [];
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
            var u="//analytics.uwcindia.org/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '1']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
          })();
          function trackEvent(category, action, name, value) {
            if (window._paq) {
              window._paq.push(['trackEvent', category, action, name, value]);
            }
          }
          window.trackEvent = trackEvent;
          
          function setUserId(userId) {
            if (window._paq) {
              window._paq.push(['setUserId', userId]);
            }
          }

          function resetUserId() {
            if (window._paq) {
              window._paq.push(['resetUserId']);
            }
          }

          window.setUserId = setUserId;
          window.resetUserId = resetUserId;
        `,
      }}
    />
  );
}
