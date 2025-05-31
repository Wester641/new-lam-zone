import './App.css';
import AccountPage from './pages/account/AccountPage';
import CartPage from './pages/cart/CartPage';
import CataloguePage from './pages/catalogue/CataloguePage';
import FavoritesPage from './pages/favorites/FavoritesPage';
// import RouteScrollToTop from './components/common/RouteScrollToTop';
import HomePage from './pages/homepage/HomePage';
import ProductDetailPage from './pages/products/ProductsDetailPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
        <Route path="/product" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
