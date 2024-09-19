import React from "react";
import products from "../product.json";
import Card from "react-bootstrap/Card";
import ratingimg from "/src/assets/Star 3.png";

const Product = () => {
  return (
    <>
      <main className="d-flex flex-wrap justify-content-between gap-4 pt-2">
        {products.map((product) => {
          const { image, id, title, price, discountprice, rating, ratecount } =
            product;
          return (
            <>
              <Card key={id} className="card-container">
                <Card.Img
                  variant="top"
                  src={image}
                  className="w-100 card-img"
                />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <div className="d-flex gap-1">
                    <div>
                      <img src={ratingimg} alt="rating-img" />
                      <img src={ratingimg} alt="rating-img" />
                      <img src={ratingimg} alt="rating-img" />
                      <img src={ratingimg} alt="rating-img" />
                      <img src={ratingimg} alt="rating-img" />
                    </div>
                    <div className="d-flex gap-2 pt-1 fw-bold">
                      <p>{rating}</p>
                      <p> ({`${ratecount}`}) </p>
                    </div>
                  </div>
                  <Card.Text className="d-flex gap-2 card-price fw-bold">
                    #{price}
                    <span className="text-decoration-line-through card-discount-price ">
                      {" "}
                      #{discountprice}{" "}
                    </span>
                  </Card.Text>
                  <button className="w-100 add-to-cart-btn" >add to cart</button>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </main>
    </>
  );
};

export default Product;
