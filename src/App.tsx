import './App.css';
// import RouteScrollToTop from './components/common/RouteScrollToTop';
import HomePage from './pages/HomePage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      {/* <RouteScrollToTop /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route exact path="/shop" element={<ShopPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
