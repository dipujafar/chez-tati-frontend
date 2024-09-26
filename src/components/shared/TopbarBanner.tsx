"use client";

import { usePathname } from "next/navigation";
import Container from "./Container";
import { ChevronRight, House } from "lucide-react";
import Link from "next/link";

const TopbarBanner = () => {
  const pathName = usePathname();
  return (
    <div className={`w-full h-[120px] bg-topbar-image flex items-center bg-no-repeat bg-cover `}>
      <div>
        <Container>
          <div className="h-full flex gap-3 items-center">
            <Link href={"/"}>
            <House color="#fff" /> 
            </Link>
            <ChevronRight color="#fff" />
            <p className="text-primary-white capitalize">{pathName ? pathName.split("/")[1]?.replaceAll("/", " ").replaceAll("-", " "): " "}</p>
            
          </div>
        </Container>
      </div>
    </div>
  );
};

export default TopbarBanner;
