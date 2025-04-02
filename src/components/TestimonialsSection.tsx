
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: string;
  name: string;
  title: string;
  image: string;
  stars: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Emma Thompson",
    title: "Skincare Enthusiast",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    stars: 5,
    text: "I've been using the Rose Facial Cream for 3 months now and my skin has never looked better! My fine lines appear diminished and my skin feels incredibly soft and hydrated."
  },
  {
    id: "2",
    name: "Sarah Johnson",
    title: "Beauty Blogger",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    stars: 5,
    text: "The Hydrating Serum has completely transformed my skincare routine. My skin drinks it up and looks plump and radiant all day long. It's gentle enough for my sensitive skin too!"
  },
  {
    id: "3",
    name: "Michael Chen",
    title: "Verified Customer",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    stars: 4,
    text: "I was skeptical about trying a new cleanser with my combination skin, but the Botanical Cleanser leaves my skin feeling clean without that tight, dry feeling. Great product!"
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-skin-white to-skin-pink-light">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real reviews from real customers who have experienced the Bloom Skincare difference.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-10 relative">
            {/* Decorative quotes */}
            <div className="absolute top-8 left-10 text-8xl text-skin-pink-light font-serif">"</div>
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className={cn(
                      "text-yellow-400",
                      i >= testimonials[currentIndex].stars && "text-gray-200"
                    )}
                    fill={i < testimonials[currentIndex].stars ? "currentColor" : "none"}
                  />
                ))}
              </div>
              
              {/* Testimonial Text */}
              <p className="text-lg md:text-xl text-gray-700 text-center mb-8 italic">
                {testimonials[currentIndex].text}
              </p>
              
              {/* Customer Info */}
              <div className="flex flex-col items-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full border-2 border-skin-pink-light mb-3"
                />
                <h4 className="font-serif font-medium text-xl">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-500">{testimonials[currentIndex].title}</p>
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 space-x-4">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full border-skin-pink"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-colors",
                  index === currentIndex
                    ? "bg-skin-pink-medium"
                    : "bg-skin-pink-light"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="icon"
              className="rounded-full border-skin-pink"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
