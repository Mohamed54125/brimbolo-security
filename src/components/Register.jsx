import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      setError("Invalid email address! Please enter a valid email.");
      return;
    }

    if (!isValidPassword(formData.password)) {
      setError(
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number."
      );
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");

    localStorage.setItem("user", JSON.stringify(formData));

    navigate("/profile");
  };

  return (
    <div className="container my-3 py-3 bg-dark text-white">
      <h1 className="text-center">Register</h1>
      <hr className="text-white" />
      <div className="row my-4 h-100">
        <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="form my-3">
              <label htmlFor="Name" className="text-white">
                Full Name
              </label>
              <input
                type="text"
                className="form-control bg-dark text-white border-light"
                id="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form my-3">
              <label htmlFor="Email" className="text-white">
                Email address
              </label>
              <input
                type="email"
                className="form-control bg-dark text-white border-light"
                id="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form my-3">
              <label htmlFor="Phone" className="text-white">
                Phone Number
              </label>
              <input
                type="text"
                className="form-control bg-dark text-white border-light"
                id="phone"
                placeholder="Enter Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form my-3">
              <label htmlFor="Address" className="text-white">
                Address
              </label>
              <input
                type="text"
                className="form-control bg-dark text-white border-light"
                id="address"
                placeholder="Enter Your Address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="form my-3">
              <label htmlFor="Password" className="text-white">
                Password
              </label>
              <div className="mb-3">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control bg-dark text-white border-light"
                  id="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <div className="form-check mt-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                  <label
                    className="form-check-label text-white"
                    htmlFor="showPassword"
                  >
                    Show Password
                  </label>
                </div>
              </div>
            </div>
            <div className="form my-3">
              <label htmlFor="ConfirmPassword" className="text-white">
                Confirm Password
              </label>
              <div className="input-group">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className="form-control bg-dark text-white border-light"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>
            {error && <p className="text-danger">{error}</p>}
            <div className="my-3">
              <p className="text-white">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-decoration-underline text-success"
                >
                  Login
                </Link>{" "}
              </p>
            </div>
            <div className="text-center">
              <button
                className="my-2 mx-auto btn btn-outline-success"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
