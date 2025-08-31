
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Play, Image, Search, Filter, Star, Building, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";

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

const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Chen",
    company: "TechFlow AI",
    position: "CEO",
    industry: "Technology",
    projectTitle: "AI-Powered Customer Service Platform",
    description: "With Supreeth's guidance, we built an AI customer service platform that reduced response times by 80% and increased customer satisfaction by 95%. The mentorship was invaluable in navigating the technical challenges and scaling our solution.",
    mediaType: "video",
    mediaUrl: "/placeholder-video.mp4",
    thumbnailUrl: "/placeholder.svg",
    rating: 5,
    date: "2024-01-15",
    results: ["80% faster response times", "95% customer satisfaction", "$2M Series A raised"]
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    company: "EcoTrack Solutions",
    position: "Founder",
    industry: "Sustainability",
    projectTitle: "Carbon Footprint Tracking App",
    description: "Our carbon tracking app now serves over 100,000 users globally. Supreeth's expertise in building scalable applications and his insights on user experience design were game-changing for our startup journey.",
    mediaType: "image",
    mediaUrl: "/placeholder.svg",
    rating: 5,
    date: "2024-02-10",
    results: ["100K+ active users", "Featured in App Store", "B-Corp certification achieved"]
  },
  {
    id: "3",
    name: "Dr. Priya Patel",
    company: "HealthTech Innovations",
    position: "CTO",
    industry: "Healthcare",
    projectTitle: "Telemedicine Platform",
    description: "The telemedicine platform we developed with Supreeth's mentorship now connects patients with doctors across 15 countries. His guidance on HIPAA compliance and secure data handling was crucial.",
    mediaType: "video",
    mediaUrl: "/placeholder-video.mp4",
    thumbnailUrl: "/placeholder.svg",
    rating: 5,
    date: "2023-12-05",
    results: ["15 countries served", "HIPAA compliant", "500+ healthcare providers onboarded"]
  },
  {
    id: "4",
    name: "James Kim",
    company: "FinFlow Analytics",
    position: "Co-founder",
    industry: "Finance",
    projectTitle: "Real-time Trading Dashboard",
    description: "Our real-time trading analytics platform processes millions of transactions daily. Supreeth's expertise in handling high-frequency data and building resilient systems was instrumental in our success.",
    mediaType: "image",
    mediaUrl: "/placeholder.svg",
    rating: 5,
    date: "2024-03-20",
    results: ["1M+ transactions/day", "99.99% uptime", "$5M revenue in first year"]
  }
];

const Testimonials = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedMediaType, setSelectedMediaType] = useState("All");

  const industries = ["All", ...Array.from(new Set(mockTestimonials.map(t => t.industry)))];
  const mediaTypes = ["All", "Image", "Video"];

  const filteredTestimonials = mockTestimonials.filter(testimonial => {
    const matchesSearch = testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         testimonial.projectTitle.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesIndustry = selectedIndustry === "All" || testimonial.industry === selectedIndustry;
    const matchesMediaType = selectedMediaType === "All" || 
                            (selectedMediaType === "Image" && testimonial.mediaType === "image") ||
                            (selectedMediaType === "Video" && testimonial.mediaType === "video");
    
    return matchesSearch && matchesIndustry && matchesMediaType;
  });

  const MediaDisplay = ({ testimonial }: { testimonial: Testimonial }) => {
    if (testimonial.mediaType === 'video') {
      return (
        <div className="relative">
          <img 
            src={testimonial.thumbnailUrl || testimonial.mediaUrl} 
            alt={`${testimonial.projectTitle} preview`}
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/50 rounded-full p-3">
              <Play className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <img 
        src={testimonial.mediaUrl} 
        alt={testimonial.projectTitle}
        className="w-full h-48 object-cover rounded-lg"
      />
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      
      {/* Header Section */}
      <div className="pt-20 pb-12 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Success Stories & Testimonials
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover how our subscribers built successful AI companies and transformed their businesses
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold">150+</div>
                <div className="text-blue-100">Companies Launched</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">$50M+</div>
                <div className="text-blue-100">Total Funding Raised</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-blue-100">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-blue-100">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by name, company, or project..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
          >
            {industries.map(industry => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
          
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={selectedMediaType}
            onChange={(e) => setSelectedMediaType(e.target.value)}
          >
            {mediaTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredTestimonials.map((testimonial) => (
            <Dialog key={testimonial.id}>
              <DialogTrigger asChild>
                <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg font-semibold text-gray-900 mb-1">
                          {testimonial.projectTitle}
                        </CardTitle>
                        <div className="flex items-center gap-2 mb-2">
                          <Building className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">{testimonial.company}</span>
                        </div>
                      </div>
                      <Badge variant="secondary" className="ml-2">
                        {testimonial.mediaType === 'video' ? <Play className="w-3 h-3 mr-1" /> : <Image className="w-3 h-3 mr-1" />}
                        {testimonial.mediaType}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <MediaDisplay testimonial={testimonial} />
                    
                    <div className="mt-4">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                        {testimonial.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{testimonial.name}, {testimonial.position}</span>
                        <span>{new Date(testimonial.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-gray-900">
                    {testimonial.projectTitle}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    {testimonial.mediaType === 'video' ? (
                      <video 
                        controls 
                        className="w-full rounded-lg"
                        poster={testimonial.thumbnailUrl}
                      >
                        <source src={testimonial.mediaUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img 
                        src={testimonial.mediaUrl} 
                        alt={testimonial.projectTitle}
                        className="w-full rounded-lg"
                      />
                    )}
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">About the Project</h3>
                      <p className="text-gray-600">{testimonial.description}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Key Results</h3>
                      <ul className="space-y-1">
                        {testimonial.results.map((result, index) => (
                          <li key={index} className="flex items-center gap-2 text-gray-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">{testimonial.position} at {testimonial.company}</div>
                          <Badge variant="outline" className="mt-1">{testimonial.industry}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Success Story?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join hundreds of entrepreneurs who have transformed their ideas into successful AI companies with our guidance.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full">
            Start Your AI Company Journey
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
