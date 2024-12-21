import { MdSecurity, MdPhone } from "react-icons/md";
import seccccc from "../image/seccccc.jpeg";
import Team from "./Team";

const About = () => {
  return (
    <section className="py-3 py-md-5 bg-dark text-white">
      <div className="container">
        <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6 col-xl-5">
            <img
              className="img-fluid rounded"
              loading="lazy"
              src={seccccc}
              alt="About Berimbolo Security"
              style={{ width: "100%", height: "auto", marginTop: "-100px" }}
            />
          </div>
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-xl-center">
              <div className="col-12 col-xl-11">
                <h2 className="mb-3">Who Are We?</h2>
                <p className="lead fs-4 text-secondary mb-3">
                  At Berimbolo Security, we provide cutting-edge security
                  systems and services to ensure the safety and protection of
                  your home and business.
                </p>
                <p className="mb-5">
                  As a fast-growing company, we are committed to innovation,
                  reliability, and customer satisfaction. We are dedicated to
                  providing high-quality products and services tailored to meet
                  your security needs.
                </p>
                <div className="row gy-4 gy-md-0 gx-xxl-5X">
                  <div className="col-12 col-md-6">
                    <div className="d-flex">
                      <div className="me-4 text-primary">
                        <MdSecurity size={32} />
                      </div>
                      <div>
                        <h2 className="h4 mb-3">Reliable Protection</h2>
                        <p className="text-secondary mb-0">
                          We offer advanced security systems to keep your
                          property safe from potential threats.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="d-flex">
                      <div className="me-4 text-primary">
                        <MdPhone size={32} />
                      </div>
                      <div>
                        <h2 className="h4 mb-3">24/7 Support</h2>
                        <p className="text-secondary mb-0">
                          Our team is available around the clock to provide
                          assistance and ensure your security systems are always
                          operational.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Team />
    </section>
  );
};

export default About;
