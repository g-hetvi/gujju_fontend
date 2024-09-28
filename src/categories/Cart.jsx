import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const navigate = useNavigate();

  const handleIncrease = (title) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.title === title ? { ...item, qty: item.qty + 1 } : item
      );
      updateCookie(updatedItems);
      return updatedItems;
    });
  };

  const handleDecrease = (title) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.title === title && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      );
      updateCookie(updatedItems);
      return updatedItems;
    });
  };

  const handleRemove = (title) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.title !== title);
      updateCookie(updatedItems);
      return updatedItems;
    });
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.qty * parseFloat(item.price),
      0
    );
  };

  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return JSON.parse(decodeURIComponent(cookieValue));
      }
    }
    return [];
  }

  function updateCookie(updatedItems) {
    document.cookie = `cartData=${encodeURIComponent(
      JSON.stringify(updatedItems)
    )}; max-age=3600; path=/`;
  }

  useEffect(() => {
    const data = getCookie("cartData");
    setCartItems(data || []);
  }, []);

  useEffect(() => {
    setGrandTotal(calculateTotal());
  }, [cartItems]);

  return (
    <div className="flex flex-col items-center justify-center mt-10 pt-[80px]">
      <h1 className="text-2xl font-algerian text-dark-green mb-4">
        ~~~ YOUR FOOD CART ~~~
      </h1>
      {cartItems.length > 0 ? (
        <table className="table-auto w-full max-w-4xl text-center">
          <thead>
            <tr className="bg-gray-200 text-black">
              <th>Id</th>
              <th>Image</th>
              <th>Food Item</th>
              <th>Qty</th>
              <th>Per Unit Price</th>
              <th>Total</th>
              <th>Remove Item</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index} className="border-b">
                <td>{index + 1}</td>
                <td>
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td>{item.title}</td>
                <td>
                  <div className="flex items-center justify-center gap-2">
                    <button
                      className="btn btn-sm bg-red-500 text-white"
                      onClick={() => handleDecrease(item.title)}
                    >
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button
                      className="btn btn-sm bg-green-500 text-white"
                      onClick={() => handleIncrease(item.title)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>₹{item.price}</td>
                <td>₹{item.qty * parseFloat(item.price)}</td>
                <td>
                  <button
                    className="btn btn-sm bg-red-500 text-white"
                    onClick={() => handleRemove(item.title)}
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="5" className="text-right font-bold">
                Total :
              </td>
              <td colSpan="2" className="text-left font-bold">
                ₹{grandTotal}
              </td>
            </tr>
            <tr>
              <td colSpan="7" className="text-right">
                <a
                  href={`/orderform?total=${grandTotal}`}
                  className="btn bg-[#4ade80] hover:bg-[#4ade80] text-white px-4 py-2 mt-4"
                >
                  Order Now
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div className="text-center">
          <p>Your cart is empty.</p>
          <button className="btn btn-block">
            <a
              href="/all"
              className="flex items-center bg-dark-green text-white px-3 py-2 rounded-md duration-300 cursor-pointer space-x-2"
            >
              ADD FOOD
            </a>
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
