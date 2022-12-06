import { createContext, useState, useEffect } from "react";
import getSales from "../services/sales-service";

export const salesContext = createContext();

export default function SaleProvider({ children }) {
  const [sales, setSales] = useState();
  useEffect(() => {
    getSales().then((res) => setSales(res.sales));
    
  }, []);

  return (
    <salesContext.Provider value={{sales, setSales }}>
      {children}
    </salesContext.Provider>
  );
}
