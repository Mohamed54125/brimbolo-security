import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartItems);
    calculateTotal(cartItems);
  }, []);

  const calculateTotal = (cartItems) => {
    const totalPrice = cartItems.reduce(
      (acc, item) =>
        acc + item.quantity * parseFloat(item.price.replace("$", "")),
      0
    );
    setTotal(totalPrice.toFixed(2));
  };

  const updateQuantity = (productId, quantityChange) => {
    const updatedCart = cart.map((item) =>
      item.id === productId
        ? { ...item, quantity: Math.max(1, item.quantity + quantityChange) }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <section className="py-5 bg-dark text-white">
      <div className="container px-5">
        <div className="text-center mb-5">
          <h1 className="fw-bolder">Your Cart</h1>
          {cart.length === 0 && <p>Your cart is empty!</p>}
        </div>
        <div className="row gx-5">
          <div className="col-12">
            {cart.length > 0 && (
              <table className="table table-dark table-striped text-white">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product, index) => (
                    <tr key={index}>
                      <td>
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                            marginRight: "10px",
                          }}
                        />
                        {product.name}
                      </td>
                      <td>{product.price}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <button
                            className="btn btn-outline-light btn-sm"
                            onClick={() => updateQuantity(product.id, -1)}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            value={product.quantity}
                            readOnly
                            className="form-control text-center mx-2"
                            style={{ width: "50px" }}
                          />
                          <button
                            className="btn btn-outline-light btn-sm"
                            onClick={() => updateQuantity(product.id, 1)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>
                        $
                        {(
                          product.quantity *
                          parseFloat(product.price.replace("$", ""))
                        ).toFixed(2)}
                      </td>
                      <td>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => removeFromCart(product.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            {cart.length > 0 && (
              <div className="text-end">
                <h3>Total: ${total}</h3>
                <button
                  className="btn btn-primary mt-3"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
