import { createContext, useContext, useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import ProductListingPage from "./ProductListingPage";
import EcommerceProvider, { EcommerceContext } from "../providers/EcommerceProvider";


export default function ProductPage() {
  const {products,setProducts} = useContext(EcommerceContext)
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      setLoading(true);
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  if (error) {
    return <h5>{error}</h5>;
  }
  return (
    <div>
       
        <h1>Product Page</h1>
        <form>
          <input type="text" placeholder="Search Products..." />
        </form>
        <ProductListingPage />
        {loading && <h1>Loading....</h1>}
            
    </div>
  );
}
