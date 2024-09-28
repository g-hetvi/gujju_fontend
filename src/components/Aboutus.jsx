import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../image/img5.jpeg'; // Replace with the correct path to your image

const AboutUs = () => {
    const navigate = useNavigate();

    const handleOrderNowClick = () => {
        navigate('/all'); 
    };

    return (
        <div className="flex items-center justify-center h-full bg-green-100 p-10  pt-[105px]">
            <div className="bg-green-200 rounded-lg shadow-lg p-8 flex items-center space-x-10  ">
                <div>
                <div className="flex flex-col items-center mt-10">
                <h1 className="text-6xl font-algerian text-green-800 mb-6">ABOUT US </h1>
                </div>
                    <p className="text-gray-700 mb-6">
                        Welcome to Gujju's Desi Swad!! at Gujju's,We specialize in authentic 
                        Gujarati food,<br/>made with love and traditional recipes.Our Goal is to bring you the true flavours of Gujarat With 
                        every dish.<br/>Whether you'r craving savory snacks or healthy meals,<br/>We use the best ingredients to make sure you enjoy a genuine
                        taste of indian gujarati cuisine.<br/>Experience the rich and vibrant tastes of Gujarat right at home With us.
                    </p>
                    <h1 className="text-2xl font-semibold text-green-800 mb-4">Variety</h1>
                    <p className="text-gray-700 mb-6">
                        healthy does not mean having the same food everyday,we offer a menu with a variety <br/>in the dishes for the entire 
                        month & once a week is our different cuisine day!!!
                    </p>
                    <h1 className="text-2xl font-semibold text-green-800 mb-4">Special Orders</h1>
                    <p className="text-gray-700 mb-6">
                        We take party orders for all your occassions,corporate meals designed for <br/>your office specially,call us and just give 
                        the requirement,we will plan the best menus for you.
                    </p>
                    <button
                        onClick={handleOrderNowClick}
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded"
                    >
                        Order Now
                    </button>
                </div>
                <div className="w-96 h-96">
                    <img
                        src={image}
                        alt="Delicious Food"
                        className="rounded-full object-cover w-full h-full shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
