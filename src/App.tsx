import "./App.css";
import AccountPage from "./pages/account/AccountPage";
import CartPage from "./pages/cart/CartPage";
import CataloguePage from "./pages/catalogue/CataloguePage";
import FavoritesPage from "./pages/favorites/FavoritesPage";
// import RouteScrollToTop from './components/common/RouteScrollToTop';
import HomePage from "./pages/homepage/HomePage";
import ProductsDetailPage from "./pages/products/ProductsDetailPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import TermsOfServicePage from "./pages/terms_of_service/TermsOfServicePage";

import FAQsPage from "./pages/FAQsPage/FAQsPage";

import CustomerSupportPage from "./pages/customar_support_page/CustomerSupportPage";

function App() {
  return (
    <BrowserRouter>
      {/* <RouteScrollToTop /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogue" element={<CataloguePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/product/:id" element={<ProductsDetailPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />

        <Route path="/fAQs-page" element={<FAQsPage />} />

        <Route path="/customer-support" element={<CustomerSupportPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
