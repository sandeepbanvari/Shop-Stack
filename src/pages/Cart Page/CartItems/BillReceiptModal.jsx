import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  FaPrint,
  FaBagShopping,
  FaXmark,
  FaCheck,
  FaReceipt,
  FaShieldHalved,
} from "react-icons/fa6";
import "./BillReceiptModal.css";

export const BillReceiptModal = ({
  isOpen,
  receiptData,
  onClose,
  onContinueShopping,
}) => {
  const [copied, setCopied] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // Prevent body scrolling when receipt is active
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !receiptData) return null;

  const {
    orderId = "SS-784910",
    transactionId = "TXN_98F392A",
    date = "Oct 5, 2026",
    time = "10:00 PM",
    items = [],
    subtotal = 0,
    shipping = 10,
    total = 0,
    paymentMethod = "Credit Card (•••• 4242)",
  } = receiptData;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyOrderId = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(orderId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return createPortal(
    <div
      className="bill-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="bill-title"
      onClick={onClose}
    >
      <div
        className="bill-modal-scroll-area"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Controls */}
        <div className="bill-top-bar">
          <span className="bill-status-pill">
            <span className="status-dot-pulse" />
            Payment Successful
          </span>
          <button
            type="button"
            className="bill-close-icon-btn"
            onClick={onClose}
            aria-label="Close receipt"
            title="Close"
          >
            <FaXmark />
          </button>
        </div>

        {/* =========================================================
            THE BILL / RECEIPT PAPER (Slides from bottom to top)
        ========================================================= */}
        <div className="bill-paper-container">
          {/* Top Sawtooth Perforated Edge */}
          <div className="receipt-sawtooth-top" aria-hidden="true">
            <svg
              className="sawtooth-svg"
              viewBox="0 0 400 12"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern
                  id="sawtooth-pattern-top"
                  width="16"
                  height="12"
                  patternUnits="userSpaceOnUse"
                >
                  <polygon points="0,12 8,0 16,12" fill="#ffffff" />
                </pattern>
              </defs>
              <rect width="100%" height="12" fill="url(#sawtooth-pattern-top)" />
            </svg>
          </div>

          {/* Paper Content Card */}
          <div className="bill-paper-body">
            {/* Header Brand */}
            <header className="bill-header">
              <div className="bill-brand-badge">
                <FaReceipt className="bill-brand-icon" />
                <span className="bill-brand-title">SHOPSTACK</span>
              </div>
              <p className="bill-store-subtitle">OFFICIAL SALES INVOICE & TAX RECEIPT</p>
              <p className="bill-store-meta">
                Flagship Store • Commerce Blvd • www.shopstack.com
              </p>
            </header>

            {/* Perforated Divider */}
            <div className="receipt-divider-perforated" />

            {/* Receipt Meta & Paid Stamp */}
            <div className="bill-meta-grid">
              <div className="bill-meta-left">
                <div className="bill-meta-row">
                  <span className="bill-meta-label">ORDER ID:</span>
                  <button
                    type="button"
                    className="bill-order-id-btn"
                    onClick={handleCopyOrderId}
                    title="Click to copy Order ID"
                  >
                    <span className="bill-meta-value font-mono">#{orderId}</span>
                    <span className="copy-badge-text">
                      {copied ? "Copied!" : "Copy"}
                    </span>
                  </button>
                </div>

                <div className="bill-meta-row">
                  <span className="bill-meta-label">DATE & TIME:</span>
                  <span className="bill-meta-value font-mono">
                    {date} • {time}
                  </span>
                </div>

                <div className="bill-meta-row">
                  <span className="bill-meta-label">TXN ID:</span>
                  <span className="bill-meta-value font-mono">{transactionId}</span>
                </div>

                <div className="bill-meta-row">
                  <span className="bill-meta-label">METHOD:</span>
                  <span className="bill-meta-value">{paymentMethod}</span>
                </div>
              </div>

              {/* Rubber Paid Stamp with slamming animation */}
              <div className="bill-stamp-container">
                <div className="bill-paid-stamp">
                  <FaCheck className="stamp-icon" />
                  <span>PAID</span>
                </div>
              </div>
            </div>

            {/* Perforated Divider */}
            <div className="receipt-divider-perforated" />

            {/* Items Table */}
            <div className="bill-items-section">
              <div className="bill-items-table-header">
                <span className="col-desc">ITEM DESCRIPTION</span>
                <span className="col-qty">QTY</span>
                <span className="col-price">PRICE</span>
                <span className="col-total">TOTAL</span>
              </div>

              <div className="bill-items-list">
                {items.map((item, idx) => {
                  const itemPrice = Number(item.price || 0);
                  const itemQty = Number(item.quantity || 1);
                  const lineTotal = itemPrice * itemQty;

                  return (
                    <div key={item.id || idx} className="bill-item-row">
                      <div className="col-desc item-desc-cell">
                        {item.thumbnail && (
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="bill-item-thumb"
                          />
                        )}
                        <div className="bill-item-text">
                          <span className="bill-item-name">{item.title}</span>
                          {item.category && (
                            <span className="bill-item-cat">{item.category}</span>
                          )}
                        </div>
                      </div>

                      <span className="col-qty font-mono bill-cell-text">
                        ×{itemQty}
                      </span>
                      <span className="col-price font-mono bill-cell-text">
                        ${itemPrice.toFixed(2)}
                      </span>
                      <span className="col-total font-mono bill-cell-total">
                        ${lineTotal.toFixed(2)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Perforated Divider */}
            <div className="receipt-divider-perforated" />

            {/* Price Calculations */}
            <div className="bill-calculation-block">
              <div className="calc-row">
                <span className="calc-label">Subtotal</span>
                <span className="calc-value font-mono">
                  ${Number(subtotal).toFixed(2)}
                </span>
              </div>

              <div className="calc-row">
                <span className="calc-label">Shipping & Handling</span>
                <span className="calc-value font-mono">
                  ${Number(shipping).toFixed(2)}
                </span>
              </div>

              <div className="calc-row">
                <span className="calc-label">Estimated Tax (0%)</span>
                <span className="calc-value font-mono">$0.00</span>
              </div>

              <div className="calc-row-double-divider" />

              <div className="calc-row grand-total-row">
                <span className="grand-total-label">TOTAL PAID</span>
                <span className="grand-total-amount font-mono">
                  ${Number(total).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Perforated Divider */}
            <div className="receipt-divider-perforated" />

            {/* Barcode & Security Stamp */}
            <div className="bill-barcode-section">
              <div className="barcode-graphic" aria-hidden="true">
                <svg
                  className="barcode-svg"
                  viewBox="0 0 280 44"
                  preserveAspectRatio="none"
                >
                  {/* Varied width barcode bars */}
                  <rect x="0" y="0" width="3" height="44" fill="#2b2622" />
                  <rect x="5" y="0" width="1.5" height="44" fill="#2b2622" />
                  <rect x="9" y="0" width="4" height="44" fill="#2b2622" />
                  <rect x="16" y="0" width="2" height="44" fill="#2b2622" />
                  <rect x="21" y="0" width="5" height="44" fill="#2b2622" />
                  <rect x="29" y="0" width="2" height="44" fill="#2b2622" />
                  <rect x="34" y="0" width="1.5" height="44" fill="#2b2622" />
                  <rect x="38" y="0" width="6" height="44" fill="#2b2622" />
                  <rect x="47" y="0" width="2" height="44" fill="#2b2622" />
                  <rect x="52" y="0" width="4" height="44" fill="#2b2622" />
                  <rect x="59" y="0" width="2.5" height="44" fill="#2b2622" />
                  <rect x="65" y="0" width="1.5" height="44" fill="#2b2622" />
                  <rect x="69" y="0" width="5" height="44" fill="#2b2622" />
                  <rect x="77" y="0" width="3" height="44" fill="#2b2622" />
                  <rect x="83" y="0" width="2" height="44" fill="#2b2622" />
                  <rect x="88" y="0" width="6" height="44" fill="#2b2622" />
                  <rect x="97" y="0" width="1.5" height="44" fill="#2b2622" />
                  <rect x="101" y="0" width="4" height="44" fill="#2b2622" />
                  <rect x="108" y="0" width="2" height="44" fill="#2b2622" />
                  <rect x="113" y="0" width="5" height="44" fill="#2b2622" />
                  <rect x="121" y="0" width="2" height="44" fill="#2b2622" />
                  <rect x="126" y="0" width="4" height="44" fill="#2b2622" />
                  <rect x="133" y="0" width="1.5" height="44" fill="#2b2622" />
                  <rect x="137" y="0" width="5" height="44" fill="#2b2622" />
                  <rect x="145" y="0" width="3" height="44" fill="#2b2622" />
                  <rect x="151" y="0" width="2" height="44" fill="#2b2622" />
                  <rect x="156" y="0" width="6" height="44" fill="#2b2622" />
                  <rect x="165" y="0" width="2" height="44" fill="#2b2622" />
                  <rect x="170" y="0" width="4" height="44" fill="#2b2622" />
                  <rect x="177" y="0" width="1.5" height="44" fill="#2b2622" />
                  <rect x="181" y="0" width="5" height="44" fill="#2b2622" />
                  <rect x="189" y="0" width="3" height="44" fill="#2b2622" />
                  <rect x="195" y="0" width="2" height="44" fill="#2b2622" />
                  <rect x="200" y="0" width="5" height="44" fill="#2b2622" />
                  <rect x="208" y="0" width="2" height="44" fill="#2b2622" />
                  <rect x="213" y="0" width="4" height="44" fill="#2b2622" />
                  <rect x="220" y="0" width="1.5" height="44" fill="#2b2622" />
                  <rect x="224" y="0" width="6" height="44" fill="#2b2622" />
                  <rect x="233" y="0" width="2" height="44" fill="#2b2622" />
                  <rect x="238" y="0" width="5" height="44" fill="#2b2622" />
                  <rect x="246" y="0" width="2.5" height="44" fill="#2b2622" />
                  <rect x="251" y="0" width="4" height="44" fill="#2b2622" />
                  <rect x="258" y="0" width="2" height="44" fill="#2b2622" />
                  <rect x="263" y="0" width="5" height="44" fill="#2b2622" />
                  <rect x="271" y="0" width="2" height="44" fill="#2b2622" />
                  <rect x="276" y="0" width="4" height="44" fill="#2b2622" />
                </svg>
              </div>
              <span className="barcode-numbers font-mono">
                * {orderId.replace(/[^0-9]/g, "") || "9482710352"} *
              </span>
            </div>

            {/* Footer Notice */}
            <div className="bill-footer-notice">
              <p className="notice-bold">THANK YOU FOR YOUR BUSINESS!</p>
              <p className="notice-sub">
                Please retain this receipt for warranty and returns within 30 days.
              </p>
              <div className="notice-security">
                <FaShieldHalved className="shield-icon" />
                <span>Verified 256-Bit Encrypted Transaction</span>
              </div>
            </div>
          </div>

          {/* Bottom Sawtooth Perforated Edge */}
          <div className="receipt-sawtooth-bottom" aria-hidden="true">
            <svg
              className="sawtooth-svg"
              viewBox="0 0 400 12"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern
                  id="sawtooth-pattern-bottom"
                  width="16"
                  height="12"
                  patternUnits="userSpaceOnUse"
                >
                  <polygon points="0,0 8,12 16,0" fill="#ffffff" />
                </pattern>
              </defs>
              <rect
                width="100%"
                height="12"
                fill="url(#sawtooth-pattern-bottom)"
              />
            </svg>
          </div>
        </div>

        {/* =========================================================
            BOTTOM ACTIONS TOOLBAR (Print & Continue Shopping)
        ========================================================= */}
        <div className="bill-action-bar">
          <button
            type="button"
            className="bill-btn-print"
            onClick={handlePrint}
            title="Print or Save as PDF"
          >
            <FaPrint className="btn-icon" />
            <span>Print Receipt</span>
          </button>

          <button
            type="button"
            className="bill-btn-continue"
            onClick={onContinueShopping}
            title="Complete order and continue shopping"
          >
            <FaBagShopping className="btn-icon" />
            <span>Continue Shopping</span>
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default BillReceiptModal;
