"use client";

import { usePathname } from "next/navigation";
import Container from "./Container";
import { ChevronRight, House } from "lucide-react";

const TopbarBanner = () => {
  const pathName = usePathname();
  return (
    <div className={`w-full h-[120px] bg-topbar-image flex items-center `}>
      <div>
        <Container>
          <div className="h-full flex gap-3 items-center">
            <House color="#fff" /> 
            <ChevronRight color="#fff" />
            <p className="text-primary-white capitalize">{pathName ? pathName?.replaceAll("/", " ").replaceAll("-", " "): " "}</p>
            
          </div>
        </Container>
      </div>
    </div>
  );
};

export default TopbarBanner;
