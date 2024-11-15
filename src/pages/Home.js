import React, { useState, useEffect, useCallback } from 'react';
import AddVideoForm from '../components/AddVideoForm';
import VideoList from '../components/VideoList';

function Home({ searchQuery }) {
  const [videos, setVideos] = useState([]);
  const [videoToEdit, setVideoToEdit] = useState(null);

  const generateThumbnail = (videoUrl) => {
    const videoId = new URL(videoUrl).searchParams.get("v");
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };

  const fetchVideos = useCallback(() => {
    fetch('http://localhost:3000/videos')
      .then((response) => response.json())
      .then((data) => {
        const videosWithThumbnails = data.map(video => ({
          ...video,
          thumbnail: generateThumbnail(video.url)
        }));
        setVideos(videosWithThumbnails);
      })
      .catch((err) => console.error('Error fetching videos:', err));
  }, []);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  const handleAddVideo = (video) => {
    const videoWithThumbnail = {
      ...video,
      thumbnail: generateThumbnail(video.url),
    };

    fetch('http://localhost:3000/videos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(videoWithThumbnail),
    })
      .then(() => {
        fetchVideos();
        resetForm();
      })
      .catch((err) => console.error('Error adding video:', err));
  };

  const handleEditVideo = (updatedVideo) => {
    fetch(`http://localhost:3000/videos/${updatedVideo.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedVideo),
    })
      .then(() => {
        fetchVideos();
        resetForm();
      })
      .catch((err) => console.error('Error updating video:', err));
  };

  const handleDeleteVideo = (videoId) => {
    fetch(`http://localhost:3000/videos/${videoId}`, {
      method: 'DELETE',
    })
      .then(() => fetchVideos())
      .catch((err) => console.error('Error deleting video:', err));
  };

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const resetForm = () => {
    setVideoToEdit(null);
  };

  return (
    <div>
      <AddVideoForm
        onSubmit={videoToEdit ? handleEditVideo : handleAddVideo}
        videoToEdit={videoToEdit}
        resetForm={resetForm}
      />
      <VideoList
        videos={filteredVideos}
        onEdit={setVideoToEdit}
        onDelete={handleDeleteVideo}
      />
    </div>
  );
}

export default Home;
