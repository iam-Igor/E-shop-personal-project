import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import ProductDetails from "./components/ProductDetails";
import Categories from "./components/Categories";

function App() {
  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Product/:productId" element={<ProductDetails />} />
        <Route path="/Categories/:category" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
