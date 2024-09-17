import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dog.ceo/api/breeds/list/all");
      const resjson = await res.json();
      setProducts(resjson.message.bulldog);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      {products.map((product: any, index) => {
        return <div key={index}>{product}</div>;
      })}
    </>
  );
};

export default Products;
