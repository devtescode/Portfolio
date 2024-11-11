import React, { useState } from 'react';
import NarbarTop from '../Narbardesign/NarbarTop';
import Narbarheader from '../Narbar-Header-folder/Narbarheader';
import axios from 'axios';

const Uploadpage = () => {
    const [projectName, setProjectName] = useState('');
    const [deployLink, setDeployLink] = useState('');
    const [file, setFile] = useState(null);
    const [projectType, setProjectType] = useState('New'); // New state for project type

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('image', file); // 'image' is the key used in the backend route
        formData.append('projectName', projectName);
        formData.append('deployLink', deployLink);
        formData.append('projectType', projectType); // Append project type to the form data

        try {
            const response = await axios.post('http://localhost:4000/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Uploaded image URL:', response.data.imageUrl);
            // Handle success (e.g., reset the form or show a success message)
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <>
            <div>
                <NarbarTop />
            </div>
            <div>
                <Narbarheader />
            </div>
            <div className='col-md-6 col-sm-12 mx-auto text-center bg-white p-3 mt-1'>
                <b>Upload Project</b>
                <input
                    type="text"
                    className='form-control my-2'
                    placeholder='Project Name'
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                />
                <input
                    type="text"
                    className='form-control my-2'
                    placeholder='Deploy link'
                    value={deployLink}
                    onChange={(e) => setDeployLink(e.target.value)}
                />
                <input type="file" className='form-control my-2' onChange={handleFileChange} />
                <select
                    className='form-control my-2'
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                >
                    <option value="New">New Project</option>
                    <option value="Old">Old Project</option>
                </select>
                <button className='btn btn-success' onClick={handleUpload}>Upload</button>
            </div>
        </>
    );
};

export default Uploadpage;
