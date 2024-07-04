
"use client";

import { useEffect, useState } from 'react';
import Register from './components/Register';

export default function Home() {
  const [deviceInfo, setDeviceInfo] = useState({});
  const [locationInfo, setLocationInfo] = useState({});

  useEffect(() => {
   
    const getDeviceInfo = () => {
      const ua = navigator.userAgent;
      let device = 'Unknown';
      if (/mobile/i.test(ua)) {
        device = 'Mobile';
      } else if (/iPad|Tablet/i.test(ua)) {
        device = 'Tablet';
      } else {
        device = 'Desktop';
      }
      setDeviceInfo({ device, userAgent: ua });
    };

    // Get location information
    const getLocationInfo = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        setLocationInfo(data);
      } catch (error) {
        console.error('Failed to fetch location information', error);
      }
    };

    getDeviceInfo();
    getLocationInfo();
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.trackEvent) {
      window.trackEvent('Device', 'Info', deviceInfo.device, deviceInfo.userAgent);
    }

    if (typeof window !== 'undefined' && window.trackEvent && locationInfo.ip) {
      window.trackEvent('Location', 'Info', locationInfo.country_name, `${locationInfo.region}, ${locationInfo.city}`);
    }
  }, [deviceInfo, locationInfo]);

  return (
    <div>
      <h1>Welcome to My Matomo App</h1>
      <Register />
      <div>
        <h2>Device Information</h2>
        <p>Device: {deviceInfo.device}</p>
        <p>User Agent: {deviceInfo.userAgent}</p>
      </div>
      <div>
        <h2>Location Information</h2>
        <p>Country: {locationInfo.country_name}</p>
        <p>Region: {locationInfo.region}</p>
        <p>City: {locationInfo.city}</p>
      </div>
    </div>
  );
}
