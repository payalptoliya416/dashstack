import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import DashboardPage from "./pages/dashboard/dashboard/DashboardPage";
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
import PrivateRoute from "./constants/PrivateRoute";
import NotFound from "./pages/notfound/NotFound";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import ECommerce from "./pages/dashboard/ecommerce/ECommerce";
import Crm from "./pages/dashboard/CRM/Crm";
import AnalyTics from "./pages/dashboard/analytics/AnalyTics";
import Kanban from "./pages/kanban/Kanban";
import ProfileOverview from "./pages/userprofile/ProfileOverview";
import ProfileActivity from "./pages/userprofile/ProfileActivity";
import ProfileFollowers from "./pages/userprofile/ProfileFollowers";
import ProfileContacts from "./pages/userprofile/ProfileContacts";
import ProfileProject from "./pages/userprofile/ProfileProject";
import ProfileGallery from "./pages/userprofile/ProfileGallery";
import ProfileLayout from "./pages/userprofile/ProfileLayout";
import AccountLayout from "./pages/account-setting/AccountLayout";
import Account from "./pages/account-setting/Account";
import Security from "./pages/account-setting/Security";
import AccoNotification from "./pages/account-setting/AccoNotification";
import PlanBilling from "./pages/account-setting/PlanBilling";
import Integration from "./pages/account-setting/Integration";
import Starter from "./pages/other-pages/Starter";
import FAQs from "./pages/other-pages/FAQs";
import InfoPages from "./pages/other-pages/InfoPages";
import AboutUs from "./pages/other-pages/AboutUs";
import ContactUs from "./pages/other-pages/ContactUs";
import PrivacyPolicy from "./pages/other-pages/PrivacyPolicy";
import TermsOfServices from "./pages/other-pages/TermsOfServices";
import PagesLayout from "./pages/other-pages/PagesLayout";
import CommingSoon from "./pages/error-pages/CommingSoon";
import NotAuthorized from "./pages/error-pages/NotAuthorized";
import ServerError from "./pages/error-pages/ServerError";
import UnderMaintenance from "./pages/error-pages/UnderMaintenance";
import NotFoundPage from "./pages/error-pages/NotFoundPage";
import WelcomeMessage from "./pages/email-template/WelcomeMessage";
import ConfirmAccount from "./pages/email-template/ConfirmAccount";
import ExpiredCard from "./pages/email-template/ExpiredCard";
import CouponSale from "./pages/email-template/CouponSale";
import LatestUpdate from "./pages/email-template/LatestUpdate";
import ResetPasswordTemp from "./pages/email-template/ResetPasswordTemp";
import UIAvatar from "./pages/base-ui/UIAvatar";
import UIAccordion from "./pages/base-ui/UIAccordion";
import UIButton from "./pages/base-ui/uibutton/UIButton";
import UICard from "./pages/base-ui/uicard/UICard";
import UICarousel from "./pages/base-ui/carousel/UICarousel";
import UIDropdown from "./pages/base-ui/dropdown/UIDropdown";
import UIModals from "./pages/base-ui/ui-modal/UIModals";
import UINavTabs from "./pages/base-ui/ui-navtab/UINavTabs";
import UIToasts from "./pages/base-ui/ui-toast/UIToasts";
import UIMiscellaneous from "./pages/base-ui/ui-miscellaneous/UIMiscellaneous";
import FaltIcon from "./pages/icons/flaticon/FaltIcon";
import Feather from "./pages/icons/feather/FeatherIcon";
import FontAwesome from "./pages/icons/FontAwesomeIcon";
import BootstrapIcon from "./pages/icons/bootstrap/BootstrapIcon";
import LucideIcon from "./pages/icons/LucideIcon";
import TablerIcon from "./pages/icons/TablerIcon";
import WeatherIcon from "./pages/icons/WeatherIcon";
import BootstrapTables from "./pages/table-ui/boostraptable/BootstrapTables";
import ReactTable from "./pages/table-ui/reacttable/ReactTable";
import BoxIcon from "./pages/icons/boxicon/BoxIcon";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/email-reset-password" element={<ResetPasswordTemp />} />

          {/* error pages */}
          <Route path="/comming-soon" element={<CommingSoon />} />
          <Route path="/401-not-aithorized" element={<NotAuthorized />} />
          <Route path="/404-not-found" element={<NotFoundPage />} />
          <Route path="/500-server-error" element={<ServerError />} />
          <Route path="/under-maintenance" element={<UnderMaintenance />} />

          {/* -email template */}
          <Route path="/welcome-message" element={<WelcomeMessage />} />
          <Route path="/confirm-account" element={<ConfirmAccount />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/expired-card" element={<ExpiredCard />} />
          <Route path="/coupon-sale" element={<CouponSale />} />
          <Route path="/latest-update" element={<LatestUpdate />} />

          <Route element={<PrivateRoute />}>
            <Route element={<Layout />}>
              {/* --dashboard-- */}
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/eCommerce" element={<ECommerce />} />
              <Route path="/crm" element={<Crm />} />
              <Route path="/analytics" element={<AnalyTics />} />
              {/* ---Dashboard-- */}

              <Route path="/products" element={<Products />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/orderlist" element={<OrderList />} />
              <Route path="/stock" element={<ProductStock />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/kanban-board" element={<Kanban />} />

              {/* --profile-- */}
              <Route path="/user-profile" element={<ProfileLayout />}>
                <Route path="overview" element={<ProfileOverview />} />
                <Route path="activity" element={<ProfileActivity />} />
                <Route path="followers" element={<ProfileFollowers />} />
                <Route path="contacts" element={<ProfileContacts />} />
                <Route path="projects" element={<ProfileProject />} />
                <Route path="gallery" element={<ProfileGallery />} />
              </Route>

              {/* --account setting-- */}
              <Route path="/account-setting" element={<AccountLayout />}>
                <Route path="account" element={<Account />} />
                <Route path="Security" element={<Security />} />
                <Route path="notification" element={<AccoNotification />} />
                <Route path="plan-billing" element={<PlanBilling />} />
                <Route path="integration" element={<Integration />} />
              </Route>

              {/* --Other pages-- */}
              <Route path="Starter" element={<Starter />} />
              <Route path="/info" element={<PagesLayout />}>
                <Route path="faqs" element={<FAQs />} />
                <Route path="pricing" element={<InfoPages />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="contact-us" element={<ContactUs />} />
                <Route path="privacy-policy" element={<PrivacyPolicy />} />
                <Route path="terms-of-services" element={<TermsOfServices />} />
              </Route>

              {/* --tables-- */}
              <Route path="/table-boostrap" element={<BootstrapTables />} />
              <Route path="/table-react" element={<ReactTable />} />
              
              {/* --Base UI */}
              <Route path="/ui-accordion" element={<UIAccordion />} />
              <Route path="/ui-avatars" element={<UIAvatar />} />
              <Route path="/ui-buttons" element={<UIButton />} />
              <Route path="/ui-cards" element={<UICard />} />
              <Route path="/ui-carousel" element={<UICarousel />} />
              <Route path="/ui-dropdowns" element={<UIDropdown />} />
              <Route path="/ui-modals" element={<UIModals />} />
              <Route path="/ui-navTabs" element={<UINavTabs />} />
              <Route path="/ui-toasts" element={<UIToasts />} />
              <Route path="/ui-miscellaneous" element={<UIMiscellaneous />} />

              {/* --Icons */}
              <Route path="/icon-flaticon" element={<FaltIcon />} />
              <Route path="/icon-feather" element={<Feather />} />
              <Route path="/icon-bootstrap" element={<BootstrapIcon />} />
              <Route path="/icon-boxIcons" element={<BoxIcon />} />
              <Route path="/icon-fontawesome" element={<FontAwesome />} />
              <Route path="/icon-lucide" element={<LucideIcon />} />
              <Route path="/icon-tabler" element={<TablerIcon />} />
              <Route path="/icon-weather" element={<WeatherIcon />} />

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
