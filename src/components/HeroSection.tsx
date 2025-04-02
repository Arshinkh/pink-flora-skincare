
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-20 md:pt-28 overflow-hidden bg-gradient-to-br from-white to-skin-pink-light min-h-screen flex items-center">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-skin-pink-light rounded-bl-[80px] -z-10 opacity-40" />
      
      <div className="absolute left-20 top-40 w-20 h-20 rounded-full bg-skin-pink opacity-30 blur-xl" />
      <div className="absolute right-40 bottom-40 w-32 h-32 rounded-full bg-skin-pink-medium opacity-20 blur-xl" />
      
      <div className="section-container grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Text */}
        <div className="max-w-xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
            Radiant Skin, <br />
            <span className="text-skin-pink-dark">Natural Beauty</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Discover our collection of premium skincare products made with natural ingredients 
            that nourish and rejuvenate your skin.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="btn-primary text-sm md:text-base">
              Explore Products
            </Button>
            <Button variant="outline" className="text-sm md:text-base">
              <Sparkles className="h-4 w-4 mr-2" /> Our Ingredients
            </Button>
          </div>
          
          <div className="mt-10 flex items-center space-x-4">
            <div className="bg-white/80 backdrop-blur-sm px-4 py-3 rounded-lg shadow-sm">
              <span className="text-sm text-gray-500">Cruelty-Free</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-4 py-3 rounded-lg shadow-sm">
              <span className="text-sm text-gray-500">100% Natural</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-4 py-3 rounded-lg shadow-sm">
              <span className="text-sm text-gray-500">Eco-Friendly</span>
            </div>
          </div>
        </div>
        
        {/* Right Column - Image */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Skincare Products" 
              className="rounded-2xl shadow-xl max-w-full h-auto"
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -left-6 bg-white px-5 py-4 rounded-xl shadow-lg">
              <p className="text-xs text-gray-500 mb-1">Bestseller</p>
              <p className="font-medium">Rose Facial Cream</p>
            </div>
            
            {/* Floating Badge 2 */}
            <div className="absolute -top-10 -right-10 bg-white p-3 rounded-full shadow-lg">
              <div className="bg-skin-pink-medium w-16 h-16 rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">New</span>
              </div>
            </div>
          </div>
          
          {/* Floating Background Elements */}
          <div className="absolute h-80 w-80 border-8 border-skin-pink-light rounded-full -z-10 -bottom-10 -right-10" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
