
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Calendar, ExternalLink } from 'lucide-react';

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
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (section && cards) {
      gsap.fromTo(
        cards.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <section id="certifications" ref={sectionRef} className="py-20 bg-portfolio-pink text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-section-title font-bold font-poppins mb-4">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-white text-opacity-90 max-w-2xl mx-auto">
            Continuous learning and professional development milestones
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificationsData.map((cert, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 card-shadow hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 font-poppins">{cert.title}</h3>
                  <h4 className="text-lg font-semibold mb-3 text-portfolio-secondary">{cert.issuer}</h4>
                  
                  <div className="flex items-center mb-3 text-white text-opacity-80">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{cert.year}</span>
                  </div>
                  
                  <p className="text-white text-opacity-90 mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <button className="inline-flex items-center text-white hover:text-portfolio-secondary transition-colors duration-300">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">View Certificate</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold mb-2">2+</div>
            <div className="text-sm text-white text-opacity-80">Certifications</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold mb-2">5+</div>
            <div className="text-sm text-white text-opacity-80">Courses</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold mb-2">100+</div>
            <div className="text-sm text-white text-opacity-80">Hours Learning</div>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold mb-2">3+</div>
            <div className="text-sm text-white text-opacity-80">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
