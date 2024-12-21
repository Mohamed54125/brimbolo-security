import React from "react";
import { Link } from "react-router-dom";
import network from "../image/network.jpg";
import datapre from "../image/datapre.webp";
import arte from "../image/arte.webp";
import alex from "../image/alex.webp";
import sofia from "../image/sofia.jpeg";
import liam from "../image/liam.jpg";
import "./why.css";

function Featuredsec() {
  return (
    <>
      <section className="py-5 bg-dark text-white">
        <div className="container px-5">
          <h2 className="fw-bolder text-center fs-5 mb-4">Featured Stories</h2>
          <div className="row gx-5">
            <div className="col-lg-4 mb-5">
              <div className="card h-100 bg-dark text-white border-0 bg-secondary text-white">
                <img className="card-img-top" src={arte} alt="Story 1" />
                <div className="card-body p-4">
                  <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                    Innovation
                  </div>
                  <Link
                    className="text-decoration-none link-light stretched-link"
                    href="#"
                  >
                    <div className="h5 card-title mb-3">
                      Transforming Security with AI
                    </div>
                  </Link>
                  <p className="card-text mb-0">
                    Learn how artificial intelligence is reshaping the future of
                    security systems.
                  </p>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                  <div className="d-flex align-items-end justify-content-between">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle me-3"
                        src={alex}
                        alt="Author"
                        style={{ width: "40px", height: "40px" }}
                      />
                      <div className="small">
                        <div className="fw-bold">Alex Johnson</div>
                        <div className="text-muted">
                          Dec 15, 2024 &middot; 5 min read
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="card h-100 bg-dark text-white border-0 bg-secondary text-white">
                <img className="card-img-top" src={network} alt="Story 2" />
                <div className="card-body p-4">
                  <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                    Partnership
                  </div>
                  <Link
                    className="text-decoration-none link-light stretched-link"
                    href="#"
                  >
                    <div className="h5 card-title mb-3">
                      Expanding Our Global Network
                    </div>
                  </Link>
                  <p className="card-text mb-0">
                    Find out how our partnerships are driving innovation
                    worldwide.
                  </p>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                  <div className="d-flex align-items-end justify-content-between">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle me-3"
                        src={sofia}
                        alt="Author"
                        style={{ width: "40px", height: "40px" }}
                      />
                      <div className="small">
                        <div className="fw-bold">Sophia Lee</div>
                        <div className="text-muted">
                          Dec 10, 2024 &middot; 6 min read
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-5">
              <div className="card h-100 bg-dark text-white border-0 bg-secondary text-white">
                <img className="card-img-top" src={datapre} alt="/" />
                <div className="card-body p-4">
                  <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                    Case Study
                  </div>
                  <Link
                    className="text-decoration-none link-light stretched-link"
                    href="#"
                  >
                    <div className="h5 card-title mb-3">
                      Success Story: Preventing Security Breaches
                    </div>
                  </Link>
                  <p className="card-text mb-0">
                    Discover how we helped a major client enhance their security
                    infrastructure.
                  </p>
                </div>
                <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
                  <div className="d-flex align-items-end justify-content-between">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle me-3"
                        src={liam}
                        alt=".."
                        style={{ width: "40px", height: "40px" }}
                      />
                      <div className="small">
                        <div className="fw-bold">Liam Carter</div>
                        <div className="text-muted">
                          Dec 5, 2024 &middot; 8 min read
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-end mb-5 mb-xl-0">
            <Link
              to="/blog"
              className="text-decoration-none link-light"
              href="#"
            >
              More stories
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Featuredsec;
