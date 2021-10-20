import React from "react";
import Service from "./Service";
import SectionTitle from "./SectionTitle";

const Services = () => {
  return (
    <section id="services" className="services-02 py-6 bg-grey">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionTitle desc="best feature" title="Services" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 col-lg-4">
            <Service
              pic="assets/img/art-design.svg"
              title="Graphic Design"
              explanation="specialise in Graphic design Whether you need to create a new website or updat."
            />
          </div>

          <div className="col-md-6 col-lg-4">
            <Service
              pic="assets/img/web-design.svg"
              title="Web Design"
              explanation="design, build & maintain websites that keep pace with our digital world."
            />
          </div>

          <div className="col-md-6 col-lg-4">
            <Service
              pic="assets/img/portfolio.svg"
              title="App Development"
              explanation="build mobile first solutions for ios, Android taking your idea to polished product."
            />
          </div>

          <div className="col-md-6 col-lg-4">
            <Service
              pic="assets/img/musical-notes.svg"
              title="Music Writing"
              explanation="Music copying, writing, creat, transcription, arranging composition services."
            />
          </div>

          <div className="col-md-6 col-lg-4">
            <Service
              pic="assets/img/website.svg"
              title="Digital Marketing"
              explanation="Generate your sales opportunity with our best digital marketing services."
            />
          </div>

          <div className="col-md-6 col-lg-4">
            <Service
              pic="assets/img/brand-awareness.svg"
              title="Brand Identity"
              explanation="I can manufacture magic that allows your brand to stand out from the crowd."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
