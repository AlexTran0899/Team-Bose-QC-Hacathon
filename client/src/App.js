import React, { useState } from 'react';

const App = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    try {
      // Send the image to the backend
      const response = await fetch('http://127.0.0.1:9000/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Receive the image from the backend
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        setUploadedImage(imageUrl);
      } else {
        console.error('Image upload failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Image Upload</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />

      {uploadedImage && (
        <div>
          <h2>Uploaded Image:</h2>
          <img src={uploadedImage} alt="Uploaded" />
        </div>
      )}
    </div>
  );
};

export default App;