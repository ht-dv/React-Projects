import React from "react";
import TestimonialItem from "./TestimonialItem";
import SectionTitle from "./SectionTitle";

const Testimonial = () => {
  return (
    <section id="testimonial" className="testimonial-02 py-6 bg-grey">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionTitle desc="What people say" title="Testimonial" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="owl-carousel">
              <TestimonialItem
                image="assets/img/man.png"
                message="In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready."
                name="John Doe, "
                tit="Seo Manager"
              />

              <TestimonialItem
                image="assets/img/woman-avator.png"
                message="In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready."
                name="Merry Doe, "
                tit="Seo Manager"
              />

              <TestimonialItem
                image="assets/img/woman.png"
                message="In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready."
                name="Sarah Doe, "
                tit="Seo Manager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
