import { createContext, useState, useEffect } from "react";
import getOrders from "../services/orders-service";

export const orderContext = createContext();

export default function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrders().then((res) => setOrders(res));
  }, []);

  return (
    <orderContext.Provider value={{ orders, setOrders }}>
      {children}
    </orderContext.Provider>
  );
}
