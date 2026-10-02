import { useSelector } from "react-redux";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { EmptyCart } from "./EmptyCart/EmptyCart";
import { CartItems } from "./CartItems/CartItems";
import "./Cart.css";

export const Cart = () => {
  const cart = useSelector((state) => state.cart || []);

  return (
    <>
      <Header />
      <main
        className={`cart-page ${cart.length === 0 ? "cart-page-empty" : "cart-page-filled"}`}
        id="main-content"
      >
        {cart.length === 0 ? <EmptyCart /> : <CartItems cart={cart} />}
      </main>
      <Footer />
    </>
  );
};

export default Cart;


