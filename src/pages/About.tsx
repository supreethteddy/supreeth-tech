
import { ArrowLeft, Award, Calendar, MapPin, Users, Zap, Code, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

const About = () => {
  const timeline = [
    {
      year: "2019",
      title: "B.E. Computer Science",
      description: "Graduated with honors, specializing in AI and machine learning algorithms.",
      icon: <Code className="h-6 w-6" />
    },
    {
      year: "2020",
      title: "Cloud Engineer at SourceOne",
      description: "Achieved AWS certification and built scalable cloud infrastructure solutions.",
      icon: <Zap className="h-6 w-6" />
    },
    {
      year: "2021",
      title: "Data Engineer & AI Automation",
      description: "Developed AI automation systems for Fortune 500 companies including Koch Industries.",
      icon: <Award className="h-6 w-6" />
    },
    {
      year: "2022",
      title: "CTO at Boost My Sites",
      description: "Led 500+ projects across 12+ technologies, establishing industry leadership.",
      icon: <Building className="h-6 w-6" />
    },
    {
      year: "2023",
      title: "AI Entrepreneur & Mentor",
      description: "Founded multiple AI companies and mentored 100+ startup owners.",
      icon: <Users className="h-6 w-6" />
    }
  ];

  const skills = [
    { name: "Artificial Intelligence", level: 95 },
    { name: "Cloud Architecture", level: 90 },
    { name: "Machine Learning", level: 88 },
    { name: "Data Engineering", level: 85 },
    { name: "Business Strategy", level: 90 },
    { name: "Team Leadership", level: 92 }
  ];

  const technologies = [
    "Python", "JavaScript", "React", "Node.js", "AWS", "Google Cloud",
    "TensorFlow", "PyTorch", "Docker", "Kubernetes", "MongoDB", "PostgreSQL"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <Button variant="outline" className="mb-8" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 tracking-tight">
                Meet <span className="gradient-text">Supreeth G</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                AI entrepreneur, technology leader, and startup mentor helping founders 
                build the next generation of AI companies.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Badge variant="secondary" className="px-4 py-2">
                  <MapPin className="mr-2 h-4 w-4" />
                  Bangalore, India
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Calendar className="mr-2 h-4 w-4" />
                  5+ Years Experience
                </Badge>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-gray-800">S</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">
            My Professional <span className="gradient-text">Journey</span>
          </h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'} mb-3`}>
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-3">
                            {item.icon}
                          </div>
                          <Badge variant="outline" className="text-sm font-semibold">
                            {item.year}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-8 tracking-tight">
                Core <span className="gradient-text">Expertise</span>
              </h2>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-sm text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-8 tracking-tight">
                Tech <span className="gradient-text">Stack</span>
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-center p-3 hover:bg-blue-50 hover:border-blue-200 transition-all cursor-pointer"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-12 p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Current Focus</h3>
                <p className="text-gray-600 leading-relaxed">
                  I'm currently focused on building AI-powered solutions that transform 
                  traditional businesses and help entrepreneurs launch their own AI companies 
                  through innovative BAAS models and strategic partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Mission */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8 tracking-tight">
            My <span className="text-blue-400">Mission</span>
          </h2>
          <p className="text-xl leading-relaxed mb-12 text-gray-300">
            "To democratize AI entrepreneurship by providing the tools, expertise, and 
            support needed for anyone to build and scale their own AI empire. I believe 
            that with the right guidance and technology, every innovative idea can become 
            a thriving business."
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mentorship</h3>
              <p className="text-gray-400">Guiding the next generation of AI entrepreneurs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-400">Building cutting-edge AI solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-400">Delivering exceptional results consistently</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
