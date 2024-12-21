import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      navigate("/profile");
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    const user = { email: "user@example.com", password: "password123" };

    if (email === user.email && password === user.password) {
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/profile");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container my-3 py-3 bg-dark text-white">
      <h1 className="text-center">Login</h1>
      <hr className="text-white" />
      <div className="row my-4 h-100">
        <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
          <form onSubmit={handleLogin}>
            <div className="my-3">
              <label htmlFor="floatingInput" className="text-white">
                Email address
              </label>
              <input
                type="email"
                className="form-control bg-dark text-white border-light"
                id="floatingInput"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="my-3">
              <label htmlFor="floatingPassword" className="text-white">
                Password
              </label>
              <input
                type="password"
                className="form-control bg-dark text-white border-light"
                id="floatingPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-danger">{error}</p>}{" "}
            <div className="my-3">
              <p className="text-white">
                New Here?{" "}
                <Link
                  to="/register"
                  className="text-decoration-underline text-success"
                >
                  Register
                </Link>{" "}
              </p>
            </div>
            <div className="text-center">
              <button
                className="my-2 mx-auto btn btn-outline-success"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
