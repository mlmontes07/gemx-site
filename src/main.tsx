import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './styles/cosmic.css';
import { App, preloadRouteChunk } from './App';

const rootEl = document.getElementById('root');
if (rootEl) {
  const tree = (
    <StrictMode>
      <App />
    </StrictMode>
  );

  if (rootEl.firstElementChild) {
    void preloadRouteChunk(window.location.pathname).finally(() => {
      hydrateRoot(rootEl, tree);
    });
  } else {
    createRoot(rootEl).render(tree);
  }
}

