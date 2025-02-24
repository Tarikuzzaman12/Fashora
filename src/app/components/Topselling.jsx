"use client";
import ProductCard from "./ProductCard";

const topSellingProducts = [
  {
    id: 12,
    image: "https://i.ibb.co/Swtk5GpR/Jacket-The-Face.jpg",
    product_name: "Men's Winter Jacket",
    price: 79.99,
    rating: 4.7,
    brand: "The North Face",
  },
  {
    id: 9,
    image: "https://i.ibb.co/6cnb3Zws/Swut-Burberry.webp",
    product_name: "Women's Wool Coat",
    price: 79.99,
    rating: 5.0,
    brand: "Burberry",
  },
  {
    id: 5,
    image: "https://i.ibb.co/4wdGBdSX/Nike-TShirt.jpg",
    product_name: "Men's Graphic T-Shirt",
    price: 19.99,
    rating: 4.7,
    brand: "Nike",
  },
  {
    id: 1,
    image: "https://i.ibb.co/V0DMJmVp/zara-Shirt.jpg",
    product_name: "Men's Casual Shirt",
    price: 25.99,
    rating: 4.5,
    brand: "Zara",
  },
];

const TopSelling = () => {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-6">🔥 Top Selling Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {topSellingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TopSelling;
