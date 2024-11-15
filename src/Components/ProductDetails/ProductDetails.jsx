import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import love_img from "../../assets/love.png";
import { useCart } from "../ContextApi/Context";

const ProductDetails = () => {
  const { product_id } = useParams();
  const id = parseInt(product_id);
  const data = useLoaderData();
  const { addToCart, addToWishlist } = useCart();

  const product = data.find((product) => product.product_id === id);
  const {
    product_id: currentnID,
    product_title,
    product_image,
    category,
    price,
    specification,
    availability,
    rating,
    description,
  } = product;

  return (
    <div>
      <div className="bg-[#9538E2] p-16 h-96">
        <h3 className="text-center text-3xl text-white font-bold">
          Product details: {product_id}
        </h3>
        <p className="text-center text-[#ece5e5]">
          Explore the latest gadgets that will take your experience to the next
          level. <br />
          From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="bg-[#ffffff] p-3 border w-[1000px] mx-auto relative top-[-170px] rounded-xl">
        <div className="card card-side bg-base-100 shadow-xl">
          <div className="w-1/3">
            <img className="" src={product_image} alt={product_title} />
          </div>
          <div className="ml-6 w-2/3 flex flex-col gap-2 p-3">
            <h2 className="text-3xl font-bold">{product_title}</h2>
            <p className="font-bold">Price: {price}$</p>
            <div
              style={{
                color: availability ? "green" : "red",
                backgroundColor: availability ? "#309C081A" : "#bb60501a",
              }}
              className="w-28 p-2 rounded-xl text-center"
            >
              {availability ? "In Stock" : "Out of Stock"}
            </div>
            <p className="text-[#09080F99] font-bold">{description}</p>

            <div>
              <p className="font-bold">Specification</p>
              {specification.map((spec, index) => (
                <div key={index}>
                  <p className="text-[#09080F99] font-semibold">
                    {index + 1}. {spec}
                  </p>
                </div>
              ))}
            </div>
            <p className="font-bold">Ratings</p>
            <div className="flex gap-2 justify-start items-center">
              <div className="rating rating-md">
                {Array.from({ length: 5 }, (_, index) => (
                  <input
                    key={index}
                    type="radio"
                    name="rating-7"
                    className={`mask mask-star-2 bg-orange-400 ${
                      index + 1 <= rating ? "checked" : ""
                    }`}
                    disabled
                  />
                ))}
              </div>
              <div className="bg-[#dad7d7] p-2 rounded-lg">{rating}</div>
            </div>
            <div className="card-actions justify-start">
              <button
                className="btn bg-[#9538E2] text-white"
                onClick={() => addToCart(product)} 
              >
                Add To Cart
              </button>
              <button
                className="btn btn-circle"
                onClick={() => addToWishlist(product)} 
              >
                <img className="w-4 h-4" src={love_img} alt="Add to Wishlist" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;