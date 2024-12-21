import React from "react";
import products from "./ProductsData";
import "./products.css";
import { Link } from "react-router-dom";
import "./why.css";

function ProductsList() {
  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <section className="py-5 bg-dark text-white">
      <div className="container px-5">
        <div className="text-center mb-5">
          <h1 className="fw-bolder">Our Products</h1>
          <p className="lead fw-normal text-muted mb-0">
            High-quality security solutions for your home and business.
          </p>
        </div>
        <div className="row gx-5 justify-content-center">
          {products.map((product, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div
                className="card h-100 text-white bg-dark text-whited-flex flex-column"
                style={{ overflow: "hidden" }}
              >
                {/* الصورة */}
                <div className="card-image-wrapper">
                  <img
                    className="card-img-top zoom-image"
                    src={product.image}
                    alt={product.name}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />
                </div>
                <div className="card-body d-flex flex-column justify-content-between text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <span className="text-muted">{product.price}</span>
                    <div>
                      <button
                        onClick={() => addToCart(product)}
                        className="btn btn-outline-primary me-2"
                      >
                        Add to Cart
                      </button>
                      <Link
                        to={`/product/${product.id}`}
                        className="btn btn-outline-secondary"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsList;
