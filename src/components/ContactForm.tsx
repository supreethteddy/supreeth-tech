
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Send, Calendar, MessageSquare, Phone } from "lucide-react";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    idea: "",
    help: "",
    budget: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    toast.success("Thank you! I'll get back to you within 24 hours.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      idea: "",
      help: "",
      budget: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const helpOptions = [
    "Build AI Company from Scratch",
    "Scale Existing Business",
    "BAAS Partnership",
    "Plug & Play Solutions",
    "Technical Consulting",
    "Team Building"
  ];

  return (
    <div className="grid md:grid-cols-2 gap-12 items-start">
      {/* Contact Form */}
      <Card className="bg-white/10 backdrop-blur-sm border-white/20">
        <CardContent className="p-8">
          <h3 className="text-2xl font-semibold mb-6 text-white">Let's Build Together</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name *
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Company/Startup Name
              </label>
              <Input
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                placeholder="Your Company Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your AI Business Idea *
              </label>
              <Textarea
                name="idea"
                value={formData.idea}
                onChange={handleChange}
                required
                rows={4}
                className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                placeholder="Describe your AI business idea, target market, and vision..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                What do you need help with? *
              </label>
              <div className="grid grid-cols-2 gap-2">
                {helpOptions.map((option) => (
                  <Badge
                    key={option}
                    variant={formData.help === option ? "default" : "outline"}
                    className={`cursor-pointer text-center p-2 transition-all ${
                      formData.help === option
                        ? "bg-blue-500 text-white"
                        : "bg-white/10 text-gray-300 hover:bg-white/20"
                    }`}
                    onClick={() => setFormData({ ...formData, help: option })}
                  >
                    {option}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Budget Range
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full bg-white/10 border border-white/20 text-white rounded-md px-3 py-2"
              >
                <option value="">Select budget range</option>
                <option value="10k-25k">$10k - $25k</option>
                <option value="25k-50k">$25k - $50k</option>
                <option value="50k-100k">$50k - $100k</option>
                <option value="100k+">$100k+</option>
              </select>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full py-6"
            >
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Contact Info */}
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-white">Ready to Start?</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            I personally review every application and respond within 24 hours. 
            Let's discuss how we can turn your vision into a thriving AI business.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
              <Calendar className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Schedule a Call</h4>
              <p className="text-gray-300">30-minute strategy session</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
              <MessageSquare className="h-6 w-6 text-green-400" />
            </div>
            <div>
              <h4 className="font-semibold text-white">WhatsApp</h4>
              <p className="text-gray-300">Quick questions & updates</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
              <Phone className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Direct Line</h4>
              <p className="text-gray-300">For urgent matters</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-6 border border-white/10">
          <h4 className="font-semibold text-white mb-2">💡 Pro Tip</h4>
          <p className="text-gray-300 text-sm">
            Be specific about your idea and target market. The more details you provide, 
            the better I can help you build a successful AI company.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
