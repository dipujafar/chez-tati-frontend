import img1 from "@/assets/images/home_bg_1.png";
import img2 from "@/assets/images/home_bg_2.png";
import img3 from "@/assets/images/home_bg_3.png";
import img4 from "@/assets/images/hero-image-5.png";
import img5 from "@/assets/images/hero-image-6.png";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const carouselData = [
  {
    image: "/hero-image-1.png",
    title: "Best Home Appliance Products",
    description: "100+ Collections for your outfit inspirations in this summer",
  },
  {
    image: "/hero-image-1.png",
    title: "Best Home Appliance Products",
    description: "100+ Collections for your outfit inspirations in this summer",
  },
  {
    image: "/hero-image-1.png",
    title: "Best Home Appliance Products",
    description: "100+ Collections for your outfit inspirations in this summer",
  },
];

const HeroSection = () => {
  return (
    <Container className="mt-6">
      <div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 xl:max-h-[650px] overflow-hidden">
          <div className="col-span-2 rounded-md">
            <Carousel className="w-full lg:max-h-[650px]">
              <CarouselContent className="relative ">
                {carouselData?.map((data, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent className="relative  px-0">
                        <Image
                          src={data?.image}
                          width={1950}
                          height={1700}
                          alt="banner_image"
                          className="rounded-3xl h-full xl:h-[650px] min-h-[350px] "
                        />
                        <div className="absolute lg:top-20 md:top-16 top-8 md:left-12 left-8 z-20 text-primary-white">
                          <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold max-w-md">
                            {data?.title.split(" ")[0]}
                          </h1>
                          <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold ">
                            {`${data?.title.split(" ")[1]} ${
                              data?.title?.split(" ")[2]
                            }`}
                          </h1>
                          <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold max-w-md">
                            {data?.title?.split(" ")[3]}
                          </h1>
                          <p className="lg:text-lg md:text-md text-sm lg:mt-4 mt-2 px-2">
                            {data?.description}
                          </p>
                          <Link href="/products">
                            <Button className="lg:mt-8 mt-4 lg:w-1/2 mx-auto rounded-full">
                              View Category
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 bg-primay-color text-primary-white" />
              <CarouselNext className="absolute right-0 bg-primay-color text-primary-white" />
            </Carousel>
          </div>
          <div className="space-y-3">
            <div className="relative">
              <Image
                src={img2}
                alt="banner_image"
                className="rounded-3xl w-full max-h-[319px] "
              />
              <h1 className="absolute top-8 left-8 text-3xl md:text-4xl font-semibold text-primary-white z-20">
                Indoor <br /> Active
              </h1>
            </div>
            <div className="relative">
              <Image
                src={img3}
                alt="banner_image"
                className="rounded-3xl w-full max-h-[319px] "
              />
              <h1 className="absolute top-8 left-8 text-3xl md:text-4xl font-semibold z-20">
                Casual <br /> Comfort
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Casual Inspirations section */}
      <div className="mt-3 grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="lg:ml-9 xl:space-y-10 space-y-2">
          <h1 className="xl:text-5xl text-3xl font-bold text-primary-black">
            Casual <br />
            Inspirations
          </h1>
          <p className="text-secondary-gray max-w-md">
            Our favorite combinations for casual outfit that can inspire you to
            apply on your daily activity.
          </p>
          <Button variant="outline" className="rounded-full xl:w-3/4 mx-auto">
            BROWS INSPIRATION
          </Button>
        </div>
        <div className="relative">
          <Image
            src={img4}
            alt="banner_image"
            className="rounded-3xl w-full max-h-[319px] "
          />
          <h1 className="absolute bottom-8 left-8 text-3xl md:text-4xl font-semibold text-primary-white z-20">
            Say it <br />
            with Shirt
          </h1>
        </div>
        <div className="relative">
          <Image
            src={img5}
            alt="banner_image"
            className="rounded-3xl w-full max-h-[319px] "
          />
          <h1 className="absolute bottom-8 left-8 text-3xl md:text-4xl font-semibold text-primary-white z-20">
            Electronics <br />
            Gadgets
          </h1>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
