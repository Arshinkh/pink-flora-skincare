
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-2xl font-serif font-bold text-gray-800">
            bloom
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-skin-pink-medium font-medium">
              Home
            </a>
            <a href="#products" className="text-gray-700 hover:text-skin-pink-medium font-medium">
              Products
            </a>
            <a href="#about" className="text-gray-700 hover:text-skin-pink-medium font-medium">
              About
            </a>
            <a href="#reviews" className="text-gray-700 hover:text-skin-pink-medium font-medium">
              Reviews
            </a>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-700">
              <ShoppingBag className="h-5 w-5 mr-1" /> Cart (0)
            </Button>
            <Button className="bg-skin-pink-medium hover:bg-skin-pink-dark text-white">
              Shop Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t mt-2 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 font-medium">
                Home
              </a>
              <a href="#products" className="text-gray-700 font-medium">
                Products
              </a>
              <a href="#about" className="text-gray-700 font-medium">
                About
              </a>
              <a href="#reviews" className="text-gray-700 font-medium">
                Reviews
              </a>
              <div className="flex items-center space-x-3 pt-2">
                <Button variant="ghost" size="sm" className="text-gray-700">
                  <ShoppingBag className="h-4 w-4 mr-1" /> Cart
                </Button>
                <Button size="sm" className="bg-skin-pink-medium hover:bg-skin-pink-dark text-white">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
