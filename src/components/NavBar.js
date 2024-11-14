import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);  // Pass search value to parent component
  };

  return (
    <nav className="bg-black d-flex justify-content-between align-items-center p-3">
      {/* Search bar on the left */}
      <div className="navbar-left w-50">
        <input
          type="text"
          className="form-control"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={handleSearchChange}
          aria-label="Search Videos"
        />
      </div>

      {/* Links on the right */}
      <div className="navbar-right d-flex">
        <Link to="/" className="text-white mx-2">Home</Link>
        <Link to="/about" className="text-white mx-2">About</Link>
      </div>
    </nav>
  );
}

export default NavBar;
