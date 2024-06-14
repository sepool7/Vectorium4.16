// src/analytics.ts
import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-ZBKEF2GJEG');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
};
