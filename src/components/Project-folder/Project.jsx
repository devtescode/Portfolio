import React from 'react'
import Narbar from '../Navbar-folder/Narbar'

const Project = () => {
    return (
        <>
            <main className="flex-shrink-0">
                <div>
                    <Narbar />
                </div>
                <section className="py-5">
                    <div className="container px-5 mb-5" style={{ marginTop: "50px" }}>
                        <div className="text-center mb-5">
                            <h1 className="display-5 fw-bolder mb-0">
                                <span className="text-gradient d-inline">Projects</span>
                            </h1>
                        </div>
                        <section id="portfolio" className="portfolio section-bg">
                            <div className="container" data-aos="fade-up">
                                <div className="section-title">
                                    <h2>Portfolio</h2>
                                    <p>
                                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
                                        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
                                        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
                                        sit in iste officiis commodi quidem hic quas.
                                    </p>
                                </div>
                                <div className="row">
                                    <div
                                        className="col-lg-12 d-flex justify-content-center"
                                        data-aos="fade-up"
                                        data-aos-delay={100}
                                    >
                                        <ul id="portfolio-flters">
                                            <li data-filter="*" className="filter-active">
                                                All
                                            </li>
                                            <li data-filter=".filter-app">App</li>
                                            <li data-filter=".filter-card">Card</li>
                                            <li data-filter=".filter-web">Web</li>
                                        </ul>
                                    </div>
                                </div>
                                <div
                                    className="row portfolio-container"
                                    data-aos="fade-up"
                                    data-aos-delay={200}
                                >
                                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                        <div className="portfolio-wrap">
                                            <img src="./airpord.PNG" className="img-fluid" alt="" />
                                            <div className="portfolio-info">
                                                <h4 />
                                                <p>E-commerce</p>
                                                <div className="portfolio-links">
                                                    <a
                                                        href="./airpord.PNG"
                                                        data-gallery="portfolioGallery"
                                                        className="portfolio-lightbox"
                                                        title="App 1"
                                                    >
                                                        <i className="bx bx-plus" />
                                                    </a>
                                                    <a
                                                        href="portfolio-details.html"
                                                        className="portfolio-details-lightbox"
                                                        data-glightbox="type: external"
                                                        title="Portfolio Details"
                                                    >
                                                        <i className="bx bx-link" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                        <div className="portfolio-wrap">
                                            <img src="./bakingapp.PNG" className="img-fluid" alt="" />
                                            <div className="portfolio-info">
                                                <h4>fastpayapp.netlify.app</h4>
                                                <p>Baking App</p>
                                                <div className="portfolio-links">
                                                    <a
                                                        href="./bakingapp.PNG"
                                                        data-gallery="portfolioGallery"
                                                        className="portfolio-lightbox"
                                                        title="Web 3"
                                                    >
                                                        <i className="bx bx-plus" />
                                                    </a>
                                                    <a
                                                        href="portfolio-details.html"
                                                        className="portfolio-details-lightbox"
                                                        data-glightbox="type: external"
                                                        title="Portfolio Details"
                                                    >
                                                        <i className="bx bx-link" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                        <div className="portfolio-wrap">
                                            <img src="./tictakgame.PNG" className="img-fluid" alt="" />
                                            <div className="portfolio-info">
                                                <h4>tescodegame.netlify.app</h4>
                                                <p>Game</p>
                                                <div className="portfolio-links">
                                                    <a
                                                        href="./tictakgame.PNG"
                                                        data-gallery="portfolioGallery"
                                                        className="portfolio-lightbox"
                                                        title="App 2"
                                                    >
                                                        <i className="bx bx-plus" />
                                                    </a>
                                                    <a
                                                        href="portfolio-details.html"
                                                        className="portfolio-details-lightbox"
                                                        data-glightbox="type: external"
                                                        title="Portfolio Details"
                                                    >
                                                        <i className="bx bx-link" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                        <div className="portfolio-wrap">
                                            <img src="./loveprediction.PNG" className="img-fluid" alt="" />
                                            <div className="portfolio-info">
                                                <h4>tescodeloverating.netlify.app</h4>
                                                <p>Love Rating</p>
                                                <div className="portfolio-links">
                                                    <a
                                                        href="./loveprediction.PNG"
                                                        data-gallery="portfolioGallery"
                                                        className="portfolio-lightbox"
                                                        title="Card 2"
                                                    >
                                                        <i className="bx bx-plus" />
                                                    </a>
                                                    <a
                                                        href="portfolio-details.html"
                                                        className="portfolio-details-lightbox"
                                                        data-glightbox="type: external"
                                                        title="Portfolio Details"
                                                    >
                                                        <i className="bx bx-link" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                        <div className="portfolio-wrap">
                                            <img src="./bulb.PNG" className="img-fluid" alt="" />
                                            <div className="portfolio-info">
                                                <h4>tescodebulb.netlify.app</h4>
                                                <p>Bulb</p>
                                                <div className="portfolio-links">
                                                    <a
                                                        href="./bulb.PNG"
                                                        data-gallery="portfolioGallery"
                                                        className="portfolio-lightbox"
                                                        title="Web 2"
                                                    >
                                                        <i className="bx bx-plus" />
                                                    </a>
                                                    <a
                                                        href="portfolio-details.html"
                                                        className="portfolio-details-lightbox"
                                                        data-glightbox="type: external"
                                                        title="Portfolio Details"
                                                    >
                                                        <i className="bx bx-link" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                        <div className="portfolio-wrap">
                                            <img src="./mulplication.PNG" className="img-fluid" alt="" />
                                            <div className="portfolio-info">
                                                <h4>tescodetimetable.netlify.app</h4>
                                                <p>Mulplication Table</p>
                                                <div className="portfolio-links">
                                                    <a
                                                        href="./mulplication.PNG"
                                                        data-gallery="portfolioGallery"
                                                        className="portfolio-lightbox"
                                                        title="App 3"
                                                    >
                                                        <i className="bx bx-plus" />
                                                    </a>
                                                    <a
                                                        href="portfolio-details.html"
                                                        className="portfolio-details-lightbox"
                                                        data-glightbox="type: external"
                                                        title="Portfolio Details"
                                                    >
                                                        <i className="bx bx-link" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                        <div className="portfolio-wrap">
                                            <img src="./weatherapp.PNG" className="img-fluid" alt="" />
                                            <div className="portfolio-info">
                                                <h4>tescodeweather.netlify.app</h4>
                                                <p>Weather app</p>
                                                <div className="portfolio-links">
                                                    <a
                                                        href="./weatherapp.PNG"
                                                        data-gallery="portfolioGallery"
                                                        className="portfolio-lightbox"
                                                        title="Card 1"
                                                    >
                                                        <i className="bx bx-plus" />
                                                    </a>
                                                    <a
                                                        href="portfolio-details.html"
                                                        className="portfolio-details-lightbox"
                                                        data-glightbox="type: external"
                                                        title="Portfolio Details"
                                                    >
                                                        <i className="bx bx-link" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                                        <div className="portfolio-wrap">
                                            <img src="./musicapp.PNG" className="img-fluid" alt="" />
                                            <div className="portfolio-info">
                                                <h4>tescodemusic.netlify.app</h4>
                                                <p>Music Site</p>
                                                <div className="portfolio-links">
                                                    <a
                                                        href="./musicapp.PNG"
                                                        data-gallery="portfolioGallery"
                                                        className="portfolio-lightbox"
                                                        title="Card 3"
                                                    >
                                                        <i className="bx bx-plus" />
                                                    </a>
                                                    <a
                                                        href="portfolio-details.html"
                                                        className="portfolio-details-lightbox"
                                                        data-glightbox="type: external"
                                                        title="Portfolio Details"
                                                    >
                                                        <i className="bx bx-link" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                        <div className="portfolio-wrap">
                                            <img src="./planday.PNG" className="img-fluid" alt="" />
                                            <div className="portfolio-info">
                                                <h4>tescodeday.netlify.app</h4>
                                                <p>Plan Your Day</p>
                                                <div className="portfolio-links">
                                                    <a
                                                        href="./planday.PNG"
                                                        data-gallery="portfolioGallery"
                                                        className="portfolio-lightbox"
                                                        title="Web 3"
                                                    >
                                                        <i className="bx bx-plus" />
                                                    </a>
                                                    <a
                                                        href="portfolio-details.html"
                                                        className="portfolio-details-lightbox"
                                                        data-glightbox="type: external"
                                                        title="Portfolio Details"
                                                    >
                                                        <i className="bx bx-link" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                        <div className="portfolio-wrap">
                                            <img src="./drawing.PNG" className="img-fluid" alt="" />
                                            <div className="portfolio-info">
                                                <h4>tescodedrawing.netlify.app</h4>
                                                <p>Plan Your Day</p>
                                                <div className="portfolio-links">
                                                    <a
                                                        href="./drawing.PNG"
                                                        data-gallery="portfolioGallery"
                                                        className="portfolio-lightbox"
                                                        title="Web 3"
                                                    >
                                                        <i className="bx bx-plus" />
                                                    </a>
                                                    <a
                                                        href="portfolio-details.html"
                                                        className="portfolio-details-lightbox"
                                                        data-glightbox="type: external"
                                                        title="Portfolio Details"
                                                    >
                                                        <i className="bx bx-link" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                        <div className="portfolio-wrap">
                                            <img src="./pictureditor.PNG" className="img-fluid" alt="" />
                                            <div className="portfolio-info">
                                                <h4>tescodeditor.netlify.app</h4>
                                                <p>Picture Editor</p>
                                                <div className="portfolio-links">
                                                    <a
                                                        href="./pictureditor.PNG"
                                                        data-gallery="portfolioGallery"
                                                        className="portfolio-lightbox"
                                                        title="Web 3"
                                                    >
                                                        <i className="bx bx-plus" />
                                                    </a>
                                                    <a
                                                        href="portfolio-details.html"
                                                        className="portfolio-details-lightbox"
                                                        data-glightbox="type: external"
                                                        title="Portfolio Details"
                                                    >
                                                        <i className="bx bx-link" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                        <div className="portfolio-wrap">
                                            <img src="./chatapp.PNG" className="img-fluid" alt="" />
                                            <div className="portfolio-info">
                                                <h4>tescodechat.netlify.app</h4>
                                                <p>Chatting-App</p>
                                                <div className="portfolio-links">
                                                    <a
                                                        href="./pictureditor.PNG"
                                                        data-gallery="portfolioGallery"
                                                        className="portfolio-lightbox"
                                                        title="Web 3"
                                                    >
                                                        <i className="bx bx-plus" />
                                                    </a>
                                                    <a
                                                        href="portfolio-details.html"
                                                        className="portfolio-details-lightbox"
                                                        data-glightbox="type: external"
                                                        title="Portfolio Details"
                                                    >
                                                        <i className="bx bx-link" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                </section>
                {/* Call to action section*/}
                <section className="py-5 bg-gradient-primary-to-secondary text-white">
                    <div className="container px-5 my-5">
                        <div className="text-center">
                            <h2 className="display-4 fw-bolder mb-4">
                                Let's build something together
                            </h2>
                            <a
                                className="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder"
                                href="contact.html"
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