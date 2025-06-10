
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Award, Calendar } from 'lucide-react';

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
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const timeline = timelineRef.current;

    if (section && timeline) {
      const items = timeline.querySelectorAll('.timeline-item');
      
      gsap.fromTo(
        items,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate the timeline line
      gsap.fromTo(
        '.timeline-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power2.out",
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
    <section id="education" ref={sectionRef} className="py-20 bg-portfolio-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-section-title font-bold font-poppins mb-4">
            Education Journey
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-white text-opacity-90 max-w-2xl mx-auto">
            Academic excellence and continuous learning have shaped my technical foundation
          </p>
        </div>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white bg-opacity-30 timeline-line origin-top transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div key={index} className={`timeline-item relative flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Timeline Node */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-white rounded-full transform md:-translate-x-1/2 z-10 shadow-lg">
                  <div className="absolute inset-1 bg-portfolio-accent rounded-full"></div>
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'
                } md:w-1/2`}>
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 card-shadow hover:bg-opacity-20 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <GraduationCap className="w-6 h-6 mr-3" />
                      <span className="text-sm font-medium bg-white bg-opacity-20 px-3 py-1 rounded-full">
                        {item.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 font-poppins">{item.title}</h3>
                    <h4 className="text-lg font-semibold mb-3 text-white text-opacity-90">{item.institution}</h4>
                    
                    <div className="flex items-center mb-3">
                      <Award className="w-5 h-5 mr-2" />
                      <span className="font-semibold">{item.details}</span>
                    </div>
                    
                    <p className="text-white text-opacity-80 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
