
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Lightbulb, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (section && content) {
      gsap.fromTo(
        content.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-portfolio-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef} className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-section-title font-bold font-poppins mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg md:text-xl leading-relaxed">
                I'm a passionate <strong>Full-Stack Developer</strong> and <strong>AI Innovator</strong> 
                specializing in React Native, Node.js, and MongoDB. I create user-centric applications 
                that solve real-world problems through elegant code and intuitive design.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                Driven by <strong>AI innovation</strong> and cutting-edge technology, I constantly 
                explore new tools and frameworks to build scalable, efficient solutions. My journey 
                in tech is fueled by curiosity and a commitment to excellence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Clean Code</h3>
                  <p className="text-sm opacity-90">Writing maintainable, efficient code</p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Innovation</h3>
                  <p className="text-sm opacity-90">Exploring AI and emerging tech</p>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Performance</h3>
                  <p className="text-sm opacity-90">Building scalable solutions</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="w-full h-full bg-gradient-to-br from-portfolio-accent to-portfolio-purple rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-4">3+</div>
                    <div className="text-xl font-semibold mb-2">Years</div>
                    <div className="text-sm opacity-90">Development Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
