import React from "react";
import img1 from "../image/CCTV-Installation-Guide.jpg";
import img2 from "../image/smart-alarm-systems-statistics.webp";
import img3 from "../image/24-7-eidted-1170x694.jpg";
import img4 from "../image/security-risk-assessment-services.jpg";
import "./why.css";

function Services() {
  return (
    <>
      <section className="bg-dark text-white py-5">
        <div className="container  px-5 my-5">
          <div className="text-center mb-5">
            <h1 className="fw-bolder">Our Security Services</h1>
            <p className="lead fw-normal text-muted mb-0">
              Reliable security solutions to protect what matters most to you.
            </p>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-4  col-md-6 mb-4">
              <div className="card  h-100 shadow-sm">
                <img
                  src={img1}
                  className="card-img-top"
                  alt="CCTV Installation"
                />
                <div className="card-body">
                  <h5 className="card-title">CCTV Installation</h5>
                  <p className="card-text">
                    We offer professional CCTV installation services, tailored
                    to your home or business needs. Enjoy 24/7 surveillance with
                    high-definition cameras.
                  </p>
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <img src={img2} className="card-img-top" alt="Alarm Systems" />
                <div className="card-body">
                  <h5 className="card-title">Alarm Systems</h5>
                  <p className="card-text">
                    Our advanced alarm systems offer comprehensive protection.
                    From motion detectors to door/window sensors, we ensure your
                    property is secure at all times.
                  </p>
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={img3}
                  className="card-img-top"
                  alt="24/7 Monitoring"
                />
                <div className="card-body">
                  <h5 className="card-title">24/7 Monitoring</h5>
                  <p className="card-text">
                    Our expert team monitors your property around the clock. Get
                    peace of mind knowing that your home or business is always
                    being watched.
                  </p>
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={img4}
                  className="card-img-top"
                  alt="Risk Assessment"
                />
                <div className="card-body">
                  <h5 className="card-title">Security Risk Assessment</h5>
                  <p className="card-text">
                    Our experts provide thorough security risk assessments for
                    your property. We identify vulnerabilities and offer
                    customized solutions to strengthen your security system.
                  </p>
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
