
import { useEffect, useRef } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { gsap } from 'gsap';
import ThreeBackground from '@/components/ThreeBackground';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(
      descriptionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.3"
    )
    .fromTo(
      buttonsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.3"
    );

    // Floating animation for the hero content
    gsap.to(heroRef.current, {
      y: -10,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });

    console.log('Hero section animations initialized');
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-enhanced particles">
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <ThreeBackground />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div ref={heroRef} className="space-y-8 floating-animation">
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-hero font-bold themed-text-glow font-poppins"
            style={{ color: 'hsl(var(--themed-text))' }}
          >
            Pendyala Yasvanth
          </h1>
          
          <h2
            ref={subtitleRef}
            className="text-xl sm:text-2xl md:text-3xl lg:text-section-title font-semibold font-inter"
            style={{ color: 'hsl(var(--themed-text-secondary))' }}
          >
            Full-Stack & AI Innovator
          </h2>
          
          <p
            ref={descriptionRef}
            className="text-lg sm:text-xl md:text-body-large max-w-3xl mx-auto leading-relaxed font-inter opacity-90"
            style={{ color: 'hsl(var(--themed-text))' }}
          >
            Crafting scalable applications with React Native, Node.js, and cutting-edge AI tools. 
            Transforming ideas into innovative digital solutions.
          </p>
          
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="themed-border-glow pulse-glow font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 group"
              style={{
                background: `linear-gradient(135deg, hsl(var(--themed-primary)), hsl(var(--themed-secondary)))`,
                color: 'hsl(var(--themed-text))'
              }}
            >
              Explore Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="themed-border-glow font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 group"
              style={{
                borderColor: `hsl(var(--themed-primary))`,
                color: `hsl(var(--themed-text))`,
                background: `hsl(var(--themed-surface) / 0.5)`
              }}
            >
              <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div 
          className="w-6 h-10 rounded-full flex justify-center themed-border-glow"
          style={{ borderColor: `hsl(var(--themed-primary))` }}
        >
          <div 
            className="w-1 h-3 rounded-full mt-2 animate-bounce-gentle"
            style={{ background: `hsl(var(--themed-primary))` }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
