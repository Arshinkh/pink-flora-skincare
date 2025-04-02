
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const ProductCard = ({
  id,
  name,
  description,
  price,
  image,
  isNew = false,
  isBestseller = false,
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-sm relative card-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex space-x-2">
        {isNew && (
          <span className="px-3 py-1 bg-skin-pink-medium text-white text-xs rounded-full">
            New
          </span>
        )}
        {isBestseller && (
          <span className="px-3 py-1 bg-skin-gray-light text-gray-700 text-xs rounded-full">
            Bestseller
          </span>
        )}
      </div>
      
      {/* Favorite Button */}
      <button 
        className={cn(
          "absolute top-3 right-3 z-10 p-2 rounded-full transition-all",
          isFavorite 
            ? "bg-skin-pink-medium text-white" 
            : "bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-skin-pink-light"
        )}
        onClick={() => setIsFavorite(!isFavorite)}
      >
        <Heart size={18} className={isFavorite ? "fill-white" : ""} />
      </button>
      
      {/* Product Image */}
      <div className="overflow-hidden h-64 relative">
        <img 
          src={image} 
          alt={name}
          className={cn(
            "w-full h-full object-cover transition-transform duration-500",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        
        {/* Quick Add - Appears on Hover */}
        <div 
          className={cn(
            "absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3 transition-transform duration-300",
            isHovered ? "translate-y-0" : "translate-y-full"
          )}
        >
          <Button className="w-full bg-skin-pink-medium hover:bg-skin-pink-dark text-white">
            <ShoppingCart size={16} className="mr-2" /> Quick Add
          </Button>
        </div>
      </div>
      
      {/* Product Details */}
      <div className="p-4">
        <h3 className="font-medium text-lg mb-1">{name}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-2">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <span className="font-serif font-medium text-xl">${price.toFixed(2)}</span>
          <span className="text-xs text-skin-pink-dark">Free Shipping</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
