import { createContext, useState, useEffect } from "react";
import getProducts from "../services/products-service";

export const productsContext = createContext();

export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((res) => setProducts(res));
    
  }, []);

  return (
    <productsContext.Provider value={{ products, setProducts }}>
      {children}
    </productsContext.Provider>
  );
}
