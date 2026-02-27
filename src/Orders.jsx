import React from "react";
import { useSelector } from "react-redux";

const Orders = () => {
  const orders = useSelector((state) => state.orders.orders);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Order History</h2>

      {orders.length === 0 ? (
        <p>No Orders Yet</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            style={{
              border: "1px solid gray",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h4>Order ID: {order.id}</h4>
            <p><strong>Time:</strong> {order.orderTime}</p>
            <p><strong>Total:</strong> ₹{order.totalAmount}</p>

            <h5>Items:</h5>
            {order.items.map((item, index) => (
              <div key={index}>
                {item.name} - ₹{item.price} × {item.quantity}
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;