import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const {
    product_id,
    product_title,
    product_image,
    category,
    price,
    specification,
    availability,
    rating,
  } = product;

  return (
    <div>
      <div className="">
        <div className="card bg-base-100 w-[320px] h-[380px] shadow-xl mb-2">
          <figure className="p-3">
            <img
            className="w-[280px] h-[180px]"
              src={product_image}
              alt={product_title}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product_title}</h2>
            <p>Price: {price}$</p>
            <Link to={`products/${product_id}`} className="card-actions justify-start">
              <button className="btn border-[#9538E2] text-[#9538E2]">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
