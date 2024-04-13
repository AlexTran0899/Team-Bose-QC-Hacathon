import { Axios } from 'axios';
import React, { useState } from 'react';


const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [responseImage, setResponseImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    // TODO: Send the image to the API
    Axios.post('127.0.0.1:9000/image', selectedImage)
    .then((res) => setResponseImage(res))
    .catch(err => console.log(err))
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {selectedImage && <img src={selectedImage} alt="Uploaded" />}
      {responseImage && <img src={responseImage} alt="response image"/>}
    </div>
  );
};


export default App;
