import HeroSection from "./HeroSection";
import TrendingProducts from "./TrendingProducts";


const HomePageContainer = () => {
    return (
        <>
            <hr />
            <div className="space-y-28">
            <HeroSection></HeroSection>
            <TrendingProducts></TrendingProducts>
            </div>
        </>
    );
};

export default HomePageContainer;