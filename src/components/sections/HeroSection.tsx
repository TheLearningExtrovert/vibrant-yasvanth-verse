
import { useEffect, useRef } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { gsap } from 'gsap';
import ThreeBackground from '@/components/ThreeBackground';
import { Button } from '@/components/ui/button';
import TextReveal from '@/components/animations/TextReveal';
import MagneticButton from '@/components/animations/MagneticButton';
import ParticleBackground from '@/components/animations/ParticleBackground';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Epic entrance animation
    tl.fromTo(
      titleRef.current,
      { 
        opacity: 0, 
        y: 100, 
        scale: 0.8,
        rotationX: 90
      },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        rotationX: 0,
        duration: 1.5, 
        ease: "power4.out" 
      }
    )
    .fromTo(
      subtitleRef.current,
      { 
        opacity: 0, 
        y: 50,
        x: -100,
        rotation: -5
      },
      { 
        opacity: 1, 
        y: 0,
        x: 0,
        rotation: 0,
        duration: 1.2, 
        ease: "power3.out" 
      },
      "-=0.8"
    )
    .fromTo(
      descriptionRef.current,
      { 
        opacity: 0, 
        y: 30,
        scale: 0.9
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 1, 
        ease: "power3.out" 
      },
      "-=0.6"
    )
    .fromTo(
      buttonsRef.current?.children,
      { 
        opacity: 0, 
        y: 30,
        scale: 0.8,
        rotation: 10
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 0.8, 
        stagger: 0.2,
        ease: "back.out(1.7)" 
      },
      "-=0.4"
    );

    // Continuous floating animation with more dynamism
    gsap.to(heroRef.current, {
      y: -20,
      rotation: 1,
      duration: 4,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });

    // Add subtle perspective shifts
    gsap.to(titleRef.current, {
      rotationY: 2,
      duration: 6,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });

    console.log('Epic hero section animations initialized');
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-enhanced particles">
      {/* Enhanced backgrounds */}
      <div className="absolute inset-0 z-0">
        <ThreeBackground />
      </div>
      <ParticleBackground />
      
      {/* Dynamic gradient overlay */}
      <div className="absolute inset-0 z-5 bg-gradient-to-br from-transparent via-themed-primary/5 to-themed-secondary/10 animate-pulse" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div ref={heroRef} className="space-y-8 floating-animation">
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-hero font-bold themed-text-glow font-poppins text-themed-text"
          >
            <TextReveal animation="wave">Pendyala Yasvanth</TextReveal>
          </h1>
          
          <h2
            ref={subtitleRef}
            className="text-xl sm:text-2xl md:text-3xl lg:text-section-title font-semibold font-inter text-themed-text-secondary"
          >
            <TextReveal animation="slideUp">Full-Stack & AI Innovator</TextReveal>
          </h2>
          
          <p
            ref={descriptionRef}
            className="text-lg sm:text-xl md:text-body-large max-w-3xl mx-auto leading-relaxed font-inter opacity-90 text-themed-text"
          >
            <TextReveal animation="typewriter">
              Crafting scalable applications with React Native, Node.js, and cutting-edge AI tools. 
              Transforming ideas into innovative digital solutions.
            </TextReveal>
          </p>
          
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <MagneticButton
              onClick={scrollToProjects}
              className="hero-primary-button themed-border-glow pulse-glow font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-110 group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Explore Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-themed-accent to-themed-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </MagneticButton>
            
            <MagneticButton
              className="hero-secondary-button themed-border-glow font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-110 group relative overflow-hidden backdrop-blur-lg"
            >
              <span className="relative z-10 flex items-center">
                <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
                Download Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-themed-primary/20 to-themed-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="scroll-indicator w-8 h-12 rounded-full flex justify-center themed-border-glow relative overflow-hidden backdrop-blur-sm">
          <div className="scroll-dot w-2 h-4 rounded-full mt-2 animate-bounce-gentle relative" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-themed-primary/20 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
