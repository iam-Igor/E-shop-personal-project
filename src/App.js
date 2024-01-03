import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import ProductDetails from "./components/ProductDetails";
import Categories from "./components/Categories";
import AccountSettings from "./components/AccountSettings";
import CartPage from "./components/CartPage";
import CustomFooter from "./components/CustomFooter";
import CarouselTest from "./components/CarouselTest";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <ParallaxProvider>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="Login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/Product/:productId" element={<ProductDetails />} />
          <Route path="/Categories/:category" element={<Categories />} />
          <Route path="/Account/:accountId" element={<AccountSettings />} />
          <Route path="/Cart" element={<CartPage />} />
          <Route path="/test" element={<CarouselTest />} />
        </Routes>
        <CustomFooter />
      </BrowserRouter>
    </ParallaxProvider>
  );
}

export default App;
