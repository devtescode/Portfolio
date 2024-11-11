import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Swal from 'sweetalert2';
import Narbarheader from '../Narbar-Header-folder/Narbarheader';
import NarbarTop from '../Narbardesign/NarbarTop';
import { API_URLS } from '../../../utils/apiConfig';

const History = () => {
    const [projects, setProjects] = useState([]);
    const [editingProject, setEditingProject] = useState(null); // State to store project being edited

    // Fetch all projects from backend
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(API_URLS.getprojects);
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };
        fetchProjects();
    }, []);

    // Delete project
    const deleteProject = async (projectId) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to delete this project?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        });

        if (result.isConfirmed) {
            try {
                await axios.delete(API_URLS.delectprojects(projectId));
                setProjects(projects.filter(project => project._id !== projectId));
                Swal.fire('Deleted!', 'The project has been deleted.', 'success');
            } catch (error) {
                Swal.fire('Error!', 'There was an error deleting the project.', 'error');
            }
        }
    };

    // Edit project - open modal or form
    const editProject = (project) => {
        setEditingProject(project); // Set project to be edited
    };

    // Handle form input changes for editing
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditingProject(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle form submission to update project
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // `http://localhost:4000/api/projects/${editingProject._id}`
            const response = await axios.put(API_URLS.editprojects(editingProject), editingProject);
            const updatedProjects = projects.map(project =>
                project._id === editingProject._id ? response.data : project
            );
            setProjects(updatedProjects);
            Swal.fire('Success!', 'Project has been updated.', 'success');
            setEditingProject(null); // Close edit form after successful update
        } catch (error) {
            Swal.fire('Error!', 'There was an error updating the project.', 'error');
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

            <div className="container mt-4">
                <h2 className="text-center">Project History</h2>

                {/* Table for Displaying Projects */}
                <table className="table table-bordered table-striped bg-white">
                    <thead>
                        <tr>
                            <th>Project Name</th>
                            <th>Project Image</th>
                            <th>Deployment Link</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project) => (
                            <tr key={project._id}>
                                <td>{project.projectName}</td>
                                <td>
                                    <img src={project.url} alt="Project" className="img-fluid" style={{ width: '100px', height: 'auto' }} />
                                </td>
                                <td>
                                    <a href={project.deployLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                                        View
                                    </a>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => editProject(project)}>
                                    <i class="ri-edit-box-line"></i>
                                    </button>
                                    
                                    <button className="btn btn-danger mx-0 mx-sm-2" onClick={() => deleteProject(project._id)}>
                                    <i class="ri-close-circle-line"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Edit Project Form (Modal or Inline Form) */}
                {editingProject && (
                    <>
                        {/* Dark overlay */}
                        <div className="modal-overlay" style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            zIndex: 999,
                        }}></div>

                        {/* Modal */}
                        <div className="modal" style={{ display: 'block', zIndex: 1000 }}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Edit Project</h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="modal"
                                            aria-label="Close"
                                            onClick={() => setEditingProject(null)}
                                        />
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="projectName">Project Name</label>
                                                <input
                                                    type="text"
                                                    id="projectName"
                                                    name="projectName"
                                                    className="form-control"
                                                    value={editingProject.projectName}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="url">Image URL</label>
                                                <input
                                                    type="text"
                                                    id="url"
                                                    name="url"
                                                    className="form-control"
                                                    value={editingProject.url}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="deployLink">Deployment Link</label>
                                                <input
                                                    type="text"
                                                    id="deployLink"
                                                    name="deployLink"
                                                    className="form-control"
                                                    value={editingProject.deployLink}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" className="btn btn-primary my-2">Update Project</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default History;
