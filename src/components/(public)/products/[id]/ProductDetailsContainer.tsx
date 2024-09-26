import CustomerFeedbacks from "./CustomerFeedbacks";
import ProductDetails from "./ProductDetails";
import RelatedProducts from "./RelatedProducts";

const ProductDetailsContainer = () => {
  return (
    <div className="space-y-24">
      <ProductDetails></ProductDetails>
      <CustomerFeedbacks></CustomerFeedbacks>
      <RelatedProducts></RelatedProducts>
    </div>
  );
};

export default ProductDetailsContainer;
