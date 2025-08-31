
import React, { useEffect, useRef } from 'react';

interface VantaEffect {
  destroy: () => void;
}

declare global {
  interface Window {
    VANTA: {
      NET: (options: any) => VantaEffect;
    };
    THREE: any;
  }
}

const WebGLHeroBackground: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<VantaEffect | null>(null);

  useEffect(() => {
    const loadVanta = async () => {
      try {
        console.log('Starting Vanta initialization...');
        
        // First, dynamically import and set up Three.js
        const THREE = await import('three');
        console.log('Three.js loaded:', !!THREE);
        
        // Make Three.js available globally for Vanta
        window.THREE = THREE;
        
        // Small delay to ensure Three.js is fully available
        await new Promise(resolve => setTimeout(resolve, 100));
        
        // Then import Vanta
        await import('vanta/dist/vanta.net.min.js');
        console.log('Vanta loaded, VANTA available:', !!window.VANTA);
        
        // Another small delay for Vanta initialization
        await new Promise(resolve => setTimeout(resolve, 100));
        
        if (vantaRef.current && window.VANTA?.NET) {
          console.log('Initializing Vanta effect...');
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
            backgroundColor: 0x111111,  // Dark background instead of black
            backgroundAlpha: 0.3,  // Semi-transparent instead of fully transparent
            points: 8.00,
            maxDistance: 25.00,
            spacing: 18.00,
            showDots: true
          });
          console.log('Vanta effect created:', !!vantaEffect.current);
        } else {
          console.error('Vanta initialization failed - missing dependencies');
        }
      } catch (error) {
        console.error('Failed to load Vanta.NET:', error);
        // Fallback: show a subtle animated background
        if (vantaRef.current) {
          vantaRef.current.style.background = 'radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.1) 0%, transparent 70%)';
          vantaRef.current.style.animation = 'pulse 4s ease-in-out infinite';
        }
      }
    };

    // Small delay before starting to ensure DOM is ready
    const timeoutId = setTimeout(loadVanta, 100);

    return () => {
      clearTimeout(timeoutId);
      if (vantaEffect.current) {
        try {
          vantaEffect.current.destroy();
        } catch (error) {
          console.warn('Error destroying Vanta effect:', error);
        }
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
