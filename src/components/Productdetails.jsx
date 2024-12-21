// ProductDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import products from "./ProductsData";
import Products from "./Products";

function ProductDetails() {
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
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <section className="py-5 bg-dark text-white">
      <div className="container px-5">
        <div className="row gx-0">
          <div className="col-lg-6 col-xl-7">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded-3 w-100 h-100"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="col-lg-6 col-xl-5 py-lg-5">
            <div className="p-4 p-md-5">
              <div className="badge bg-primary bg-gradient rounded-pill mb-2">
                Product
              </div>
              <h1 className="fw-bolder">{product.name}</h1>
              <p className=" ">{product.description}</p>
              <h3 className="mt-4">{product.price}</h3>
              <button
                onClick={() => addToCart(product)}
                className="btn btn-outline-primary me-2"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Products />
    </section>
  );
}

export default ProductDetails;
