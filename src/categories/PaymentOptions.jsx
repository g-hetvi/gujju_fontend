import React, { useState } from "react";
import Qrcode from "../image/Qrcode.jpeg"; // Adjust the path accordingly
import { useLocation } from "react-router-dom";

function PaymentOptions() {
  const location = useLocation();
  const { grandTotal, mobile } = location.state || {}; // Access the state passed from OrderForm
  const [isExitModalVisible, setExitModalVisible] = useState(false);

  const handleExitClick = () => {
    setExitModalVisible(true); // Show the exit confirmation modal
  };

  const handleCloseModal = () => {
    setExitModalVisible(false); // Close the exit modal
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
        {/* SVG Close Icon */}
        <button
          onClick={handleExitClick}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -3 16 16" width="24" height="24" fill="currentColor">
            <path d="M9.7 9.7c-.2.2-.5.2-.7 0L5.5 6.2l-3.5 3.5c-.2.2-.5.2-.7 0s-.2-.5 0-.7l3.5-3.5-3.5-3.5c-.2-.2-.2-.5 0-.7s.5-.2.7 0L5.5 5l3.5-3.5c.2-.2.5-.2.7 0s.2.5 0 .7l-3.5 3.5 3.5 3.5c.2.2.2.5 0 .7z" />
          </svg>
        </button>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Payment Options</h2>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold">Price Summary</h3>
            <p>Grand Total: ₹{grandTotal}</p>
            <p className="mt-2">Using as +91 {mobile}</p>
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <div className="text-center">
            <h3 className="font-semibold">UPI QR</h3>
            <img src={Qrcode} alt="QR Code" className="w-32 h-32" />
            <p className="mt-2">Scan with any app</p>
          </div>
        </div>
      </div>

      {/* Exit Confirmation Modal */}
      {isExitModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg">
            <h2 className="text-xl font-bold text-center">Are you sure you want to exit?</h2>
            <p className="text-center mt-2">
              You will be taken back to the previous page.
            </p>
            <div className="flex justify-around mt-6">
              <button
                onClick={handleCloseModal}
                className="bg-[#4ade80] text-white px-4 py-2 rounded"
              >
                Continue to payment
              </button>
              <button
                onClick={() => window.history.back()} // Go back to the previous page
                className="bg-gray-800 text-white px-4 py-2 rounded"
              >
                Yes, exit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentOptions;
