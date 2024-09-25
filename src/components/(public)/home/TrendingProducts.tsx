"use client";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react"; // Importing arrow icons
import Image from "next/image";

const categories = [
  "SHORTS",
  "HAT",
  "JACKETS",
  "SHOES",
  "T-SHIRT",
  "LAPTOP",
  "FREEZE",
  "TV",
];

const products = [
  {
    name: "Skateboard Shoe",
    price: 25.99,
    image: "/trening1.png",
    category: "SHORTS",
  },
  {
    name: "Winter Wool Hat",
    price: 15.49,
    image: "/trening2.png",
    category: "HAT",
  },
  {
    name: "Leather Jacket",
    price: 89.99,
    image: "/trening3.png",
    category: "JACKETS",
  },
  {
    name: "Running Shoes",
    price: 49.99,
    image: "/trening4.png",
    category: "SHOES",
  },
  {
    name: "Graphic T-Shirt",
    price: 19.99,
    image: "/trening5.png",
    category: "T-SHIRT",
  },
  {
    name: "Gaming Laptop",
    price: 1099.99,
    image: "/trening6.png",
    category: "LAPTOP",
  },
  {
    name: "Double Door Freeze",
    price: 799.99,
    image: "/trening7.png",
    category: "FREEZE",
  },
  {
    name: "4K Ultra HD TV",
    price: 499.99,
    image: "/trening8.png",
    category: "TV",
  },
  {
    name: "Sports Shorts",
    price: 29.99,
    image: "/trening9.png",
    category: "SHORTS",
  },
];

const TrendingProducts = () => {
  const [selected, setSelected] = useState("SHORTS");
  const [startIndex, setStartIndex] = useState(0); // Track the start index of the visible categories
  const visibleCategoriesCount = 5; // Number of categories to show at a time

  // Handle next click
  const handleNext = () => {
    if (startIndex + visibleCategoriesCount < categories.length) {
      setStartIndex(startIndex + 1);
    }
  };

  // Handle previous click
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <Container>
      <hr />
      {/* title and category list */}
      <div className="mt-8 flex justify-between items-center flex-col lg:flex-row gap-y-3">
        <h1 className="text-4xl font-bold">Trending</h1>

        <div className="space-x-3 flex  items-center">
          {/* Arrow to go back */}
          <ChevronLeft
            onClick={handlePrev}
            className={`cursor-pointer ${
              startIndex === 0
                ? "text-gray-400 cursor-not-allowed"
                : "text-black"
            }`}
            size={24}
          />
          {/* categoris list */}
          <div className="flex flex-wrap gap-y-2">
            {categories
              ?.slice(startIndex, startIndex + visibleCategoriesCount)
              .map((category, inx) => (
                <Button
                  onClick={() => setSelected(category)}
                  key={inx}
                  variant="outline"
                  className={`rounded-full ${
                    selected === category && "bg-primary-red text-primary-white"
                  } hover:bg-primary-color hover:text-primary-white`}
                >
                  {category}
                </Button>
              ))}
          </div>
          {/* Arrow to go forward */}
          <ChevronRight
            onClick={handleNext}
            className={`cursor-pointer ${
              startIndex + visibleCategoriesCount >= categories.length
                ? "text-gray-400 cursor-not-allowed"
                : "text-black"
            }`}
            size={24}
          />
        </div>
      </div>

      {/* tranding products */}
      <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-5">
        {products?.map((product, inx) => (
          <div className="space-y-1 relative">
            <Image
              src={product?.image}
              alt="product_image"
              width={1950}
              height={1000}
              className="max-w-[500px] max-h-[286px] rounded-xl"
            ></Image>
            <h1 className="text-primary-black font-medium">{product?.name}</h1>
            <p className="text-primary-gray font-medium">${product?.price}</p>
            <div className="absolute top-2 right-4 size-10 rounded-full bg-primary-black flex justify-center items-center group">
              <Heart color="#fff" className="cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TrendingProducts;
