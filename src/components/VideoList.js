import React from 'react';
import VideoCard from './VideoCard';

function VideoList({ videos, onDelete, onEdit }) {
  return (
    <div className="row">
      {videos.length > 0 ? (
        videos.map((video, index) => (
          <div key={`${video.id || video.title}-${index}`} className="col-12 col-md-4 mb-4">
            <VideoCard video={video} onDelete={onDelete} onEdit={onEdit} />
          </div>
        ))
      ) : (
        <div className="col-12">
          <p>No videos found.</p>
        </div>
      )}
    </div>
  );
}

export default VideoList;
