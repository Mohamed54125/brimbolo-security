import React from "react";
import {
  FaShieldAlt,
  FaCogs,
  FaLock,
  FaDesktop,
  FaClipboardCheck,
  FaHeartbeat,
} from "react-icons/fa";
import "./why.css";

function WhychooseUs() {
  return (
    <>
      <section className="pb-40 feature-wrapper pt-70 bg-dark text-white mt-50">
        <div className="container">
          <div className="row">
            <div className="mx-auto col-xl-6 col-lg-7 col-md-9">
              <div className="text-center feature-title mb-55">
                <span className="mb-10 primary-color">Feature</span>
                <h3 className="mb-15">Why Choose Us?</h3>
                <p>
                  We provide top-tier security solutions for your home and
                  business.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="feature-box feature-style-8">
                <div className="feature-icon">
                  <FaShieldAlt size={40} />
                </div>
                <div className="feature-content">
                  <h3>Comprehensive Security</h3>
                  <p>
                    We offer end-to-end security services to safeguard your
                    property with advanced tech
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-box feature-style-8">
                <div className="feature-icon">
                  <FaCogs size={40} />
                </div>
                <div className="feature-content">
                  <h3>Customizable Solutions</h3>
                  <p>
                    Our services are highly customizable to meet your unique
                    security requirements.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-box feature-style-8">
                <div className="feature-icon">
                  <FaLock size={40} />
                </div>
                <div className="feature-content">
                  <h3>Advanced Protection</h3>
                  <p>
                    With state-of-the-art technology, we offer unmatched
                    protection against threats.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="feature-box feature-style-8">
                <div className="feature-icon">
                  <FaDesktop size={40} />
                </div>
                <div className="feature-content">
                  <h3>24/7 Monitoring</h3>
                  <p>
                    Our expert team monitors your property around the clock to
                    ensure maximum security.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-box feature-style-8">
                <div className="feature-icon">
                  <FaClipboardCheck size={40} />
                </div>
                <div className="feature-content">
                  <h3>Risk Assessment</h3>
                  <p>
                    We provide detailed security risk assessments to identify
                    potential threats and weaknesses.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-box feature-style-8">
                <div className="feature-icon">
                  <FaHeartbeat size={40} />
                </div>
                <div className="feature-content">
                  <h3>Reliable Support</h3>
                  <p>
                    Our customer support team is always available to assist you
                    with your security needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhychooseUs;
