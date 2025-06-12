
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import EducationSection from '@/components/sections/EducationSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import BlogSection from '@/components/sections/BlogSection';
import SocialMediaSection from '@/components/sections/SocialMediaSection';
import ContactSection from '@/components/sections/ContactSection';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import ParticleBackground from '@/components/animations/ParticleBackground';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Index = () => {
  useEffect(() => {
    // Epic page load animation
    const tl = gsap.timeline();
    
    tl.fromTo(
      "body",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power2.out" }
    );

    // Enhanced smooth scroll behavior
    const lenis = {
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1.2,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    };

    // Add epic page transitions
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const progress = self.progress;
        document.documentElement.style.setProperty('--scroll-progress', progress.toString());
      }
    });

    console.log('Epic portfolio initialized with advanced GSAP animations');

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen themed-background transition-all duration-700 relative overflow-hidden">
      {/* Global particle background */}
      <ParticleBackground />
      
      <Navigation />
      <ThemeSwitcher />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <BlogSection />
        <SocialMediaSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
