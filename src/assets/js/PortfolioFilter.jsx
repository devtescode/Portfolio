import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
const PortfolioFilter = () => {
  const [images, setImages] = useState([]);
  const [filter, setFilter] = useState('New'); // Default to "New"

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/images');
        // Check if response data is an array and has the expected structure
        if (Array.isArray(response.data)) {
          setImages(response.data);
        } else {
          console.error("Data fetched is not an array:", response.data);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, []);

  const filteredImages = Array.isArray(images)
    ? images.filter(image => image.projectType === filter)
    : [];



  return (

    <>



      <div className='container'>
        <h2>Uploaded Projects</h2>
        <div className='filter-buttons'>
          <button onClick={() => setFilter('New')}>New Projects</button>
          <button onClick={() => setFilter('Old')}>Old Projects</button>
        </div>
        <div className='row'>
          {filteredImages.map((image, index) => (
            <div className='col-md-4' key={index}>
              <img src={image.url} alt="Uploaded Project" className='img-fluid' />
              <p>{image.projectName}</p>
              <p><a href={image.deployLink}>Deployed Project</a></p>
            </div>
          ))}
        </div>
      </div>
    </>

  );
};

export default PortfolioFilter;
