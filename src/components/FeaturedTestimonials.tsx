
import { useState, useEffect } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Star, Building } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

interface Testimonial {
  id: string;
  name: string;
  company: string;
  position: string;
  industry: string;
  projectTitle: string;
  description: string;
  mediaType: 'image' | 'video';
  mediaUrl: string;
  thumbnailUrl?: string;
  rating: number;
  date: string;
  results: string[];
}

interface FeaturedTestimonialsProps {
  testimonials: Testimonial[];
  onTestimonialClick: (testimonial: Testimonial) => void;
}

const FeaturedTestimonials = ({ testimonials, onTestimonialClick }: FeaturedTestimonialsProps) => {
  const [api, setApi] = useState<any>();
  
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-8 gradient-text">
        Featured Success Stories
      </h2>
      
      <Carousel
        setApi={setApi}
        className="w-full max-w-5xl mx-auto"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {featuredTestimonials.map((testimonial, index) => (
            <CarouselItem key={testimonial.id}>
              <Card 
                className="glass-effect border-0 overflow-hidden cursor-pointer hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
                onClick={() => onTestimonialClick(testimonial)}
              >
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
                    {/* Media Section */}
                    <div className="relative overflow-hidden">
                      {testimonial.mediaType === 'video' ? (
                        <div className="relative h-full">
                          <img 
                            src={testimonial.thumbnailUrl || testimonial.mediaUrl} 
                            alt={`${testimonial.projectTitle} preview`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
                              <Play className="w-12 h-12 text-white" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <img 
                          src={testimonial.mediaUrl} 
                          alt={testimonial.projectTitle}
                          className="w-full h-full object-cover"
                        />
                      )}
                      
                      <Badge 
                        className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm border-white/30"
                        variant="secondary"
                      >
                        {testimonial.industry}
                      </Badge>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {testimonial.projectTitle}
                        </h3>
                        <div className="flex items-center gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {testimonial.description}
                      </p>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">Key Results:</h4>
                        <div className="space-y-2">
                          {testimonial.results.slice(0, 2).map((result, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                              <span className="text-gray-600 text-sm">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-gray-200/50">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{testimonial.name}</div>
                            <div className="text-sm text-gray-600 flex items-center gap-1">
                              <Building className="w-3 h-3" />
                              {testimonial.position} at {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default FeaturedTestimonials;
