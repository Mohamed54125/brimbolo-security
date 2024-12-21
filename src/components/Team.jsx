import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import jon from "../image/jon.jpeg";
import janee from "../image/janee.webp";
import micl from "../image/micl.jpg";
const Team = () => {
  return (
    <section className="py-5 bg-dark text-white">
      <div className="container">
        <h2 className="text-center mb-5">Meet Our Team</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card bg-secondary text-white border-0">
              <img
                src={jon}
                alt="Team Member"
                className="card-img-top rounded-circle"
                style={{ width: "150px", height: "150px", margin: "0 auto" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">John Doe</h5>
                <p className="card-text">Lead Developer</p>
                <div>
                  <a href="/#" className="text-white m-2">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="/#" className="text-white m-2">
                    <FaGithub size={24} />
                  </a>
                  <a href="/#" className="text-white m-2">
                    <FaTwitter size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card bg-secondary text-white border-0">
              <img
                src={janee}
                alt="Team Member"
                className="card-img-top rounded-circle"
                style={{ width: "150px", height: "150px", margin: "0 auto" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Jane Smith</h5>
                <p className="card-text">Project Manager</p>
                <div>
                  <a href="/#" className="text-white m-2">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="/#" className="text-white m-2">
                    <FaGithub size={24} />
                  </a>
                  <a href="/#" className="text-white m-2">
                    <FaTwitter size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card bg-secondary text-white border-0">
              <img
                src={micl}
                alt="Team Member"
                className="card-img-top rounded-circle"
                style={{ width: "150px", height: "150px", margin: "0 auto" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Michael Brown</h5>
                <p className="card-text">UI/UX Designer</p>
                <div>
                  <a href="/#" className="text-white m-2">
                    <FaLinkedin size={24} />
                  </a>
                  <a href="/#" className="text-white m-2">
                    <FaGithub size={24} />
                  </a>
                  <a href="/#" className="text-white m-2">
                    <FaTwitter size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
