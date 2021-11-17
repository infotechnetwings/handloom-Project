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
    <div className="products">
      <div className="row">
        {product.map((item) => {
          return (
            <div
              className="col-6 col-sd-12 col-md-4 col-lg-3 col-xl-5col"
              key={item.id}
            >
              <div className="product product-11 text-center">
                <figure className="product-media" style={{ height: 250 }}>
                  <Link to="/">
                    <img
                      src={item.image}
                      alt="1.jpg"
                      className="product-image"
                      style={{ height: 250 }}
                    />
                    <img
                      src={item.image}
                      alt="1.jpg"
                      className="product-image-hover"
                      style={{ height: 250 }}
                    />
                  </Link>

                  <div className="product-action-vertical">
                    <Link to="/" className="btn-product-icon btn-wishlist">
                      <span>add to wishlist</span>
                    </Link>
                  </div>
                </figure>

                <div className="product-body">
                  <h3 className="product-title">
                    <Link to={`productdetail/${item.id}`}>{item.title}</Link>
                  </h3>

                  <div className="product-price">$ {item.price}</div>
                </div>

                <div className="product-action">
                  <button
                    onClick={() => {
                      addCart(item);
                      notify();
                    }}
                    className="btn-product btn-cart"
                  >
                    <span>add to cart</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
