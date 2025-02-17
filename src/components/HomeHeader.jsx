import React from "react";
import img1 from "../image/cybersec.jpg";

function HomeHeader() {
  return (
    <>
      <header className="bg-dark py-5 header-bg">
        <div className="container  px-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <div className="my-5 text-center text-xl-start">
                <h3 className="display-5 fw-bolder text-white mb-2">
                  Welcome to Berimbolo Security
                </h3>
                <p className="lead fw-normal text-white-50 mb-4">
                  We are your trusted partner in providing the best security
                  systems for your home and business. From advanced CCTV cameras
                  to alarm systems, we ensure your safety 24/7.
                </p>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                  <a className="btn btn-outline-light btn-lg px-4" href="#!">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
              <img className="img-fluid rounded-3 my-5" src={img1} alt="..." />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HomeHeader;
