import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products?limit=3");
        if (response.status === 200) {
          setProducts(response.data);
        } else {
          console.error("Unexpected response status:", response.status);
          setError("Failed to load products");
        }
      } catch (error: any) {
        console.error("Error fetching products:", error.message);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="text-center">
      {/* 🎯 Hero Section */}
      <section style={{ backgroundColor: '#387547' }} className="text-white py-20 px-6">
        <h1 className="text-5xl font-bold">Welcome to Golden Store</h1>
        <p className="mt-4 text-lg">
          Discover the best products at unbeatable prices. Shop now!
        </p>
        <Link
          to="/products"
          className="mt-6 inline-block bg-white text-blue-600 px-6 py-3 font-semibold rounded-full shadow-md hover:bg-gray-100 transition"
        >
          Browse Products
        </Link>
      </section>

      {/* 🔥 Featured Products (Fetched from API) */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-gray-800">🔥 Featured Products</h2>

        {loading ? (
          <p className="text-gray-500">Loading products...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            {products.map((product) => (
              <div key={product.id} className="border p-4 rounded-lg shadow-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-contain"
                />
                <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
                <p className="text-gray-600">${product.price}</p>
              </div>
            ))}
          </div>
        )}

        <Link
          to="/products"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 font-semibold rounded-full shadow-md hover:bg-blue-700 transition"
        >
          View All Products
        </Link>
      </section>
    </div>
  );
};

export default Home;
