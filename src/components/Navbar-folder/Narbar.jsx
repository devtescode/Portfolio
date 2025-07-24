import React from 'react'
import { useNavigate } from 'react-router-dom'

const Narbar = () => {
    const navigate = useNavigate()
    const NarbarBtn = () => {
        navigate("/")
    }
    const ResumeBtn = ()=>{
        navigate("/resume")
    }
    const ContactBtn = ()=>{
        navigate("/contact")
    }
    const ProjectBtn = ()=>{
        navigate("/project")
    }
    return (        
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top py-3">
                <div className="container px-2 px-sm-5">
                    <a className="navbar-brand" onClick={NarbarBtn}>
                        <span className="fw-bolder text-primary fs-2" style={{ cursor: "pointer" }}>Tescode</span>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder text-center">
                            <li className="nav-item">
                                <a className="nav-link"  style={{cursor:"pointer"}} onClick={NarbarBtn}>
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"  style={{cursor:"pointer"}} onClick={ResumeBtn}>
                                    Resume
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"  style={{cursor:"pointer"}} onClick={ProjectBtn}>
                                    Projects
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link"  style={{cursor:"pointer"}} onClick={ContactBtn}>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Narbar