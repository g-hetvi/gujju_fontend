import React, { useEffect, useState } from 'react';  
import combinedCardsData from "../categories/combinedCardsData"; 

function Banner() {
  const [randomCards, setRandomCards] = useState([]);

  useEffect(() => {
    // Function to get a random subset of cards
    const getRandomCards = (num) => {
      const shuffled = combinedCardsData.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, num);
    };

    // Set random cards
    setRandomCards(getRandomCards(3));
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-10">
      {/* Random Cards Section */}
      <div className="flex flex-wrap text-black justify-between mb-12">
        {randomCards.map((card, index) => (
          <div
            key={index}
            className="card dark:text-white bg-base-100 w-80 sm:w-96 shadow-xl hover:scale-105 dark:bg-slate-900 border border-white"
          >
            <figure className="relative h-64">
              <img
                src={card.imgSrc}
                alt={card.title}
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{card.title}</h2>
              <p className="text-lg">{card.price}</p>
              <div className="card-actions justify-end mt-4">
                 <button className="btn bg-[#4ade80] hover:bg-[#4ade80] "><a href="/all">Order Now</a></button> 
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Banner Text Section */}
      <div className="w-full md:w-1/2 mt-12 md:mt-36">
        <div className="space-y-8">
          <h1 className="text-2xl md:text-3xl font-bold">
            Taste the Authentic Flavours of Gujarat{' '}
            <span className="text-green-500">Delivered Daily</span>
          </h1>
          <p className="text-sm md:text-xl">
            ---Bringing The Heart of Gujarati Cuisine to Your Home From Dhokla
            to Thepla, Savor Traditional Flavours With Every Meal.
          </p>
          <h1 className="font-semibold text-2xl">
            Discover The True Taste of Gujarat With <br />
            <span className="text-green-500 font-bold text-4xl">
              Gujju's Desi Swad
            </span>
          </h1>
          <p className="text-sm md:text-xl">
            Enjoy family packs or individual servings with easy ordering
            through our website, app, or phone. For more inquiries or special
            event orders, contact us anytime.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
