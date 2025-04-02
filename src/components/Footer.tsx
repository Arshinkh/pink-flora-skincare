
import { Heart, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-16 border-t border-gray-100">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <a href="/" className="text-2xl font-serif font-bold text-gray-800 mb-4 inline-block">
              bloom
            </a>
            <p className="text-gray-600 mb-6">
              Premium natural skincare products for radiant, healthy skin. Made with love and the finest ingredients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-skin-pink-dark">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-skin-pink-dark">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-skin-pink-dark">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Links Columns */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-skin-pink-dark">All Products</a></li>
              <li><a href="#" className="text-gray-600 hover:text-skin-pink-dark">Face Care</a></li>
              <li><a href="#" className="text-gray-600 hover:text-skin-pink-dark">Body Care</a></li>
              <li><a href="#" className="text-gray-600 hover:text-skin-pink-dark">Gift Sets</a></li>
              <li><a href="#" className="text-gray-600 hover:text-skin-pink-dark">New Arrivals</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">About</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-skin-pink-dark">Our Story</a></li>
              <li><a href="#" className="text-gray-600 hover:text-skin-pink-dark">Ingredients</a></li>
              <li><a href="#" className="text-gray-600 hover:text-skin-pink-dark">Sustainability</a></li>
              <li><a href="#" className="text-gray-600 hover:text-skin-pink-dark">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-skin-pink-dark">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Help</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-skin-pink-dark">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-skin-pink-dark">FAQs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-skin-pink-dark">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-skin-pink-dark">Track Order</a></li>
              <li><a href="#" className="text-gray-600 hover:text-skin-pink-dark">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-100 py-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-600 mb-4 md:mb-0">
            © {currentYear} Bloom Skincare. All rights reserved.
          </p>
          <p className="text-gray-600 flex items-center">
            Made with <Heart size={14} className="text-skin-pink-dark mx-1" fill="currentColor" /> for your skin
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
