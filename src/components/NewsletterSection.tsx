
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Sparkles } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for joining our newsletter.",
        duration: 5000,
      });
      
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-r from-skin-pink-light to-skin-pink rounded-3xl overflow-hidden shadow-lg">
          <div className="grid lg:grid-cols-2">
            {/* Left side - Image */}
            <div className="hidden lg:block relative">
              <img 
                src="https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Skincare Products" 
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-skin-pink-medium opacity-40" />
            </div>
            
            {/* Right side - Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 max-w-max">
                <Sparkles className="h-4 w-4 text-white mr-2" />
                <span className="text-white text-sm font-medium">Get 10% Off Your First Order</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white mb-4">
                Join Our Newsletter
              </h2>
              
              <p className="text-white/90 mb-8">
                Subscribe to receive skincare tips, exclusive offers, and updates on new products.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="bg-white/90 border-0 placeholder:text-gray-500 h-12"
                  />
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-white text-skin-pink-dark hover:bg-white/90 hover:text-skin-pink-dark h-12"
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe"}
                  </Button>
                </div>
                <p className="text-white/80 text-sm">
                  By subscribing, you agree to our Privacy Policy and consent to receive our marketing emails.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
