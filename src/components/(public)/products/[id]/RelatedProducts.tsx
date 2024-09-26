import { Card, CardContent, CardFooter } from "@/components/ui/card";

import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { Rating } from "@/components/ui/rating";
import { products } from "@/utils/products";

const RelatedProducts = () => {
  return (
    <div>
      <h1 className="lg:text-4xl text-2xl font-bold">Related Products</h1>

      {/* display produts */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-5 gap-y-5 justify-between">
        {products?.slice(0, 4).map((product, inx) => (
          <Card key={inx} className="w-[350px]">
            <CardContent className="relative">
              <Image
                src={product?.image}
                alt="product_image"
                width={1950}
                height={1000}
                className="w-full h-full"
              ></Image>
              <div>
                <div className="absolute top-2 right-2 size-10 rounded-full bg-[#FDEEE9] hover:bg-primary-black hover:text-primary-white flex justify-center items-center group">
                  <Heart className="cursor-pointer" />
                </div>
                {product?.discount && (
                  <div className="absolute top-2 left-2 px-2 py-1 rounded-md bg-primary-color text-primary-white flex justify-center items-center group">
                    Sale {product?.discount}% off
                  </div>
                )}
                {inx === 3 && (
                  <div className="absolute top-2 left-2 px-2 py-1 rounded-md bg-primary-black text-primary-white flex justify-center items-center group">
                    Out of Stock
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div>
                <div>
                  <p className="text-primary-color font-bold">
                    {product?.name}
                  </p>
                  <p>${product?.price}</p>
                  <Rating rating={product?.rating} className="w-20"></Rating>
                </div>
              </div>
              <div className="p-3 rounded-full bg-light-gray">
                <ShoppingCart size={20} />
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
