import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearCart } from "./redux/CartSlice";
import { addOrder } from "./redux/OrderSlice";   // ✅ Added

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const [notification, setNotification] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [couponPercent, setCouponPercent] = useState(0);

  const [showCheckout, setShowCheckout] = useState(false);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const prevCartLength = useRef(cartItems.length);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  useEffect(() => {
    if (cartItems.length > prevCartLength.current) {
      setNotification(`Cart ${cartItems.length}`);
    }
    prevCartLength.current = cartItems.length;
  }, [cartItems]);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: "20px" }}>
        <h1>🛒 Your Cart is empty</h1>
      </div>
    );
  }

  const handleDiscount = (percent) => {
    setDiscountPercent(percent);
  };

  const applyCoupon = () => {
    const code = couponCode.trim().toUpperCase();

    if (code === "SAVE5") setCouponPercent(5);
    else if (code === "SAVE10") setCouponPercent(10);
    else if (code === "FLAT15") setCouponPercent(15);
    else if (code === "FESTIVE25") setCouponPercent(25);
    else {
      alert("Invalid Coupon Code");
      setCouponPercent(0);
    }
  };

  const discountAmount = (totalPrice * discountPercent) / 100;
  const afterButtonDiscount = totalPrice - discountAmount;
  const couponAmount = (afterButtonDiscount * couponPercent) / 100;
  const priceAfterDiscount = afterButtonDiscount - couponAmount;
  const gstAmount = (priceAfterDiscount * 18) / 100;
  const netAmount = priceAfterDiscount + gstAmount;

  // ✅ UPDATED PAYMENT SUCCESS FUNCTION
  const handlePaymentSuccess = () => {
    const newOrder = {
      id: Date.now(),
      items: cartItems,
      totalAmount: netAmount,
      orderTime: new Date().toLocaleString(),
    };

    dispatch(addOrder(newOrder));   // ✅ Save order
    dispatch(clearCart());          // ✅ Clear cart
    setPaymentSuccess(true);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Your Cart</h1>

      {notification && (
        <div
          style={{
            backgroundColor: "#4BB543",
            color: "white",
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {notification}
        </div>
      )}

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <p>
            {item.name} x {item.quantity} = ₹
            {item.price * item.quantity}
          </p>
          <button
            onClick={() => handleRemove(item.id)}
            style={{
              backgroundColor: "#FF4C4C",
              color: "white",
              border: "none",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Remove
          </button>
        </div>
      ))}

      <hr />

      <h3>Total Amount: ₹{totalPrice.toFixed(2)}</h3>

      <div style={{ marginBottom: "10px" }}>
        <button onClick={() => handleDiscount(10)}>10% Discount</button>{" "}
        <button onClick={() => handleDiscount(20)}>20% Discount</button>{" "}
        <button onClick={() => handleDiscount(30)}>30% Discount</button>
      </div>

      <p>Button Discount: ₹{discountAmount.toFixed(2)}</p>

      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          placeholder="Enter Coupon"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        <button onClick={applyCoupon}>Apply</button>
      </div>

      <p>Coupon Discount: ₹{couponAmount.toFixed(2)}</p>

      <hr />

      <p>Price After All Discounts: ₹{priceAfterDiscount.toFixed(2)}</p>
      <p>GST (18%): ₹{gstAmount.toFixed(2)}</p>
      <h2>Net Amount: ₹{netAmount.toFixed(2)}</h2>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setShowCheckout(true)}
          style={{
            padding: "10px 20px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Proceed to Checkout
        </button>
      </div>

      {showCheckout && (
        <div style={{ marginTop: "15px" }}>
          <button
            onClick={() => setShowPaymentOptions(true)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Payment
          </button>
        </div>
      )}

      {showPaymentOptions && (
        <div style={{ marginTop: "15px" }}>
          <button
            onClick={() => setShowQR(true)}
            style={{
              padding: "8px 15px",
              marginRight: "10px",
              backgroundColor: "#444",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            QR
          </button>

          <button
            onClick={() => alert("Card Payment Selected")}
            style={{
              padding: "8px 15px",
              backgroundColor: "#444",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Card
          </button>
        </div>
      )}

      {showQR && (
        <div style={{ marginTop: "20px" }}>
          <img
            src="/myqr.png"
            alt="QR Code"
            width="200"
            style={{ border: "1px solid #ccc", padding: "10px" }}
          />
          <br /><br />
          <button
            onClick={handlePaymentSuccess}
            style={{
              padding: "10px 20px",
              backgroundColor: "orange",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Confirm Payment
          </button>
        </div>
      )}

      {paymentSuccess && (
        <div
          style={{
            marginTop: "20px",
            backgroundColor: "#4BB543",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          🎉 Payment Successful! Order Placed.
        </div>
      )}
    </div>
  );
}

export default Cart;