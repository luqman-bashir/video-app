import React from 'react';
import VideoCard from './VideoCard';

function VideoList({ videos, onDelete, onEdit }) {
  return (
    <div className="row justify-content-evenly">
      {videos.length > 0 ? (
        videos.map((video, index) => (
          <div key={`${video.id || video.title}-${index}`} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
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
