import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <BrowserRouter>
      <div className=" ms-4 me-4">
        <Header />
        <Routes>
          <Route path="/" element={<Layout onSearch={handleSearch} />}>
            <Route index element={<Home searchQuery={searchQuery} />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
