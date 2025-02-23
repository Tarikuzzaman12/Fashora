"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
            <p className="text-gray-700">Price: ${product.price}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>

  );
}
