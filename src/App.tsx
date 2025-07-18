import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import DashboardPage from "./pages/dashboard/DashboardPage";
import Products from "./pages/products/Products";
import Favorites from "./pages/favorites/Favorites";
import Inbox from "./pages/inbox/Inbox";
import OrderList from "./pages/orderlist/OrderList";
import { ProductStock } from "./pages/productstock/ProductStock";
import Pricing from "./pages/pricing/Pricing";
import Calender from "./pages/calender/Calender";
import ToDoList from "./pages/todolist/ToDoList";
import Contact from "./pages/contact/Contact";
import Invoice from "./pages/invoice/Invoice";
import UIElement from "./pages/uielement/UIElement";
import Team from "./pages/team/Team";
import TablePage from "./pages/table/TablePage";
import AddNewContact from "./pages/contact/AddNewContact";
import AddNewEvent from "./pages/calender/AddNewEvent";
import AddTeamMember from "./pages/team/AddTeamMember";
import Setting from "./pages/setting/Setting";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import PrivateRoute from "./route/PrivateRoute";
import NotFound from "./route/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoute />}>
            <Route element={<Layout />}>
              <Route index element={<DashboardPage />} />
              <Route path="/products" element={<Products />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/orderlist" element={<OrderList />} />
              <Route path="/stock" element={<ProductStock />} />
              <Route path="/pricing" element={<Pricing />} />

              {/* ---calender-- */}
              <Route path="/calendar">
                <Route index element={<Calender />} />
                <Route path="add-new-event" element={<AddNewEvent />} />
              </Route>

              <Route path="/todo" element={<ToDoList />} />

              {/* --contact */}
              <Route path="/contact">
                <Route index element={<Contact />} />
                <Route path="add-new-contact" element={<AddNewContact />} />
              </Route>

              <Route path="/invoice" element={<Invoice />} />
              <Route path="/ui-elements" element={<UIElement />} />

              {/* --team-- */}
              <Route path="/team">
                <Route index element={<Team />} />
                <Route path="add-team-member" element={<AddTeamMember />} />
              </Route>

              <Route path="/table" element={<TablePage />} />
              <Route path="/settings" element={<Setting />} />
            </Route>
          </Route>
              <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
