import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries } from "@/utils/countries";
import Image from "next/image";

import Link from "next/link";

const ChekcoutContainer = () => {
  return (
    <div>
      <h1 className="text-primary-black lg:text-4xl text-3xl font-bold">
        Billing Information
      </h1>
      <div className="mt-10 grid grid-cols-1 xl:grid-cols-3 gap-7 items-center justify-center">
        {/* form */}
        <div className="col-span-2 py-5 ">
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col lg:flex-row gap-4 justify-between">
                <div className=" flex-1 flex flex-col space-y-1.5">
                  <Label>First name</Label>
                  <Input id="firstName" placeholder="Your first name" />
                </div>
                <div className=" flex-1 flex flex-col space-y-1.5">
                  <Label>Last name</Label>
                  <Input id="lastName" placeholder="Your last name" />
                </div>
                <div className=" flex-1 flex flex-col space-y-1.5">
                  <Label>Company Name (optional)</Label>
                  <Input id="companyName" placeholder="Company name" />
                </div>
              </div>
              {/*input email */}
              <div className="  flex flex-col space-y-1.5">
                <Label>Street Address</Label>
                <Input id="email" placeholder="Email" />
              </div>
              {/* address */}
              <div className="flex flex-col lg:flex-row gap-4">
                {/* countries   */}
                <div className="  flex flex-col space-y-1.5">
                  <Label>Country / Region</Label>
                  <Select>
                    <SelectTrigger className="min-w-[220px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className="max-h-60 overflow-y-auto">
                        {countries.map((country, idx) => (
                          <SelectItem
                            key={idx}
                            value={country}
                            className="capitalize"
                          >
                            {country}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                {/* States */}
                <div className="  flex flex-col space-y-1.5">
                  <Label>States</Label>
                  <Select>
                    <SelectTrigger className="min-w-[150px]">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {/* <SelectItem value="bangladesh">Bangladesh</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem> */}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* input email and phone */}
              <div className="flex flex-col lg:flex-row gap-4 justify-between">
                <div className=" flex-1 flex flex-col space-y-1.5">
                  <Label>Email</Label>
                  <Input id="email" placeholder="Email Address" />
                </div>
                <div className=" flex-1 flex flex-col space-y-1.5">
                  <Label>Phone</Label>
                  <Input id="lastName" placeholder="Phone number" />
                </div>
               
              </div>
            </div>
          </form>
        </div>

        {/* cart statistics */}
        <Card>
          <CardHeader>
            <CardTitle className="font-semibold text-xl">
              Order Summery
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* products information */}
            <div>
              <div className="flex justify-between items-center ">
                <div className="flex items-center gap-2">
                  <Image
                    src={"/freezerImage.png"}
                    alt="productImage"
                    width={950}
                    height={700}
                    className="size-16"
                  ></Image>
                  <p>Freezer Xl</p>
                </div>
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

            {/* payment method */}
            <Label className="text-xl">Payment Method</Label>

            <RadioGroup defaultValue="paypal" className="mt-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cash on delivery" id="r1" />
                <Label htmlFor="r1">Cash on Delivery</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paypal" id="r2" />
                <Label htmlFor="r2">Paypal</Label>
              </div>
            </RadioGroup>
          </CardContent>
          <CardFooter>
            <Link href={"/checkout"} className="w-full">
              <Button className="bg-primary-color w-full rounded-full">
                Place Order
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ChekcoutContainer;
