import React, { useEffect, useState } from "react";
import axios from "axios";

const Price = () => {
  const [product, setProduct] = useState([]);
  const api = `https://fakestoreapi.com/products`;
  useEffect(() => {
    axios.get(api).then((data) => {
      console.log(data?.data);
      setProduct(data?.data);
    });
  }, []);

  return (
    <div className="Price">
      <h1 className="price__title">Price</h1>
      <div className="price__cards">
        {product.map((item) => (
          <div key={item.id} className="price__card">
            <div className="price__image-wrapper">
              <img src={item.image} alt="" className="price__image" />
            </div>
            <h3 className="price__subtitle">{item.title}</h3>
            <button className="price__button">Buyurtama berish</button>
          </div>
        ))}
      </div>
      <button className="price__bigButton">Barcha ko'rish</button>
    </div>
  );
};

export default Price;
