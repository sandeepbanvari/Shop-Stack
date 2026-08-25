import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { CartHeader } from "./CartHeader/CartHeader";
import { EmptyCart } from "./EmptyCart/EmptyCart";
import { CartCategories } from "./CartCategories/CartCategories";
import "./Cart.css";

export const Cart = () => {
  return (
    <>
      <Header />
      <CartHeader />
      <EmptyCart />
      <CartCategories />
      <Footer />
    </>
  );
};

export default Cart;
