import React, { useState } from 'react';
import NarbarTop from '../Narbardesign/NarbarTop';
import Narbarheader from '../Narbar-Header-folder/Narbarheader';
import axios from 'axios';
import { API_URLS } from '../../../utils/apiConfig';

const Uploadpage = () => {
    const [projectName, setProjectName] = useState('');
    const [deployLink, setDeployLink] = useState('');
    const [file, setFile] = useState(null);
    const [projectType, setProjectType] = useState('New');
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!projectName || !deployLink || !file) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill in all fields and select a file to upload.",
            });
            return;
        }

        const formData = new FormData();
        formData.append('image', file);
        formData.append('projectName', projectName);
        formData.append('deployLink', deployLink);
        formData.append('projectType', projectType);

        setIsLoading(true);

        try {
            const response = await axios.post(API_URLS.upload, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Upload Response:', response); // Log the response

            Swal.fire({
                icon: "success",
                title: "",
                text: "Image uploaded successfully!",
            });

            // Clear input fields after successful upload
            setProjectName('');
            setDeployLink('');
            setFile(null);
            setProjectType('New');
            document.getElementById("fileInput").value = ""; // Make sure `id` matches file input

        } catch (error) {
            console.error('Error uploading image:', error);

            Swal.fire({
                icon: "error",
                title: "",
                text: error.response?.data?.message || "Error uploading image!",
            });
        } finally {
            setIsLoading(false);
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
                <input type="file" id="fileInput" className='form-control my-2' onChange={handleFileChange} />
                <select
                    className='form-control my-2'
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                >
                    <option value="New">New Project</option>
                    <option value="Old">Old Project</option>
                </select>
                <button
                    className='btn btn-success'
                    onClick={handleUpload}
                    disabled={isLoading}
                >
                    {isLoading ? 'Processing...' : 'Upload'} {/* Change button text */}
                </button>
            </div>
        </>
    );
};

export default Uploadpage;
