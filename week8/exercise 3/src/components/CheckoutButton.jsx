import React from "react";

export default function CheckoutButton({ items }) {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  return (
    <div className="checkout-button">
      <p>Checkout</p>
      <p className="right">{"$ " + total.toFixed(2)}</p>
    </div>
  );
}
