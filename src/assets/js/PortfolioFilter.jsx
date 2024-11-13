import "./PortfolioFliter.css"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URLS } from "../../../utils/apiConfig";

const PortfolioFilter = () => {
  const [images, setImages] = useState([]);
  const [filter, setFilter] = useState('All'); // Default to "All"

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(API_URLS.fetchimage);
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

  const filteredImages = filter === 'All'
    ? images
    : images.filter(image => image.projectType === filter);

  return (
    <>
      {/* <h2 className='text-center'>Explore Our Projects</h2> */}
      
      <div className='text-center my-4'>
        <div className='btn-group'>
          <button
            className={`btn btn-outline-primary ${filter === 'All' ? 'active' : ''}`}
            onClick={() => setFilter('All')}
          >
            All Projects
          </button>
          <button
            className={`btn btn-outline-primary ${filter === 'New' ? 'active' : ''}`}
            onClick={() => setFilter('New')}
          >
            New Projects
          </button>
          <button
            className={`btn btn-outline-primary ${filter === 'Old' ? 'active' : ''}`}
            onClick={() => setFilter('Old')}
          >
            Old Projects
          </button>
        </div>
      </div>

      <div className='row'>
        <div className='project-grid '>
          {filteredImages.length === 0 ? (
            <div className='col-12 text-center'>
              <p>No projects to display.</p>
            </div>
          ) : (
            filteredImages.map((image, index) => (
              <div className='project-card' key={index}>
                <div className='card shadow-lg rounded project-responsive'>
                  <img
                    src={image.url}
                    alt="Uploaded Project"
                    className='card-img-top rounded-top' 
                    style={{height:"100%"}}
                  />
                  <div className='card-body'>
                    <h5 className='card-title text-truncate'>{image.projectName}</h5>
                    <p className='card-text'>
                      <a
                        href={image.deployLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn btn-primary btn-sm'
                      >
                        View Deployed Project
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default PortfolioFilter;
