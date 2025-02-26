"use client";
import React, { useEffect, useState, use } from "react";
import { useParams } from "next/navigation";

const ProductDetails = ({ params }) => {
  const resolvedParams = use(params); // ✅ Unwrap params properly
  const { id } = resolvedParams || useParams(); // Extract ID correctly
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedProduct = data.find((item) => item.id == id);
        setProduct(selectedProduct);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) {
    return <p className="text-center text-lg font-bold">Product Not Found</p>;
  }

  return (
    <div className="container mx-auto p-8 flex flex-col md:flex-row gap-8 items-center">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img className="h-[600px] w-[400px] object-cover rounded-lg shadow-md" src={product.image} alt={product.product_name} />
      </div>

      {/* Content Section */}
      <div className="flex-1 space-y-4 ml-14">
        <h1 className="text-3xl font-bold">{product.product_name}</h1>
        <p className="text-lg"><strong>Brand:</strong> {product.brand}</p>
        <p className="text-lg"><strong>Price:</strong> ${product.price} <span className="text-red-500">({product.discount}% off)</span></p>
        <p className="text-lg"><strong>Rating:</strong> ⭐ {product.rating}</p>
        <p className="text-lg"><strong>Material:</strong> {product.material}</p>
        <p className="text-lg"><strong>Stock:</strong> {product.stock} left</p>
        <p className="text-lg"><strong>Category:</strong> {product.category}</p>
        <p className="text-lg"><strong>Quality:</strong> {product.quality}</p>
        <p className="text-lg"><strong>Available Sizes:</strong> {product.size.join(", ")}</p>
        <p>{product.description}</p>

        {/* Reviews Section */}
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Reviews:</h2>
          <div className="space-y-2">
            {product.reviews.map((review, index) => (
              <div key={index} className="border p-3 rounded-md shadow-sm">
                <p><strong>{review.user}</strong> - ⭐ {review.rating}</p>
                <p>{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
