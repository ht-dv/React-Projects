import React from "react";
import SectionTitle from "./SectionTitle";
import BlogItem from "./BlogItem";

const Blog = () => {
  return (
    <section id="blog" className="blog blog-02 py-6">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionTitle desc="Latest News" title="Blog" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 col-lg-4">
            <BlogItem
              image="assets/img/blog-img-01.png"
              date="22th may"
              title="Write Your Dreams"
              name="Jone Doe"
              comment="5"
              message="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod."
            />
          </div>

          <div className="col-md-6 col-lg-4">
            <BlogItem
              image="assets/img/blog-img-02.png"
              date="12th june"
              title="Enjoy Your Happy Life"
              name="Jone Doe"
              comment="2"
              message="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod."
            />
          </div>

          <div className="col-md-6 col-lg-4">
            <BlogItem
              image="assets/img/blog-img-03.png"
              date="25th Nov"
              title="Beautiful Life"
              name="Jone Doe"
              comment="2"
              message="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
