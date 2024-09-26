import ProductDetailsContainer from "@/components/(public)/products/[id]/ProductDetailsContainer";
import Container from "@/components/shared/Container";
import TopbarBanner from "@/components/shared/TopbarBanner";
import React from "react";

const ProductDetaisPage = () => {
  return (
    <div>
      <TopbarBanner></TopbarBanner>
      <Container className="mt-8">
        <ProductDetailsContainer></ProductDetailsContainer>
      </Container>
    </div>
  );
};

export default ProductDetaisPage;
