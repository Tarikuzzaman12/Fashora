"use client";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }) => {
  const router = useRouter();

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="h-[300px] w-[300px] object-cover" src={product.image} alt={product.product_name} />
      </figure>
      <div className="card-body">
        <h2 className="font-bold">{product.product_name}</h2>
        <div className="flex justify-between">
          <p>$ {product.price}</p>  
          <p>Rating: {product.rating}</p>
        </div>
        <p>Brand: {product.brand}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => router.push(`/AllItems/${product.id}`)} 
            className="btn btn-primary"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
