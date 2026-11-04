import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  return (
    <main className="page">
      <div className="card">
        <p className="eyebrow">IT360 · TEAM LAB 2</p>
        <h1>React is ready to ship.</h1>
        <p className="intro">
          This starter app is connected to a GitHub Actions deployment pipeline.
          Push a change to the <code>main</code> branch to build and deploy it to Azure.
        </p>
        <div className="status"><span /> CI/CD starter configured</div>
      </div>
      <footer>Built with React and Vite</footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
