import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const wishlist_product = useSelector((state) => state.wishlist);
  const [order, setOrder] = useState([]);
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const signout = () => {
    const url = "http://localhost:8000/signout";

    axios
      .get(url, {
        headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` },
      })
      .then((res) => {
        console.log(res.data);
      });
    localStorage.removeItem("jwt");
  };

  useEffect(() => {
    const url = `http://localhost:8000/order/get/${user._id}`;
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then((order) => {
        console.log(order);

        setOrder(order.data);
      });
  }, []);

  return (
    <>
      <main className="main">
        <div className="page-header text-center">
          <div className="container">
            <h1 className="page-title">
              My Account<span>{user.email}</span>
            </h1>
          </div>
        </div>

        <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>

              <li className="breadcrumb-item active" aria-current="page">
                My Account
              </li>
            </ol>
          </div>
        </nav>

        <div className="page-content">
          <div className="dashboard">
            <div className="container">
              <div className="row">
                <aside className="col-md-4 col-lg-3">
                  <ul
                    className="nav nav-dashboard flex-column mb-3 mb-md-0"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="tab-dashboard-link"
                        data-toggle="tab"
                        href="#tab-dashboard"
                        role="tab"
                        aria-controls="tab-dashboard"
                        aria-selected="true"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="tab-orders-link"
                        data-toggle="tab"
                        href="#tab-orders"
                        role="tab"
                        aria-controls="tab-orders"
                        aria-selected="false"
                      >
                        Orders
                      </a>
                    </li>
                    {/* <li className="nav-item">
                      <a
                        className="nav-link"
                        id="tab-downloads-link"
                        data-toggle="tab"
                        href="#tab-downloads"
                        role="tab"
                        aria-controls="tab-downloads"
                        aria-selected="false"
                      >
                        Downloads
                      </a>
                    </li> */}
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="tab-address-link"
                        data-toggle="tab"
                        href="#tab-address"
                        role="tab"
                        aria-controls="tab-address"
                        aria-selected="false"
                      >
                        Adresses
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="tab-account-link"
                        data-toggle="tab"
                        href="#tab-account"
                        role="tab"
                        aria-controls="tab-account"
                        aria-selected="false"
                      >
                        Account Details
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link onClick={() => signout()} className="nav-link">
                        Sign Out
                      </Link>
                    </li>
                  </ul>
                </aside>

                <div className="col-md-8 col-lg-9">
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="tab-dashboard"
                      role="tabpanel"
                      aria-labelledby="tab-dashboard-link"
                    >
                      <p>
                        Hello{" "}
                        <span className="font-weight-normal text-dark">
                          {user.email}
                        </span>
                        <br />
                        From your account dashboard you can view your{" "}
                        <a
                          href="#tab-orders"
                          className="tab-trigger-link link-underline"
                        >
                          recent orders
                        </a>
                        , manage your{" "}
                        <a href="#tab-address" className="tab-trigger-link">
                          shipping and billing addresses
                        </a>
                        , and{" "}
                        <a href="#tab-account" className="tab-trigger-link">
                          edit your password and account details
                        </a>
                        .
                      </p>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="tab-orders"
                      role="tabpanel"
                      aria-labelledby="tab-orders-link"
                    >
                      <table className="table table-wishlist table-mobile">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Order Id</th>
                            <th>Transaction Id</th>
                            <th>Status</th>
                          </tr>
                        </thead>

                        <tbody>
                          {order.map((item) => {
                            return (
                              <tr>
                                <td className="product-col">
                                  <div className="product">
                                    <h3 className="product-title">
                                      <Link to={`productdetail/${item.id}`}>
                                        1
                                      </Link>
                                    </h3>
                                  </div>
                                </td>
                                <td
                                  className="price-col"
                                  style={{ fontSize: 12 }}
                                >
                                  {item._id}
                                </td>
                                <td className="stock-col">
                                  <span
                                    className="in-stock"
                                    style={{ fontSize: 12 }}
                                  >
                                    {item.transaction_id}
                                  </span>
                                </td>
                                <td className="action-col">
                                  <span>{item.status}</span>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                      <a
                        href="category.html"
                        className="btn btn-outline-primary-2"
                      >
                        <span>GO SHOP</span>
                        <i className="icon-long-arrow-right"></i>
                      </a>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="tab-downloads"
                      role="tabpanel"
                      aria-labelledby="tab-downloads-link"
                    >
                      <p>No downloads available yet.</p>
                      <a
                        href="category.html"
                        className="btn btn-outline-primary-2"
                      >
                        <span>GO SHOP</span>
                        <i className="icon-long-arrow-right"></i>
                      </a>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="tab-address"
                      role="tabpanel"
                      aria-labelledby="tab-address-link"
                    >
                      <p>
                        The following addresses will be used on the checkout
                        page by default.
                      </p>

                      <div className="row">
                        <div className="col-lg-6">
                          <div className="card card-dashboard">
                            <div className="card-body">
                              <h3 className="card-title">Billing Address</h3>

                              <p>
                                {user.name}
                                <br />
                                Mahima
                                <br />
                                Ghaziabad
                                <br />
                                +91-9560988343
                                <br />
                                {user.email}
                                <br />
                                <a href="#">
                                  Edit <i className="icon-edit"></i>
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <div className="card card-dashboard">
                            <div className="card-body">
                              <h3 className="card-title">Shipping Address</h3>

                              <p>
                                You have not set up this type of address yet.
                                <br />
                                <a href="#">
                                  Edit <i className="icon-edit"></i>
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="tab-account"
                      role="tabpanel"
                      aria-labelledby="tab-account-link"
                    >
                      <form action="#">
                        <div className="row">
                          <div className="col-sm-6">
                            <label>First Name *</label>
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                          </div>

                          <div className="col-sm-6">
                            <label>Last Name *</label>
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                          </div>
                        </div>

                        <label>Display Name *</label>
                        <input type="text" className="form-control" required />
                        <small className="form-text">
                          This will be how your name will be displayed in the
                          account section and in reviews
                        </small>

                        <label>Email address *</label>
                        <input type="email" className="form-control" required />

                        <label>
                          Current password (leave blank to leave unchanged)
                        </label>
                        <input type="password" className="form-control" />

                        <label>
                          New password (leave blank to leave unchanged)
                        </label>
                        <input type="password" className="form-control" />

                        <label>Confirm new password</label>
                        <input type="password" className="form-control mb-2" />

                        <button
                          type="submit"
                          className="btn btn-outline-primary-2"
                        >
                          <span>SAVE CHANGES</span>
                          <i className="icon-long-arrow-right"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
