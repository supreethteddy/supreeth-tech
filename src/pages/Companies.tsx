
import { ArrowLeft, ExternalLink, Users, TrendingUp, Calendar, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const Companies = () => {
  const companies = [
    {
      id: 1,
      name: "Speaksify",
      tagline: "AI VoiceBot Solutions",
      description: "Revolutionary AI-powered voice assistants that transform customer service and communication. Built for enterprise clients looking to automate their customer interactions.",
      icon: "🎙️",
      color: "from-blue-500 to-blue-700",
      stats: {
        users: "50K+",
        revenue: "$2M+",
        growth: "300%"
      },
      features: ["Voice Recognition", "Natural Language Processing", "Multi-language Support", "Custom Training"],
      launchDate: "2022",
      category: "AI Communication",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Virtuteams",
      tagline: "Employee Monitoring & Analytics",
      description: "Advanced workforce analytics platform that helps companies optimize productivity while maintaining employee privacy. Perfect for remote and hybrid work environments.",
      icon: "👥",
      color: "from-green-500 to-green-700",
      stats: {
        users: "25K+",
        revenue: "$1.5M+",
        growth: "250%"
      },
      features: ["Real-time Monitoring", "Productivity Analytics", "Team Collaboration", "Privacy Protection"],
      launchDate: "2021",
      category: "HR Tech",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Projectsy",
      tagline: "Smart Project Management",
      description: "AI-driven project management platform that predicts project outcomes, optimizes resource allocation, and automates routine tasks for better efficiency.",
      icon: "📊",
      color: "from-purple-500 to-purple-700",
      stats: {
        users: "75K+",
        revenue: "$3M+",
        growth: "400%"
      },
      features: ["AI Predictions", "Resource Optimization", "Automated Workflows", "Team Analytics"],
      launchDate: "2020",
      category: "Project Management",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "ChromeBot",
      tagline: "AI Browser Extension",
      description: "Intelligent browser extension that enhances productivity by automating web tasks, providing smart suggestions, and learning from user behavior.",
      icon: "🤖",
      color: "from-orange-500 to-orange-700",
      stats: {
        users: "100K+",
        revenue: "$800K+",
        growth: "200%"
      },
      features: ["Task Automation", "Smart Suggestions", "Learning Algorithm", "Cross-platform"],
      launchDate: "2023",
      category: "Browser Tools",
      image: "https://images.unsplash.com/photo-1486312338219-ce6862c6f44d?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "NeuraSync",
      tagline: "Tech Service Hub",
      description: "Comprehensive technology service platform connecting businesses with expert developers, designers, and AI specialists for custom solutions.",
      icon: "⚡",
      color: "from-indigo-500 to-indigo-700",
      stats: {
        users: "30K+",
        revenue: "$2.5M+",
        growth: "350%"
      },
      features: ["Expert Matching", "Project Management", "Quality Assurance", "24/7 Support"],
      launchDate: "2021",
      category: "Tech Services",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "DataFlow AI",
      tagline: "Business Intelligence Platform",
      description: "Advanced data analytics and business intelligence platform that turns raw data into actionable insights using machine learning algorithms.",
      icon: "📈",
      color: "from-teal-500 to-teal-700",
      stats: {
        users: "40K+",
        revenue: "$1.8M+",
        growth: "280%"
      },
      features: ["Advanced Analytics", "Machine Learning", "Real-time Dashboards", "Custom Reports"],
      launchDate: "2022",
      category: "Data Analytics",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
    }
  ];

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
              My AI <span className="gradient-text">Companies</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A portfolio of successful AI companies built from the ground up, 
              each solving real-world problems and generating substantial revenue.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">
                <Award className="mr-2 h-4 w-4" />
                6 Companies Founded
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <TrendingUp className="mr-2 h-4 w-4" />
                $12M+ Total Revenue
              </Badge>
              <Badge variant="secondary" className="px-4 py-2">
                <Users className="mr-2 h-4 w-4" />
                320K+ Users Served
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {companies.map((company) => (
              <Card key={company.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={company.image}
                    alt={company.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${company.color} opacity-80`} />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-2">{company.icon}</div>
                      <h3 className="text-2xl font-bold">{company.name}</h3>
                      <p className="text-lg opacity-90">{company.tagline}</p>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {company.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {company.description}
                    </p>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{company.stats.users}</div>
                      <div className="text-sm text-gray-500">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{company.stats.revenue}</div>
                      <div className="text-sm text-gray-500">Revenue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{company.stats.growth}</div>
                      <div className="text-sm text-gray-500">Growth</div>
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {company.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="mr-1 h-4 w-4" />
                      Launched {company.launchDate}
                    </div>
                    <Button size="sm" variant="outline">
                      Learn More
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Collective Impact</h2>
            <p className="text-xl text-gray-300">
              The combined success of all my AI companies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">320K+</div>
              <div className="text-gray-300">Total Users</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">$12M+</div>
              <div className="text-gray-300">Total Revenue</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">290%</div>
              <div className="text-gray-300">Avg Growth Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">15+</div>
              <div className="text-gray-300">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Build Your AI Company?</h2>
          <p className="text-xl mb-8 opacity-90">
            Learn from proven strategies and get the support you need to launch your own successful AI venture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Explore BAAS Model
            </Button>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Schedule Partnership Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Companies;
