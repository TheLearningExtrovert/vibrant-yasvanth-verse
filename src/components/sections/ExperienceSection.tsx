
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experienceData = [
  {
    title: "React Native Intern",
    company: "Tech Company",
    duration: "Dec 2024 - Present",
    location: "Remote",
    responsibilities: [
      "Developed Gen AI mobile applications using React Native and TypeScript",
      "Integrated ERPNext APIs for seamless data management",
      "Collaborated with marketing teams on user acquisition strategies",
      "Built intelligent CrewAI agents for automation workflows"
    ],
    technologies: ["React Native", "TypeScript", "ERPNext", "CrewAI"],
    current: true
  },
  {
    title: "Salesforce Intern",
    company: "Sales Solutions Inc",
    duration: "Apr 2023 - May 2023",
    location: "Hyderabad",
    responsibilities: [
      "Developed comprehensive CRM solutions for client management",
      "Automated data processing workflows to improve efficiency",
      "Created custom Salesforce applications using Apex and Lightning"
    ],
    technologies: ["Salesforce", "Apex", "Lightning", "CRM"],
    current: false
  },
  {
    title: "Full-Stack Developer Intern",
    company: "Web Development Studio",
    duration: "June 2022 - July 2022",
    location: "Bangalore",
    responsibilities: [
      "Built secure authentication modules for web applications",
      "Optimized frontend performance and user experience",
      "Developed RESTful APIs and database integrations"
    ],
    technologies: ["ReactJS", "Node.js", "MongoDB", "Express"],
    current: false
  }
];

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const timeline = timelineRef.current;

    if (section && timeline) {
      const items = timeline.querySelectorAll('.experience-item');
      
      gsap.fromTo(
        items,
        { opacity: 0, x: 50 },
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
        '.experience-line',
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
    <section id="experience" ref={sectionRef} className="py-20 bg-portfolio-indigo text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-section-title font-bold font-poppins mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-white text-opacity-90 max-w-2xl mx-auto">
            Building expertise through diverse roles and challenging projects
          </p>
        </div>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-white bg-opacity-30 experience-line origin-top transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <div key={index} className={`experience-item relative flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Timeline Node */}
                <div className={`absolute left-6 md:left-1/2 w-6 h-6 rounded-full transform md:-translate-x-1/2 z-10 shadow-lg ${
                  item.current ? 'bg-portfolio-secondary' : 'bg-white'
                }`}>
                  <div className={`absolute inset-1 rounded-full ${
                    item.current ? 'bg-portfolio-indigo' : 'bg-portfolio-indigo'
                  }`}></div>
                  {item.current && (
                    <div className="absolute inset-0 rounded-full bg-portfolio-secondary animate-ping"></div>
                  )}
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'
                } md:w-1/2`}>
                  <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 card-shadow hover:bg-opacity-20 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <Briefcase className="w-6 h-6 mr-3" />
                      {item.current && (
                        <span className="text-sm font-medium bg-portfolio-secondary px-3 py-1 rounded-full mr-3">
                          Current
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 font-poppins">{item.title}</h3>
                    <h4 className="text-lg font-semibold mb-3 text-portfolio-secondary">{item.company}</h4>
                    
                    <div className="flex items-center mb-2 text-white text-opacity-80">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{item.duration}</span>
                    </div>
                    
                    <div className="flex items-center mb-4 text-white text-opacity-80">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{item.location}</span>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {item.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="text-sm text-white text-opacity-90 leading-relaxed">
                          • {responsibility}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="bg-white bg-opacity-20 text-white px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

export default ExperienceSection;
