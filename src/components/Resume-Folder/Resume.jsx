import React from 'react'
import Narbar from '../Navbar-folder/Narbar'

const Resume = () => {
    return (
        <>
            <main className="flex-shrink-0">
                <div>
                    <Narbar/>
                </div>                
                <div className="container px-5" style={{marginTop:"85x "}}>
                    <div className="text-center mb-5">
                        <h1 className="display-5 fw-bolder mb-0">
                            <span className="text-gradient d-inline">Resume</span>
                        </h1>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-11 col-xl-9 col-xxl-8">
                            {/* Experience Section*/}
                            <section>
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <h2 className="text-primary fw-bolder mb-0">Experience</h2>
                                    {/* Download resume button*/}
                                    {/* Note: Set the link href target to a PDF file within your project*/}
                                    <a className="btn btn-primary px-4 py-3">
                                        <div className="d-inline-block bi bi-download me-2" />
                                        Download Resume
                                    </a>
                                </div>
                                {/* Experience Card 1*/}
                                <div className="card shadow border-0 rounded-4 mb-5">
                                    <div className="card-body p-5">
                                        <div className="row align-items-center gx-5">
                                            <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                                <div className="bg-light p-4 rounded-4">
                                                    <div className="text-primary fw-bolder mb-2">
                                                        2024 - Present
                                                    </div>
                                                    <div className="small fw-bolder">Web Developer</div>
                                                    <div className="small text-muted">SQI College Of ICT</div>
                                                    <div className="small text-muted">Ogbomosho, Nigeria </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8" style={{textAlign:"justify"}}>
                                                <div>
                                                    As a Web Developer at SQI College of ICT, I design, develop, and maintain responsive websites and web applications. I utilize front-end and back-end technologies to create efficient, user-friendly solutions that meet both internal and client needs.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Experience Card 2*/}
                                <div className="card shadow border-0 rounded-4 mb-5">
                                    <div className="card-body p-5">
                                        <div className="row align-items-center gx-5">
                                            <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                                <div className="bg-light p-4 rounded-4">
                                                    <div className="text-primary fw-bolder mb-2">
                                                        2023 - 2024
                                                    </div>
                                                    <div className="small fw-bolder">Lautech ICT</div>
                                                    <div className="small text-muted"></div>
                                                    <div className="small text-muted">Ogbomosho, Nigeria</div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8" style={{textAlign:"justify"}}>
                                                <div>
                                                    During my SIWES internship at LAUTECH, I gained hands-on experience in web development, contributing to various projects. I collaborated with teams to design and implement user-friendly websites and applications. This role enhanced my skills in front-end and back-end development, as well as problem-solving and teamwork in a professional setting.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Education Section*/}
                            <section>
                                <h2 className="text-secondary fw-bolder mb-4">Education</h2>
                                {/* Education Card 1*/}
                                <div className="card shadow border-0 rounded-4 mb-5">
                                    <div className="card-body p-5">
                                        <div className="row align-items-center gx-5">
                                            <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                                <div className="bg-light p-4 rounded-4">
                                                    <div className="text-secondary fw-bolder mb-2">
                                                        2022 - 2024
                                                    </div>
                                                    <div className="mb-2">
                                                        <div className="small fw-bolder">SQI College Of ICT</div>
                                                        <div className="small text-muted">Ogbomosho, Nigeria</div>
                                                    </div>
                                                    <div className="fst-italic">
                                                        <div className="small text-muted">National Innovation Diploma (NID)</div>
                                                        <div className="small text-muted">Web Development</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8" style={{textAlign:"justify"}}>
                                                <div>
                                                    SQI College of ICT, located in Ogbomosho, Nigeria, is a leading institution offering quality education in Information and Communication Technology. It equips students with practical skills in software development, web development, and networking, preparing them for successful careers in the rapidly growing tech industry. The college fosters innovation and technical expertise in a dynamic learning environment.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Education Card 2*/}
                                <div className="card shadow border-0 rounded-4 mb-5">
                                    <div className="card-body p-5">
                                        <div className="row align-items-center gx-5">
                                            <div className="col text-center text-lg-start mb-4 mb-lg-0">
                                                <div className="bg-light p-4 rounded-4">
                                                    <div className="text-secondary fw-bolder mb-2">
                                                        2024
                                                    </div>
                                                    <div className="mb-2">
                                                        <div className="small fw-bolder">Lautech</div>
                                                        <div className="small text-muted">Ogbomosho, Nigeria</div>
                                                    </div>
                                                    <div className="fst-italic">
                                                        <div className="small text-muted">Undergraduate</div>
                                                        <div className="small text-muted">Computer Science</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8" style={{textAlign:"justify"}}>
                                                <div>
                                                    The Ladoke Akintola University of Technology (LAUTECH) ICT Center advances technology and digital learning by providing campus-wide digital solutions, ICT training, and managing information systems. It supports e-learning, research, and skill development in software, networking, and cybersecurity, equipping students and staff for success in a technology-driven world.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Divider*/}
                            <div className="pb-5" />
                            {/* Skills Section*/}
                            <section>
                                {/* Skillset Card*/}
                                <div className="card shadow border-0 rounded-4 mb-5">
                                    <div className="card-body p-5">
                                        {/* Professional skills list*/}
                                        <div className="mb-5">
                                            <div className="d-flex align-items-center mb-4">
                                                <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                                    <i className="bi bi-tools" />
                                                </div>
                                                <h3 className="fw-bolder mb-0">
                                                    <span className="text-gradient d-inline">
                                                        Professional Skills
                                                    </span>
                                                </h3>
                                            </div>
                                            <div className="row row-cols-1 row-cols-md-3 mb-4">
                                                <div className="col mb-4 mb-md-0">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                        User Interface Design
                                                    </div>
                                                </div>
                                                <div className="col mb-4 mb-md-0">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                        Web Development
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                        Full Stack
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row row-cols-1 row-cols-md-3">
                                                <div className="col mb-4 mb-md-0">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                        Debugging & Testing
                                                    </div>
                                                </div>
                                                <div className="col mb-4 mb-md-0">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                        Problem-Solving & Algorithms
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                        Database Management
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Languages list*/}
                                        <div className="mb-0">
                                            <div className="d-flex align-items-center mb-4">
                                                <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3">
                                                    <i className="bi bi-code-slash" />
                                                </div>
                                                <h3 className="fw-bolder mb-0">
                                                    <span className="text-gradient d-inline">Languages</span>
                                                </h3>
                                            </div>
                                            <div className="row row-cols-1 row-cols-md-3 mb-4">
                                                <div className="col mb-4 mb-md-0">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                        HTML
                                                    </div>
                                                </div>
                                                <div className="col mb-4 mb-md-0">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                        CSS
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                        JavaScript
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row row-cols-1 row-cols-md-3 mb-4">
                                                <div className="col mb-4 mb-md-0">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                        Bootstrap
                                                    </div>
                                                </div>
                                                <div className="col mb-4 mb-md-0">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                        Vue
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                        Php
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row row-cols-1 row-cols-md-3">
                                                <div className="col mb-4 mb-md-0">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                        Next.js
                                                    </div>
                                                </div>
                                                <div className="col mb-4 mb-md-0">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                        React
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                                                        Node.js
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
            {/* Footer*/}
            {/* <footer className="bg-white py-4 mt-auto">
                <div className="container px-5">
                    <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                        <div className="col-auto">
                            <div className="small m-0">Copyright © Your Website 2023</div>
                        </div>
                        <div className="col-auto">
                            <a className="small" href="#!">
                                Privacy
                            </a>
                            <span className="mx-1">·</span>
                            <a className="small" href="#!">
                                Terms
                            </a>
                            <span className="mx-1">·</span>
                            <a className="small" href="#!">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </footer> */}
        </>

    )
}

export default Resume