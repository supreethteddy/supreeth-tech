
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Building, Heart, MessageCircle, Share2, Play, Pause, Volume2, VolumeX, ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
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
  likes?: number;
  comments?: number;
}

const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Praveen",
    company: "Beyond AI Tech",
    position: "Founder",
    industry: "AI Technology",
    projectTitle: "Beyond AI Tech - AI Services Company Launch",
    description: "With Supreeth's mentorship, I successfully launched my AI tech services company – Beyond AI Tech. At Beyond AI, innovation is at the heart of everything we do. From cutting-edge AI solutions to transformative digital experiences, our expert team blends technology, creativity, and strategy to deliver real-world results for businesses worldwide.",
    mediaType: "video",
    mediaUrl: "https://res.cloudinary.com/dij4v6vtx/video/upload/v1756703401/IMG_8378_wi6xth.mov",
    thumbnailUrl: "https://res.cloudinary.com/dij4v6vtx/video/upload/v1756703401/IMG_8378_wi6xth.jpg",
    rating: 5,
    date: "2024-01-15",
    results: ["Successfully launched AI tech services company", "Empowering Businesses, Transforming Futures", "Expert team delivering real-world results"],
    likes: 1247,
    comments: 89
  },
  {
    id: "2",
    name: "Raj",
    company: "AI Development Company",
    position: "Founder",
    industry: "AI Technology",
    projectTitle: "From Mechanical Engineering to AI Entrepreneurship",
    description: "With Supreeth's guidance and BoostMySites' support, I transformed my long-time dream of entrepreneurship into reality by starting my own AI company. Coming from a mechanical engineering background and working across the Middle East in civil sectors, the shift to AI wasn't an easy path. But with the right mentorship and infrastructure, I realized the immense potential of the AI industry and knew this was the right time to start. Today, through BoostMySites' ecosystem, I'm building my AI development company and fulfilling a vision I've carried for over a decade.",
    mediaType: "video",
    mediaUrl: "https://res.cloudinary.com/dij4v6vtx/video/upload/v1756703374/Stay_Ahead_of_the_Curve_BOOSTMYSITES_AI-powered_innovations_elevate_online_engagement_revenu_og6khs.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dij4v6vtx/video/upload/v1756703374/Stay_Ahead_of_the_Curve_BOOSTMYSITES_AI-powered_innovations_elevate_online_engagement_revenu_og6khs.jpg",
    rating: 5,
    date: "2024-02-10",
    results: ["Transformed engineering career to AI entrepreneurship", "Built AI development company through BoostMySites", "Fulfilled decade-long entrepreneurial vision"],
    likes: 892,
    comments: 56
  },
  {
    id: "3",
    name: "Steve Paul",
    company: "AI Automation Solutions",
    position: "Founder",
    industry: "AI Technology",
    projectTitle: "From College Graduate to AI Business Owner",
    description: "With Supreeth's mentorship, I was able to start my own AI business straight out of college and close my first two clients within just a few months. I always wanted to build a company instead of working for someone else, but I didn't want to take on high risks. With the right guidance, I launched my AI venture early this year, and by April-May we had already closed two clients — one in EV charging solutions and another in medical endoscopy automation. Through referrals and the strategies I learned, I was able to pitch, handle meetings, and secure projects that are helping businesses reduce manpower and improve efficiency.",
    mediaType: "video",
    mediaUrl: "https://res.cloudinary.com/dij4v6vtx/video/upload/v1756703359/Open_talk_with_an_Ai_expert_subscriber_who_is_on_track_of_making_crores_by_launching_Ai_compa_b0ipq3.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dij4v6vtx/video/upload/v1756703359/Open_talk_with_an_Ai_expert_subscriber_who_is_on_track_of_making_crores_by_launching_Ai_compa_b0ipq3.jpg",
    rating: 5,
    date: "2023-12-05",
    results: ["Started AI business straight out of college", "Closed first two clients within months", "EV charging & medical automation projects"],
    likes: 2156,
    comments: 134
  },
  {
    id: "4",
    name: "Raghavendrav",
    company: "RideGo Cabs Solutions",
    position: "Founder",
    industry: "Mobile App Development",
    projectTitle: "Ola/Uber-Style Cab Hailing App for RideGo Cabs",
    description: "With Supreeth's mentorship, I closed one of my biggest achievements yet — developing a cab-hailing mobile app like Ola/Uber for RideGo Cabs in Hyderabad. After over a decade of working in operations across various companies, growth felt stagnant. Starting my AI company through the BaaS ecosystem gave me a fresh path forward. Within just months, I've already kicked off multiple projects, including a Quick Commerce app and even a Dream11-style fantasy sports platform. AI is evolving rapidly, and with the right mentorship and infrastructure, I'm growing with it — turning ambitious ideas into real-world businesses.",
    mediaType: "video",
    mediaUrl: "https://res.cloudinary.com/dij4v6vtx/video/upload/v1756703359/Snapins.ai_video_AQPpZT-Oo8dtf86sm50RgaOnc-WIxzrwxM0sY7WvMYJ8tOhQ7h4Ka_1Rj5baux-9c64m7JN9l3K8XBtJDKGSUxFgEbB4ALD7TgH-FIE_pyxqr5.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dij4v6vtx/video/upload/v1756703359/Snapins.ai_video_AQPpZT-Oo8dtf86sm50RgaOnc-WIxzrwxM0sY7WvMYJ8tOhQ7h4Ka_1Rj5baux-9c64m7JN9l3K8XBtJDKGSUxFgEbB4ALD7TgH-FIE_pyxqr5.jpg",
    rating: 5,
    date: "2024-11-01",
    results: ["Ola/Uber-style cab app for RideGo Cabs", "Quick Commerce app development", "Dream11-style fantasy sports platform"],
    likes: 3245,
    comments: 287
  },
  {
    id: "5",
    name: "Chaitanya",
    company: "AI Innovation Labs",
    position: "Founder",
    industry: "AI Technology",
    projectTitle: "Youngest Entrepreneur 2024 - ₹50 Lakhs Revenue",
    description: "With Supreeth's mentorship, I built my AI company from scratch, closed high-value projects, and was recognized as one of the youngest entrepreneurs of 2024. In just one year, I've worked on projects with Hyderabad Aerospace, MetaHuman for education, avatar integrations, voice agents, and more — generating over ₹50 lakhs in revenue without spending on ads. Our deals included $6,000 with Aerospace, ₹3.5 lakhs for a prompt exam app, and ₹5 lakhs for a Meta project, all achieved through strategic guidance and PR-driven branding. This journey has shown me that with the right mentorship and ecosystem, it's possible to scale fast and achieve recognition even as a young founder.",
    mediaType: "video",
    mediaUrl: "https://res.cloudinary.com/dij4v6vtx/video/upload/v1756703358/SnapInsta.to_AQPJRaiA7Y-6jLnZhccZycLqoWWDh7N_2SfwAZPUS14NNgI2QEJc0rWlA-wNTb8ndQjKM24kxW9ey68CbjniFnqocPpLz0CpbuheCB4_ih1bp8.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dij4v6vtx/video/upload/v1756703358/SnapInsta.to_AQPJRaiA7Y-6jLnZhccZycLqoWWDh7N_2SfwAZPUS14NNgI2QEJc0rWlA-wNTb8ndQjKM24kxW9ey68CbjniFnqocPpLz0CpbuheCB4_ih1bp8.jpg",
    rating: 5,
    date: "2024-03-20",
    results: ["₹50+ lakhs revenue in one year", "Youngest entrepreneur 2024 recognition", "High-value aerospace & education projects"],
    likes: 1567,
    comments: 78
  },
  {
    id: "6",
    name: "Shaurya",
    company: "Blockchain Solutions",
    position: "Founder",
    industry: "Blockchain & Healthcare",
    projectTitle: "Gold-Backed Blockchain & Healthcare Projects",
    description: "With Supreeth's mentorship, I was able to close a blockchain project backed by gold coins and secure long-term commitments with my client. Over the last few months, our team successfully delivered a ₹5.6 lakh blockchain project tied to gold tokenization, and we've already signed on for extended collaboration. Alongside, we are working on healthcare projects and scaling steadily with the right mix of strategy, client communication, and execution. This journey has taught me that strong mentorship and the right ecosystem make it possible to grow faster, manage clients effectively, and build long-term business trust.",
    mediaType: "video",
    mediaUrl: "https://res.cloudinary.com/dij4v6vtx/video/upload/v1756703359/SnapInsta.to_AQNpYyVTyaUvePFS7M8OTMrBeS0DP5Z6YHEQJ5psQishQKtWRhsZKOEUmrCd_42uqF8YEizMr_LAE6up-REOn_Ib6xUTItRByI9Jews_cea2yf.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dij4v6vtx/video/upload/v1756703359/SnapInsta.to_AQNpYyVTyaUvePFS7M8OTMrBeS0DP5Z6YHEQJ5psQishQKtWRhsZKOEUmrCd_42uqF8YEizMr_LAE6up-REOn_Ib6xUTItRByI9Jews_cea2yf.jpg",
    rating: 5,
    date: "2024-04-15",
    results: ["₹5.6 lakh blockchain project delivered", "Gold tokenization expertise", "Long-term client partnerships secured"],
    likes: 1890,
    comments: 102
  },
  {
    id: "7",
    name: "Chaitanya",
    company: "Comprehensive Tech Solutions",
    position: "Founder",
    industry: "Aerospace Technology",
    projectTitle: "₹6 Lakh AI-Powered Solar Flare Alert System",
    description: "With Supreeth's mentorship and BoostMySites' ecosystem, I was able to close a ₹6 lakh aerospace project for building an AI-powered solar flare alert system and CRM platform. When we pitched to the aerospace client, what stood out was that through my company I could provide all services under one roof — mobile apps, AI solutions, and website development — saving the client time and costs compared to hiring multiple vendors. That credibility helped me win the deal even as a new founder. Having access to the right guidance, infrastructure, and complete tech stack has been the game-changer in landing projects I never thought I could close this early.",
    mediaType: "video",
    mediaUrl: "https://res.cloudinary.com/dij4v6vtx/video/upload/v1756703361/SnapInsta.to_AQMlIJjXWld7-I50mqpJXnprZo72ppvgCBlYArNYGHViOGZvlI5xZvA_S6tPncJ7Zm1wyyVhqP217Riz2VUqVX-Q7_MYA07I7vdgpf4_klsjef.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dij4v6vtx/video/upload/v1756703361/SnapInsta.to_AQMlIJjXWld7-I50mqpJXnprZo72ppvgCBlYArNYGHViOGZvlI5xZvA_S6tPncJ7Zm1wyyVhqP217Riz2VUqVX-Q7_MYA07I7vdgpf4_klsjef.jpg",
    rating: 5,
    date: "2024-05-10",
    results: ["₹6 lakh aerospace project secured", "AI-powered solar flare alert system", "One-stop tech solution provider"],
    likes: 2234,
    comments: 156
  },
  {
    id: "8",
    name: "Steve Paul",
    company: "Global Tech Solutions",
    position: "Founder",
    industry: "Multi-Industry Technology",
    projectTitle: "$20K US Client + Healthcare IoT + EV Solutions",
    description: "With Supreeth's mentorship, I scaled my company to close 3 major projects — including a $20,000 custom software solution for a US client, an Endoscopy IoT platform, and an EV mobile app. By building relationships instead of just selling, I was able to secure repeat business and referrals that keep our pipeline growing. From healthcare tech using Raspberry Pi for offline endoscopy solutions, to EV mobility apps, and global software development, my company is progressing rapidly under the Business-as-a-Service (BaaS) ecosystem. Having the right mentorship and structure has given me the confidence to pitch globally and deliver across industries.",
    mediaType: "video",
    mediaUrl: "https://res.cloudinary.com/dij4v6vtx/video/upload/v1756703354/As_the_CEO_we_must_lead_by_example_and_become_the_best_sales_person_for_our_business_driving_t_wfcp4s.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dij4v6vtx/video/upload/v1756703354/As_the_CEO_we_must_lead_by_example_and_become_the_best_sales_person_for_our_business_driving_t_wfcp4s.jpg",
    rating: 5,
    date: "2024-06-20",
    results: ["$20K US client project secured", "Healthcare IoT & EV solutions delivered", "Global pitching confidence achieved"],
    likes: 2567,
    comments: 189
  },
  {
    id: "9",
    name: "Venktesh",
    company: "Web Development Solutions",
    position: "Founder",
    industry: "Web Development",
    projectTitle: "Non-Tech to $3,100 Web Development Success",
    description: "With Supreeth's mentorship and the BoostMySites BaaS ecosystem, I closed my first two website development projects and am now aiming to become one of the best web development companies. Coming from a non-technical background, it wasn't easy to start. But with consistent follow-ups, building client trust, and support from the developer team, I was able to secure two projects worth $3,100 and even begin exploring app development opportunities. This journey has shown me that with the right mentorship and guidance, even small-ticket wins become stepping stones to building a long-term, successful business.",
    mediaType: "video",
    mediaUrl: "https://res.cloudinary.com/dij4v6vtx/video/upload/v1756703366/Snapinst.app_video_AQOZDrDxL0w3V9RMcX3SStpmP35PPmLrmNTSbfjizpAD70LUw9eNEoeYOBZmAsy8BOQ8PUVii3sGMZ1LlGejD-Ay-Wt3fw_MkdVrtYM_p1mgkd.mp4",
    thumbnailUrl: "https://res.cloudinary.com/dij4v6vtx/video/upload/v1756703366/Snapinst.app_video_AQOZDrDxL0w3V9RMcX3SStpmP35PPmLrmNTSbfjizpAD70LUw9eNEoeYOBZmAsy8BOQ8PUVii3sGMZ1LlGejD-Ay-Wt3fw_MkdVrtYM_p1mgkd.jpg",
    rating: 5,
    date: "2024-07-05",
    results: ["$3,100 in first two web projects", "Non-technical to tech entrepreneur", "App development opportunities emerging"],
    likes: 1678,
    comments: 124
  },
  {
    id: "10",
    name: "Vjay",
    company: "Valent Air Technologies",
    position: "Founder",
    industry: "AI & Automation",
    projectTitle: "RPA & AI-Powered Business Integrations",
    description: "With Supreeth's mentorship, I closed automation projects, website revamps, and am now scaling my company towards AI-powered integrations. At Valent Air Technologies, we have successfully delivered projects in RPA (Robotic Process Automation), website and mobile app development, and process automation. What makes us stand out is our mission to help businesses solve everyday challenges by integrating AI, improving efficiency, and increasing revenue. With BoostMySites' support and mentorship, we are growing steadily and positioning ourselves as a company that empowers businesses through smart automation and intelligent integrations.",
    mediaType: "video",
    mediaUrl: "https://res.cloudinary.com/dij4v6vtx/video/upload/v1756703356/From_concept_to_execution_AI_innovation_at_its_finest_Watch_how_our_subscriber_is_transformi_tlc6lk.mp4",
    rating: 5,
    date: "2024-08-12",
    results: ["RPA & process automation delivered", "AI-powered business integrations", "Revenue-focused efficiency solutions"],
    likes: 2145,
    comments: 167
  },
  {
    id: "11",
    name: "Jibesh",
    company: "Real Estate Web Solutions",
    position: "Founder",
    industry: "Real Estate Technology",
    projectTitle: "9-5 to Global Real Estate Business Vision",
    description: "With Supreeth's mentorship and the BoostMySites BaaS ecosystem, I was able to start my company and focus on building real estate websites while shaping a global vision. Before discovering BoostMySites, I was stuck in the same 9–5 routine. Within days of joining, I gained the clarity, mentorship, and infrastructure to launch my business and start delivering projects. Today, I'm targeting the real estate industry in India and abroad, and I treat my team not as employees, but as business partners — growing together with every project. BaaS gave me the platform and confidence to transform a long-time dream into reality.",
    mediaType: "video",
    mediaUrl: "https://res.cloudinary.com/dij4v6vtx/video/upload/v1756703356/Snapinst.app_video_AQMzH800tE3KEbPNQmCW5f1RFCxvMi1xT_H1kpxleKoUY-rJdDfvOWegR3rEsxHY682ytaWD30x3eeyf-qGO0Uwc_J6dOYm2e2Tg4xc_uexqle.mp4",
    rating: 5,
    date: "2024-09-15",
    results: ["Escaped 9-5 routine to entrepreneurship", "Real estate websites for India & abroad", "Team as business partners model"],
    likes: 1923,
    comments: 143
  },
  {
    id: "12",
    name: "Thusar",
    company: "Award-Winning AI & App Development",
    position: "Founder",
    industry: "AI & App Development",
    projectTitle: "Best AI and App Development Company Award",
    description: "Under BoostMySites BaaS mentorship, I was able to win the award as best AI and app development company. This recognition validates our commitment to excellence and innovation in the AI and mobile app development space. The mentorship and ecosystem support provided the foundation for building a company that stands out in the competitive tech industry.",
    mediaType: "video",
    mediaUrl: "https://res.cloudinary.com/dij4v6vtx/video/upload/v1756703356/Snapins.ai_video_AQNkxt08oTCzeym4jNXBAbvrLNlXygn3AEKBNJ3r_TCfDxNVnmSTuMfr6JSCjD5TkqJi62TsC1r4ayVJ6eXrVcHG-su-XG9iqiybXEI_uhxfvx.mp4",
    rating: 5,
    date: "2024-10-20",
    results: ["Best AI & App Development Company Award", "Industry recognition achieved", "Excellence in innovation validated"],
    likes: 2890,
    comments: 234
  },
  {
    id: "13",
    name: "Ayush",
    company: "Gen Z Commerce Solutions",
    position: "Founder",
    industry: "E-commerce & Data Analytics",
    projectTitle: "$8,800 Gen Z Styling Commerce App + Data Analytics",
    description: "With Supreeth's mentorship, I closed an $8,800 project to build a Gen Z styling commerce app and expanded into providing data analytics services for supermarkets. The project is an Indian brand aggregator app designed to give independent creators and small brands — often selling via Instagram DMs — their own platform to compete with giants like Myntra. By aggregating these niche brands under one umbrella, we're helping Gen Z users discover unique fashion organically. It took nearly a month of back-and-forth with the client, but with BoostMySites' support, technical insights, and guidance, I was able to close the deal and deliver with confidence.",
    mediaType: "video",
    mediaUrl: "https://res.cloudinary.com/dij4v6vtx/video/upload/v1756703372/SnapInsta.to_AQOspfqmkOWo42tZdOihZmBWq04LwFv29-GZmvlMnb6Kr2O6pcbpDcnQjjZWXH5RgNKQGWenhyAM1ndpvG5EsFokt29y4Wms6r_ECA0_js8f0s.mp4",
    rating: 5,
    date: "2024-12-01",
    results: ["$8,800 Gen Z commerce app delivered", "Indian brand aggregator platform", "Data analytics services for supermarkets"],
    likes: 2756,
    comments: 198
  },
  {
    id: "14",
    name: "Astha",
    company: "AI Services Solutions",
    position: "Founder",
    industry: "AI Technology",
    projectTitle: "Non-IT to AI Business Success - Breaking Barriers",
    description: "With Supreeth's mentorship, I proved that IT business is not limited to IT people. Coming from a non-IT background, I never imagined myself running an AI services company. But mentorship gave me the clarity, tools, and confidence to close multiple AI-related projects and deliver them successfully. My motivation was simple: AI is shaping our everyday lives, and I wanted to be part of building the future — not just using it. Today, I'm hands-on with technology, managing projects, and adding real value to clients. This journey shows that you don't need to be a 'techie' to succeed in tech — with the right guidance, anyone can launch and grow an AI business.",
    mediaType: "video",
    mediaUrl: "https://res.cloudinary.com/dij4v6vtx/video/upload/v1756703363/Nothing_fuels_us_more_than_hearing_love_from_our_subscribers_Here_s_to_unmatched_support_stron_mcnutd.mp4",
    rating: 5,
    date: "2024-12-15",
    results: ["Multiple AI projects closed successfully", "Non-IT to AI business transformation", "Hands-on technology management achieved"],
    likes: 3124,
    comments: 245
  }
];

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState<{ [key: string]: boolean }>({});
  const [isMuted, setIsMuted] = useState<{ [key: string]: boolean }>({});
  const [fullscreenVideo, setFullscreenVideo] = useState<Testimonial | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = (id: string) => {
    setIsPlaying(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleVideoMute = (id: string) => {
    setIsMuted(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePlayButtonClick = (testimonial: Testimonial, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click
    setFullscreenVideo(testimonial);
    setIsVideoPlaying(true);
  };

  const handleBackToGrid = () => {
    setFullscreenVideo(null);
    setIsVideoPlaying(false);
  };

  const handleNextVideo = () => {
    const currentIndex = mockTestimonials.findIndex(t => t.id === selectedTestimonial?.id);
    const nextIndex = (currentIndex + 1) % mockTestimonials.length;
    setSelectedTestimonial(mockTestimonials[nextIndex]);
  };

  const handlePreviousVideo = () => {
    const currentIndex = mockTestimonials.findIndex(t => t.id === selectedTestimonial?.id);
    const prevIndex = currentIndex === 0 ? mockTestimonials.length - 1 : currentIndex - 1;
    setSelectedTestimonial(mockTestimonials[prevIndex]);
  };

  const ReelCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
    const isVideo = testimonial.mediaType === 'video';
    const videoId = testimonial.id;

    return (
      <div 
        className="relative w-full bg-black rounded-lg overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transition-shadow duration-300"
        onClick={() => setSelectedTestimonial(testimonial)}
      >
        {/* Video/Image Container */}
        <div className="relative aspect-[9/16] bg-gradient-to-br from-blue-500 to-purple-600">
          {isVideo ? (
            <img
              src={testimonial.thumbnailUrl || testimonial.mediaUrl}
              alt={testimonial.projectTitle}
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={testimonial.mediaUrl}
              alt={testimonial.projectTitle}
              className="w-full h-full object-cover"
            />
          )}

          {/* Video Controls Overlay */}
          {isVideo && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                onClick={(e) => handlePlayButtonClick(testimonial, e)}
                className="bg-black/50 backdrop-blur-sm rounded-full p-4 hover:bg-black/70 transition-colors"
              >
                <Play className="w-8 h-8 text-white" />
              </button>
            </div>
          )}



          {/* Bottom Caption Area */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <div className="space-y-3">
              {/* Company & Industry */}
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold text-sm">{testimonial.company}</span>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-xs">
                  {testimonial.industry}
                </Badge>
              </div>

              {/* Project Title */}
              <h3 className="text-white font-bold text-lg leading-tight">
                {testimonial.projectTitle}
              </h3>

              {/* Description */}
              <p className="text-white/90 text-sm leading-relaxed line-clamp-2">
                {testimonial.description}
              </p>

              {/* Key Results */}
              <div className="flex flex-wrap gap-2">
                {testimonial.results.slice(0, 2).map((result, idx) => (
                  <span key={idx} className="text-white/80 text-xs bg-white/10 px-2 py-1 rounded-full">
                    {result}
                  </span>
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-2 pt-2">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <span className="text-white/90 text-sm font-medium">{testimonial.name}</span>
                <span className="text-white/70 text-xs">• {testimonial.position}</span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-white/30'}`}
                  />
                ))}
                <span className="text-white/70 text-xs ml-1">{testimonial.rating}.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Instagram Reels Style Header */}
      <div className="pt-16 pb-8 bg-black border-b border-gray-800">
        <div className="max-w-md mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-white text-xl font-bold">Success Stories</h1>
            <div className="flex items-center gap-4">
              <button className="text-white/70 hover:text-white transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reels Grid Gallery */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
          {mockTestimonials.map((testimonial, index) => (
            <ReelCard 
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Video Player */}
      {fullscreenVideo && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          {/* Back Navigation */}
          <div className="absolute top-4 left-4 z-60">
            <button
              onClick={handleBackToGrid}
              className="bg-black/50 backdrop-blur-sm rounded-full p-3 hover:bg-black/70 transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
        </div>

          {/* Close Button */}
          <div className="absolute top-4 right-4 z-60">
            <button
              onClick={handleBackToGrid}
              className="bg-black/50 backdrop-blur-sm rounded-full p-3 hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Fullscreen Video Container */}
          <div className="relative w-full max-w-md mx-auto">
            <div className="relative aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl">
              {fullscreenVideo.mediaType === 'video' ? (
                <video
                  autoPlay
                  controls
                  className="w-full h-full object-cover"
                  onEnded={() => setIsVideoPlaying(false)}
                >
                  <source src={fullscreenVideo.mediaUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={fullscreenVideo.mediaUrl}
                  alt={fullscreenVideo.projectTitle}
                  className="w-full h-full object-cover"
                />
              )}

              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                <div className="space-y-4">
                  {/* Company & Industry */}
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold text-lg">{fullscreenVideo.company}</span>
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {fullscreenVideo.industry}
                    </Badge>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-white font-bold text-xl leading-tight">
                    {fullscreenVideo.projectTitle}
                  </h3>

                  {/* Description */}
                  <p className="text-white/90 text-sm leading-relaxed">
                    {fullscreenVideo.description}
                  </p>

                  {/* Key Results */}
                  <div className="flex flex-wrap gap-2">
                    {fullscreenVideo.results.slice(0, 2).map((result, idx) => (
                      <span key={idx} className="text-white/80 text-xs bg-white/10 px-3 py-1 rounded-full">
                        {result}
                      </span>
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 pt-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {fullscreenVideo.name.charAt(0)}
                    </div>
                    <span className="text-white/90 font-medium">{fullscreenVideo.name}</span>
                    <span className="text-white/70 text-sm">• {fullscreenVideo.position}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < fullscreenVideo.rating ? 'text-yellow-400 fill-current' : 'text-white/30'}`}
                      />
                    ))}
                    <span className="text-white/70 text-sm ml-1">{fullscreenVideo.rating}.0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Dialog for Full View */}
      {selectedTestimonial && (
        <Dialog open={!!selectedTestimonial} onOpenChange={() => setSelectedTestimonial(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-black/95 backdrop-blur-sm border-gray-800">
            {/* Navigation Controls */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
              <button
                onClick={() => setSelectedTestimonial(null)}
                className="bg-black/50 backdrop-blur-sm rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePreviousVideo}
                  className="bg-black/50 backdrop-blur-sm rounded-full p-2 hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <span className="text-white/70 text-sm px-2">
                  {mockTestimonials.findIndex(t => t.id === selectedTestimonial.id) + 1} / {mockTestimonials.length}
                </span>
                <button
                  onClick={handleNextVideo}
                  className="bg-black/50 backdrop-blur-sm rounded-full p-2 hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            <DialogHeader className="pt-12">
              <DialogTitle className="text-2xl font-bold text-white mb-4">
                {selectedTestimonial.projectTitle}
              </DialogTitle>
            </DialogHeader>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                {selectedTestimonial.mediaType === 'video' ? (
                  <video 
                    autoPlay
                    controls 
                    className="w-full rounded-2xl shadow-2xl"
                    poster={selectedTestimonial.thumbnailUrl}
                    key={selectedTestimonial.id}
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
              
              <div className="space-y-6 text-white">
                <div>
                  <h3 className="font-semibold text-xl mb-3">About the Project</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedTestimonial.description}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-xl mb-4">Key Results</h3>
                  <div className="space-y-3">
                    {selectedTestimonial.results.map((result, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                        <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-200 font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-gray-700 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                      {selectedTestimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-lg">{selectedTestimonial.name}</div>
                      <div className="text-gray-400 flex items-center gap-2 mb-2">
                        <Building className="w-4 h-4" />
                        {selectedTestimonial.position} at {selectedTestimonial.company}
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-white/10 border-white/20 text-white">
                          {selectedTestimonial.industry}
                        </Badge>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < selectedTestimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-500'}`}
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
