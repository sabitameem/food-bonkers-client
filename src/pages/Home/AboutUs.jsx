import React from "react";

const AboutUs = () => {
  return (
    <div className="">
      <div className="text-center">
        <p className="text-secondary mb-0">
          <small>contact</small>
        </p>
        <p className="fs-2 fw-normal fst-italic mt-0 mb-1">
          What can we help you with
        </p>
        <h2
          className="fw-normal text-secondary d-none d-lg-block mb-5"
          style={{ fontSize: "22px" }}
        >
          Please don’t hesitate to get in touch with any questions or enquiries.
          We will <br /> always aim to reply as quickly as we can however if
          your enquiry is urgent <br /> please call us on 034 5345 7700
        </h2>

        <h2 className="text-secondary d-lg-none" style={{ fontSize: "10px" }}>
          Please don’t hesitate to get in touch with any questions or enquiries.
          We will <br /> always aim to reply as quickly as we can however if
          your enquiry is urgent <br /> please call us on 034 5345 7700
        </h2>
      </div>
      <div className="container mt-5 ">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div>
              <p className="fs-4 lg:fs-2 fw-bold">Send us a message</p>
              
        <h2 className=' d-none lg:fw-normal d-lg-block text-secondary' style={{fontSize: '15px'}}>Please use the form below to get in touch. If you need a reply
                we will get in touch as soon as possible.</h2>
        
        <h2 className=' d-lg-none text-secondary' style={{fontSize: '10px'}}>Please use the form below to get in touch. If you need a reply
                we will get in touch as soon as possible.</h2>

              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                ></textarea>
                <label htmlFor="floatingTextarea2">Comments</label>
              </div>
              <button className="btn btn-warning mt-3">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
