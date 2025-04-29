import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

document.addEventListener('turbo:load', () => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
  }
});