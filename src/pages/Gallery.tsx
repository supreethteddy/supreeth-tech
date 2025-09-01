
import { useState } from "react";
import { ArrowLeft, Play, Eye, Filter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const Gallery = () => {
  const [filter, setFilter] = useState("all");

  const galleryItems = [
    {
      id: 1,
      type: "video",
      title: "AI Startup Launch Success",
      description: "Watch how we transformed a simple idea into a million-dollar AI company",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      category: "success-story",
      duration: "3:45"
    },
    {
      id: 2,
      type: "image",
      title: "Tech Conference Keynote",
      description: "Speaking at AI Innovation Summit 2023",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      category: "speaking",
      views: "2.5K"
    },
    {
      id: 3,
      type: "video",
      title: "Behind the Scenes: Building ChromeBot",
      description: "Development process of our flagship AI extension",
      thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      category: "development",
      duration: "8:20"
    },
    {
      id: 4,
      type: "image",
      title: "Team Collaboration",
      description: "Working with international clients on AI solutions",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce6862c6f44d?w=400&h=300&fit=crop",
      category: "team",
      views: "1.8K"
    },
    {
      id: 5,
      type: "video",
      title: "Client Testimonial: DataFlow Success",
      description: "How we helped DataFlow scale from startup to enterprise",
      thumbnail: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop",
      category: "testimonial",
      duration: "5:12"
    },
    {
      id: 6,
      type: "image",
      title: "AI Innovation Workshop",
      description: "Training entrepreneurs on AI business strategies",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      category: "workshop",
      views: "3.2K"
    },
    {
      id: 7,
      type: "video",
      title: "Speaksify Launch Event",
      description: "Official launch of our AI VoiceBot platform",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      category: "launch",
      duration: "12:30"
    },
    {
      id: 8,
      type: "image",
      title: "Award Recognition",
      description: "Receiving Tech Innovator of the Year award",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      category: "awards",
      views: "4.1K"
    }
  ];

  const filters = [
    { id: "all", name: "All", count: galleryItems.length },
    { id: "video", name: "Videos", count: galleryItems.filter(item => item.type === "video").length },
    { id: "image", name: "Photos", count: galleryItems.filter(item => item.type === "image").length },
    { id: "success-story", name: "Success Stories", count: galleryItems.filter(item => item.category === "success-story").length },
    { id: "speaking", name: "Speaking", count: galleryItems.filter(item => item.category === "speaking").length },
    { id: "development", name: "Development", count: galleryItems.filter(item => item.category === "development").length }
  ];

  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.type === filter || item.category === filter);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <Button variant="outline" className="mb-8" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 tracking-tight">
              Success <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Explore the journey of building AI empires through real projects, 
              client success stories, and behind-the-scenes moments.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {filters.map((filterItem) => (
              <Button
                key={filterItem.id}
                variant={filter === filterItem.id ? "default" : "outline"}
                onClick={() => setFilter(filterItem.id)}
                className="rounded-full"
              >
                <Filter className="mr-2 h-4 w-4" />
                {filterItem.name} ({filterItem.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button size="sm" className="rounded-full">
                        {item.type === "video" ? (
                          <Play className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                      <Button size="sm" variant="outline" className="rounded-full text-white border-white hover:bg-white hover:text-black">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge variant={item.type === "video" ? "default" : "secondary"} className="capitalize">
                      {item.type}
                    </Badge>
                  </div>
                  
                  {/* Duration/Views */}
                  <div className="absolute bottom-4 right-4">
                    <Badge variant="outline" className="bg-black/50 text-white border-white/20">
                      {item.duration || `${item.views} views`}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-3">
                    <Badge variant="outline" className="text-xs capitalize">
                      {item.category.replace("-", " ")}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No items found</h3>
              <p className="text-gray-600">Try adjusting your filters to see more content.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-gray-300">Success Videos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">200+</div>
              <div className="text-gray-300">Project Photos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">1M+</div>
              <div className="text-gray-300">Total Views</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">25+</div>
              <div className="text-gray-300">Client Stories</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the ranks of successful AI entrepreneurs and build your own empire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-blue-600"
              onClick={() => window.open('https://baas.boostmysites.com/', '_blank')}
            >
              Start Your AI Company
            </Button>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Book a Strategy Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
