
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import AnimatedSection from '@/components/animations/AnimatedSection';

gsap.registerPlugin(ScrollTrigger);

const certificationsData = [
  {
    title: "Generative AI Fundamentals",
    issuer: "Microsoft",
    year: "2024",
    description: "Comprehensive certification covering AI model training, deployment, and ethical AI practices.",
    badge: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop",
    link: "#"
  },
  {
    title: "Advanced AI Applications",
    issuer: "LinkedIn Learning",
    year: "2024",
    description: "Specialized training in AI application development and integration strategies.",
    badge: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop",
    link: "#"
  }
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 section-enhanced">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeUp" className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-section-title font-bold font-poppins mb-4 themed-text-glow">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full themed-gradient mb-6"></div>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: 'hsl(var(--themed-text-secondary))' }}>
            Continuous learning and professional development milestones
          </p>
        </AnimatedSection>

        <AnimatedSection animation="scale" stagger={0.2} className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="themed-card rounded-xl p-6 floating-animation"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center themed-gradient">
                    <Award className="w-8 h-8" style={{ color: 'hsl(var(--themed-text))' }} />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 font-poppins" style={{ color: 'hsl(var(--themed-text))' }}>{cert.title}</h3>
                  <h4 className="text-lg font-semibold mb-3" style={{ color: 'hsl(var(--themed-primary))' }}>{cert.issuer}</h4>
                  
                  <div className="flex items-center mb-3">
                    <Calendar className="w-4 h-4 mr-2" style={{ color: 'hsl(var(--themed-secondary))' }} />
                    <span className="text-sm" style={{ color: 'hsl(var(--themed-text-secondary))' }}>{cert.year}</span>
                  </div>
                  
                  <p className="mb-4 leading-relaxed" style={{ color: 'hsl(var(--themed-text-secondary))' }}>
                    {cert.description}
                  </p>
                  
                  <button className="inline-flex items-center transition-colors duration-300 hover:scale-105" style={{ color: 'hsl(var(--themed-primary))' }}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">View Certificate</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={0.8} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="themed-card rounded-xl p-6 pulse-glow">
            <div className="text-3xl font-bold mb-2" style={{ color: 'hsl(var(--themed-text))' }}>2+</div>
            <div className="text-sm" style={{ color: 'hsl(var(--themed-text-secondary))' }}>Certifications</div>
          </div>
          <div className="themed-card rounded-xl p-6 pulse-glow">
            <div className="text-3xl font-bold mb-2" style={{ color: 'hsl(var(--themed-text))' }}>5+</div>
            <div className="text-sm" style={{ color: 'hsl(var(--themed-text-secondary))' }}>Courses</div>
          </div>
          <div className="themed-card rounded-xl p-6 pulse-glow">
            <div className="text-3xl font-bold mb-2" style={{ color: 'hsl(var(--themed-text))' }}>100+</div>
            <div className="text-sm" style={{ color: 'hsl(var(--themed-text-secondary))' }}>Hours Learning</div>
          </div>
          <div className="themed-card rounded-xl p-6 pulse-glow">
            <div className="text-3xl font-bold mb-2" style={{ color: 'hsl(var(--themed-text))' }}>3+</div>
            <div className="text-sm" style={{ color: 'hsl(var(--themed-text-secondary))' }}>Years Experience</div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CertificationsSection;
