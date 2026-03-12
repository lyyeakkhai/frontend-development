
export default function OrderCard({ order, increaseQuantity, decreaseQuantity }) {

  const onIncrease = () => {
    increaseQuantity(order);
  };

  const onDecrease = () => {
    decreaseQuantity(order);
  }
  return (
    <div className="order">
      <div>
        <h4>{order.product}</h4>
        <small>${order.price.toFixed(2)}</small>
      </div>

      <div className="order-quantity">
        <div className={order.quantity > 0 ? "order-button" : "order-button disable"} onClick={onDecrease}>
          -
        </div>
        <h4>{order.quantity}</h4>
        <div className={order.quantity < 10 ? "order-button" : "order-button disable"} onClick={onIncrease}>
        +
        </div>
      </div>
    </div>
  );
}
