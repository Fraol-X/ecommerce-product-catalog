import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>

      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 mb-4">
          Welcome to <strong>FreshStore</strong>, your one-stop shop for unbeatable deals on electronics, fashion, and more. 
          Our mission is to bring you top-quality products at the best prices, paired with exceptional customer service.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          We strive to make your shopping journey effortless and enjoyable. From browsing our collection to the moment your order arrives, 
          we ensure a smooth and hassle-free experience. We work closely with trusted suppliers to bring you the latest trends and best value.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          What sets us apart is our dedication to customer satisfaction. Whether you're searching for cutting-edge gadgets or stylish apparel, 
          our team is here to assist you. With fast shipping, secure transactions, and responsive support, we guarantee a top-notch shopping experience.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          Thank you for choosing <strong>FreshStore</strong>. We are excited to be your trusted shopping partner, bringing you quality and value every day!
        </p>
      </div>
    </div>
  );
};

export default About;