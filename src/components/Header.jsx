import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <header className="bg-white text-black text-center ">
      <div className="container">
        <h1>VIDEO APP</h1>
        <img src={"./Video app.webp" }alt="video" />
        <p>Your go-to place for educational videos and tutorials</p>
      </div>
    </header>
  );
}

export default Header;
