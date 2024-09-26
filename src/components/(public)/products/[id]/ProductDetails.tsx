"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import detailsImage from "@/assets/images/productDetails.png";
import Image from "next/image";
import { useState } from "react";
import { Rating } from "@/components/ui/rating";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const productDetailsImage = [
  {
    image: "/productDetails3.png",
  },
  {
    image: "/productDetails1.png",
  },
  {
    image: "/productDetails2.png",
  },
  {
    image: "/productDetails2.png",
  },
  {
    image: "/productDetails1.png",
  },
];

const ProductDetailsContainer = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="flex flex-col 2xl:flex-row items-center gap-7">
      {/* products images */}
      <div>
        {/* products details */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-3">
          <Carousel
            opts={{
              align: "start",
            }}
            orientation="vertical"
            className="mt-10 md:mt-0"
          >
            <CarouselContent className="-mt-1 max-h-[390px]">
              {productDetailsImage.map((data, index) => (
                <CarouselItem key={index} className="pt-1 md:basis-1/2">
                  <div className="p-1">
                    <Image
                      src={data?.image}
                      alt="product_image"
                      width={950}
                      height={700}
                      className="w-24 h-28"
                    ></Image>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-top-10  shadow-xl" />
            <CarouselNext className="-bottom-10 shadow-xl" />
          </Carousel>
          <Image src={detailsImage} alt="product_image"></Image>
        </div>
      </div>

      {/* product description */}
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-primary-black lg:text-5xl text-3xl font-semibold">
            Smart Freezer
          </h1>
          <p className="px-2 py-1 rounded bg-primary-pink text-primary-red">
            In Stock
          </p>
        </div>
        {/* rating and review */}
        <div className="mt-5 flex gap-2">
          <Rating rating={5} className="w-28"></Rating>
          <p className="text-primary-gray">
            <span>4</span> Review
          </p>
        </div>
        {/* price and discound*/}
        <div className="mt-2 mb-6 flex items-center  gap-x-3">
          <p className="text-xl text-primary-color">
            <s className="text-primary-gray">$48.00</s>
            <span className="font-medium ml-2">$17.28</span>
          </p>
          <p className="px-2 py-1 rounded-full bg-primary-pink text-primary-red rou">
            64% Off
          </p>
        </div>

        <hr />

        {/* category and description */}
        <div className="mt-7">
          <p className="text-primary-black font-medium">
            Cateroy:{" "}
            <span className="text-primary-gray font-normal">Freeze</span>
          </p>
          <p className="mt-6 text-primary-gray max-w-3xl">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec,
            ultrices et ipsum. Nulla varius magna a consequat pulvinar.{" "}
          </p>

          {/* checkout */}
          <div className="mt-7 flex items-center gap-x-3">
            {/* quantity */}
            <div className="  border-2 px-2 py-1 rounded-full flex items-center gap-x-3">
              <button
                onClick={() => setQuantity(quantity - 1)}
                className={`  bg-light-gray ${
                  quantity === 0 && "text-primary-gray"
                } shadow-lg size-10 flex justify-center items-center rounded-full`}
                disabled={quantity === 0}
              >
                -
              </button>
              <p>{quantity}</p>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className={` bg-light-gray shadow-lg size-10 flex justify-center items-center rounded-full`}
              >
                +
              </button>
            </div>

            {/* checkout btn */}
            <Link href={"/checkout"} className="flex-1">
            <Button disabled={quantity === 0} className=" w-full rounded-full bg-primary-color">
              Checkout
            </Button>
            </Link>

            <div className="p-3 rounded-full bg-light-gray">
              <ShoppingCart size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsContainer;
