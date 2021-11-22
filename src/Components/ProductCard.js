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
      <div class="container pt-6 new-arrivals">
        <div class="heading heading-center mb-3">
          <h2 class="title">Trending Products</h2>
          <p>Get Through all Trending products and get your best deal</p>
        </div>

        <div class="tab-content">
          <div
            class="tab-pane p-0 fade show active"
            id="new-all-tab"
            role="tabpanel"
            aria-labelledby="new-all-link"
          >
            <div class="products">
              <div class="row justify-content-center">
                {product.map((item) => {
                  return (
                    <div class="col-6 col-md-4 col-lg-3">
                      <div class="product product-2">
                        <figure class="product-media">
                          <a href="product.html">
                            <img
                              src={item.image}
                              alt="Product image"
                              class="product-image"
                              style={{ height: 250 }}
                            />
                            <img
                              src={item.image}
                              alt="Product image"
                              class="product-image-hover"
                              style={{ height: 250 }}
                            />
                          </a>

                          <div class="product-action-vertical">
                            <a
                              href="#"
                              class="btn-product-icon btn-wishlist"
                              title="Add to wishlist"
                            >
                              <span>add to wishlist</span>
                            </a>
                          </div>

                          <div class="product-action product-action-transparent">
                            <Link
                              onClick={() => {
                                addCart(item);
                                notify();
                              }}
                              class="btn-product btn-cart"
                            >
                              <span>Add to cart</span>
                            </Link>
                          </div>
                        </figure>

                        <div class="product-body">
                          <div class="product-cat">
                            <a href="/">{item.category}</a>
                          </div>

                          <h3 class="product-title">
                            <Link to={`productdetail/${item.id}`}>
                              {item.title}
                            </Link>
                          </h3>

                          <div class="product-price">₹ {item.price}</div>

                          {/* <div class="product-nav product-nav-dots">
                            <a
                              href="#"
                              class="active"
                              style={{ background: "#e5dcb1" }}
                            >
                              <span class="sr-only">Color name</span>
                            </a>
                            <a href="#" style={{ background: "#b9cbd8" }}>
                              <span class="sr-only">Color name</span>
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
            class="tab-pane p-0 fade"
            id="new-cloth-tab"
            role="tabpanel"
            aria-labelledby="new-cloth-link"
          >
            <div class="products">
              <div class="row justify-content-center">
                <div class="col-6 col-md-4 col-lg-3">
                  <div class="product product-2">
                    <figure class="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-5/products/product-5-1.jpg"
                          alt="Product image"
                          class="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-5/products/product-5-2.jpg"
                          alt="Product image"
                          class="product-image-hover"
                        />
                      </a>

                      <div class="product-action-vertical">
                        <a
                          href="#"
                          class="btn-product-icon btn-wishlist"
                          title="Add to wishlist"
                        >
                          <span>add to wishlist</span>
                        </a>
                      </div>

                      <div class="product-action product-action-transparent">
                        <a href="#" class="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                      </div>
                    </figure>

                    <div class="product-body">
                      <div class="product-cat">
                        <a href="#">Clothing</a>
                      </div>

                      <h3 class="product-title">
                        <a href="product.html">Linen-blend dress</a>
                      </h3>

                      <div class="product-price">$60.00</div>

                      <div class="product-nav product-nav-dots">
                        <a
                          href="#"
                          class="active"
                          style={{ background: "#e5dcb1" }}
                        >
                          <span class="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#b9cbd8" }}>
                          <span class="sr-only">Color name</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-6 col-md-4 col-lg-3">
                  <div class="product product-2">
                    <figure class="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-5/products/product-7-1.jpg"
                          alt="Product image"
                          class="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-5/products/product-7-2.jpg"
                          alt="Product image"
                          class="product-image-hover"
                        />
                      </a>

                      <div class="product-action-vertical">
                        <a
                          href="#"
                          class="btn-product-icon btn-wishlist"
                          title="Add to wishlist"
                        >
                          <span>add to wishlist</span>
                        </a>
                      </div>

                      <div class="product-action product-action-transparent">
                        <a href="#" class="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                      </div>
                    </figure>

                    <div class="product-body">
                      <div class="product-cat">
                        <a href="#">Clothing</a>
                      </div>

                      <h3 class="product-title">
                        <a href="product.html">Paper bag trousers</a>
                      </h3>

                      <div class="product-price">$60.00</div>

                      <div class="product-nav product-nav-dots">
                        <a
                          href="#"
                          class="active"
                          style={{ background: "#9fac76" }}
                        >
                          <span class="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#333333" }}>
                          <span class="sr-only">Color name</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-6 col-md-4 col-lg-3">
                  <div class="product product-2">
                    <figure class="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-5/products/product-10-1.jpg"
                          alt="Product image"
                          class="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-5/products/product-10-2.jpg"
                          alt="Product image"
                          class="product-image-hover"
                        />
                      </a>

                      <div class="product-action-vertical">
                        <a
                          href="#"
                          class="btn-product-icon btn-wishlist"
                          title="Add to wishlist"
                        >
                          <span>add to wishlist</span>
                        </a>
                      </div>

                      <div class="product-action product-action-transparent">
                        <a href="#" class="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                      </div>
                    </figure>

                    <div class="product-body">
                      <div class="product-cat">
                        <a href="#">Clothing</a>
                      </div>

                      <h3 class="product-title">
                        <a href="product.html">Silk-blend kaftan</a>
                      </h3>

                      <div class="product-price">Now $370.00</div>
                    </div>
                  </div>
                </div>

                <div class="col-6 col-md-4 col-lg-3">
                  <div class="product product-2">
                    <figure class="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-5/products/product-11-1.jpg"
                          alt="Product image"
                          class="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-5/products/product-11-2.jpg"
                          alt="Product image"
                          class="product-image-hover"
                        />
                      </a>

                      <div class="product-action-vertical">
                        <a
                          href="#"
                          class="btn-product-icon btn-wishlist"
                          title="Add to wishlist"
                        >
                          <span>add to wishlist</span>
                        </a>
                      </div>

                      <div class="product-action product-action-transparent">
                        <a href="#" class="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                      </div>
                    </figure>

                    <div class="product-body">
                      <div class="product-cat">
                        <a href="#">Clothing</a>
                      </div>

                      <h3 class="product-title">
                        <a href="product.html">Linen-blend jumpsuit</a>
                      </h3>

                      <div class="product-price">$595.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="tab-pane p-0 fade"
            id="new-shoes-tab"
            role="tabpanel"
            aria-labelledby="new-shoes-link"
          >
            <div class="products">
              <div class="row justify-content-center">
                <div class="col-6 col-md-4 col-lg-3">
                  <div class="product product-2">
                    <figure class="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-5/products/product-6-1.jpg"
                          alt="Product image"
                          class="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-5/products/product-6-2.jpg"
                          alt="Product image"
                          class="product-image-hover"
                        />
                      </a>

                      <div class="product-action-vertical">
                        <a
                          href="#"
                          class="btn-product-icon btn-wishlist"
                          title="Add to wishlist"
                        >
                          <span>add to wishlist</span>
                        </a>
                      </div>

                      <div class="product-action product-action-transparent">
                        <a href="#" class="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                      </div>
                    </figure>

                    <div class="product-body">
                      <div class="product-cat">
                        <a href="#">Shoes</a>
                      </div>

                      <h3 class="product-title">
                        <a href="product.html">Sandals with lacing</a>
                      </h3>

                      <div class="product-price">
                        <span class="new-price">Now $70.00</span>
                        <span class="old-price">Was $155.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-6 col-md-4 col-lg-3">
                  <div class="product product-2">
                    <figure class="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-5/products/product-12-1.jpg"
                          alt="Product image"
                          class="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-5/products/product-12-2.jpg"
                          alt="Product image"
                          class="product-image-hover"
                        />
                      </a>

                      <div class="product-action-vertical">
                        <a
                          href="#"
                          class="btn-product-icon btn-wishlist"
                          title="Add to wishlist"
                        >
                          <span>add to wishlist</span>
                        </a>
                      </div>

                      <div class="product-action product-action-transparent">
                        <a href="#" class="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                      </div>
                    </figure>

                    <div class="product-body">
                      <div class="product-cat">
                        <a href="#">Shoes</a>
                      </div>

                      <h3 class="product-title">
                        <a href="product.html">Sandals</a>
                      </h3>

                      <div class="product-price">
                        <span class="new-price">Now $120.00</span>
                        <span class="old-price">Was $140.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="tab-pane p-0 fade"
            id="new-access-tab"
            role="tabpanel"
            aria-labelledby="new-access-link"
          >
            <div class="products">
              <div class="row justify-content-center">
                <div class="col-6 col-md-4 col-lg-3">
                  <div class="product product-2">
                    <figure class="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-5/products/product-8-1.jpg"
                          alt="Product image"
                          class="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-5/products/product-8-2.jpg"
                          alt="Product image"
                          class="product-image-hover"
                        />
                      </a>

                      <div class="product-action-vertical">
                        <a
                          href="#"
                          class="btn-product-icon btn-wishlist"
                          title="Add to wishlist"
                        >
                          <span>add to wishlist</span>
                        </a>
                      </div>

                      <div class="product-action product-action-transparent">
                        <a href="#" class="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                      </div>
                    </figure>

                    <div class="product-body">
                      <div class="product-cat">
                        <a href="#">Handbags</a>
                      </div>

                      <h3 class="product-title">
                        <a href="product.html">Paper straw shopper</a>
                      </h3>

                      <div class="product-price">$398.00</div>
                    </div>
                  </div>
                </div>

                <div class="col-6 col-md-4 col-lg-3">
                  <div class="product product-2">
                    <figure class="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-5/products/product-9-1.jpg"
                          alt="Product image"
                          class="product-image"
                        />
                        <img
                          src="assets/images/demos/demo-5/products/product-9-2.jpg"
                          alt="Product image"
                          class="product-image-hover"
                        />
                      </a>

                      <div class="product-action-vertical">
                        <a
                          href="#"
                          class="btn-product-icon btn-wishlist"
                          title="Add to wishlist"
                        >
                          <span>add to wishlist</span>
                        </a>
                      </div>

                      <div class="product-action product-action-transparent">
                        <a href="#" class="btn-product btn-cart">
                          <span>add to cart</span>
                        </a>
                      </div>
                    </figure>

                    <div class="product-body">
                      <div class="product-cat">
                        <a href="#">Handbags</a>
                      </div>

                      <h3 class="product-title">
                        <a href="product.html">Bucket bag</a>
                      </h3>

                      <div class="product-price">$350.00</div>

                      <div class="product-nav product-nav-dots">
                        <a
                          href="#"
                          class="active"
                          style={{ background: "#e3a84d" }}
                        >
                          <span class="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#f48a5b" }}>
                          <span class="sr-only">Color name</span>
                        </a>
                        <a href="#" style={{ background: "#333333" }}>
                          <span class="sr-only">Color name</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div class="more-container text-center mt-1 mb-3">
          <a href="/" class="btn btn-outline-primary-2 btn-round btn-more">
            Load more
          </a>
        </div>
      </div>
    </>
  );
};
