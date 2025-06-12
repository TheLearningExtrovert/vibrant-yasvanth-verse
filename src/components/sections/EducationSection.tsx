
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import AnimatedSection from '@/components/animations/AnimatedSection';

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    title: "B.Tech, Data Science",
    institution: "Bapatla Engineering College",
    duration: "2020-2024",
    details: "CGPA: 8.31",
    description: "Specialized in data science, machine learning, and software development with strong focus on practical applications."
  },
  {
    title: "Intermediate, MPC",
    institution: "Sri Chaitanya College",
    duration: "2018-2020",
    details: "CGPA: 9.57",
    description: "Mathematics, Physics, and Chemistry with excellent academic performance and strong analytical skills."
  },
  {
    title: "Secondary School Certificate",
    institution: "Sri Chaitanya School",
    duration: "2017-2018",
    details: "CGPA: 10.0",
    description: "Perfect score demonstrating dedication to academic excellence and strong foundational knowledge."
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 section-enhanced">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fadeUp" className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-section-title font-bold font-poppins mb-4 themed-text-glow">
            Education Journey
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full themed-gradient mb-6"></div>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: 'hsl(var(--themed-text-secondary))' }}>
            Academic excellence and continuous learning have shaped my technical foundation
          </p>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 rounded-full themed-gradient transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <AnimatedSection
                key={index}
                animation={index % 2 === 0 ? "fadeLeft" : "fadeRight"}
                delay={index * 0.2}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full transform md:-translate-x-1/2 z-10 themed-gradient">
                  <div className="absolute inset-1 rounded-full themed-surface"></div>
                </div>

                <div className={`ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'
                } md:w-1/2`}>
                  <div className="themed-card rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center mb-3">
                      <GraduationCap className="w-6 h-6 mr-3" style={{ color: 'hsl(var(--themed-primary))' }} />
                      <span className="text-sm font-medium px-3 py-1 rounded-full themed-surface">
                        {item.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 font-poppins" style={{ color: 'hsl(var(--themed-text))' }}>{item.title}</h3>
                    <h4 className="text-lg font-semibold mb-3" style={{ color: 'hsl(var(--themed-text-secondary))' }}>{item.institution}</h4>
                    
                    <div className="flex items-center mb-3">
                      <Award className="w-5 h-5 mr-2" style={{ color: 'hsl(var(--themed-secondary))' }} />
                      <span className="font-semibold" style={{ color: 'hsl(var(--themed-text))' }}>{item.details}</span>
                    </div>
                    
                    <p className="leading-relaxed" style={{ color: 'hsl(var(--themed-text-secondary))' }}>{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
