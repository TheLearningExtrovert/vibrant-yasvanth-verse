
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

      // Animate skill bars with correct percentages
      const skillBars = section.querySelectorAll('.skill-bar');
      skillBars.forEach((bar) => {
        const percentage = parseInt(bar.getAttribute('data-value') || '0');
        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: `${percentage}%`,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 60%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-12 sm:py-20 themed-background section-enhanced">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-section-title font-bold font-poppins mb-4 themed-text-glow" style={{ color: 'hsl(var(--themed-text))' }}>
            Technical Skills
          </h2>
          <div className="w-16 sm:w-24 h-1 mx-auto rounded-full mb-4 sm:mb-6" style={{ backgroundColor: 'hsl(var(--themed-primary))' }}></div>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto opacity-90" style={{ color: 'hsl(var(--themed-text-secondary))' }}>
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Skills Grid */}
          <div ref={skillsRef} className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
            {skillsData.map((category, index) => (
              <div key={index} className="themed-card rounded-xl p-4 sm:p-6 hover:scale-105 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-poppins" style={{ color: 'hsl(var(--themed-secondary))' }}>
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-sm sm:text-base" style={{ color: 'hsl(var(--themed-text))' }}>{skill.name}</span>
                        <span className="text-xs sm:text-sm opacity-80" style={{ color: 'hsl(var(--themed-text-secondary))' }}>{skill.value}%</span>
                      </div>
                      <div className="w-full rounded-full h-2" style={{ backgroundColor: 'hsl(var(--themed-surface))' }}>
                        <div
                          className="skill-bar h-2 rounded-full transition-all duration-300"
                          data-value={skill.value}
                          style={{ backgroundColor: 'hsl(var(--themed-secondary))' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Radar Chart */}
          <div ref={chartRef} className="themed-card rounded-xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center font-poppins" style={{ color: 'hsl(var(--themed-text))' }}>
              Skills Overview
            </h3>
            <div className="h-64 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="hsl(var(--themed-primary) / 0.3)" />
                  <PolarAngleAxis 
                    dataKey="skill" 
                    tick={{ fill: 'hsl(var(--themed-text))', fontSize: window.innerWidth < 640 ? 10 : 14 }}
                  />
                  <PolarRadiusAxis 
                    angle={90} 
                    domain={[0, 100]} 
                    tick={{ fill: 'hsl(var(--themed-text-secondary))', fontSize: window.innerWidth < 640 ? 8 : 12 }}
                  />
                  <Radar
                    name="Skills"
                    dataKey="value"
                    stroke="hsl(var(--themed-secondary))"
                    fill="hsl(var(--themed-secondary))"
                    fillOpacity={0.3}
                    strokeWidth={2}
                    dot={{ fill: 'hsl(var(--themed-primary))', strokeWidth: 2, r: window.innerWidth < 640 ? 3 : 4 }}
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
