import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import {
  addToCart,
  addToWishlist,
  filteredProduct,
} from "../redux/actions/productsActions";
import { toast } from "react-toastify";

export const ProductScreen = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.allProducts.products);
  const filterBYCategory = useSelector((state) => state.filterProduct);
  console.log(filterBYCategory);
  const location = useLocation();
  const addCart = (item) => {
    dispatch(addToCart(item));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const filterCategory = (category) => {
    console.log("filter called", category);

    dispatch(filteredProduct(category));
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
    <main className="main">
      <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/product">Product</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              All
            </li>
          </ol>
        </div>
      </nav>

      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="toolbox">
                <div className="toolbox-left">
                  {/* <div className="toolbox-info">
                    Showing <span>9 of 56</span> Products
                  </div> */}
                </div>

                <div className="toolbox-right">
                  <div className="toolbox-sort">
                    <label htmlFor="sortby">Sort by:</label>
                    <div className="select-custom">
                      <select
                        name="sortby"
                        id="sortby"
                        className="form-control"
                      >
                        <option value="popularity" defaultValue="selected">
                          Most Popular
                        </option>
                        <option value="rating">Most Rated</option>
                        <option value="date">Date</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {/* label-new htmlFor new 
              <span className="product-label label-new">New</span>
                  label-out htmlFor outof stock
                  <span className="product-label label-out">
                          Out of Stock
                        </span>
                  */}
              <div className="products mb-3">
                <div className="row justify-content-center">
                  {product.map((item) => {
                    return (
                      <div
                        className="col-6 col-md-4 col-lg-4 col-xl-3"
                        key={item.id}
                      >
                        <div className="product product-7 text-center">
                          <figure className="product-media">
                            <Link to="/product">
                              <img
                                src={item.image}
                                alt="Product image"
                                className="product-image"
                                style={{ height: 250 }}
                              />
                            </Link>

                            <div className="product-action-vertical">
                              <Link
                                onClick={() => dispatch(addToWishlist(item))}
                                className="
                                btn-product-icon btn-wishlist btn-expandable
                              "
                              >
                                <span>Add to wishlist</span>
                              </Link>
                            </div>

                            <div className="product-action">
                              <Link
                                type="button"
                                onClick={() => {
                                  addCart(item);
                                  notify();
                                }}
                                className="btn-product btn-cart"
                              >
                                <span>add to cart</span>
                              </Link>
                            </div>
                          </figure>

                          <div className="product-body">
                            <div className="product-cat">
                              <Link to={`/productdetail/${item.id}`}>
                                {item.category}
                              </Link>
                            </div>

                            <h3 className="product-title">
                              <Link to={`productdetail/${item.id}`}>
                                {item.title}
                              </Link>
                            </h3>

                            <div className="product-price">${item.price}</div>

                            <div className="ratings-container">
                              <div className="ratings">
                                <div
                                  className="ratings-val"
                                  style={{
                                    width: `${(item.rating.rate / 5) * 100}%`,
                                  }}
                                ></div>
                              </div>

                              <span className="ratings-text">
                                ( {item.rating.rate} Reviews )
                              </span>
                            </div>

                            <div className="product-nav product-nav-thumbs">
                              <Link to="#" className="active">
                                <img src={item.image} alt="product desc" />
                              </Link>
                              <Link to="#">
                                <img src={item.image} alt="product desc" />
                              </Link>

                              <Link to="#">
                                <img src={item.image} alt="product desc" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <nav aria-label="Page navigation">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <Link
                      className="page-link page-link-prev"
                      to="#"
                      aria-label="Previous"
                      tabIndex="-1"
                      aria-disabled="true"
                    >
                      <span aria-hidden="true">
                        <i className="icon-long-arrow-left"></i>
                      </span>
                      Prev
                    </Link>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <Link className="page-link" to="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item-total">of 6</li>
                  <li className="page-item">
                    <Link
                      className="page-link page-link-next"
                      to="#"
                      aria-label="Next"
                    >
                      Next
                      <span aria-hidden="true">
                        <i className="icon-long-arrow-right"></i>
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <aside className="col-lg-3 order-lg-first">
              <div className="sidebar sidebar-shop">
                <div className="widget widget-clean">
                  <label>Filters:</label>
                  <Link to="#" className="sidebar-filter-clear">
                    Clean All
                  </Link>
                </div>

                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <Link
                      data-toggle="collapse"
                      to="#widget-1"
                      role="button"
                      aria-expanded="true"
                      aria-controls="widget-1"
                    >
                      Category
                    </Link>
                  </h3>

                  <div className="collapse show" id="widget-1">
                    <div className="widget-body">
                      <div className="filter-items filter-items-count">
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-1"
                              onClick={() => filterCategory("electronics")}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-1"
                            >
                              BedSheet
                            </label>
                          </div>

                          <span className="item-count">3</span>
                        </div>

                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-2"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-2"
                            >
                              Blankit
                            </label>
                          </div>

                          <span className="item-count">0</span>
                        </div>

                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-3"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-3"
                            >
                              Curtains
                            </label>
                          </div>

                          <span className="item-count">4</span>
                        </div>

                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-4"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-4"
                            >
                              Bathing
                            </label>
                          </div>

                          <span className="item-count">2</span>
                        </div>

                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-5"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-5"
                            >
                              Covers
                            </label>
                          </div>

                          <span className="item-count">2</span>
                        </div>

                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-6"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-6"
                            >
                              Cushions
                            </label>
                          </div>

                          <span className="item-count">1</span>
                        </div>

                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-7"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-7"
                            >
                              Kitchen Linen
                            </label>
                          </div>

                          <span className="item-count">1</span>
                        </div>

                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="cat-8"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="cat-8"
                            >
                              Table Linen
                            </label>
                          </div>

                          <span className="item-count">0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <Link
                      data-toggle="collapse"
                      to="#widget-2"
                      role="button"
                      aria-expanded="true"
                      aria-controls="widget-2"
                    >
                      Price
                    </Link>
                  </h3>

                  <div className="collapse show" id="widget-2">
                    <div className="widget-body">
                      <div className="filter-items">
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="size-1"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="size-1"
                            >
                              100 - 1000
                            </label>
                          </div>
                        </div>

                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="size-2"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="size-2"
                            >
                              1000 - 1500
                            </label>
                          </div>
                        </div>

                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="size-3"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="size-3"
                            >
                              1500 - 2000
                            </label>
                          </div>
                        </div>

                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="size-4"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="size-4"
                            >
                              2000 - 5000
                            </label>
                          </div>
                        </div>

                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="size-5"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="size-5"
                            >
                              5000 - 10000
                            </label>
                          </div>
                        </div>

                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="size-6"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="size-6"
                            >
                              10000+
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <Link
                      data-toggle="collapse"
                      to="#widget-3"
                      role="button"
                      aria-expanded="true"
                      aria-controls="widget-3"
                    >
                      Colour
                    </Link>
                  </h3>

                  <div className="collapse show" id="widget-3">
                    <div className="widget-body">
                      <div className="filter-colors">
                        <Link to="#" style={{ background: "#b87145" }}>
                          <span className="sr-only">Color Name</span>
                        </Link>
                        <Link to="#" style={{ background: "#f0c04a" }}>
                          <span className="sr-only">Color Name</span>
                        </Link>
                        <Link to="#" style={{ background: "#333333" }}>
                          <span className="sr-only">Color Name</span>
                        </Link>
                        <Link
                          to="#"
                          className="selected"
                          style={{ background: "#cc3333" }}
                        >
                          <span className="sr-only">Color Name</span>
                        </Link>
                        <Link to="#" style={{ background: "#3399cc" }}>
                          <span className="sr-only">Color Name</span>
                        </Link>
                        <Link to="#" style={{ background: "#669933" }}>
                          <span className="sr-only">Color Name</span>
                        </Link>
                        <Link to="#" style={{ background: "#f2719c" }}>
                          <span className="sr-only">Color Name</span>
                        </Link>
                        <Link to="#" style={{ background: "#ebebeb" }}>
                          <span className="sr-only">Color Name</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="widget widget-collapsible">
                  <h3 className="widget-title">
                    <Link
                      data-toggle="collapse"
                      to="#widget-4"
                      role="button"
                      aria-expanded="true"
                      aria-controls="widget-4"
                    >
                      Brand
                    </Link>
                  </h3>

                  <div className="collapse show" id="widget-4">
                    <div className="widget-body">
                      <div className="filter-items">
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="brand-1"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="brand-1"
                            >
                              Next
                            </label>
                          </div>
                        </div>

                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="brand-2"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="brand-2"
                            >
                              River Island
                            </label>
                          </div>
                        </div>

                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="brand-3"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="brand-3"
                            >
                              Geox
                            </label>
                          </div>
                        </div>

                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="brand-4"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="brand-4"
                            >
                              New Balance
                            </label>
                          </div>
                        </div>

                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="brand-5"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="brand-5"
                            >
                              UGG
                            </label>
                          </div>
                        </div>

                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="brand-6"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="brand-6"
                            >
                              F&F
                            </label>
                          </div>
                        </div>

                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="brand-7"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="brand-7"
                            >
                              Nike
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
};
