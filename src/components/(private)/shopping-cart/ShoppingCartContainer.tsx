"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const productData = [
  {
    name: "Smart TV",
    image: "/tvImage.png",
    price: 499.99,
    quantity: 20,
  },
  {
    name: "Freezer",
    image: "/freezerImage.png",
    price: 299.99,
    quantity: 15,
  },
];

const ShoppingCartContainer = () => {
  // Initialize state with quantities from productData
  const [quantities, setQuantities] = useState(
    productData.map((product) => product.quantity)
  );

  const handleQuantityChange = (idx: number, change: number) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((quantity, index) =>
        index === idx ? Math.max(quantity + change, 0) : quantity
      )
    );
  };

  return (
    <div>
      <h1 className="text-primary-black lg:text-4xl text-3xl font-bold">
        My Shopping Cart
      </h1>
      <div className="mt-10 grid grid-cols-1 xl:grid-cols-3 gap-7 items-center justify-center">
        <div className="col-span-2 shadow-md py-5 rounded-md">
          <Table
            className="lg:text-lg w-full overflow-x-auto
        "
          >
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Subtotal</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {productData.map((data, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-medium min-w-fit">
                    <div className="lg:text-lg flex flex-col lg:flex-row items-center gap-3 min-w-fit">
                      <Image
                        src={data?.image}
                        alt="product_image"
                        width={950}
                        height={700}
                        className="size-28"
                      />
                      <p>{data?.name}</p>
                    </div>
                  </TableCell>
                  <TableCell>${data?.price}</TableCell>
                  <TableCell>
                    {/* quantity */}
                    <div className="border-2 px-2 py-1 rounded-full flex items-center gap-x-3 max-w-fit">
                      <button
                        onClick={() => handleQuantityChange(idx, -1)}
                        className={`bg-light-gray ${
                          quantities[idx] === 0 && "text-primary-gray"
                        } shadow-md size-10 flex justify-center items-center rounded-full`}
                        disabled={quantities[idx] === 0}
                      >
                        -
                      </button>
                      <p>{quantities[idx]}</p>
                      <button
                        onClick={() => handleQuantityChange(idx, 1)}
                        className="bg-light-gray shadow-md size-10 flex justify-center items-center rounded-full"
                      >
                        +
                      </button>
                    </div>
                  </TableCell>
                  <TableCell>
                    $
                    {(Number(quantities[idx]) * Number(data?.price)).toFixed(2)}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="border size-8 text-primary-gray rounded-full flex justify-center items-center cursor-pointer">
                      <X size={20} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <hr />
          <div className="flex justify-between px-4 mt-5">
            <Link href="/products">
              <Button className="bg-light-gray text-primary-black hover:text-primary-white">
                Return to shop
              </Button>
            </Link>
            <Button className="bg-light-gray text-primary-black hover:text-primary-white">
              Update Cart
            </Button>
          </div>
        </div>

        {/* cart statistics */}
        <Card>
          <CardHeader>
            <CardTitle className="font-semibold text-xl">Cart Total</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <div className="flex justify-between py-5">
                <p>Subtotal:</p>
                <p className="font-medium">$84.00</p>
              </div>
              <hr />
              <div className="flex justify-between py-5">
                <p>Shipping:</p>
                <p className="font-medium">Free</p>
              </div>
              <hr />
              <div className="flex justify-between py-5">
                <p>Total:</p>
                <p className="font-medium">$84.00</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href={"/checkout"} className="w-full">
              <Button className="bg-primary-color w-full rounded-full">
                Proceed to checkout
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ShoppingCartContainer;
