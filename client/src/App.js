import React, { useState } from 'react';
<<<<<<< Updated upstream

const App = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
=======
import './App.css';
import logo from '../../coolGraph.jpg';

const App = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('');
  const [weightUnit, setWeightUnit] = useState('lbs');
  const [heightUnit, setHeightUnit] = useState('in');
>>>>>>> Stashed changes

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
<<<<<<< Updated upstream
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
=======
    setImageFile(file);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      setUploadedImage(imageUrl);
>>>>>>> Stashed changes
    }
  };

  const handlePersonalInfoSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting personal info:', { age, weight, height, gender, weightUnit, heightUnit });
    // Implement data handling here
  };

  return (
    <div>
<<<<<<< Updated upstream
      <h1>Image Upload</h1>
      <input type="file" accept="image/*" onChange={handleImageUpload} />

      {uploadedImage && (
        <div>
          <h2>Uploaded Image:</h2>
          <img src={uploadedImage} alt="Uploaded" />
        </div>
      )}
=======
      <header className="header">
        <a href="/">Image Upload</a>
      </header>
      <div className="container">
        <div className="left-panel">
          {uploadedImage && (
            <img src={uploadedImage} alt="Uploaded" style={{ maxWidth: '70%', maxHeight: '70%' }} />
          )}
          <form onSubmit={handleFormSubmit}>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <button type="submit">Upload Image</button>
          </form>
        </div>
        <div className="right-panel">
        
      <div className="top-section">
        <img src={logo} alt="Uploaded" style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </div>
      <div className="bottom-section" style={{ display: 'flex' }}>
        <form onSubmit={handlePersonalInfoSubmit} style={{ flex: 1 }}>
          <h3>Personal Information</h3>
          <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <input type="number" placeholder="Weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
            <select value={weightUnit} onChange={(e) => setWeightUnit(e.target.value)}>
              <option value="lbs">lbs</option>
              <option value="kg">kg</option>
            </select>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <input type="number" placeholder="Height" value={height} onChange={(e) => setHeight(e.target.value)} />
            <select value={heightUnit} onChange={(e) => setHeightUnit(e.target.value)}>
              <option value="in">in</option>
              <option value="cm">cm</option>
            </select>
          </div>
          <select value={gender} onChange={(e) => setGender(e.target.value)} style={{ marginBottom: '10px' }}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <button type="submit">Submit</button>
        </form>
        <div style={{ flex: 1 }}>
          <h1>Table Information</h1>
          <table>
            <tbody>
              <tr>
                <td>Macros</td>
                <td>Ideal</td>
                <td>Carbs</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td>Data 2B</td>
                <td>Data 2C</td>
              </tr>
              <tr>
                <td>Fats</td>
                <td>Data 3B</td>
                <td>Data 3C</td>
              </tr>
              <tr>
                <td>Carbs</td>
                <td>Data 4B</td>
                <td>Data 4C</td>
              </tr>
              <tr>
                <td>Calories</td>
                <td>Data 5B</td>
                <td>Data 5C</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
>>>>>>> Stashed changes
    </div>
    </div>
    </div>
  );
};

export default App;