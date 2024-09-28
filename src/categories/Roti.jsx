import React, { useState } from "react";
import { useAuth } from "../context/AuthProvider"; // Import useAuth
import sd from "../image/sd1.jpg";
import oil from "../image/or2.jpg";
import butter from "../image/br3.jpg";
import sb from "../image/sb3.jpg";
import bb from "../image/bb4.jpg";
import rotla from "../image/rotlo.jpg";
import jr from "../image/jr2.jpg";
import mkr from "../image/bjrotla.jpg";
import tp from "../image/thepla.jpg";

export const cardsData = [
  { title: "Thepla", price: "₹20/-", description: "Made from wheat flour", imgSrc: tp },
  { title: "Sadi Roti", price: "₹7/-", description: "Made from wheat flour", imgSrc: sd },
  { title: "Oil Roti", price: "₹12/-", description: "Made from wheat flour", imgSrc: oil },
  { title: "ghee Roti", price: "₹15/-", description: "Made from wheat flour", imgSrc: butter },
  { title: "Bhakhri", price: "₹20/-", description: "Made from wheat flour", imgSrc: sb },
  { title: "Butter Bhakhri", price: "₹25/-", description: "Made from wheat flour", imgSrc: bb },
  { title: "Bajra Rotlo", price: "₹25/-", description: "Made from Bajra flour", imgSrc: rotla },
  { title: "Jawar Rotlo", price: "₹25/-", description: "Made from Jawar flour", imgSrc: jr },
  { title: "Bajra Rotlo With ghee", price: "₹30/-", description: "Made from Bajra flour", imgSrc: mkr }, 
];

function Roti() {
  const [searchTerm, setSearchTerm] = useState("");
  const [authUser] = useAuth(); // Get the authUser
  const [showLoginModal, setShowLoginModal] = useState(false); // State for login modal

  const Card = ({ title, price, description, imgSrc }) => {
    const [quantity, setQuantity] = useState(0);

    const handleIncrease = () => {
      setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
    };

    const handleAddToCart = () => {
      if (!authUser) {
        setShowLoginModal(true); // Show login modal if not logged in
        return;
      }

      if (quantity > 0) {
        const cartItem = {
          title,
          price: parseFloat(price.replace("₹", "").replace("/-", "")),
          qty: quantity,
          imgSrc,
          description
        };
        const existingCart = getCookie("cartData") || [];
        const updatedCart = [...existingCart, cartItem];
        updateCookie(updatedCart);
        setQuantity(0); // Reset quantity after adding to cart

        alert(`${title} added to the cart !!`);
      }
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

    return (
<div className="card dark:text-white bg-base-100 w-80 sm:w-96 shadow-xl hover:scale-105 dark:bg-slate-900 border border-white">
      <figure className="relative h-64 overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-110 hover:translate-x-2 hover:-translate-y-2"
        />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-lg">{price}</p>
          <p className="mt-2 text-sm">{description}</p>
          <div className="flex items-center gap-2 mt-4">
            <button
              className="btn bg-[#4ade80] btn-sm dark:text-white"
              onClick={handleDecrease}
              disabled={quantity === 0}
            >
              -
            </button>
            <span className="text-sm">{quantity}</span>
            <button
              className="btn bg-[#4ade80] btn-sm dark:text-white"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
          <div className="card-actions justify-end mt-4">
            <button className="btn bg-[#4ade80] hover:bg-[#4ade80]" onClick={handleAddToCart}>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Filter cards based on search term
  const filteredCards = cardsData.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-10 pt-[80px]">
        <h1 className="text-2xl font-algerian text-dark-green">
          ~~~ ROTI RICHES ~~~
        </h1>
        <p className="text-md text-dark-green text-center mt-4">
          Choose from our variety of roti items for a perfect meal!
        </p>
      </div>

      {/* Search bar */}
      <div className="flex justify-center mt-6">
        <input
          type="text"
          className="input input-bordered text-black w-64"
          placeholder="Search rotis... "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Display filtered cards */}
      <div className="flex flex-wrap justify-center mt-10 gap-6">
        {filteredCards.length > 0 ? (
          filteredCards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              price={card.price}
              imgSrc={card.imgSrc}
              description={card.description}
            />
          ))
        ) : (
          <p className="text-lg text-gray-500">No items match your search.</p>
        )}
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <dialog id="my_modal_3" className="modal modal-open">
          <div className="modal-box dark:text-black">
            <h2 className="text-xl font-bold mb-4">Please Sign Up</h2>
            <p className="mb-4">
              You need to Register yourself to add items to the cart.
            </p>
            <div className="flex justify-center mt-6">
              <button>
                <a href="/user/signup" className="text-black cursor-pointer btn bg-[#4ade80] hover:bg-[#4ade80]">
                  SignUp
                </a>
              </button>&nbsp;
              <button
                className="text-black cursor-pointer btn bg-[#4ade80] hover:bg-[#4ade80]"
                onClick={() => setShowLoginModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default Roti;
