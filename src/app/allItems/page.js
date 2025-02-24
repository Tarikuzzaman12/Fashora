"use client";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function AllItems() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState(""); // Sorting State

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);

        // Extract Unique Categories
        const uniqueCategories = ["all", ...new Set(data.map((item) => item.category))];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  // 🔹 Category Wise Filtering
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const filtered = category === "all" ? products : products.filter((item) => item.category === category);
    setFilteredProducts(filtered);
  };

  // 🔹 Sorting Function
  const handleSortChange = (order) => {
    setSortOrder(order);
    let sortedProducts = [...filteredProducts];

    if (order === "lowToHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (order === "highToLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-6">All Products</h1>

      {/* 🔥 Category & Sorting Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        {/* Category Filter */}
        <select
          className="border p-2 rounded-md"
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>

        {/* Sorting Options */}
        <select
          className="border p-2 rounded-md ml-4"
          value={sortOrder}
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
