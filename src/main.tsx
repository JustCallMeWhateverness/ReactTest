import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../sass/index.scss';
import App from './App.tsx';

createRoot(document.querySelector('#root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);