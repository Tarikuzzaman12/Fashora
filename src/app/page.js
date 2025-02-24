"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Next.js router
import ProductCard from "./components/ProductCard";
import TopSelling from "./components/Topselling";
import Banner from "./components/Banner";

export default function Home() {
  const [products, setProducts] = useState([]);
  const router = useRouter(); // Router instance

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3 gap-6">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Show All Button */}
        <div className="text-center mt-6">
          <button 
            onClick={() => router.push("/allItems")} 
            className="bg-green-500 text-white px-6 py-2 rounded text-lg font-semibold"
          >
            Show All
          </button>
        </div>
      </div>
      <TopSelling></TopSelling>
    </div>
  );
}
