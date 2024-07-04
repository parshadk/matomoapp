
"use client";

import { useState } from 'react';


export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    
    console.log('User registered:', username);

    
    if (typeof window !== 'undefined' && window.setUserId) {
      window.setUserId(username);
    }

    
    if (typeof window !== 'undefined' && window.trackEvent) {
      window.trackEvent('User', 'Register', username);
    }

  };

  return (
    <div>
      <h1>Register</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
