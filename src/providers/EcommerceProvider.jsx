import { createContext, useState } from "react";

export const EcommerceContext = createContext(null);

function EcommerceProvider({children}){
    const [products, setProducts] = useState([]);
    return (
         <EcommerceContext.Provider value={{ products,setProducts }}>
            {children}
         </EcommerceContext.Provider>
    )
}
export default EcommerceProvider