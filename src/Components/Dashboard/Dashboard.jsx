import React, { useState } from "react";
import { useCart } from "../ContextApi/Context";
import { useEffect } from "react";

const Dashboard = () => {
  const {
    cart,
    wishlist,
    removeFromCart,
    removeFromWishlist,
    clearCart,
    addToCart,
    setCart,
  } = useCart();

  const [activeTab, setActiveTab] = useState("cart");

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };
  const [totalCost, setTotalCost] = useState("0.00");

  const calculateTotalCost = (cart) => {
    if (!Array.isArray(cart)) {
      return "0.00";
    }

    const total = cart.reduce((total, item) => {
      const price = parseFloat(item.price) || 0;
      return total + price;
    }, 0);

    return total.toFixed(2);
  };
  useEffect(() => {
    const newTotalCost = calculateTotalCost(cart);
    setTotalCost(newTotalCost);
  }, [cart]);

  const sortByPrice = () => {
    const sortedCart = [...cart].sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
    setCart(sortedCart);
  };

  return (
    <div className=" p-4">
      <div className="bg-[#9538E2] text-white grid gap-3 my-4">
        <h2 className="text-4xl mb-4 text-center font-bold mt-4"> Dashboard</h2>
        <p className="text-center px-[300px] font-bold">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="text-center mb-7">
          <button
            className={`btn btn-sm px-8 rounded-3xl bg-[#9538E2] text-white mr-4 ${
              activeTab === "cart" ? "bg-white text-[#5d2a86]" : ""
            }`}
            onClick={() => toggleTab("cart")}
          >
            Cart
          </button>
          <button
            className={`btn btn-sm px-8 rounded-3xl bg-[#9538E2] text-white ${
              activeTab === "wishlist" ? "bg-white text-[#5d2a86]" : ""
            }`}
            onClick={() => toggleTab("wishlist")}
          >
            Wishlist
          </button>
        </div>
      </div>

      <div className="mt-4">
        {/* carrt section  */}
        <div>
          {activeTab === "cart" && (
            <div className="mb-3">
              <div className="flex justify-between">
                <h4 className="text-2xl font-bold">Cart Items</h4>
                <div className="flex gap-2 justify-center items-center">
                  <p className="font-bold">Total Cost :$ {totalCost}</p>
                  <button onClick={sortByPrice} className="btn btn-sm font-bold text-purple-700 border-purple-600">
                    Sort By Price{" "}
                  </button>
                  <button className="btn btn-sm bg-purple-600 text-white">
                    Purchase
                  </button>
                </div>
              </div>
              <div className="grid gap-3">
                {cart.length > 0 ? (
                  cart.map((item, index) => (
                    <div>
                      <div
                        key={index}
                        className="flex justify-between items-center border shadow-xl w-[900px] h-[132px] mx-auto"
                      >
                        <div className="flex justify-center items-center">
                          <div className="mr-3">
                            <img
                              className="w-[200px] h-[130px]"
                              src={item.product_image}
                              alt=""
                            />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold">
                              {item.product_title}
                            </h2>
                            <p>
                              <span className="font-bold">Description: </span>
                              {item.description}
                            </p>
                            <p className="font-bold">Price:$ {item.price}</p>
                          </div>
                        </div>

                        <button
                          className="btn btn-circle btn-outline mr-3"
                          onClick={() => removeFromCart(item)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center h-60">
                    <h2 className="text-5xl text-[#5d2a86] font-bold">
                      No items in cart
                    </h2>
                  </div>
                )}
              </div>
              {cart.length > 0 && (
                <button
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                  onClick={clearCart}
                >
                  Clear Cart
                </button>
              )}
            </div>
          )}
        </div>

        {/* {Wishlist section /} */}
        <div>
          {activeTab === "wishlist" && (
            <div>
              <div>
                <h4 className="text-2xl font-bold">Your Wishlist</h4>
              </div>

              <div className="grid gap-3">
                {wishlist.length > 0 ? (
                  wishlist.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center border shadow-xl w-[900px] h-[132px] mx-auto"
                    >
                      <div className="flex justify-center items-center">
                        <div>
                          <img
                            className="w-[200px] h-[130px]"
                            src={item.product_image}
                            alt=""
                          />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold">
                            {item.product_title}
                          </h2>
                          <p>
                            <span className="font-bold">Description: </span>
                            {item.description}
                          </p>
                          <p className="font-bold">Price:$ {item.price}</p>
                          <button
                            onClick={() => {
                              removeFromWishlist(item);
                              addToCart(item);
                            }}
                            className="btn btn-sm bg-purple-700 text-white rounded-3xl px-6"
                          >
                            Add to Cart{" "}
                          </button>
                        </div>
                      </div>

                      <button
                        className="btn btn-circle btn-outline mr-3"
                        onClick={() => removeFromWishlist(item)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  ))
                ) : (
                  <div className="text-center h-60">
                    <h2 className="text-5xl text-[#5d2a86] font-bold">
                      No items in cart
                    </h2>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
