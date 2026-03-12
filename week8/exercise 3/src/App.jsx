import React from "react";

import OrderCard from "./components/OrderCard";
import CheckoutButton from "./components/CheckoutButton";

const ORDERS = [
  {
    product: "Banana",
    price: 54.6,
    quantity: 3,
  },
  {
    product: "Computer",
    price: 100.5,
    quantity: 4,
  },
  {
    product: "Table",
    price: 1070,
    quantity: 3,
  },
];

export default function App() {
  const [orders, setOrders] = React.useState(ORDERS);


  const getIndexOfOrder = (product) => {
    return orders.indexOf(product);
  }

  const addQuantity = (product) => {
    const index = getIndexOfOrder(product);
    setOrders((prevOrders) => prevOrders.map((product, i) => {
       if(i === index && product.quantity < 10) {
          return { ...product, quantity: product.quantity + 1};
       }
       return product;
    }));
  };

  const decreaseQuantity = (product) => {
    const index = getIndexOfOrder(product);
    setOrders((prevOrders) => prevOrders.map((product, i) => {
      if (i === index && product.quantity > 0) {
        return { ...product, quantity: product.quantity - 1};
      }
      return product;
    }));
  };
  
  return (
    <>
      <header>
        <h1>Your orders</h1>
      </header>

      <div className="order-list">
      {orders.map((order) => (
        <OrderCard key={order.product} order={order} increaseQuantity={addQuantity} decreaseQuantity={decreaseQuantity} ></OrderCard>
      ))}
      </div>

      <CheckoutButton items={orders}></CheckoutButton>
    </>
  );
}
