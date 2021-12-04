import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { userSignin } from "../redux/actions/productsActions";

export const AuthScreen = () => {
  const dispatch = useDispatch();
  const [loginDetails, setloginDetails] = useState({
    email: "",
    password: "",
    redirect: false,
    loading: false,
  });
  const [registerDetails, setregisterDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const handleLogin = () => {
    notify();
    const url = "http://localhost:8000/signin";
    axios
      .post(url, loginDetails)
      .then((res) => {
        console.log(res.data);
        dispatch(userSignin(res.data.user));
        localStorage.setItem("jwt", res.data.token);
      })
      .catch((err) => console.log(err, "error in sending post request"));
    setloginDetails({ redirect: true });
  };
  const handleRegistration = () => {
    notify();
    const url = `http://localhost:8000/signup`;
    if (registerDetails.password === registerDetails.confirm_password) {
      const formdata = new FormData();
      formdata.append("email", registerDetails.email);
      formdata.append("password", registerDetails.password);
      formdata.append("name", registerDetails.username);
      axios
        .post(url, registerDetails)
        .then((res) => {
          if (res.data === "Already Registered") {
            console.log("Already Registered !");
          } else {
            console.log("Registered Sucessfully", res.data);
          }
        })
        .catch((err) => console.log(err, "error in sending post request"));
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "register-email":
        setregisterDetails({ ...registerDetails, email: value });
        break;
      case "register-username":
        setregisterDetails({ ...registerDetails, name: value });
        break;
      case "register-password":
        setregisterDetails({ ...registerDetails, password: value });
        break;
      case "register-password-confirm":
        setregisterDetails({ ...registerDetails, confirm_password: value });
        break;
      case "signin-email":
        setloginDetails({ ...loginDetails, email: value });
        break;
      case "singin-password":
        setloginDetails({ ...loginDetails, password: value });
        break;
      default:
        break;
    }
    console.log(registerDetails);
    console.log(loginDetails);
  };
  const notify = async () => {
    const resolveAfter3Sec = new Promise((resolve) =>
      setTimeout(resolve, 3000)
    );

    toast.promise(resolveAfter3Sec, {
      pending: "Please wait while registering ",
      success: "Register successfully",
      error: "Error while registering",
    });
  };

  if (loginDetails.redirect) {
    return <Redirect to="/" />;
  }

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
                  <form method="POST">
                    <div className="form-group">
                      <label htmlFor="singin-email-2">
                        Enter your E-mail *
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="singin-email-2"
                        name="signin-email"
                        required
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="singin-password-2">Password *</label>
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
                        onClick={() => handleLogin()}
                        type="button"
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
                          htmlFor="signin-remember-2"
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
                  <form method="POST">
                    <div className="form-group">
                      <label htmlFor="register-email-2">
                        Your email address *
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="register-email-2"
                        name="register-email"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="register-email-2">
                        Enter your username *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="register-username-2"
                        name="register-username"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="register-email-2">Password *</label>
                      <input
                        type="password"
                        className="form-control"
                        id="register-password-2"
                        name="register-password"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="register-password-2">
                        Confirm Password *
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="register-password-confirm-2"
                        name="register-password-confirm"
                        required
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-footer">
                      <button
                        onClick={() => handleRegistration()}
                        type="button"
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
                          htmlFor="register-policy-2"
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
