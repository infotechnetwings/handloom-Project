import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

export const SingleProductScreen = () => {
  const item = useSelector((state) => state.allProducts.products);
  const location = useLocation();
  const { id } = useParams();
  const product = item.filter((item) => {
    return item.id == id;
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <main className="main">
      <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
        <div className="container d-flex align-items-center">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Products</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {product[0].title}
            </li>
          </ol>
        </div>
      </nav>

      <div className="page-content">
        <div className="container">
          <div className="product-details-top">
            <div className="row">
              <div className="col-md-6">
                <div className="product-gallery product-gallery-vertical">
                  <div className="row">
                    <figure className="product-main-image">
                      <img
                        id="product-zoom"
                        src={product[0].image}
                        data-zoom-image="assets/images/products/single/1-big.jpg"
                        alt="product image"
                        style={{ height: "80%" }}
                      />

                      <a
                        href="#"
                        id="btn-product-gallery"
                        className="btn-product-gallery"
                      >
                        <i className="icon-arrows"></i>
                      </a>
                    </figure>

                    <div
                      id="product-zoom-gallery"
                      className="product-image-gallery"
                    >
                      <a
                        className="product-gallery-item active"
                        href="#"
                        data-image="assets/images/products/single/1.jpg"
                        data-zoom-image="assets/images/products/single/1-big.jpg"
                      >
                        <img src={product[0].image} alt="product side" />
                      </a>

                      <a
                        className="product-gallery-item"
                        href="#"
                        data-image="assets/images/products/single/2.jpg"
                        data-zoom-image="assets/images/products/single/2-big.jpg"
                      >
                        <img src={product[0].image} alt="product cross" />
                      </a>

                      <a
                        className="product-gallery-item"
                        href="#"
                        data-image="assets/images/products/single/3.jpg"
                        data-zoom-image="assets/images/products/single/3-big.jpg"
                      >
                        <img src={product[0].image} alt="product with model" />
                      </a>

                      <a
                        className="product-gallery-item"
                        href="#"
                        data-image="assets/images/products/single/4.jpg"
                        data-zoom-image="assets/images/products/single/4-big.jpg"
                      >
                        <img src={product[0].image} alt="product back" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="product-details">
                  <h1 className="product-title">{product[0].title}</h1>

                  <div className="ratings-container">
                    <div className="ratings">
                      <div
                        className="ratings-val"
                        style={{ width: "80%" }}
                      ></div>
                    </div>

                    <a
                      className="ratings-text"
                      href="#product-review-link"
                      id="review-link"
                    >
                      ( 2 Reviews )
                    </a>
                  </div>

                  <div className="product-price">₹ {product[0].price}</div>

                  <div className="product-content">
                    <p>{product[0].description}</p>
                  </div>

                  <div className="details-filter-row details-row-size">
                    <label for="size">Size:</label>
                    <div className="select-custom">
                      <select name="size" id="size" className="form-control">
                        <option value="#" selected="selected">
                          Select a size
                        </option>
                        <option value="s">Small</option>
                        <option value="m">Medium</option>
                        <option value="l">Large</option>
                        <option value="xl">Extra Large</option>
                      </select>
                    </div>

                    <a href="#" className="size-guide">
                      <i className="icon-th-list"></i>size guide
                    </a>
                  </div>

                  <div className="details-filter-row details-row-size">
                    <label for="qty">Qty:</label>
                    <div className="product-details-quantity">
                      <input
                        type="number"
                        id="qty"
                        className="form-control"
                        value="1"
                        min="1"
                        max="10"
                        step="1"
                        data-decimals="0"
                        required
                      />
                    </div>
                  </div>

                  <div className="product-details-action">
                    <a type="button" className="btn-product btn-cart">
                      <span>add to cart</span>
                    </a>

                    <div className="details-action-wrapper">
                      <a
                        href="#"
                        className="btn-product btn-wishlist"
                        title="Wishlist"
                      >
                        <span>Add to Wishlist</span>
                      </a>
                    </div>
                  </div>

                  <div className="product-details-footer">
                    <div className="product-cat">
                      <span>Category:</span>
                      <a href="#">{product[0].category}</a>,{" "}
                    </div>

                    <div className="social-icons social-icons-sm">
                      <span className="social-label">Share:</span>
                      <a
                        href="#"
                        className="social-icon"
                        title="Facebook"
                        target="_blank"
                      >
                        <i className="icon-facebook-f"></i>
                      </a>
                      <a
                        href="#"
                        className="social-icon"
                        title="Twitter"
                        target="_blank"
                      >
                        <i className="icon-twitter"></i>
                      </a>
                      <a
                        href="#"
                        className="social-icon"
                        title="Instagram"
                        target="_blank"
                      >
                        <i className="icon-instagram"></i>
                      </a>
                      <a
                        href="#"
                        className="social-icon"
                        title="Pinterest"
                        target="_blank"
                      >
                        <i className="icon-pinterest"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product-details-tab">
            <ul className="nav nav-pills justify-content-center" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="product-desc-link"
                  data-toggle="tab"
                  href="#product-desc-tab"
                  role="tab"
                  aria-controls="product-desc-tab"
                  aria-selected="true"
                >
                  Description
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="product-info-link"
                  data-toggle="tab"
                  href="#product-info-tab"
                  role="tab"
                  aria-controls="product-info-tab"
                  aria-selected="false"
                >
                  Additional information
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="product-shipping-link"
                  data-toggle="tab"
                  href="#product-shipping-tab"
                  role="tab"
                  aria-controls="product-shipping-tab"
                  aria-selected="false"
                >
                  Shipping & Returns
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="product-review-link"
                  data-toggle="tab"
                  href="#product-review-tab"
                  role="tab"
                  aria-controls="product-review-tab"
                  aria-selected="false"
                >
                  Reviews (2)
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="product-desc-tab"
                role="tabpanel"
                aria-labelledby="product-desc-link"
              >
                <div className="product-desc-content">
                  <h3>Product Information</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                    erat ut turpis. Suspendisse urna viverra non, semper
                    suscipit, posuere a, pede. Donec nec justo eget felis
                    facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                    Aenean dignissim pellentesque felis. Phasellus ultrices
                    nulla quis nibh. Quisque a lectus. Donec consectetuer ligula
                    vulputate sem tristique cursus.
                  </p>
                  <ul>
                    <li>
                      Nunc nec porttitor turpis. In eu risus enim. In vitae
                      mollis elit.
                    </li>
                    <li>Vivamus finibus vel mauris ut vehicula.</li>
                    <li>
                      Nullam a magna porttitor, dictum risus nec, faucibus
                      sapien.
                    </li>
                  </ul>

                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                    erat ut turpis. Suspendisse urna viverra non, semper
                    suscipit, posuere a, pede. Donec nec justo eget felis
                    facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                    Aenean dignissim pellentesque felis. Phasellus ultrices
                    nulla quis nibh. Quisque a lectus. Donec consectetuer ligula
                    vulputate sem tristique cursus.
                  </p>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="product-info-tab"
                role="tabpanel"
                aria-labelledby="product-info-link"
              >
                <div className="product-desc-content">
                  <h3>Information</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                    erat ut turpis. Suspendisse urna viverra non, semper
                    suscipit, posuere a, pede. Donec nec justo eget felis
                    facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                  </p>

                  <h3>Fabric & care</h3>
                  <ul>
                    <li>Faux suede fabric</li>
                    <li>Gold tone metal hoop handles.</li>
                    <li>RI branding</li>
                    <li>Snake print trim interior</li>
                    <li>Adjustable cross body strap</li>
                    <li>
                      Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm
                    </li>
                  </ul>

                  <h3>Size</h3>
                  <p>one size</p>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="product-shipping-tab"
                role="tabpanel"
                aria-labelledby="product-shipping-link"
              >
                <div className="product-desc-content">
                  <h3>Delivery & returns</h3>
                  <p>
                    We deliver to over 100 countries around the world. For full
                    details of the delivery options we offer, please view our{" "}
                    <a href="#">Delivery information</a>
                    <br />
                    We hope you’ll love every purchase, but if you ever need to
                    return an item you can do so within a month of receipt. For
                    full details of how to make a return, please view our
                    <a href="#">Returns information</a>
                  </p>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="product-review-tab"
                role="tabpanel"
                aria-labelledby="product-review-link"
              >
                <div className="reviews">
                  <h3>Reviews (2)</h3>
                  <div className="review">
                    <div className="row no-gutters">
                      <div className="col-auto">
                        <h4>
                          <a href="#">Samanta J.</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            ></div>
                          </div>
                        </div>

                        <span className="review-date">6 days ago</span>
                      </div>

                      <div className="col">
                        <h4>Good, perfect size</h4>

                        <div className="review-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Ducimus cum dolores assumenda asperiores
                            facilis porro reprehenderit animi culpa atque
                            blanditiis commodi perspiciatis doloremque,
                            possimus, explicabo, autem fugit beatae quae
                            voluptas!
                          </p>
                        </div>

                        <div className="review-action">
                          <a href="#">
                            <i className="icon-thumbs-up"></i>Helpful (2)
                          </a>
                          <a href="#">
                            <i className="icon-thumbs-down"></i>Unhelpful (0)
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="review">
                    <div className="row no-gutters">
                      <div className="col-auto">
                        <h4>
                          <a href="#">John Doe</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "100%" }}
                            ></div>
                          </div>
                        </div>

                        <span className="review-date">5 days ago</span>
                      </div>

                      <div className="col">
                        <h4>Very good</h4>

                        <div className="review-content">
                          <p>
                            Sed, molestias, tempore? Ex dolor esse iure hic
                            veniam laborum blanditiis laudantium iste amet. Cum
                            non voluptate eos enim, ab cumque nam, modi, quas
                            iure illum repellendus, blanditiis perspiciatis
                            beatae!
                          </p>
                        </div>

                        <div className="review-action">
                          <a href="#">
                            <i className="icon-thumbs-up"></i>Helpful (0)
                          </a>
                          <a href="#">
                            <i className="icon-thumbs-down"></i>Unhelpful (0)
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
      </div>
    </main>
  );
};
