import React from "react";
import ContactItems from "./ContactItems";
import SectionTitle from "./SectionTitle";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="contact-02 py-6 bg-grey">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionTitle desc="Get in touch" title="contact" />
          </div>
        </div>
        <div className="row contact-info mt-4">
          <div className="col-md-4">
            <ContactItems
              image="assets/img/message.svg"
              way="Mail Me"
              info="info@westin.com"
            />
          </div>

          <div className="col-md-4">
            <ContactItems
              image="assets/img/phone-call.svg"
              way="Call Us On"
              info="+123 456 7890"
            />
          </div>

          <div className="col-md-4">
            <ContactItems
              image="assets/img/location.svg"
              way="Visit office"
              info="24 Street, New York, United State."
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mt-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
