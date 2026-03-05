/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sitemap from './components/Sitemap';
import LPVideo from './components/LPVideo';
import FUSTLanding from './components/FUSTLanding';

/**
 * Detects if the application is running in a preview environment (cloud IDE/proxy).
 * @returns {boolean} True if in a preview environment.
 */
const checkPreviewEnvironment = (): boolean => {
  const indicators = [
    'googleusercontent',
    'webcontainer',
    'shim',
    '.goog',
    'scf.usercontent',
    'stackblitz',
    'codesandbox'
  ];
  
  const { hostname, href } = window.location;
  return indicators.some(indicator => hostname.includes(indicator) || href.includes(indicator));
};

export default function App() {
  const isPreview = checkPreviewEnvironment();
  
  // Select router based on environment
  const Router = isPreview ? HashRouter : BrowserRouter;
  
  // Dynamic redirect target for the root path
  const rootRedirect = isPreview ? '/sitemap' : '/fust';

  return (
    <Router>
      <Routes>
        {/* Dynamic Root Redirect */}
        <Route path="/" element={<Navigate to={rootRedirect} replace />} />
        
        {/* Main Routes */}
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/lp-video" element={<LPVideo />} />
        <Route path="/fust" element={<FUSTLanding />} />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}


