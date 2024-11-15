import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("/ProductData.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); 
      });
  }, []);

 
  const categories = Array.from(new Set(products.map(product => product.category)));

  const handleCategoryClick = (category) => {
    if (category === "All Products") {
      setFilteredProducts(products); 
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

  return (
    <div>
      <h3>Explore Cutting-Edge Gadgets: {filteredProducts.length}</h3>

      <div className="flex gap-4 ">
        <div className="flex flex-col p-3 bg-white gap-3 w-1/6 h-96 rounded-lg">
          <button className="btn" onClick={() => handleCategoryClick("All Products")}>
            All Products
          </button>
          {categories.map((category) => (
            <button className="btn" key={category} onClick={() => handleCategoryClick(category)}>
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-3 w-5/6">
          {filteredProducts.map((product) => (
            <Product key={product.product_id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;