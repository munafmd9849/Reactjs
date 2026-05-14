import { useContext } from "react";
import Card from "../components/Card/Card";
import { EcommerceContext } from "../providers/EcommerceProvider";

function ProductListingPage() {
  const { products } = useContext(EcommerceContext);
  console.log(products);
  return (
    <div className="card-container">
      {products &&
        products.map((product) => {
          return <Card product={product} />;
        })}
     
    </div>
  );
}
export default ProductListingPage;
