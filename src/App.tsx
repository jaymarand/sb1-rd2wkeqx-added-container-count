import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { ParLevels } from './pages/ParLevels';
import { ContainerCountPage } from './pages/ContainerCount';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/par-levels" element={<ParLevels />} />
          <Route path="/container-count" element={<ContainerCountPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;