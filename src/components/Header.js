import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <header className="bg-white text-black text-center py-4">
      <div className="container">
        <div className="d-flex justify-content-center align-items-center">
          <img
            src={require('./Image.webp')}
            alt="A beautiful scenic header"
            className="img-fluid"
            style={{ maxHeight: '60px', marginRight: '15px' }}
          />
          <h1 className="mb-0">VIDEO APP</h1>
        </div>
        <p>Your go-to place for educational videos and tutorials</p>
      </div>
    </header>
  );
}

export default Header;

