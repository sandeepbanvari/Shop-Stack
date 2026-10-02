import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  FaTrashCan,
  FaMinus,
  FaPlus,
  FaArrowLeft,
  FaShieldHalved,
  FaCircleCheck,
} from "react-icons/fa6";
import { INC, DEC, REMOVE, CLEAR } from "../../../Features/Cart Functions/CartSlice";
import "./CartItems.css";

export const CartItems = ({ cart }) => {
  const dispatch = useDispatch();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Calculate items count and prices
  const totalItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
  const subtotal = cart.reduce(
    (acc, item) => acc + Number(item.price) * (item.quantity || 1),
    0
  );
  const shipping = 10.0;
  const total = subtotal + shipping;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderPlaced(true);
      dispatch(CLEAR());
    }, 1200);
  };

  return (
    <div className="cart-content-container">
      {/* =========================================================
          1. HEADER: YOUR CART & ITEM COUNT
      ========================================================= */}
      <div className="cart-header-block">
        <h1 className="cart-main-title">YOUR CART</h1>
        <p className="cart-item-count">
          {totalItems} {totalItems === 1 ? "Item" : "Items"}
        </p>
      </div>

      {/* =========================================================
          2. TWO-COLUMN LAYOUT: ITEMS LIST & ORDER SUMMARY
      ========================================================= */}
      <div className="cart-grid-layout">
        {/* Left Column: Cart Items List */}
        <section className="cart-items-column" aria-label="Cart Items">
          <div className="cart-items-card">
            {cart.map((item, index) => {
              const itemTotal = Number(item.price) * (item.quantity || 1);

              return (
                <div key={item.id || index} className="cart-item-wrapper">
                  <div className="cart-item-row">
                    {/* Product Image */}
                    <Link
                      to={`/products/${item.id}`}
                      className="cart-item-image-link"
                      aria-label={`View ${item.title}`}
                    >
                      <img
                        src={item.thumbnail || item.images?.[0] || "/placeholder.png"}
                        alt={item.title}
                        className="cart-item-image"
                        loading="lazy"
                      />
                    </Link>

                    {/* Product Details & Actions */}
                    <div className="cart-item-content">
                      <div className="cart-item-header-info">
                        <Link
                          to={`/products/${item.id}`}
                          className="cart-item-name"
                        >
                          {item.title}
                        </Link>
                        {item.category && (
                          <span className="cart-item-category">
                            {item.category}
                          </span>
                        )}
                        <span className="cart-item-unit-price">
                          ${Number(item.price).toFixed(2)}
                        </span>
                      </div>

                      {/* Stepper + Total Price + Trash Icon */}
                      <div className="cart-item-bottom-row">
                        {/* Quantity Stepper */}
                        <div
                          className="cart-stepper"
                          role="group"
                          aria-label={`Quantity selector for ${item.title}`}
                        >
                          <button
                            type="button"
                            className="stepper-btn minus-btn"
                            onClick={() => dispatch(DEC(item.id))}
                            disabled={item.quantity <= 1}
                            aria-label="Decrease quantity"
                          >
                            <FaMinus />
                          </button>
                          <span className="stepper-value" aria-live="polite">
                            {item.quantity || 1}
                          </span>
                          <button
                            type="button"
                            className="stepper-btn plus-btn"
                            onClick={() => dispatch(INC(item.id))}
                            aria-label="Increase quantity"
                          >
                            <FaPlus />
                          </button>
                        </div>

                        {/* Price & Delete Action */}
                        <div className="cart-item-pricing-action">
                          <span className="cart-item-line-total">
                            ${itemTotal.toFixed(2)}
                          </span>
                          <button
                            type="button"
                            className="cart-item-delete-btn"
                            onClick={() => dispatch(REMOVE(item.id))}
                            title="Remove item"
                            aria-label={`Remove ${item.title} from cart`}
                          >
                            <FaTrashCan />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Divider line except after last item */}
                  {index < cart.length - 1 && (
                    <div className="cart-item-divider" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Continue Shopping Link */}
          <div className="continue-shopping-container">
            <Link to="/products" className="continue-shopping-link">
              <FaArrowLeft className="back-arrow-icon" aria-hidden="true" />
              <span>Continue Shopping</span>
            </Link>
          </div>
        </section>

        {/* Right Column: Order Summary */}
        <aside className="order-summary-column" aria-label="Order Summary">
          <div className="order-summary-card">
            <h2 className="summary-title">ORDER SUMMARY</h2>

            <div className="summary-rows">
              <div className="summary-row">
                <span className="summary-label">Subtotal</span>
                <span className="summary-value">${subtotal.toFixed(2)}</span>
              </div>

              <div className="summary-row">
                <span className="summary-label">Shipping</span>
                <span className="summary-value">${shipping.toFixed(2)}</span>
              </div>

              <div className="summary-divider-line" />

              <div className="summary-row summary-total-row">
                <span className="summary-total-label">Total</span>
                <span className="summary-total-value">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>

            <button
              type="button"
              className="checkout-btn"
              onClick={handleCheckout}
              disabled={isCheckingOut}
            >
              {isCheckingOut ? (
                <span className="btn-loading-state">Processing...</span>
              ) : (
                <span>Checkout</span>
              )}
            </button>

            {/* Trust Assurance */}
            <div className="summary-trust-badge">
              <FaShieldHalved className="trust-icon" aria-hidden="true" />
              <span>Secure 256-bit encrypted checkout</span>
            </div>
          </div>
        </aside>
      </div>

      {/* =========================================================
          3. CHECKOUT SUCCESS MODAL
      ========================================================= */}
      {orderPlaced && (
        <div
          className="order-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="order-modal-card">
            <div className="order-modal-icon-bubble">
              <FaCircleCheck />
            </div>
            <h3 id="modal-title" className="order-modal-title">
              Order Placed Successfully!
            </h3>
            <p className="order-modal-desc">
              Thank you for shopping with ShopStack. We have received your order
              and will start processing it right away.
            </p>
            <Link
              to="/products"
              className="order-modal-btn"
              onClick={() => setOrderPlaced(false)}
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
