import ProductsContainer from "@/components/(public)/products/ProductsContainer";
import Container from "@/components/shared/Container";
import TopbarBanner from "@/components/shared/TopbarBanner";

const ProductsPage = () => {
  return (
    <div>
      <TopbarBanner></TopbarBanner>
      <Container className="mt-7">
        <ProductsContainer></ProductsContainer>
      </Container>
    </div>
  );
};

export default ProductsPage;
