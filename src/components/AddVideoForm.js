import React, { useState, useEffect } from 'react';

function AddVideoForm({ onSubmit, videoToEdit, resetForm }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (videoToEdit) {
      setTitle(videoToEdit.title);
      setDescription(videoToEdit.description);
      setUrl(videoToEdit.url);
    }
  }, [videoToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const video = { title, description, url };
    if (videoToEdit) {
      // If there is a video to edit, call the onSubmit with the updated video
      onSubmit({ ...video, id: videoToEdit.id }); // Include the ID for update
    } else {
      // If it's a new video, call onSubmit without an ID
      onSubmit(video);
    }
    resetForm();  // Reset form fields after submission
  };

  return (
    <section id="add-video" className="mt-5">
      <h2 className="text-center mb-4">{videoToEdit ? 'Edit Video' : 'Add a New Video'}</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        {/* Title Input */}
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        {/* Description Input */}
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        
        {/* URL Input */}
        <div className="col-md-4">
          <input
            type="url"
            className="form-control"
            placeholder="Video URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </div>
        
        {/* Submit Button */}
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary">
            {videoToEdit ? 'Update Video' : 'Add Video'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddVideoForm;
