import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Contact Us</h2>
      <p className="text-gray-600 text-center mb-6">
        Have questions? We'd love to hear from you!
      </p>

      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold">Message</label>
          <textarea
            placeholder="Write your message here..."
            rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
