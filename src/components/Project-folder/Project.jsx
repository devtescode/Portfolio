import React from 'react'
import Narbar from '../Navbar-folder/Narbar'
import PortfolioFilter from '../../assets/js/PortfolioFilter'
import { useNavigate } from 'react-router-dom'
// import * as Utils from "./utils";


const Project = () => {
    const navigate = useNavigate()
    const ContantBtn = ()=>{
        navigate("/contact")
    }
    return (
        <>
            <main className="flex-shrink-0">
                <div>
                    <Narbar />
                </div>
                <section className="py-5">
                    <div className="container px-0 px-sm-5 mb-5" style={{ marginTop: "50px" }}>
                        <div className="text-center mb-5">
                            <h1 className="display-5 fw-bolder mb-0">
                                {/* <span className="text-gradient d-inline">Projects</span> */}
                            </h1>
                        </div>
                        <section id="portfolio" className="portfolio section-bg ">
                            <div className="container"  data-aos="fade-up">
                                <div className="section-title">
                                    <h2>Projects</h2>
                                    <p>
                                        A collection of my projects, showcasing expertise in frontend and backend development, UI/UX design, and progressive web apps. Each project highlights my dedication to quality, innovation, and effective problem-solving tailored to user needs
                                    </p>
                                </div>
                                <PortfolioFilter />
                            </div>
                        </section>

                    </div>
                </section>
                {/* Call to action section*/}
                <section className="py-5 bg-gradient-primary-to-secondary text-white">
                    <div className="container px-5">
                        <div className="text-center">
                            <h2 className="display-4 fw-bolder mb-4">
                                Let's build something together
                            </h2>
                            <a
                                className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" 
                                onClick={ContantBtn}  
                            >
                                Contact me
                            </a>
                        </div>
                    </div>
                </section>
            </main>



        </>
    )
}

export default Project