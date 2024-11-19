import React, { useState, useEffect, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddVideoForm from '../components/AddVideoForm';
import VideoList from '../components/VideoList';

function Home({ searchQuery }) {
  const [videos, setVideos] = useState([]);
  const [videoToEdit, setVideoToEdit] = useState(null);

  const generateThumbnail = (videoUrl) => {
    try {
      const videoId = new URL(videoUrl).searchParams.get("v");
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    } catch (error) {
      console.error("Invalid video URL", error);
      return "";
    }
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
        toast.success('Video added successfully!');
      })
      .catch((err) => {
        console.error('Error adding video:', err);
        toast.error('Failed to add video');
      });
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
        toast.success('Video updated successfully!');
      })
      .catch((err) => {
        console.error('Error updating video:', err);
        toast.error('Failed to update video');
      });
  };

  const handleDeleteVideo = (videoId) => {
    fetch(`http://localhost:3000/videos/${videoId}`, {
      method: 'DELETE',
    })
      .then(() => {
        fetchVideos();
        toast.success('Video deleted successfully!');
      })
      .catch((err) => {
        console.error('Error deleting video:', err);
        toast.error('Failed to delete video');
      });
  };

  const filteredVideos = videos.filter((video) =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const resetForm = () => {
    setVideoToEdit(null);
  };

  return (
    <div>
      {/* Toast Container for displaying notifications */}
      <ToastContainer />
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