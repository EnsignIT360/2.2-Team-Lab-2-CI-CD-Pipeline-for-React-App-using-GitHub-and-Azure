import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  return (
    <main className="page">
      <img className="team-logo" src="/ensignit360-team2.png" alt="Ensign IT360 Team 2" />
      <h1>Hello from Node.js on Azure!</h1>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
