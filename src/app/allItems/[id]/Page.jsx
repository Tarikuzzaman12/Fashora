"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/products.json") // Update with the correct data source
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
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold">{product.product_name}</h1>
      <img className="h-[400px] w-[400px] object-cover" src={product.image} alt={product.product_name} />
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Price:</strong> $ {product.price}</p>
      <p><strong>Rating:</strong> {product.rating}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
