import React from "react";

const PortfolioItem = (props) => {
  return (
    <div className="portfolio-box">
      <div className="portfolio-img">
        <img src={props.pic} alt="/" />
      </div>
      <div className="portfolio-overlay">
        <div className="portfolio-overlay-content">
          <h5 className="portfolio-category">{props.title}</h5>
          <div className="portfolio-icon">
            <a href="#">
              <i className="fas fa-link"></i>
            </a>
            <a href={props.pic} className="js-zoom-gallery">
              <i className="fas fa-search-plus"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
