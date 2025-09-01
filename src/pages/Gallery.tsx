
import { useState } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const Gallery = () => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Simple Header */}
      <section className="pt-20 pb-4 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                className="mr-4"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold text-gray-900">BoostMySites</h1>
            </div>
            <Button
              variant="outline"
              onClick={() => window.open('https://boostmysites.com/', '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Open in New Tab
            </Button>
          </div>
        </div>
      </section>

      {/* Embedded Website */}
      <section className="flex-1">
        <div className="relative w-full h-[calc(100vh-120px)]">
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
            className="w-full h-full border-0"
            onLoad={() => setIsIframeLoaded(true)}
            title="BoostMySites Platform"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
          />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
