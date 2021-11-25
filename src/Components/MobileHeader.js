import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

export const MobileHeader = () => {
  const [category, setState] = useState([]);
  useEffect(() => {
    const url = "https://www.admin.pilkhuwahandloom.com/api/category";
    axios.get(url).then((res) => {
      setState(res.data);
    });
    console.log(category, "hjhkhkh");
  }, []);
  return (
    <>
      <div className="mobile-menu-overlay"></div>

      <div className="mobile-menu-container mobile-menu-light">
        <div className="mobile-menu-wrapper">
          <span className="mobile-menu-close">
            <i className="icon-close"></i>
          </span>

          <form action="#" method="get" className="mobile-search">
            <label className="sr-only">Search</label>
            <input
              type="search"
              className="form-control"
              name="mobile-search"
              id="mobile-search"
              placeholder="Search product ..."
              required
            />
            <button className="btn btn-primary" type="submit">
              <i className="icon-search"></i>
            </button>
          </form>

          <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="mobile-menu-link"
                data-toggle="tab"
                href="#mobile-menu-tab"
                role="tab"
                aria-controls="mobile-menu-tab"
                aria-selected="true"
              >
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="mobile-cats-link"
                data-toggle="tab"
                href="#mobile-cats-tab"
                role="tab"
                aria-controls="mobile-cats-tab"
                aria-selected="false"
              >
                Categories
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="mobile-menu-tab"
              role="tabpanel"
              aria-labelledby="mobile-menu-link"
            >
              <nav className="mobile-nav">
                <ul className="mobile-menu">
                  <li className="active">
                    <Link to="/">Home</Link>
                  </li>

                  <li>
                    <Link to="/product" className="sf-with-ul">
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link to="/product" className="sf-with-ul">
                      Home Furnishing
                    </Link>
                  </li>
                  <li>
                    <Link to="/product" className="sf-with-ul">
                      Kitchen & Dinning
                    </Link>
                  </li>
                  <li>
                    <Link to="/product" className="sf-with-ul">
                      Tools & Utility
                    </Link>
                  </li>
                  <li>
                    <Link to="/product" className="sf-with-ul">
                      Bath & Cleaning
                    </Link>
                  </li>
                  <li>
                    <Link to="/product" className="sf-with-ul">
                      Kids & Items
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div
              className="tab-pane fade"
              id="mobile-cats-tab"
              role="tabpanel"
              aria-labelledby="mobile-cats-link"
            >
              <nav className="mobile-cats-nav">
                <ul className="mobile-cats-menu">
                  {category.map((item) => {
                    return (
                      <li key={item.id}>
                        <Link className="mobile-cats-lead" to="/">
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>

          <div className="social-icons">
            <Link
              to="/"
              className="social-icon"
              target="_blank"
              title="Facebook"
            >
              <i className="icon-facebook-f"></i>
            </Link>
            <Link
              to="/"
              className="social-icon"
              target="_blank"
              title="Twitter"
            >
              <i className="icon-twitter"></i>
            </Link>
            <Link
              to="/"
              className="social-icon"
              target="_blank"
              title="Instagram"
            >
              <i className="icon-instagram"></i>
            </Link>
            <Link
              to="/"
              className="social-icon"
              target="_blank"
              title="Youtube"
            >
              <i className="icon-youtube"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
