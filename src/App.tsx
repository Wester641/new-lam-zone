import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/homepage/HomePage"));
const CataloguePage = lazy(() => import("./pages/catalogue/CataloguePage"));
const CartPage = lazy(() => import("./pages/cart/CartPage"));
const FavoritesPage = lazy(() => import("./pages/favorites/FavoritesPage"));
const AccountPage = lazy(() => import("./pages/account/AccountPage"));
const ProductsDetailPage = lazy(
  () => import("./pages/products/ProductsDetailPage"),
);
const TermsOfServicePage = lazy(
  () => import("./pages/terms_of_service/TermsOfServicePage"),
);
const FAQsPage = lazy(() => import("./pages/faqs_page/FAQsPage"));
const CustomerSupportPage = lazy(
  () => import("./pages/customer_support_page/CustomerSupportPage"),
);

function App() {
  return (
    <BrowserRouter>
      {/* <RouteScrollToTop /> */}
      <Suspense>
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
