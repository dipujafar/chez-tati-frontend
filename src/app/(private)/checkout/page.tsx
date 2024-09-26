import ChekcoutContainer from "@/components/(private)/checkout/ChekcoutContainer";
import Container from "@/components/shared/Container";
import TopbarBanner from "@/components/shared/TopbarBanner";

const CheckoutPage = () => {
  return (
    <div>
      <TopbarBanner></TopbarBanner>
      <Container className="mt-10">
        <ChekcoutContainer></ChekcoutContainer>
      </Container>
    </div>
  );
};

export default CheckoutPage;
