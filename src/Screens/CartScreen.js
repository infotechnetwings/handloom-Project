import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export const CartScreen = () => {
  const product = useSelector((state) => state.cart);
  const location = useLocation();
  var total = 0;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main className="main">
      <div className="page-header text-center">
        <div className="container">
          <h1 className="page-title">
            Shopping Cart<span>Shop</span>
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
              Shopping Cart
            </li>
          </ol>
        </div>
      </nav>

      <div className="page-content">
        <div className="cart">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <table className="table table-cart table-mobile">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    {product.map((item) => {
                      total += item.price * item.qty;
                      return (
                        <tr key={item.id}>
                          <td className="product-col">
                            <div className="product">
                              <figure className="product-media">
                                <a href="#">
                                  <img src={item.image} alt="Product image" />
                                </a>
                              </figure>

                              <h3 className="product-title">
                                <a href="#">{item.title}</a>
                              </h3>
                            </div>
                          </td>
                          <td className="price-col">₹{item.price}</td>
                          <td className="quantity-col">
                            <div className="cart-product-quantity">
                              <input
                                type="number"
                                className="form-control"
                                value={item.qty}
                                min="1"
                                max="10"
                                step="1"
                                data-decimals="0"
                                required
                              />
                            </div>
                          </td>
                          <td className="total-col">{item.price * item.qty}</td>
                          <td className="remove-col">
                            <button className="btn-remove">
                              <i className="icon-close"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                <div className="cart-bottom">
                  <div className="cart-discount">
                    <form action="#">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          required
                          placeholder="coupon code"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-outline-primary-2"
                            type="submit"
                          >
                            <i className="icon-long-arrow-right"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>

                  <a href="#" className="btn btn-outline-dark-2">
                    <span>UPDATE CART</span>
                    <i className="icon-refresh"></i>
                  </a>
                </div>
              </div>

              <aside className="col-lg-3">
                <div className="summary summary-cart">
                  <h3 className="summary-title">Cart Total</h3>

                  <table className="table table-summary">
                    <tbody>
                      <tr className="summary-subtotal">
                        <td>Subtotal:</td>
                        <td>₹{total}</td>
                      </tr>

                      <tr className="summary-shipping">
                        <td>Additional:</td>
                        <td>&nbsp;</td>
                      </tr>

                      <tr className="summary-shipping-row">
                        <td>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="free-shipping"
                              name="shipping"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              for="free-shipping"
                            >
                              Free Shipping
                            </label>
                          </div>
                        </td>
                        <td>₹0.00</td>
                      </tr>

                      <tr className="summary-shipping-row">
                        <td>
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="standart-shipping"
                              name="shipping"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              for="standart-shipping"
                            >
                              GST:
                            </label>
                          </div>
                        </td>
                        <td>₹0.00</td>
                      </tr>

                      <tr className="summary-shipping-estimate">
                        <td>
                          Estimate for Your Country
                          <br />
                          <a href="dashboard.html">Change address</a>
                        </td>
                        <td>&nbsp;</td>
                      </tr>

                      <tr className="summary-total">
                        <td>Total:</td>
                        <td>₹ {total}</td>
                      </tr>
                    </tbody>
                  </table>

                  <Link
                    to="checkout"
                    className="btn btn-outline-primary-2 btn-order btn-block"
                  >
                    PROCEED TO CHECKOUT
                  </Link>
                </div>

                <Link
                  to="/product"
                  className="btn btn-outline-dark-2 btn-block mb-3"
                >
                  <span>CONTINUE SHOPPING</span>
                  <i className="icon-refresh"></i>
                </Link>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
