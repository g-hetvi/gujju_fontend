import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Placeholder for form submission logic (e.g., API call)
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-md shadow-md w-full max-w-4xl flex flex-col md:flex-row">
        {/* Form Section */}
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
          {isSubmitted ? (
            <div className="text-green-500 text-center mb-4">Thank you for your message!</div>
          ) : null}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#4ade80] text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Map Section */}
        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
          <h3 className="text-lg font-bold mb-4">Find us here</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119058.58841736123!2d72.73412466464517!3d21.16907113429575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e11edf4b599%3A0xca498b99a5b2eb8f!2sShree%20Uttar%20Gujarat%20BBA%20%26%20BCA%20College!5e0!3m2!1sen!2sus!4v1725511916185!5m2!1sen!2sus"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe> 
        </div>

      </div>
    </div>
  );
}

export default Contact;
