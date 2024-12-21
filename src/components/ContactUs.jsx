import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [timer, setTimer] = useState(5);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    setFormData({
      fullName: "",
      email: "",
      message: "",
    });

    setShowModal(true);

    let countdown = 5;
    const interval = setInterval(() => {
      countdown -= 1;
      setTimer(countdown);
      if (countdown <= 0) {
        clearInterval(interval);
      }
    }, 1000);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTimer(5);
  };

  return (
    <>
      <section className="contact-section bg-dark text-white py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="contact-style-3 text-center mt-5">
                <h4 className="heading-4 font-weight-500 title">
                  Get in Touch
                </h4>
                <p className="paragraph-small sub-title mt-3">
                  Feel free to drop us a line below!
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="single-form form-default text-start mb-3">
                    <label>Full Name</label>
                    <div className="form-input">
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="form-control"
                      />
                      <i className="mdi mdi-account"></i>
                    </div>
                  </div>
                  <div className="single-form form-default text-start mb-3">
                    <label>Email Address</label>
                    <div className="form-input">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="form-control"
                      />
                      <i className="mdi mdi-email"></i>
                    </div>
                  </div>
                  <div className="single-form form-default text-start mb-3">
                    <label>Message</label>
                    <div className="form-input">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        className="form-control"
                      ></textarea>
                      <i className="mdi mdi-message-text-outline"></i>
                    </div>
                  </div>
                  <div className="single-form">
                    <button type="submit" className="btn btn-outline-primary">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="modal show" tabIndex="-1" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Message Sent</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                ></button>
              </div>
              <div className="modal-body">
                <p>Your message has been successfully sent!</p>
                <p>Closing in {timer} seconds...</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactUs;
