import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start text-white bg-dark py-5">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Berimbolo Security
            </h6>
            <p>
              Providing top-tier security systems and installation services to
              ensure your safety. Protecting your home and business with the
              latest technology.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Our Services
            </h6>
            <p>
              <Link className="text-white text-decoration-none" to="/services">
                Security Systems
              </Link>
            </p>
            <p>
              <Link className="text-white text-decoration-none" to="/services">
                Installation Services
              </Link>
            </p>
            <p>
              <Link className="text-white text-decoration-none" to="/services">
                Maintenance
              </Link>
            </p>
            <p>
              <Link className="text-white text-decoration-none" to="/services">
                Consulting
              </Link>
            </p>
          </div>

          {/* Useful Links */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Useful Links
            </h6>
            <p>
              <Link className="text-white text-decoration-none" to="/">
                Home
              </Link>
            </p>
            <p>
              <Link className="text-white text-decoration-none" to="/about">
                About Us
              </Link>
            </p>
            <p>
              <Link className="text-white text-decoration-none" to="/products">
                Products
              </Link>
            </p>
            <p>
              <Link className="text-white text-decoration-none" to="/blog">
                Blog
              </Link>
            </p>
          </div>

          {/* Contact */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p>
              <MdLocationOn /> New York, NY 10012, US
            </p>
            <p>
              <MdEmail /> info@berimbolo.com
            </p>
            <p>
              <MdPhone /> + 01 234 567 88
            </p>
          </div>
        </div>

        <hr className="my-3" />
        <div className="footer-bottom text-center py-3">
          <p>
            © {new Date().getFullYear()}{" "}
            <Link className="text-white text-decoration-none" to="/">
              Berimbolo Security
            </Link>
            . All rights reserved.
          </p>
          <div>
            <Link className="btn btn-outline-light btn-floating m-1" to="#">
              <FaFacebookF />
            </Link>
            <Link className="btn btn-outline-light btn-floating m-1" to="#">
              <FaTwitter />
            </Link>
            <Link className="btn btn-outline-light btn-floating m-1" to="#">
              <FaGoogle />
            </Link>
            <Link className="btn btn-outline-light btn-floating m-1" to="#">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
