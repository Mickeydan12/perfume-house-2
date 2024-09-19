import React from "react";
import carts from "../product.json";

const Cart = () => {
  return (
    <>
      <main className="container">
        <div className="border border-3 rounded p-3  d-flex row gap-4 ">
          <h1 className="cart-h1">My Cart Preview</h1>
          {carts.map((cart) => {
            const { image, id, title, price } = cart;
            return (
              <div className="d-flex col gap-4 container align-items-center">
                <img src={image} alt="cart-img" className="cart-img col" />
                <div className="cart-d row">
                  <p className="title-cart col ">{title}</p>
                  <p>
                    <button className="btn btn-danger">-</button> 1{" "}
                    <button className="btn btn-success">+</button>
                  </p>
                  <div className="d-flex justify-content-between align-items-center col gap-4 ">
                    <p className="fw-bold">{price}</p>
                    <button className="remove mb-3 fw-bold">Remove</button>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="fw-bold">
            <div className="d-flex justify-content-between">
              <p>Sub Total </p>
              <p className="price">18,000</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Delivery</p>
              <p className="price">8,000</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Total</p>
              <p className="price">36,000</p>
            </div>
            <button className="w-100 order">Confirm Order</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
