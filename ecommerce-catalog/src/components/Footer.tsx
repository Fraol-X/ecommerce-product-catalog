import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'; // Importing social media icons
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul>
              <li>
                <Link to="/about" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>              
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul>
              <li>
                <Link to="/contact" className="hover:text-gray-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-400"><FaFacebookF /></a></li>
              <li><a href="#" className="hover:text-gray-400"><FaTwitter /></a></li>
              <li><a href="#" className="hover:text-gray-400"><FaInstagram /></a></li>
              <li><a href="#" className="hover:text-gray-400"><FaYoutube /></a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; 2025 freshStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
