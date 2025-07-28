
import React, { useState, useEffect, useRef } from 'react';

interface LightOrb {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  intensity: number;
  pulseSpeed: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
}

const InteractiveLightBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [lightOrbs, setLightOrbs] = useState<LightOrb[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  // Initialize light orbs
  useEffect(() => {
    const orbs: LightOrb[] = [];
    for (let i = 0; i < 8; i++) {
      orbs.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 100 + 50,
        color: ['#00ff88', '#0088ff', '#ff0088', '#88ff00', '#ff8800'][Math.floor(Math.random() * 5)],
        intensity: Math.random() * 0.3 + 0.1,
        pulseSpeed: Math.random() * 0.02 + 0.01
      });
    }
    setLightOrbs(orbs);
  }, []);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });

        // Create particles on mouse move
        if (Math.random() < 0.3) {
          const newParticle: Particle = {
            id: Date.now() + Math.random(),
            x,
            y,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            life: 60,
            maxLife: 60,
            color: ['#00ff88', '#0088ff', '#ff0088'][Math.floor(Math.random() * 3)]
          };
          setParticles(prev => [...prev.slice(-20), newParticle]);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          life: particle.life - 1
        })).filter(particle => particle.life > 0)
      );

      setLightOrbs(prev => 
        prev.map(orb => ({
          ...orb,
          intensity: orb.intensity + Math.sin(Date.now() * orb.pulseSpeed) * 0.05
        }))
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0, 20, 40, 0.1) 0%, transparent 70%)' }}
    >
      {/* Light Orbs */}
      {lightOrbs.map(orb => {
        const distanceToMouse = Math.sqrt(
          Math.pow(orb.x - mousePosition.x, 2) + Math.pow(orb.y - mousePosition.y, 2)
        );
        const mouseInfluence = Math.max(0, 1 - distanceToMouse / 50);
        const finalIntensity = orb.intensity + mouseInfluence * 0.3;
        const finalSize = orb.size + mouseInfluence * 30;

        return (
          <div
            key={orb.id}
            className="absolute rounded-full transition-all duration-300 ease-out"
            style={{
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              width: `${finalSize}px`,
              height: `${finalSize}px`,
              background: `radial-gradient(circle, ${orb.color}${Math.floor(finalIntensity * 255).toString(16).padStart(2, '0')} 0%, transparent 70%)`,
              filter: `blur(${20 + mouseInfluence * 10}px)`,
              transform: `translate(-50%, -50%) scale(${1 + mouseInfluence * 0.5})`,
              animation: `pulse ${2 + orb.pulseSpeed * 100}s infinite ease-in-out`
            }}
          />
        );
      })}

      {/* Particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: particle.color,
            opacity: particle.life / particle.maxLife,
            filter: `blur(${2 - (particle.life / particle.maxLife) * 2}px)`,
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 ${10 * (particle.life / particle.maxLife)}px ${particle.color}`
          }}
        />
      ))}

      {/* Mouse Cursor Light */}
      <div
        className="absolute pointer-events-none transition-all duration-150 ease-out"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(0, 255, 136, 0.15) 0%, rgba(0, 136, 255, 0.1) 30%, transparent 70%)',
          filter: 'blur(20px)',
          transform: 'translate(-50%, -50%)',
          animation: 'pulse 3s infinite ease-in-out'
        }}
      />

      {/* Connecting Lines */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.3 }}
      >
        {lightOrbs.map((orb, index) => {
          const distanceToMouse = Math.sqrt(
            Math.pow(orb.x - mousePosition.x, 2) + Math.pow(orb.y - mousePosition.y, 2)
          );
          
          if (distanceToMouse < 30) {
            return (
              <line
                key={`line-${index}`}
                x1={`${orb.x}%`}
                y1={`${orb.y}%`}
                x2={`${mousePosition.x}%`}
                y2={`${mousePosition.y}%`}
                stroke="#00ff88"
                strokeWidth="1"
                strokeOpacity={Math.max(0, 1 - distanceToMouse / 30)}
                filter="blur(1px)"
              />
            );
          }
          return null;
        })}
      </svg>
    </div>
  );
};

export default InteractiveLightBackground;
