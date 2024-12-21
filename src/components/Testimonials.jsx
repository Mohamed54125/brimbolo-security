import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="py-5 bg-dark text-white">
      <div className="container">
        <h2 className="text-center mb-5">What Our Clients Say</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg border-0 rounded bg-secondary text-white">
              <div className="card-body text-center">
                <p className="card-text">
                  "Berimbolo Security provided excellent security solutions for
                  our business. Their system is reliable, and their support team
                  is available around the clock."
                </p>
                <div className="d-flex justify-content-center mb-3">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} color="#ffc107" />
                  ))}
                </div>
                <h5 className="card-title">John Doe</h5>
                <p className="text-muted">CEO, Tech Solutions</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-lg border-0 rounded bg-secondary text-white">
              <div className="card-body text-center">
                <p className="card-text">
                  "We have been using Berimbolo Security's installation services
                  for several months, and we couldn't be happier. Their team is
                  professional, and their systems give us peace of mind."
                </p>
                <div className="d-flex justify-content-center mb-3">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} color="#ffc107" />
                  ))}
                </div>
                <h5 className="card-title">Sarah Miller</h5>
                <p className="text-muted">Manager, SafeTech Inc.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-lg border-0 rounded bg-secondary text-white">
              <div className="card-body text-center">
                <p className="card-text">
                  "Their customer service is outstanding. We had a few technical
                  issues, and the team resolved them quickly. Highly recommend!"
                </p>
                <div className="d-flex justify-content-center mb-3">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} color="#ffc107" />
                  ))}
                </div>
                <h5 className="card-title">David Lee</h5>
                <p className="text-muted">Owner, Lee’s Security Systems</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-lg border-0 rounded bg-secondary text-white">
              <div className="card-body text-center">
                <p className="card-text">
                  "The installation process was smooth, and the team was very
                  knowledgeable. We feel much safer now thanks to Berimbolo
                  Security."
                </p>
                <div className="d-flex justify-content-center mb-3">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} color="#ffc107" />
                  ))}
                </div>
                <h5 className="card-title">Emily Clark</h5>
                <p className="text-muted">Security Coordinator, GreenHome</p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-lg border-0 rounded bg-secondary text-white">
              <div className="card-body text-center">
                <p className="card-text">
                  "Thanks to Berimbolo Security, we now have a robust security
                  system in place. Their team was great to work with, and their
                  services are top-notch."
                </p>
                <div className="d-flex justify-content-center mb-3">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} color="#ffc107" />
                  ))}
                </div>
                <h5 className="card-title">Michael Brown</h5>
                <p className="text-muted">Founder, City Guard Security</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
