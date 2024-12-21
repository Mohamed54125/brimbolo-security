import React from "react";
import "./why.css";

function Priceing() {
  return (
    <>
      <section className="bg-dark text-white py-5">
        <div className="container px-5 my-5">
          <div className="text-center mb-5">
            <h1 className="fw-bolder">Choose Your Security Plan</h1>
            <p className="lead fw-normal text-muted mb-0">
              Protect your home or business with our tailored security
              solutions.
            </p>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-6 col-xl-4 d-flex">
              <div className="card mb-5 mb-xl-0 bg-light flex-fill">
                <div className="card-body p-5">
                  <div className="small text-uppercase fw-bold text-muted">
                    Basic
                  </div>
                  <div className="mb-3">
                    <span className="display-4 fw-bold">$0</span>
                    <span className="text-muted">/ mo.</span>
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check text-primary"></i>
                      <strong>1 Camera</strong> (Basic)
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-primary"></i>
                      24/7 Monitoring
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-primary"></i>
                      Email Alerts
                    </li>
                    <li className="mb-2 text-muted">
                      <i className="bi bi-x"></i>
                      Cloud Storage
                    </li>
                    <li className="mb-2 text-muted">
                      <i className="bi bi-x"></i>
                      Mobile App Access
                    </li>
                  </ul>
                  <div className="d-grid">
                    <a className="btn btn-outline-primary" href="#!">
                      Choose Plan
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 d-flex">
              <div className="card mb-5 mb-xl-0 bg-light flex-fill">
                <div className="card-body p-5">
                  <div className="small text-uppercase fw-bold">
                    <i className="bi bi-star-fill text-warning"></i>
                    Standard
                  </div>
                  <div className="mb-3">
                    <span className="display-4 fw-bold">$29</span>
                    <span className="text-muted">/ mo.</span>
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check text-primary"></i>
                      <strong>3 Cameras</strong> (Standard)
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-primary"></i>
                      24/7 Monitoring with Mobile App
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-primary"></i>
                      Cloud Storage (5GB)
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-primary"></i>
                      Instant Alerts
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-primary"></i>
                      Remote Access via App
                    </li>
                  </ul>
                  <div className="d-grid">
                    <a className="btn btn-primary" href="#!">
                      Choose Plan
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 d-flex">
              <div className="card bg-light flex-fill">
                <div className="card-body p-5">
                  <div className="small text-uppercase fw-bold text-muted">
                    Premium
                  </div>
                  <div className="mb-3">
                    <span className="display-4 fw-bold">$79</span>
                    <span className="text-muted">/ mo.</span>
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check text-primary"></i>
                      <strong>Unlimited Cameras</strong>
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-primary"></i>
                      24/7 Monitoring with Premium Support
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-primary"></i>
                      Cloud Storage (50GB)
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-primary"></i>
                      Real-Time Alerts & Notifications
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-primary"></i>
                      Mobile App with Full Access
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check text-primary"></i>
                      Free Installation & Setup
                    </li>
                  </ul>
                  <div className="d-grid">
                    <a className="btn btn-outline-primary" href="#!">
                      Choose Plan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Priceing;
