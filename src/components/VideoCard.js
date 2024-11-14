import React from 'react';

function VideoCard({ video, onDelete, onEdit }) {
  return (
    <div className="card mb-4" style={{ width: '18rem' }}>
      <img
        src={video.thumbnail || 'https://via.placeholder.com/150'}
        alt={video.title}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{video.title}</h5>
        <p className="card-text">{video.description}</p>
        
        {/* Action buttons in a single row */}
        <div className="d-flex justify-content-between gap-2">
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Watch Video
          </a>
          <button
            onClick={() => onEdit(video)}
            className="btn btn-warning btn-sm"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(video.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
