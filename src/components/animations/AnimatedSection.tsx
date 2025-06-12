
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale' | 'rotate' | 'wave';
  delay?: number;
  stagger?: number;
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fadeUp',
  delay = 0,
  stagger = 0.1
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const animationConfig = {
      fadeUp: {
        from: { opacity: 0, y: 60, scale: 0.9 },
        to: { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
      },
      fadeLeft: {
        from: { opacity: 0, x: -80, rotationY: -15 },
        to: { opacity: 1, x: 0, rotationY: 0, duration: 1.2, ease: "power3.out" }
      },
      fadeRight: {
        from: { opacity: 0, x: 80, rotationY: 15 },
        to: { opacity: 1, x: 0, rotationY: 0, duration: 1.2, ease: "power3.out" }
      },
      scale: {
        from: { opacity: 0, scale: 0.5, rotation: -10 },
        to: { opacity: 1, scale: 1, rotation: 0, duration: 1.5, ease: "back.out(1.7)" }
      },
      rotate: {
        from: { opacity: 0, rotation: 180, scale: 0.8 },
        to: { opacity: 1, rotation: 0, scale: 1, duration: 1.8, ease: "elastic.out(1, 0.5)" }
      },
      wave: {
        from: { opacity: 0, y: 100, skewY: 5 },
        to: { opacity: 1, y: 0, skewY: 0, duration: 1.5, ease: "power4.out" }
      }
    };

    const config = animationConfig[animation];
    const elements = section.children;

    gsap.fromTo(
      elements,
      config.from,
      {
        ...config.to,
        delay,
        stagger,
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [animation, delay, stagger]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedSection;
