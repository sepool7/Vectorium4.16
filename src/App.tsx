import { HelmetProvider } from 'react-helmet-async';
import AppNavigation from './navigation/Navigation';
import { useEffect } from 'react';
import { initGA, logPageView } from './analytics';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { animationCreate } from './utils/utils';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize Google Analytics
    initGA();
    logPageView(); // Log initial page view

    // Animation
    const timer = setTimeout(() => {
      animationCreate();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <RouteChangeTracker />
        <AppNavigation />
      </Router>
    </HelmetProvider>
  );
};

const RouteChangeTracker: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView(); // Log page view on route change
  }, [location]);

  return null;
};

export default App;
