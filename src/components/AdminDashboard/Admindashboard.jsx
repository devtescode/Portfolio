import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NarbarTop from '../Narbardesign/NarbarTop';
import Narbarheader from '../Narbar-Header-folder/Narbarheader';
import { API_URLS } from '../../../utils/apiConfig';

const Admindashboard = () => {
    const [allProjects, setAllProjects] = useState(0);
    const [oldProjects, setOldProjects] = useState(0);
    const [newProjects, setNewProjects] = useState(0);

    useEffect(() => {
        // Fetch project numbers from the backend API
        const fetchProjectNumbers = async () => {
            try {
                const response = await axios.get(API_URLS.projectNumbers);
                setAllProjects(response.data.allProjects);
                setOldProjects(response.data.oldProjects);
                setNewProjects(response.data.newProjects);
            } catch (error) {
                console.error("Error fetching project numbers:", error);
            }
        };

        fetchProjectNumbers();
    }, []);

    return (
        <div>
            <div>
                <NarbarTop />
            </div>
            <div>
                <Narbarheader />
            </div>
            <div className="container text-center" style={{ marginTop: "70px" }}>
                <div className="row align-items-start mt-1 gap-2">
                    <div className="col-12 col-md border bg-white d-flex" style={{ height: "200px", alignItems: "center" }}>
                        <div className='mx-auto'>
                            <div>
                                <h5>All Projects</h5>
                            </div>
                            <div className='fs-3'>
                                <p>{allProjects}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md border bg-white d-flex" style={{ height: "200px", alignItems: "center" }}>
                        <div className='mx-auto'>
                            <div>
                                <h5>Old Projects</h5>
                            </div>
                            <div className='fs-3'>
                                <p>{oldProjects}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md border bg-white d-flex" style={{ height: "200px", alignItems: "center" }}>
                        <div className='mx-auto'>
                            <div>
                                <h5>New Projects</h5>
                            </div>
                            <div className='fs-3'>
                                <p>{newProjects}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Admindashboard;
