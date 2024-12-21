import React from "react";
import { Link } from "react-router-dom";
import inova from "../image/inova.jpeg";
import network from "../image/network.jpg";
import datapre from "../image/datapre.webp";
import arte from "../image/arte.webp";
import alex from "../image/alex.webp";
import sofia from "../image/sofia.jpeg";
import liam from "../image/liam.jpg";

function Blog() {
  return (
    <>
      <section className="py-5 bg-dark">
        <div className="container px-5">
          <h1 className="fw-bolder fs-5  text-white mb-4">Company Blog</h1>
          <div className="card bg-dark text-white border-0 shadow rounded-3 overflow-hidden">
            <div className="card-body p-0">
              <div className="row gx-0">
                <div className="col-lg-6 col-xl-5 py-lg-5">
                  <div className="p-4 p-md-5">
                    <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                      Updates
                    </div>
                    <div className="h2 fw-bolder">
                      How We Innovate in Security Solutions
                    </div>
                    <p>
                      Discover how our cutting-edge technology keeps your
                      business and home secure. Learn about our latest
                      advancements...
                    </p>
                    <Link
                      className="stretched-link btn btn-outline-primary text-decoration-none"
                      to="#"
                    >
                      Read more
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-7">
                  <img
                    src={inova}
                    alt="Innovation in Security"
                    className="img-fluid  rounded-3  w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark text-white">
        <div className="container px-5">
          <div className="row gx-5">
            <div className="col-xl-8">
              <h1 className="fw-bolder   mb-4">Latest News</h1>
              <div className="mb-4">
                <div className="small text-muted">December 20, 2024</div>
                <Link className="link-light text-decoration-none" href="#">
                  <h5>New AI Integration in Home Security Systems</h5>
                </Link>
              </div>
              <div className="mb-5">
                <div className="small text-muted">December 10, 2024</div>
                <Link className="link-light text-decoration-none" href="#">
                  <h5>Partnership with Leading IoT Companies</h5>
                </Link>
              </div>
              <div className="mb-5">
                <div className="small text-muted">November 30, 2024</div>
                <Link className="link-light text-decoration-none" href="#">
                  <h5>How Our Technology Prevented a Major Security Breach</h5>
                </Link>
              </div>
              <div className="text-end mb-5 mb-xl-0">
                <Link className="text-decoration-none link-light" href="#">
                  More news
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="card border-0 h-100 bg-secondary text-white">
                <div className="card-body p-4">
                  <div className="d-flex h-100 align-items-center justify-content-center">
                    <div className="text-center">
                      <div className="h6 fw-bolder">Contact Us</div>
                      <p className="text-light mb-4">
                        For inquiries, email us at
                        <br />
                        <a
                          className="text-decoration-none text-light"
                          href="mailto:info@yourcompany.com"
                        >
                          info@berimbolo.com
                        </a>
                      </p>
                      <div className="h6 fw-bolder">Follow Us</div>
                      <Link className="fs-5 px-2 link-light" href="#">
                        <i className="bi-twitter"></i>
                      </Link>
                      <Link className="fs-5 px-2 link-light" href="#">
                        <i className="bi-facebook"></i>
                      </Link>
                      <Link className="fs-5 px-2 link-light" href="#">
                        <i className="bi-linkedin"></i>
                      </Link>
                      <Link className="fs-5 px-2 link-light" href="#">
                        <i className="bi-youtube"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <Link className="text-decoration-none link-light" href="#">
              More stories
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
