
import { useState, useEffect } from "react";
import { ArrowLeft, ExternalLink, Play, Building, Users, Rocket, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const Gallery = () => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const features = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "AI-Powered Solutions",
      description: "Cutting-edge AI technology for modern businesses"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Experienced developers and AI specialists"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Rapid Deployment",
      description: "Quick setup and implementation process"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Enterprise-grade solutions and support"
    }
  ];

  const benefits = [
    "AI-powered automation solutions",
    "Custom software development",
    "Cloud infrastructure setup",
    "24/7 technical support",
    "Scalable business solutions",
    "Data analytics and insights",
    "Mobile app development",
    "E-commerce platform creation"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center mb-6">
            <Button 
              variant="ghost" 
              className="mr-4"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-900">BoostMy</span>
              <span className="text-blue-600">Sites</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your complete AI-powered business solution platform. Build, scale, and grow your digital empire with cutting-edge technology and expert support.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center space-x-1">
            <Button
              variant={activeTab === "overview" ? "default" : "ghost"}
              onClick={() => setActiveTab("overview")}
              className="rounded-full"
            >
              Platform Overview
            </Button>
            <Button
              variant={activeTab === "live" ? "default" : "ghost"}
              onClick={() => setActiveTab("live")}
              className="rounded-full"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Website
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {activeTab === "overview" ? (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Overview */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Why Choose BoostMySites?</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    BoostMySites is your comprehensive AI-powered business platform that helps entrepreneurs and companies build, scale, and grow their digital presence with cutting-edge technology.
                  </p>
                  <p className="text-gray-600 mb-6">
                    From AI automation to custom software development, we provide everything you need to succeed in the digital age. Our expert team ensures your business gets the best technology solutions tailored to your specific needs.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">What We Offer:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    className="rounded-full"
                    onClick={() => setActiveTab("live")}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Explore Platform
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="rounded-full"
                    onClick={() => window.open('https://baas.boostmysites.com/', '_blank')}
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Start Your Journey
                  </Button>
                </div>
              </div>

              {/* Right Column - Preview */}
              <div className="relative">
                <div className="bg-gray-100 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Platform Preview</h3>
                  <p className="text-gray-600 mb-6">
                    Click "Live Website" to explore the full BoostMySites platform directly within this page.
                  </p>
                  <Button 
                    onClick={() => setActiveTab("live")}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Platform
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            /* Live Website Tab */
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">BoostMySites Live Platform</h2>
                  <p className="text-gray-600">Explore the complete BoostMySites website directly within this page</p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => window.open('https://boostmysites.com/', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open in New Tab
                </Button>
              </div>

              {/* Website Embed */}
              <div className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg">
                {!isIframeLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                    <div className="text-center">
                      <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-gray-600">Loading BoostMySites...</p>
                    </div>
                  </div>
                )}
                <iframe
                  src="https://boostmysites.com/"
                  className="w-full h-[800px] border-0"
                  onLoad={() => setIsIframeLoaded(true)}
                  title="BoostMySites Platform"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
                />
              </div>

              <div className="text-center text-sm text-gray-500">
                <p>Experience the full BoostMySites platform. Use the controls above to navigate or open in a new tab for the best experience.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of successful entrepreneurs who have built their digital empires with BoostMySites.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 rounded-full"
              onClick={() => window.open('https://baas.boostmysites.com/', '_blank')}
            >
              <Rocket className="w-5 h-5 mr-2" />
              Start Your AI Company
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600 rounded-full"
              onClick={() => setActiveTab("live")}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Explore Platform
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
