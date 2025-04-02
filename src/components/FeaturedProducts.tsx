
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import { ArrowRight } from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Rose Facial Cream",
    description: "Hydrating facial cream with real rose extract for glowing skin.",
    price: 42.99,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4a94465?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isBestseller: true
  },
  {
    id: "2",
    name: "Hydrating Serum",
    description: "Deeply hydrating formula with hyaluronic acid for plump skin.",
    price: 38.50,
    image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isNew: true
  },
  {
    id: "3",
    name: "Botanical Cleanser",
    description: "Gentle cleansing formula with botanical extracts to purify pores.",
    price: 28.99,
    image: "https://images.unsplash.com/photo-1573575155376-b5645b0ffe2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "4",
    name: "Night Repair Mask",
    description: "Overnight recovery mask that works while you sleep.",
    price: 45.50,
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="bg-skin-white-off py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Our Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most-loved skincare formulas, crafted with the finest natural ingredients
            to help you achieve your skin goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="outline" className="border-skin-pink rounded-full px-8 py-6 text-base">
            View All Products <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
