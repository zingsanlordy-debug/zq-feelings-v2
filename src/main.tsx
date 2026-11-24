import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { FontSizeProvider } from './context/FontSizeContext';
import { GlobalLanguageProvider } from './context/GlobalLanguageContext';
import { ErrorBoundary } from './components/ErrorBoundary';

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <GlobalLanguageProvider>
      <FontSizeProvider>
        <App />
      </FontSizeProvider>
    </GlobalLanguageProvider>
  </ErrorBoundary>
);
