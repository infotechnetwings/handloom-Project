import axios from "axios";
import React, { useState } from "react";

export const AuthScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState({});
  const handleSubmit = () => {
    const url = "";
    axios
      .post(url, { username, password })
      .then((res) => {
        if (res.data.success) {
          console.log("successfully login", res.data.user);
          setUser(res.data.user);
        } else console.log("login Failed ");
      })
      .catch((err) => console.log(err, "error in sending post request"));
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "phone") {
      setPhone(value);
      console.log(phone);
    }
    if (name == "singin-password") setPassword(value);
  };
  return (
    <main className="main">
      <div className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17">
        <div className="container">
          <div className="form-box">
            <div className="form-tab">
              <ul className="nav nav-pills nav-fill" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="signin-tab-2"
                    data-toggle="tab"
                    href="#signin-2"
                    role="tab"
                    aria-controls="signin-2"
                    aria-selected="false"
                  >
                    Sign In
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="register-tab-2"
                    data-toggle="tab"
                    href="#register-2"
                    role="tab"
                    aria-controls="register-2"
                    aria-selected="true"
                  >
                    Register
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane fade"
                  id="signin-2"
                  role="tabpanel"
                  aria-labelledby="signin-tab-2"
                >
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label for="singin-email-2">Mobile Number *</label>
                      <input
                        type="Number"
                        className="form-control"
                        id="singin-email-2"
                        name="phone"
                        required
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label for="singin-password-2">Password *</label>
                      <input
                        type="password"
                        className="form-control"
                        id="singin-password-2"
                        name="singin-password"
                        required
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-footer">
                      <button
                        type="submit"
                        className="btn btn-outline-primary-2"
                      >
                        <span>LOG IN</span>
                        <i className="icon-long-arrow-right"></i>
                      </button>

                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="signin-remember-2"
                        />
                        <label
                          className="custom-control-label"
                          for="signin-remember-2"
                        >
                          Remember Me
                        </label>
                      </div>

                      <a href="/" className="forgot-link">
                        Forgot Your Password?
                      </a>
                    </div>
                  </form>
                  <div className="form-choice">
                    <p className="text-center">or sign in with</p>
                    <div className="row">
                      <div className="col-sm-6">
                        <a href="/" className="btn btn-login btn-g">
                          <i className="icon-google"></i>
                          Login With Google
                        </a>
                      </div>
                      <div className="col-sm-6">
                        <a href="#" className="btn btn-login btn-f">
                          <i className="icon-facebook-f"></i>
                          Login With Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade show active"
                  id="register-2"
                  role="tabpanel"
                  aria-labelledby="register-tab-2"
                >
                  <form action="#">
                    <div className="form-group">
                      <label for="register-email-2">Your email address *</label>
                      <input
                        type="email"
                        className="form-control"
                        id="register-email-2"
                        name="register-email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label for="register-password-2">Password *</label>
                      <input
                        type="password"
                        className="form-control"
                        id="register-password-2"
                        name="register-password"
                        required
                      />
                    </div>

                    <div className="form-footer">
                      <button
                        type="submit"
                        className="btn btn-outline-primary-2"
                      >
                        <span>SIGN UP</span>
                        <i className="icon-long-arrow-right"></i>
                      </button>

                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="register-policy-2"
                          required
                        />
                        <label
                          className="custom-control-label"
                          for="register-policy-2"
                        >
                          I agree to the <a href="#">privacy policy</a> *
                        </label>
                      </div>
                    </div>
                  </form>
                  <div className="form-choice">
                    <p className="text-center">or sign in with</p>
                    <div className="row">
                      <div className="col-sm-6">
                        <a href="#" className="btn btn-login btn-g">
                          <i className="icon-google"></i>
                          Login With Google
                        </a>
                      </div>
                      <div className="col-sm-6">
                        <a href="#" className="btn btn-login  btn-f">
                          <i className="icon-facebook-f"></i>
                          Login With Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
