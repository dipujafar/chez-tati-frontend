"use client";
import { ChangeEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Heart, Search } from "lucide-react";
import { RangeSlider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { products } from "@/utils/products";
import Image from "next/image";
import { Rating } from "@/components/ui/rating";

const categories = [
  {
    label: "All Category",
    value: "all-category",
    quantity: 100,
  },
  {
    label: "Laptop",
    value: "laptop",
    quantity: 25,
  },
  {
    label: "Washing Machine",
    value: "washing-machine",
    quantity: 12,
  },
  {
    label: "Iron",
    value: "iron",
    quantity: 40,
  },
  {
    label: "Freeze",
    value: "freeze",
    quantity: 15,
  },
  {
    label: "Tv",
    value: "tv",
    quantity: 30,
  },
  {
    label: "Air Conditioner",
    value: "air-conditioner",
    quantity: 8,
  },
  {
    label: "Headphone",
    value: "headphone",
    quantity: 50,
  },
  {
    label: "Mobile Phones",
    value: "mobile-phones",
    quantity: 60,
  },
  {
    label: "Refrigerator",
    value: "refrigerator",
    quantity: 20,
  },
  {
    label: "Smart Watches",
    value: "smart-watches",
    quantity: 35,
  },
  {
    label: "Gaming Consoles",
    value: "gaming-consoles",
    quantity: 22,
  },
  {
    label: "Microwave Ovens",
    value: "microwave-ovens",
    quantity: 18,
  },
];

const sortData = ["Letast"];

const ProductsContainer = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 7; // Number of visible categories at a time
  const maxIndex = categories.length - visibleCount;
  const [pricecValue, setPriceValue] = useState([100, 700]);

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStartIndex(Number(event.target.value));
  };

  const handlePriceSliderChange = (value: number[]) => {
    setPriceValue(value);
    console.log(value[0]);
  };

  const handleSortChange = (value: string) => {
    console.log(value);
  };

  return (
    <div className="grid grid-cols-1 2xl:grid-cols-4 gap-20">
      {/* Sidebar */}
      <div className="col-span-1 space-y-8">
        {/* Search bar */}
        <div className="flex items-center relative">
          <Input
            type="text"
            placeholder="Search"
            className="pl-9 w-full rounded-full"
          />
          <Search className="absolute left-3 font-light" size={20} />
        </div>

        {/* Category List */}
        <div className="relative">
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-3">All Categories</h1>
            {/* Category radio list */}
            <RadioGroup className="space-y-3 mx-2">
              {categories
                .slice(startIndex, startIndex + visibleCount)
                .map((category, inx) => (
                  <div className="flex items-center space-x-2" key={inx}>
                    {/* Dot with custom color */}
                    <div className="w-3 h-3 rounded-full" />
                    <RadioGroupItem
                      value={category.value}
                      id={`r${inx}`}
                      className=""
                    />
                    <Label htmlFor={`r${inx}`}>{category.label}</Label>
                  </div>
                ))}
            </RadioGroup>
          </div>
          {/* Slider to scroll through categories */}
          <div className="mt-4 absolute right-0 top-28">
            <input
              type="range"
              min="0"
              max={maxIndex}
              value={startIndex}
              onChange={handleSliderChange}
              className="w-[250px] h-2  bg-gray-300 rounded-lg appearance-none cursor-pointer rotate-90 px-1 "
            />
          </div>
        </div>

        {/* price */}
        <div>
          <h1 className="text-2xl font-bold mb-3">Price</h1>
          {/* price filter slider */}
          <RangeSlider
            value={pricecValue}
            onValueChange={handlePriceSliderChange}
            max={1000}
            step={1}
            className="w-[60%]"
          />
          <p className="mt-4">
            Price : ${pricecValue[0]} - ${pricecValue[1]}
          </p>
        </div>
      </div>

      {/* Products section */}
      <div className="2xl:col-span-3">
        {/* Header */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center gap-2 w-[280px]">
            <h1 className="">Sort by: </h1>
            <Select onValueChange={handleSortChange}>
              <SelectTrigger className=" gap-2 w-[120px]">
                <SelectValue placeholder="Latest" />
              </SelectTrigger>
              <SelectContent className="w-fit">
                <SelectGroup>
                  {sortData?.map((data, inx) => (
                    <SelectItem key={inx} value={data} className="capitalize">
                      {data}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <h1 className="text-lg font-medium">
            <span className="font-bold">52</span> Results Found
          </h1>
        </div>

        {/* display produts */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-x-5 gap-y-5 justify-between">
          {products?.map((product, inx) => (
            <Card className="w-[350px]">
              <CardContent className="relative">
                <Image
                  src={product?.image}
                  alt="product_image"
                  width={1950}
                  height={1000}
                  className="w-full h-full"
                ></Image>
                <div>
                  <div className="absolute top-2 right-2 size-10 rounded-full bg-[#FDEEE9] flex justify-center items-center group">
                    <Heart color="#000" className="cursor-pointer" />
                  </div>
                  {product?.discount && (
                    <div className="absolute top-2 left-2 px-2 py-1 rounded-md bg-primary-color text-primary-white flex justify-center items-center group">
                      Sale  {product?.discount}% off
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div>
                  <p className="text-primary-color font-bold">
                    {product?.name}
                  </p>
                  <p>${product?.price}</p>
                  <Rating rating={product?.rating} className="w-20"></Rating>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsContainer;
