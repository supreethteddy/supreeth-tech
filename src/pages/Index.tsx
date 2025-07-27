
import { useState, useEffect } from "react";
import { ChevronDown, ArrowRight, Play, Users, Trophy, Zap, Building, Sparkles, Code, Lightbulb, Rocket, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const companies = [
    {
      name: "Speaksify",
      description: "AI VoiceBot Solutions",
      icon: "🎙️",
      color: "bg-blue-50 text-blue-600"
    },
    {
      name: "Virtuteams",
      description: "Employee Monitoring",
      icon: "👥",
      color: "bg-green-50 text-green-600"
    },
    {
      name: "Projectsy",
      description: "Smart Project Management",
      icon: "📊",
      color: "bg-purple-50 text-purple-600"
    },
    {
      name: "ChromeBot",
      description: "AI Extension",
      icon: "🤖",
      color: "bg-orange-50 text-orange-600"
    },
    {
      name: "NeuraSync",
      description: "Tech Service Hub",
      icon: "⚡",
      color: "bg-indigo-50 text-indigo-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Supreeth transformed our idea into a $2M AI company in just 6 months. His BAAS model is revolutionary.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, DataFlow",
      content: "Working with Supreeth was the best decision we made. His team delivered beyond expectations.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "CTO, SmartSolutions",
      content: "Supreeth's expertise in AI automation helped us scale from 10 to 500+ clients.",
      rating: 5
    }
  ];

  const achievements = [
    { number: "500+", label: "AI Projects Built" },
    { number: "100+", label: "Startups Launched" },
    { number: "12+", label: "Technologies Mastered" },
    { number: "1M+", label: "Lives Impacted" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <div className="fade-in">
            <h1 className="hero-text mb-6">
              I turn ideas into <span className="gradient-text">AI empires</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              From 500+ AI projects to launching 100+ startups — I help you build and scale your AI company fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full">
                Start Your AI Company
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full">
                <Play className="mr-2 h-5 w-5" />
                Watch My Story
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title gradient-text">My Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From Computer Science graduate to AI entrepreneur, building the future one innovation at a time.
            </p>
          </div>
          
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="slide-in-left">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Code className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">The Beginning</h3>
                      <p className="text-gray-600">2019 - B.E. Computer Science</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Started my journey with a solid foundation in computer science, eager to solve real-world problems with technology.
                  </p>
                </div>
              </div>
              <div className="slide-in-right">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
                  alt="Programming and development"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="slide-in-left md:order-2">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Zap className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">Cloud & AI Mastery</h3>
                      <p className="text-gray-600">AWS Certified Engineer</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Became AWS certified and mastered cloud technologies while building AI automation solutions for Fortune 500 companies.
                  </p>
                </div>
              </div>
              <div className="slide-in-right md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"
                  alt="Technology and AI"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="slide-in-left">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <Rocket className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">CTO & Entrepreneur</h3>
                      <p className="text-gray-600">Boost My Sites & Beyond</p>
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Now CTO with 500+ projects under my belt, mentoring 100+ AI startup owners and building the next generation of AI companies.
                  </p>
                </div>
              </div>
              <div className="slide-in-right">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce6862c6f44d?w=600&h=400&fit=crop"
                  alt="Professional workspace"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title text-white mb-4">My Impact</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Numbers that tell the story of transformation and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center fade-in">
                <div className="text-4xl md:text-6xl font-bold mb-2 text-blue-400">
                  {achievement.number}
                </div>
                <div className="text-gray-300 text-lg">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title gradient-text">My Companies</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Building the future through innovative AI solutions across multiple industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {companies.map((company, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full ${company.color} flex items-center justify-center mx-auto mb-4 text-2xl`}>
                    {company.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{company.name}</h3>
                  <p className="text-gray-600 text-sm">{company.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BAAS Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title gradient-text">Launch Your AI Company</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Turn your idea into a thriving AI business with my proven BAAS (Business-as-a-Service) model and Plug & Play partnerships.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Building className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-semibold">BAAS Model</h3>
                  <p className="text-gray-600">Business-as-a-Service</p>
                </div>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Complete branding and identity
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Dedicated development team
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Full technology stack
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Fast execution & deployment
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <Sparkles className="h-8 w-8 text-purple-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-semibold">Plug & Play</h3>
                  <p className="text-gray-600">Partnership Program</p>
                </div>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Pre-built AI solutions
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Proven business models
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Ongoing support & mentorship
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Revenue sharing opportunities
                </li>
              </ul>
            </Card>
          </div>
          
          <div className="text-center">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full">
              Book a Partnership Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title gradient-text">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from founders who transformed their ideas into thriving AI companies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title text-white mb-4">Ready to Build Your AI Empire?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let's turn your vision into reality. Schedule a call to discuss your AI startup journey.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Index;
