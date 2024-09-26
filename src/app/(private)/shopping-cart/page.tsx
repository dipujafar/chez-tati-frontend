import ShoppingCartContainer from "@/components/(private)/shopping-cart/ShoppingCartContainer";
import Container from "@/components/shared/Container";
import TopbarBanner from "@/components/shared/TopbarBanner";


const ShoppingCartPage = () => {
    return (
        <div>
            <TopbarBanner></TopbarBanner>
            <Container className="mt-10">
                <ShoppingCartContainer></ShoppingCartContainer>
            </Container>
        </div>
    );
};

export default ShoppingCartPage;