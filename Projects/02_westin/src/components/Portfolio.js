import React from "react";
import SectionTitle from "./SectionTitle";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-02 py-6">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionTitle desc="My work" title="portfolio" />
          </div>
        </div>
        <div className="row">
          <ul
            id="portfolio-filter"
            className="list-inline col-lg-12 portfolio-filter"
          >
            <li className="list-inline-item">
              <a href="#" data-filter="*" className="active">
                All
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" data-filter=".webdesign">
                Web Design
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" data-filter=".mobiledesign">
                Mobile Design
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" data-filter=".seo">
                Seo
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" data-filter=".graphic">
                Graphic
              </a>
            </li>
          </ul>
        </div>
        <div className="portfolio-items row">
          <div className="col-md-6 col-lg-4 portfolio-item seo">
            <PortfolioItem pic="assets/img/portfolio-01.png" title="My Work" />
          </div>

          <div className="col-md-6 col-lg-4 portfolio-item graphic webdesign">
            <PortfolioItem pic="assets/img/portfolio-02.png" title="My Work" />
          </div>

          <div className="col-md-6 col-lg-4 portfolio-item webdesign graphic">
            <PortfolioItem pic="assets/img/portfolio-03.png" title="My Work" />
          </div>

          <div className="col-md-6 col-lg-4 portfolio-item mobiledesign webdesign">
            <PortfolioItem pic="assets/img/portfolio-04.png" title="My Work" />
          </div>

          <div className="col-md-6 col-lg-4 portfolio-item mobiledesign seo">
            <PortfolioItem pic="assets/img/portfolio-05.png" title="My Work" />
          </div>

          <div className="col-md-6 col-lg-4 portfolio-item mobiledesign">
            <PortfolioItem pic="assets/img/portfolio-06.png" title="My Work" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
