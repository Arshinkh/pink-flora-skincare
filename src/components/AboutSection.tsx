
import { Leaf, Droplets, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="bg-skin-pink-light rounded-tl-[80px] rounded-br-[80px] p-8 relative z-10">
              <img
                src="https://images.unsplash.com/photo-1586459095457-07c4777cd4be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Natural ingredients"
                className="rounded-tl-[70px] rounded-br-[70px] shadow-lg"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-48 h-48 border-2 border-skin-pink-medium rounded-tl-[70px] -z-10"></div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border-2 border-skin-pink-medium rounded-br-[70px] -z-10"></div>
          </div>
          
          {/* Text Column */}
          <div className="lg:pl-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Our Commitment to <span className="text-skin-pink-dark">Natural Beauty</span>
            </h2>
            
            <p className="text-gray-700 mb-8">
              Founded in 2023, Bloom Skincare was born from a desire to create natural, effective 
              skincare that works in harmony with your skin. We believe that everyone deserves to 
              feel confident in their natural beauty.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-skin-pink-light p-3 rounded-full">
                  <Leaf className="h-6 w-6 text-skin-pink-dark" />
                </div>
                <div>
                  <h3 className="font-serif font-medium text-xl mb-2">Natural Ingredients</h3>
                  <p className="text-gray-600">
                    We source the finest natural ingredients, carefully selected for their effectiveness and purity.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-skin-pink-light p-3 rounded-full">
                  <Droplets className="h-6 w-6 text-skin-pink-dark" />
                </div>
                <div>
                  <h3 className="font-serif font-medium text-xl mb-2">Gentle Formulations</h3>
                  <p className="text-gray-600">
                    Our formulas are designed to nourish and support your skin's natural balance, never stripping or irritating.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-skin-pink-light p-3 rounded-full">
                  <Sparkles className="h-6 w-6 text-skin-pink-dark" />
                </div>
                <div>
                  <h3 className="font-serif font-medium text-xl mb-2">Results You Can See</h3>
                  <p className="text-gray-600">
                    We believe in creating products that deliver visible results, helping you achieve your skin goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
