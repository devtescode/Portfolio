import React, { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Portfolioimage from '../../Images/portfolio.png';
const PortfolioFilter = () => {
  const isotope = useRef(null);
  const [activeFilter, setActiveFilter] = useState('*');

  useEffect(() => {
    // Initialize Isotope
    isotope.current = new Isotope('.portfolio-container', {
      itemSelector: '.portfolio-item',
    });

    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });

    return () => {
      // Clean up Isotope instance on unmount
      isotope.current.destroy();
    };
  }, []);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);

    // Apply Isotope filter
    isotope.current.arrange({
      filter: filter === '*' ? '*' : `.${filter}`,
    });

    // Refresh AOS animations
    AOS.refresh();
  };

  return (
    <div className="portfolio-filter">
      <div className="row">
        <div
          className="col-lg-12 d-flex justify-content-center"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <ul id="portfolio-flters">
            <li
              className={activeFilter === '*' ? 'filter-active' : ''}
              onClick={() => handleFilterClick('*')}
            >
              All
            </li>
            <li
              className={activeFilter === 'filter-app' ? 'filter-active' : ''}
              onClick={() => handleFilterClick('filter-app')}
            >
              App
            </li>
            <li
              className={activeFilter === 'filter-card' ? 'filter-active' : ''}
              onClick={() => handleFilterClick('filter-card')}
            >
              Card
            </li>
            <li
              className={activeFilter === 'filter-web' ? 'filter-active' : ''}
              onClick={() => handleFilterClick('filter-web')}
            >
              Web
            </li>
          </ul>
        </div>
      </div>

      <div className="portfolio-container row">
        {/* Portfolio item 1 */}
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src={Portfolioimage} className="img-fluid" alt="E-commerce" />
            <div className="portfolio-info">
              <h4>E-commerce</h4>
              <p>App</p>
              <div className="portfolio-links">
                <a href="./airpord.PNG" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1">
                  <i className="bx bx-plus" />
                </a>
                <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio item 2 */}
        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-wrap">
            <img src={Portfolioimage} className="img-fluid" alt="Baking App" />
            <div className="portfolio-info">
              <h4>fastpayapp.netlify.app</h4>
              <p>Baking App</p>
              <div className="portfolio-links">
                <a href="./bakingapp.PNG" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3">
                  <i className="bx bx-plus" />
                </a>
                <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio item 3 */}
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-wrap">
            <img src={Portfolioimage} className="img-fluid" alt="Game" />
            <div className="portfolio-info">
              <h4>tescodegame.netlify.app</h4>
              <p>Game</p>
              <div className="portfolio-links">
                <a href="./tictakgame.PNG" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2">
                  <i className="bx bx-plus" />
                </a>
                <a href="portfolio-details.html" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details">
                  <i className="bx bx-link" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioFilter;
