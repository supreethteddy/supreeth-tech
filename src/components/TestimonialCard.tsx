
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Image, Star, Building, Calendar } from "lucide-react";

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

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
  onClick: () => void;
}

const TestimonialCard = ({ testimonial, index, onClick }: TestimonialCardProps) => {
  const MediaDisplay = () => {
    if (testimonial.mediaType === 'video') {
      return (
        <div className="relative group">
          <video 
            className="w-full h-48 object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
            muted
            preload="metadata"
          >
            <source src={testimonial.mediaUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                <Play className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div className="relative group overflow-hidden rounded-xl">
        <img 
          src={testimonial.mediaUrl} 
          alt={testimonial.projectTitle}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    );
  };

  return (
    <Card 
      className={`glass-effect border-0 cursor-pointer hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 group animate-fade-in`}
      style={{ 
        animationDelay: `${index * 100}ms`,
        animationFillMode: 'both'
      }}
      onClick={onClick}
    >
      <CardHeader className="pb-3 relative">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
              {testimonial.projectTitle}
            </CardTitle>
            <div className="flex items-center gap-2 mb-2">
              <Building className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600 font-medium">{testimonial.company}</span>
            </div>
          </div>
          <Badge 
            variant="secondary" 
            className="ml-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200"
          >
            {testimonial.mediaType === 'video' ? (
              <Play className="w-3 h-3 mr-1" />
            ) : (
              <Image className="w-3 h-3 mr-1" />
            )}
            {testimonial.mediaType}
          </Badge>
        </div>
        
        <Badge 
          variant="outline" 
          className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm border-white/50"
        >
          {testimonial.industry}
        </Badge>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <MediaDisplay />
        
        <div className="space-y-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 transition-colors duration-300 ${
                  i < testimonial.rating 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {testimonial.description}
          </p>
          
          {/* Key Result Preview */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg border border-green-100">
            <div className="flex items-center gap-2 text-sm text-green-700">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              {testimonial.results[0]}
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <div className="font-medium text-sm text-gray-900">{testimonial.name}</div>
                <div className="text-xs text-gray-500">{testimonial.position}</div>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-400">
              <Calendar className="w-3 h-3" />
              {new Date(testimonial.date).toLocaleDateString()}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
