import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 mb-4">
          Welcome to freshStore, your one-stop shop for the best deals on electronics and fashion. We believe in offering high-quality products at affordable prices, backed by excellent customer service.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Our mission is simple: to provide customers with a seamless shopping experience. From browsing our online store to receiving your products, we aim to make every step of your shopping journey enjoyable and efficient. We source our products from trusted suppliers and always strive to offer the latest trends and the best deals.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          What sets us apart is our commitment to customer satisfaction. Whether you’re looking for that perfect gadget or the latest fashion items, we’re here to help. Our team is always ready to assist you with any questions you may have and ensure that your shopping experience is smooth and hassle-free.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Thank you for choosing freshStore. We look forward to being your trusted shopping destination and providing you with great products at unbeatable prices!
        </p>
      </div>
    </div>
  );
};

export default About;
