
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

gsap.registerPlugin(ScrollTrigger);

const skillsData = [
  {
    category: "Programming",
    skills: [
      { name: "Python", value: 90 },
      { name: "JavaScript", value: 85 },
      { name: "TypeScript", value: 80 }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "ReactJS", value: 85 },
      { name: "React Native", value: 80 },
      { name: "HTML", value: 90 },
      { name: "CSS", value: 85 }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", value: 80 },
      { name: "Express", value: 80 },
      { name: "Firebase", value: 75 },
      { name: "REST APIs", value: 85 }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", value: 80 },
      { name: "MySQL", value: 75 },
      { name: "SQLite", value: 70 }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", value: 85 },
      { name: "GitHub", value: 85 },
      { name: "Postman", value: 80 },
      { name: "VS Code", value: 90 }
    ]
  },
  {
    category: "AI Tools",
    skills: [
      { name: "CrewAI", value: 75 },
      { name: "Make.com", value: 80 },
      { name: "Zapier", value: 75 },
      { name: "Lovable", value: 70 },
      { name: "V0", value: 70 }
    ]
  }
];

// Prepare radar chart data
const radarData = [
  { skill: 'Frontend', value: 85 },
  { skill: 'Backend', value: 80 },
  { skill: 'Database', value: 75 },
  { skill: 'AI Tools', value: 74 },
  { skill: 'DevOps', value: 85 },
  { skill: 'Mobile', value: 80 }
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const skills = skillsRef.current;
    const chart = chartRef.current;

    if (section && skills && chart) {
      // Animate skill cards
      gsap.fromTo(
        skills.children,
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

      // Animate chart
      gsap.fromTo(
        chart,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: chart,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate skill bars
      gsap.fromTo(
        '.skill-bar',
        { width: 0 },
        {
          width: (index, element) => `${element.dataset.value}%`,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 60%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-portfolio-purple text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-section-title font-bold font-poppins mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-white text-opacity-90 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Skills Grid */}
          <div ref={skillsRef} className="grid md:grid-cols-2 gap-6">
            {skillsData.map((category, index) => (
              <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 card-shadow hover:bg-opacity-20 transition-all duration-300">
                <h3 className="text-xl font-bold mb-4 font-poppins text-portfolio-secondary">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-white text-opacity-80">{skill.value}%</span>
                      </div>
                      <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                        <div
                          className="skill-bar bg-portfolio-secondary h-2 rounded-full"
                          data-value={skill.value}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Radar Chart */}
          <div ref={chartRef} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 card-shadow">
            <h3 className="text-2xl font-bold mb-6 text-center font-poppins">
              Skills Overview
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="rgba(255,255,255,0.3)" />
                  <PolarAngleAxis 
                    dataKey="skill" 
                    tick={{ fill: 'white', fontSize: 14 }}
                  />
                  <PolarRadiusAxis 
                    angle={90} 
                    domain={[0, 100]} 
                    tick={{ fill: 'white', fontSize: 12 }}
                  />
                  <Radar
                    name="Skills"
                    dataKey="value"
                    stroke="#10B981"
                    fill="#10B981"
                    fillOpacity={0.3}
                    strokeWidth={2}
                    dot={{ fill: '#F472B6', strokeWidth: 2, r: 4 }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
