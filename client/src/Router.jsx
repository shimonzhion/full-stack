import { Routes, Route } from "react-router-dom";
import Users from "./components/pages/Users/Users.tsx"
import {
  Products,
  Orders,
  Dashboard,
} from "../src/components/pages/index";
import OrderProvider from "./contexts/order-context";
import ProductsProvider from "./contexts/products-service";
import SaleProvider from "./contexts/sales-context";
import UsersProvider from "./contexts/users-context";

export default function Router() {
  return (
    <ProductsProvider>
    <UsersProvider>
      <OrderProvider>
        <SaleProvider>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
            <Route path="/users" element={<Users />} />

            {/* <Route path="*" element={<PageNotFound />} /> */}
          </Routes>
        </SaleProvider>
      </OrderProvider>
    </UsersProvider>
    </ProductsProvider>
  );
}
