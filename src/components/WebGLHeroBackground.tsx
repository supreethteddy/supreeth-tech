
import React, { useEffect, useRef } from 'react';

interface VantaEffect {
  destroy: () => void;
}

declare global {
  interface Window {
    VANTA: {
      NET: (options: any) => VantaEffect;
    };
  }
}

const WebGLHeroBackground: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<VantaEffect | null>(null);

  useEffect(() => {
    const loadVanta = async () => {
      try {
        // Dynamically import Three.js
        await import('three');
        
        // Dynamically import Vanta
        const vantaModule = await import('vanta/dist/vanta.net.min.js');
        
        if (vantaRef.current && window.VANTA?.NET) {
          vantaEffect.current = window.VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 0.8,
            color: 0x00ff88,  // Alien green
            backgroundColor: 0x000000,
            backgroundAlpha: 0.0,  // Transparent background
            points: 8.00,
            maxDistance: 25.00,
            spacing: 18.00,
            showDots: true
          });
        }
      } catch (error) {
        console.warn('Failed to load Vanta.NET:', error);
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={vantaRef}
      className="absolute inset-0 w-full h-full"
      style={{ 
        zIndex: 1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default WebGLHeroBackground;
