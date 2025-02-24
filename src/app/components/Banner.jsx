"use client";

import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/allItems");  // এখানে '/AllItems' হলো পেজের রাউট
  };

  return (
    <div className="relative w-full h-[500px]">
      <img
        src="https://example.com/your-image.jpg"
        alt="Banner Image"
        className="w-full h-96 object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Discover Your Perfect Look
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Explore our exclusive collection of clothing, shoes, and accessories.
        </p>
        <button
          onClick={handleClick}
          className="bg-yellow-500 text-black py-3 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
