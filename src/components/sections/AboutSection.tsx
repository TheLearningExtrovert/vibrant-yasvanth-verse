
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Lightbulb, Rocket } from 'lucide-react';
import AnimatedSection from '@/components/animations/AnimatedSection';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="about" ref={sectionRef} className="py-20 section-enhanced">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeUp" className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-section-title font-bold font-poppins mb-4 themed-text-glow">
              About Me
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full themed-gradient"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'hsl(var(--themed-text))' }}>
                I'm a passionate <strong>Full-Stack Developer</strong> and <strong>AI Innovator</strong> 
                specializing in React Native, Node.js, and MongoDB. I create user-centric applications 
                that solve real-world problems through elegant code and intuitive design.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'hsl(var(--themed-text))' }}>
                Driven by <strong>AI innovation</strong> and cutting-edge technology, I constantly 
                explore new tools and frameworks to build scalable, efficient solutions. My journey 
                in tech is fueled by curiosity and a commitment to excellence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center themed-card p-6 rounded-xl">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 themed-gradient">
                    <Code className="w-8 h-8" style={{ color: 'hsl(var(--themed-text))' }} />
                  </div>
                  <h3 className="font-semibold mb-2" style={{ color: 'hsl(var(--themed-text))' }}>Clean Code</h3>
                  <p className="text-sm" style={{ color: 'hsl(var(--themed-text-secondary))' }}>Writing maintainable, efficient code</p>
                </div>

                <div className="text-center themed-card p-6 rounded-xl">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 themed-gradient">
                    <Lightbulb className="w-8 h-8" style={{ color: 'hsl(var(--themed-text))' }} />
                  </div>
                  <h3 className="font-semibold mb-2" style={{ color: 'hsl(var(--themed-text))' }}>Innovation</h3>
                  <p className="text-sm" style={{ color: 'hsl(var(--themed-text-secondary))' }}>Exploring AI and emerging tech</p>
                </div>

                <div className="text-center themed-card p-6 rounded-xl">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 themed-gradient">
                    <Rocket className="w-8 h-8" style={{ color: 'hsl(var(--themed-text))' }} />
                  </div>
                  <h3 className="font-semibold mb-2" style={{ color: 'hsl(var(--themed-text))' }}>Performance</h3>
                  <p className="text-sm" style={{ color: 'hsl(var(--themed-text-secondary))' }}>Building scalable solutions</p>
                </div>
              </div>
            </div>

            <div className="relative floating-animation">
              <div className="aspect-square themed-card rounded-2xl p-8">
                <div className="w-full h-full themed-gradient rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-4" style={{ color: 'hsl(var(--themed-text))' }}>3+</div>
                    <div className="text-xl font-semibold mb-2" style={{ color: 'hsl(var(--themed-text))' }}>Years</div>
                    <div className="text-sm" style={{ color: 'hsl(var(--themed-text-secondary))' }}>Development Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
