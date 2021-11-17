import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export const CheckoutScreen = () => {
  const [isChecked, setIsChecked] = useState(false);
  const product = useSelector((state) => state.cart);
  const location = useLocation();
  const [checkoutDetail, setCheckoutDetail] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    phone: "",
    email: "",
    account: "",
  });
  var total = 0;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "first":
        setCheckoutDetail({ ...checkoutDetail, firstName: value });
        break;
      case "last":
        setCheckoutDetail({ ...checkoutDetail, lastName: value });
        break;
      case "address":
        setCheckoutDetail({ ...checkoutDetail, address: value });
        break;
      case "city":
        setCheckoutDetail({ ...checkoutDetail, address: value });
        break;
      case "state":
        setCheckoutDetail({ ...checkoutDetail, address: value });
        break;
      case "postalCode":
        setCheckoutDetail({ ...checkoutDetail, address: value });
        break;
      case "phone":
        setCheckoutDetail({ ...checkoutDetail, address: value });
        break;
      case "email":
        setCheckoutDetail({ ...checkoutDetail, address: value });
        break;
      default:
        console.log(name, value);
        setIsChecked(!isChecked);
        setCheckoutDetail({
          ...checkoutDetail,
          account: isChecked,
        });
        break;
    }
    // setCheckoutDetail({ ...checkoutDetail, firstName: value });
    console.log(checkoutDetail);
  };
  const handleSubmit = () => {
    console.log("submit");
    console.log(checkoutDetail);
  };
  return (
    <main className="main">
      <div className="page-header text-center">
        <div className="container">
          <h1 className="page-title">
            Checkout<span>Shop</span>
          </h1>
        </div>
      </div>

      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Shop</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Checkout
            </li>
          </ol>
        </div>
      </nav>

      <div className="page-content">
        <div className="checkout">
          <div className="container">
            <form action="#">
              <div className="row">
                <div className="col-lg-9">
                  <h2 className="checkout-title">Billing Details</h2>

                  <div className="row">
                    <div className="col-sm-6">
                      <label>First Name *</label>
                      <input
                        name="first"
                        type="text"
                        className="form-control"
                        required
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-sm-6">
                      <label>Last Name *</label>
                      <input
                        name="last"
                        type="text"
                        className="form-control"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <label>Street address *</label>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    placeholder="House number and Street name"
                    required
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Appartments, suite, unit etc ..."
                    required
                  />

                  <div className="row">
                    <div className="col-sm-6">
                      <label>Town / City *</label>
                      <input
                        name="city"
                        type="text"
                        className="form-control"
                        required
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-sm-6">
                      <label>State / County *</label>
                      <input
                        name="state"
                        type="text"
                        className="form-control"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-6">
                      <label>Postcode / ZIP *</label>
                      <input
                        name="postalCode"
                        type="text"
                        className="form-control"
                        required
                        onChange={handleChange}
                      />
                    </div>

                    <div className="col-sm-6">
                      <label>Phone *</label>
                      <input
                        name="phone"
                        type="tel"
                        className="form-control"
                        required
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <label>Email address *</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    required
                    onChange={handleChange}
                  />

                  <div className="custom-control custom-checkbox">
                    <input
                      name="account"
                      type="checkbox"
                      className="custom-control-input"
                      id="checkout-create-acc"
                      checked={true}
                      onChange={handleChange}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="checkout-create-acc"
                    >
                      Create an account?
                    </label>
                  </div>

                  <label>Order notes (optional)</label>
                  <textarea
                    className="form-control"
                    cols="30"
                    rows="4"
                    placeholder="Notes about your order, e.g. special notes htmlFor delivery"
                  ></textarea>
                </div>

                <aside className="col-lg-3">
                  <div className="summary">
                    <h3 className="summary-title">Your Order</h3>

                    <table className="table table-summary">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Total</th>
                        </tr>
                      </thead>

                      <tbody>
                        {product.map((item) => {
                          total += item.price;
                          return (
                            <tr>
                              <td>
                                <a href="#">{item.title}</a>
                              </td>
                              <td>{item.price}</td>
                            </tr>
                          );
                        })}

                        <tr className="summary-subtotal">
                          <td>Subtotal:</td>
                          <td>{total.toFixed(2)}</td>
                        </tr>

                        <tr>
                          <td>Shipping:</td>
                          <td>Free shipping</td>
                        </tr>
                        <tr className="summary-total">
                          <td>Total:</td>
                          <td>{total.toFixed(2)}</td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="accordion-summary" id="accordion-payment">
                      <div className="card">
                        <div className="card-header" id="heading-3">
                          <h2 className="card-title">
                            <a
                              className="collapsed"
                              role="button"
                              data-toggle="collapse"
                              href="#collapse-3"
                              aria-expanded="false"
                              aria-controls="collapse-3"
                            >
                              Cash on delivery
                            </a>
                          </h2>
                        </div>

                        <div
                          id="collapse-3"
                          className="collapse"
                          aria-labelledby="heading-3"
                          data-parent="#accordion-payment"
                        >
                          <div className="card-body">
                            Quisque volutpat mattis eros. Lorem ipsum dolor sit
                            amet, consectetuer adipiscing elit. Donec odio.
                            Quisque volutpat mattis eros.
                          </div>
                        </div>
                      </div>

                      <div className="card">
                        <div className="card-header" id="heading-5">
                          <h2 className="card-title">
                            <a
                              className="collapsed"
                              role="button"
                              data-toggle="collapse"
                              href="#collapse-5"
                              aria-expanded="false"
                              aria-controls="collapse-5"
                            >
                              Internet Banking / UPI (Razorpay)
                              <img
                                src="assets/images/payments-summary.png"
                                alt="payments cards"
                              />
                            </a>
                          </h2>
                        </div>

                        <div
                          id="collapse-5"
                          className="collapse"
                          aria-labelledby="heading-5"
                          data-parent="#accordion-payment"
                        >
                          <div className="card-body">
                            Donec nec justo eget felis facilisis fermentum.Lorem
                            ipsum dolor sit amet, consectetuer adipiscing elit.
                            Donec odio. Quisque volutpat mattis eros. Lorem
                            ipsum dolor sit ame.
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      onSubmit={handleSubmit}
                      type="submit"
                      className="btn btn-outline-primary-2 btn-order btn-block"
                    >
                      <span className="btn-text">Place Order</span>
                      <span className="btn-hover-text">
                        Proceed to Checkout
                      </span>
                    </button>
                  </div>
                </aside>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
