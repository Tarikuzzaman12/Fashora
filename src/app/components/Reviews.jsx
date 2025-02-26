"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // একবার ইমপোর্ট করো
import "swiper/css"; // Swiper CSS import

const ReviewsCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the static JSON data
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Customer Reviews</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {/* Iterate through the products array */}
        {products.map((product) => (
          product.reviews.map((review, index) => (
            <SwiperSlide key={index} className="p-6 h-[116px] bg-gray-100 rounded-lg shadow-md">
              <div className="text-center">
                <p className="text-xl font-semibold">{review.user}</p>
                <div className="flex justify-center my-2">
                  {/* Rating (Can use stars or numeric value) */}
                  <span className="text-yellow-500">{'★'.repeat(review.rating)}</span>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            </SwiperSlide>
          ))
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewsCarousel;
