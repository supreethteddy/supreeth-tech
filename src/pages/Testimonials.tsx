
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Building } from "lucide-react";
import Navigation from "@/components/Navigation";
import FeaturedTestimonials from "@/components/FeaturedTestimonials";
import TestimonialFilters from "@/components/TestimonialFilters";
import TestimonialCard from "@/components/TestimonialCard";

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
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

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

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedIndustry("All");
    setSelectedMediaType("All");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navigation />
      
      {/* Enhanced Header Section */}
      <div className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Success Stories &{" "}
              <span className="block gradient-text bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Testimonials
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto animate-fade-in delay-200">
              Discover how our subscribers built successful AI companies and transformed their businesses with real results
            </p>
            
            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {[
                { number: "150+", label: "Companies Launched", delay: "delay-300" },
                { number: "$50M+", label: "Total Funding Raised", delay: "delay-400" },
                { number: "25+", label: "Industries Served", delay: "delay-500" },
                { number: "98%", label: "Success Rate", delay: "delay-600" }
              ].map((stat, index) => (
                <div key={index} className={`text-center animate-fade-in ${stat.delay}`}>
                  <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        {/* Featured Testimonials Carousel */}
        <FeaturedTestimonials 
          testimonials={mockTestimonials} 
          onTestimonialClick={setSelectedTestimonial}
        />

        {/* Enhanced Filters */}
        <TestimonialFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedIndustry={selectedIndustry}
          onIndustryChange={setSelectedIndustry}
          selectedMediaType={selectedMediaType}
          onMediaTypeChange={setSelectedMediaType}
          industries={industries}
          mediaTypes={mediaTypes}
          onClearFilters={handleClearFilters}
        />

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredTestimonials.length}</span> success stories
          </p>
        </div>

        {/* Enhanced Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
              onClick={() => setSelectedTestimonial(testimonial)}
            />
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="glass-effect rounded-3xl p-12 text-center mb-16 border border-white/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div className="relative">
            <h2 className="text-4xl font-bold mb-6 gradient-text">Ready to Build Your Success Story?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Join hundreds of entrepreneurs who have transformed their ideas into successful AI companies with our guidance and mentorship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-6 text-lg">
                Start Your AI Company Journey
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-2 px-8 py-6 text-lg hover:bg-gray-50">
                Submit Your Success Story
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Dialog */}
      {selectedTestimonial && (
        <Dialog open={!!selectedTestimonial} onOpenChange={() => setSelectedTestimonial(null)}>
          <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto bg-white/95 backdrop-blur-sm border-0">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-gray-900 mb-2">
                {selectedTestimonial.projectTitle}
              </DialogTitle>
            </DialogHeader>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                {selectedTestimonial.mediaType === 'video' ? (
                  <video 
                    controls 
                    className="w-full rounded-2xl shadow-2xl"
                    poster={selectedTestimonial.thumbnailUrl}
                  >
                    <source src={selectedTestimonial.mediaUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img 
                    src={selectedTestimonial.mediaUrl} 
                    alt={selectedTestimonial.projectTitle}
                    className="w-full rounded-2xl shadow-2xl"
                  />
                )}
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-xl mb-3 text-gray-900">About the Project</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedTestimonial.description}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl mb-4 text-gray-900">Key Results</h3>
                  <div className="space-y-3">
                    {selectedTestimonial.results.map((result, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-100">
                        <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t pt-6 border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                      {selectedTestimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-900">{selectedTestimonial.name}</div>
                      <div className="text-gray-600 flex items-center gap-2 mb-2">
                        <Building className="w-4 h-4" />
                        {selectedTestimonial.position} at {selectedTestimonial.company}
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                          {selectedTestimonial.industry}
                        </Badge>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < selectedTestimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Testimonials;
