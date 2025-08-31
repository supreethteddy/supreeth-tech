
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
        
        // First, dynamically import Three.js and expose it globally
        const THREE = await import('three');
        console.log('Three.js loaded:', !!THREE);
        
        // Make sure Three.js is available globally with all its exports
        window.THREE = THREE;
        
        // Ensure all Three.js classes are available
        Object.keys(THREE).forEach(key => {
          if (!window.THREE[key]) {
            window.THREE[key] = THREE[key as keyof typeof THREE];
          }
        });
        
        // Wait for Three.js to be fully available
        await new Promise(resolve => setTimeout(resolve, 200));
        
        // Then import Vanta
        await import('vanta/dist/vanta.net.min.js');
        console.log('Vanta loaded, VANTA available:', !!window.VANTA);
        
        // Wait for Vanta to initialize
        await new Promise(resolve => setTimeout(resolve, 200));
        
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
            color: 0x00ffaa,  // Bright cyan-green for connections
            backgroundColor: 0x000000,  // Pure black background
            backgroundAlpha: 0.8,  // Semi-transparent
            points: 12.00,  // More connection points
            maxDistance: 30.00,  // Longer connections
            spacing: 20.00,  // Better spacing
            showDots: true,
            // Additional effects for better visuals
            waveHeight: 15.00,
            waveSpeed: 0.75,
            zoom: 0.75
          });
          console.log('Vanta effect created:', !!vantaEffect.current);
        } else {
          console.error('Vanta initialization failed - missing dependencies');
          // Enhanced fallback with animated particles
          if (vantaRef.current) {
            vantaRef.current.style.background = `
              radial-gradient(circle at 20% 30%, rgba(0, 255, 170, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(0, 170, 255, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(170, 0, 255, 0.1) 0%, transparent 70%)
            `;
            vantaRef.current.style.animation = 'pulse 3s ease-in-out infinite';
          }
        }
      } catch (error) {
        console.error('Failed to load Vanta.NET:', error);
        // Enhanced fallback with better visual appeal
        if (vantaRef.current) {
          vantaRef.current.innerHTML = `
            <div style="
              position: absolute;
              inset: 0;
              background: linear-gradient(45deg, 
                rgba(0, 255, 170, 0.1) 0%, 
                transparent 25%, 
                rgba(0, 170, 255, 0.1) 50%, 
                transparent 75%, 
                rgba(170, 0, 255, 0.1) 100%);
              animation: gradient-shift 8s ease-in-out infinite;
            "></div>
          `;
        }
      }
    };

    // Add CSS keyframes to document head
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      @keyframes gradient-shift {
        0%, 100% { opacity: 0.8; transform: translateX(0); }
        50% { opacity: 1; transform: translateX(20px); }
      }
    `;
    document.head.appendChild(styleElement);

    // Delay to ensure DOM is ready
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
      // Clean up style element
      if (document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
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
