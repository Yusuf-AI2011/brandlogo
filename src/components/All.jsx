import axios from "axios";
import React, { useEffect, useState } from "react";

const All = () => {
  const [product, steProduct] = useState([]);
  const api = `https://dummyjson.com/products`;

  useEffect(() => {
    axios.get(api).then((data) => {
      console.log(data?.data?.products);
      steProduct(data?.data?.products);
    });
  }, []);

  return (
    <div className="All">
      <h1 className="all__title">All Products</h1>
      <div className="all__cards">
        {product.map((item) => (
          <div key={item.id} className="all__card">
            <div className="all__image-wrapper">
              <img src={item.images[0]} alt="" className="all__image" />
            </div>

            <p className="all__category">Category: {item.category}</p>
            <p className="all__brand">Brand: {item.brand}</p>
            <button className="all__button">Throw to basket</button>
          </div>
        ))}
      </div>
      <button className="all__bigButton">View All</button>
    </div>
  );
};

export default All;
