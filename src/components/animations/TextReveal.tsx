
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  className?: string;
  animation?: 'typewriter' | 'slideUp' | 'wave' | 'glitch';
  trigger?: string;
}

const TextReveal = ({ 
  children, 
  className = '', 
  animation = 'slideUp',
  trigger = 'scroll'
}: TextRevealProps) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    const text = children;
    const chars = text.split('');
    
    element.innerHTML = chars
      .map(char => char === ' ' ? ' ' : `<span class="char">${char}</span>`)
      .join('');

    const charElements = element.querySelectorAll('.char');

    const animations = {
      typewriter: () => {
        gsap.set(charElements, { opacity: 0 });
        gsap.to(charElements, {
          opacity: 1,
          duration: 0.03,
          stagger: 0.03,
          ease: "none"
        });
      },
      slideUp: () => {
        gsap.set(charElements, { y: 50, opacity: 0 });
        gsap.to(charElements, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.02,
          ease: "power2.out"
        });
      },
      wave: () => {
        gsap.set(charElements, { y: 30, opacity: 0, rotation: 10 });
        gsap.to(charElements, {
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.02,
          ease: "elastic.out(1, 0.3)"
        });
      },
      glitch: () => {
        gsap.set(charElements, { x: 0, y: 0, opacity: 0 });
        const tl = gsap.timeline();
        
        charElements.forEach((char, i) => {
          tl.to(char, {
            opacity: 1,
            x: Math.random() * 10 - 5,
            y: Math.random() * 5 - 2.5,
            duration: 0.1,
            ease: "power2.out"
          }, i * 0.02)
          .to(char, {
            x: 0,
            y: 0,
            duration: 0.2,
            ease: "power2.out"
          }, i * 0.02 + 0.1);
        });
      }
    };

    if (trigger === 'scroll') {
      ScrollTrigger.create({
        trigger: element,
        start: "top 85%",
        onEnter: () => animations[animation]()
      });
    } else {
      animations[animation]();
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [children, animation, trigger]);

  return (
    <span ref={textRef} className={className} style={{ overflow: 'hidden', display: 'inline-block' }} />
  );
};

export default TextReveal;
