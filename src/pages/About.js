import React from 'react';

export default function About() {
  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: 'auto', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
      <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '1rem' }}>About Us</h2>
      <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#555' }}>
        Welcome to our Video Management App! Built with a shared vision of making video learning more accessible, this app allows you to add, edit, search, and delete videos seamlessly. Here’s a little bit about the people who made this possible.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
        
        {/* Developer 1 */}
        <div style={{ backgroundColor: '#f8f8f8', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#2c3e50' }}>Developer 1:Name 1</h3>
          <p style={{ color: '#555' }}>
          Name 1 is a frontend specialist who implemented the user interface and core interactions of the app. Focusing on a seamless user experience, Name 1 used React components and Bootstrap styling to create an intuitive and accessible design.
          </p>
        </div>

        {/* Developer 2 */}
        <div style={{ backgroundColor: '#f8f8f8', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#2c3e50' }}>Developer 2: Luqman Bashir</h3>
          <p style={{ color: '#555' }}>
          He contributed extensively to the backend, setting up the video data API and implementing CRUD functionalities. With a knack for clean code and efficient performance, He ensured that the app remains responsive and scalable as more videos are added.
          </p>
        </div>

        {/* Developer 3 */}
        <div style={{ backgroundColor: '#f8f8f8', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h3 style={{ color: '#2c3e50' }}>Developer 3: Name 3</h3>
          <p style={{ color: '#555' }}>
          Name 3 focused on integrating video fetching and management functionalities, including the search and edit features. Name 3's attention to detail and problem-solving skills helped ensure each feature was fully functional and easy to use.
          </p>
        </div>
      </div>

      <p style={{ textAlign: 'center', color: '#777', marginTop: '2rem' }}>
        We’re always eager to improve. If you have any feedback, feel free to reach out – we’d love to hear from you!
      </p>
    </div>
  );
}
