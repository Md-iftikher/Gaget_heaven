import React from "react";

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
      <div>
        <div className="card bg-base-100 w-[320px] h-[380px] shadow-xl">
          <figure className="bg-slate-200 p-3">
            <img
            className="w-[280px] h-[180px]"
              src={product_image}
              alt={product_title}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
