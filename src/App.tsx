import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import Products from "./pages/products/Products";
import Favorites from "./pages/favorites/Favorites";
import Inbox from "./pages/inbox/Inbox";
import OrderList from "./pages/orderlist/OrderList";
import { ProductStock } from "./pages/productstock/ProductStock";
import Pricing from "./pages/pricing/Pricing";
// import Calender from "./pages/calender/Calender";

function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/products" element={<Products />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/inbox" element={<Inbox />} />
                <Route path="/orderlist" element={<OrderList />} />
                <Route path="/stock" element={<ProductStock />} />
                <Route path="/pricing" element={<Pricing />} />
                {/* <Route path="/calendar" element={<Calender />} /> */}
                <Route path="*" element={<DashboardPage />} />
              </Route>
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
