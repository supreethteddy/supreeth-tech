
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
        
        // Check if CDN scripts are already loaded
        if (!window.THREE) {
          console.log('Loading Three.js from CDN...');
          // Wait for Three.js to be available from CDN
          await new Promise(resolve => {
            const checkThree = () => {
              if (window.THREE) {
                resolve(true);
              } else {
                setTimeout(checkThree, 100);
              }
            };
            checkThree();
          });
        }
        
        if (!window.VANTA) {
          console.log('Loading Vanta from CDN...');
          // Wait for Vanta to be available from CDN
          await new Promise(resolve => {
            const checkVanta = () => {
              if (window.VANTA) {
                resolve(true);
              } else {
                setTimeout(checkVanta, 100);
              }
            };
            checkVanta();
          });
        }
        
        // Fallback: Try to load from npm modules if CDN failed
        if (!window.THREE) {
          console.log('CDN failed, trying npm modules...');
          const THREE = await import('three');
          window.THREE = THREE;
        }
        
        if (!window.VANTA) {
          console.log('CDN failed, trying npm modules...');
          await import('vanta/dist/vanta.net.min.js');
        }
        
        if (vantaRef.current && window.VANTA?.NET) {
          console.log('Initializing Vanta effect...');
          vantaEffect.current = window.VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x4a90e2,   // line color (AI blue/purple tones)
            backgroundColor: 0xffffff, // white background
            points: 10.00,
            maxDistance: 20.00,
            spacing: 15.00
          });
          console.log('Vanta effect created:', !!vantaEffect.current);
        } else {
          console.error('Vanta initialization failed - missing dependencies');
          // Enhanced fallback with animated particles
          if (vantaRef.current) {
            vantaRef.current.style.background = `
              radial-gradient(circle at 20% 30%, rgba(74, 144, 226, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(116, 75, 162, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(240, 147, 251, 0.1) 0%, transparent 70%)
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
                rgba(74, 144, 226, 0.1) 0%, 
                transparent 25%, 
                rgba(116, 75, 162, 0.1) 50%, 
                transparent 75%, 
                rgba(240, 147, 251, 0.1) 100%);
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
