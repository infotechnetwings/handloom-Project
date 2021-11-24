import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/actions/productsActions";
import { toast } from "react-toastify";

export const ProductCard = () => {
  const product = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const addCart = (item) => {
    dispatch(addToCart(item));
  };
  const notify = () => {
    toast.success("Added to cart", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <>
      <div className="container pt-6 new-arrivals">
        <div className="heading heading-center mb-3">
          <h2 className="title">Trending Products</h2>
          <p>Get Through all Trending products and get your best deal</p>
        </div>

        <div className="tab-content">
          <div
            className="tab-pane p-0 fade show active"
            id="new-all-tab"
            role="tabpanel"
            aria-labelledby="new-all-link"
          >
            <div className="products">
              <div className="row justify-content-center">
                {product.map((item) => {
                  return (
                    <div className="col-6 col-md-4 col-lg-3" key={item.id}>
                      <div className="product product-2">
                        <figure className="product-media">
                          <Link to={`productdetail/${item.id}`}>
                            <img
                              src={item.image}
                              alt="Product image"
                              className="product-image"
                              style={{ height: 250 }}
                            />
                            <img
                              src={item.image}
                              alt="Product image"
                              className="product-image-hover"
                              style={{ height: 250 }}
                            />
                          </Link>

                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist"
                              title="Add to wishlist"
                            >
                              <span>add to wishlist</span>
                            </a>
                          </div>

                          <div className="product-action product-action-transparent">
                            <Link
                              onClick={() => {
                                addCart(item);
                                notify();
                              }}
                              className="btn-product btn-cart"
                            >
                              <span>Add to cart</span>
                            </Link>
                          </div>
                        </figure>

                        <div className="product-body">
                          <div className="product-cat">
                            <a href="/">{item.category}</a>
                          </div>

                          <h3 className="product-title">
                            <Link to={`productdetail/${item.id}`}>
                              {item.title}
                            </Link>
                          </h3>

                          <div className="product-price">₹ {item.price}</div>

                          {/* <div className="product-nav product-nav-dots">
                            <a
                              href="#"
                              className="active"
                              style={{ background: "#e5dcb1" }}
                            >
                              <span className="sr-only">Color name</span>
                            </a>
                            <a href="#" style={{ background: "#b9cbd8" }}>
                              <span className="sr-only">Color name</span>
                            </a>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* <div
            className="tab-pane p-0 fade"
            id="new-cloth-tab"
            role="tabpanel"
            aria-labelledby="new-cloth-link"
          >
            <div className="products">
              <div className="row justify-content-center">
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="product product-2">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-5/products/product-5-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-5/products/product-5-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>

                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist"
                          title="Add to wishlist"
                        >
                          <span>add to wishlist</span>
                        </a>
                      </div>

                      <div className="product-action product-action-transparent">
                        <a href="#" className="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                      </div>
                    </figure>

                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Clothing</a>
                      </div>

                      <h3 className="product-title">
                        <a href="product.html">Linen-blend dress</a>
                      </h3>

                      <div className="product-price">$60.00</div>

                      <div className="product-nav product-nav-dots">
                        <a
                          href="#"
                          className="active"
                          style={{ background: "#e5dcb1" }}
                        >
                          <span className="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#b9cbd8" }}>
                          <span className="sr-only">Color name</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <div className="product product-2">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-5/products/product-7-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-5/products/product-7-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>

                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist"
                          title="Add to wishlist"
                        >
                          <span>add to wishlist</span>
                        </a>
                      </div>

                      <div className="product-action product-action-transparent">
                        <a href="#" className="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                      </div>
                    </figure>

                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Clothing</a>
                      </div>

                      <h3 className="product-title">
                        <a href="product.html">Paper bag trousers</a>
                      </h3>

                      <div className="product-price">$60.00</div>

                      <div className="product-nav product-nav-dots">
                        <a
                          href="#"
                          className="active"
                          style={{ background: "#9fac76" }}
                        >
                          <span className="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#333333" }}>
                          <span className="sr-only">Color name</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <div className="product product-2">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-5/products/product-10-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-5/products/product-10-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>

                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist"
                          title="Add to wishlist"
                        >
                          <span>add to wishlist</span>
                        </a>
                      </div>

                      <div className="product-action product-action-transparent">
                        <a href="#" className="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                      </div>
                    </figure>

                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Clothing</a>
                      </div>

                      <h3 className="product-title">
                        <a href="product.html">Silk-blend kaftan</a>
                      </h3>

                      <div className="product-price">Now $370.00</div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <div className="product product-2">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-5/products/product-11-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-5/products/product-11-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>

                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist"
                          title="Add to wishlist"
                        >
                          <span>add to wishlist</span>
                        </a>
                      </div>

                      <div className="product-action product-action-transparent">
                        <a href="#" className="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                      </div>
                    </figure>

                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Clothing</a>
                      </div>

                      <h3 className="product-title">
                        <a href="product.html">Linen-blend jumpsuit</a>
                      </h3>

                      <div className="product-price">$595.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="tab-pane p-0 fade"
            id="new-shoes-tab"
            role="tabpanel"
            aria-labelledby="new-shoes-link"
          >
            <div className="products">
              <div className="row justify-content-center">
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="product product-2">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-5/products/product-6-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-5/products/product-6-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>

                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist"
                          title="Add to wishlist"
                        >
                          <span>add to wishlist</span>
                        </a>
                      </div>

                      <div className="product-action product-action-transparent">
                        <a href="#" className="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                      </div>
                    </figure>

                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Shoes</a>
                      </div>

                      <h3 className="product-title">
                        <a href="product.html">Sandals with lacing</a>
                      </h3>

                      <div className="product-price">
                        <span className="new-price">Now $70.00</span>
                        <span className="old-price">Was $155.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <div className="product product-2">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-5/products/product-12-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-5/products/product-12-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>

                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist"
                          title="Add to wishlist"
                        >
                          <span>add to wishlist</span>
                        </a>
                      </div>

                      <div className="product-action product-action-transparent">
                        <a href="#" className="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                      </div>
                    </figure>

                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Shoes</a>
                      </div>

                      <h3 className="product-title">
                        <a href="product.html">Sandals</a>
                      </h3>

                      <div className="product-price">
                        <span className="new-price">Now $120.00</span>
                        <span className="old-price">Was $140.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="tab-pane p-0 fade"
            id="new-access-tab"
            role="tabpanel"
            aria-labelledby="new-access-link"
          >
            <div className="products">
              <div className="row justify-content-center">
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="product product-2">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-5/products/product-8-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-5/products/product-8-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>

                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist"
                          title="Add to wishlist"
                        >
                          <span>add to wishlist</span>
                        </a>
                      </div>

                      <div className="product-action product-action-transparent">
                        <a href="#" className="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                      </div>
                    </figure>

                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Handbags</a>
                      </div>

                      <h3 className="product-title">
                        <a href="product.html">Paper straw shopper</a>
                      </h3>

                      <div className="product-price">$398.00</div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <div className="product product-2">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-5/products/product-9-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-5/products/product-9-2.jpg"
                          alt="Product image"
                          className="product-image-hover"
                        />
                      </a>

                      <div className="product-action-vertical">
                        <a
                          href="#"
                          className="btn-product-icon btn-wishlist"
                          title="Add to wishlist"
                        >
                          <span>add to wishlist</span>
                        </a>
                      </div>

                      <div className="product-action product-action-transparent">
                        <a href="#" className="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                      </div>
                    </figure>

                    <div className="product-body">
                      <div className="product-cat">
                        <a href="#">Handbags</a>
                      </div>

                      <h3 className="product-title">
                        <a href="product.html">Bucket bag</a>
                      </h3>

                      <div className="product-price">$350.00</div>

                      <div className="product-nav product-nav-dots">
                        <a
                          href="#"
                          className="active"
                          style={{ background: "#e3a84d" }}
                        >
                          <span className="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#f48a5b" }}>
                          <span className="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#333333" }}>
                          <span className="sr-only">Color name</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div className="more-container text-center mt-1 mb-3">
          <a href="/" className="btn btn-outline-primary-2 btn-round btn-more">
            Load more
          </a>
        </div>
      </div>
    </>
  );
};
