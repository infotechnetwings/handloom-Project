import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link, Redirect } from "react-router-dom";
import ReactLoading from "react-loading";
import { emptyCart } from "../redux/actions/productsActions";

export const CheckoutScreen = () => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const product = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const location = useLocation();
  const [loading, setloading] = useState(false);
  const [redirect, setRedirect] = useState(false);
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
    amount: "",
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
    displayRazorpay();
    console.log("submit");
    console.log(checkoutDetail);
  };
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  async function displayRazorpay() {
    console.log("click");
    setloading(true);
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    checkoutDetail.amount = total;

    const url = "http://localhost:8000/razorpay";
    const response = await axios
      .post(url, checkoutDetail, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .catch((e) => console.log(e));

    console.log(response);

    const options = {
      key: "rzp_test_DFIt4Gbc8aM1KR",
      currency: response.data.order.currency,
      amount: response.data.order.amount,
      order_id: response.data.order.id,
      name: "Pilakhuwa Handloom",
      description: "Thank you for buying",
      image: "https://www.admin.pilkhuwahandloom.com/api/logo.png",
      handler: function (responseh) {
        console.log(responseh.razorpay_payment_id);
        console.log(responseh.razorpay_order_id);
        console.log(responseh.razorpay_signature);
        const url = `http://localhost:8000/order/create/${user._id}`;

        const orderData = {
          order: {
            transaction_id: responseh.razorpay_payment_id,
            amount: response.data.order.amount,
            user: user._id,
            product: product.id,
          },
        };
        axios
          .post(url, orderData, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          })
          .then((result) => {
            console.log("successfully uploaded order data");
            localStorage.setItem("order", result);
            dispatch(emptyCart());
            setloading(false);
            setRedirect(true);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      prefill: {
        name: checkoutDetail.firstName + checkoutDetail.lastName,
        email: checkoutDetail.email,
        phone_number: checkoutDetail.phone,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  if (redirect) {
    return <Redirect to="/" />;
  }

  if (loading) {
    <ReactLoading type="spin" color="#cc9966" height={667} width={375} />;
  }
  return (
    <main className="main">
      {/* {loading ? <div>Processing your payment</div> : <div>deepka</div>} */}
      <div className="page-header text-center">
        <div className="container">
          <h1 className="page-title">
            Checkout<span>Pilakhuwa Handloom</span>
          </h1>
        </div>
      </div>

      <nav aria-label="breadcrumb" className="breadcrumb-nav">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
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
            <form>
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
                            <tr key={item.id}>
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
                          <div className="card-body">Cash on delivery</div>
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
                            Complete a payment through razarpay secure server
                          </div>
                        </div>
                      </div>
                    </div>

                    <Link
                      onClick={() => displayRazorpay()}
                      className="btn btn-outline-primary-2 btn-order btn-block"
                    >
                      <span className="btn-text">Place Order</span>
                      <span className="btn-hover-text">
                        Proceed to Checkout
                      </span>
                    </Link>
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
