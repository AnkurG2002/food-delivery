import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import { Cart, Home, Login, Menu, PaymentSuccess, Register } from "../pages";
import { useSelector } from "react-redux";
import { cartProducts } from "../stores/cart/cartSlice";
import { Footer } from "../components/Footer";

function Navigation() {
  const productsInCart = useSelector(cartProducts);
  return (
    <Router>
      <Header cartCount={productsInCart.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Navigation;
