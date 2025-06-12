
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import AnimatedSection from '@/components/animations/AnimatedSection';
import TextReveal from '@/components/animations/TextReveal';

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
    if (!section) return;

    // Epic skill cards animation
    gsap.fromTo(
      skillsRef.current?.children || [],
      { 
        opacity: 0, 
        y: 80, 
        scale: 0.8,
        rotation: 10,
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        filter: "blur(0px)",
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Radar chart with spectacular entrance
    gsap.fromTo(
      chartRef.current,
      { 
        opacity: 0, 
        scale: 0.3, 
        rotation: 180,
        filter: "blur(20px)"
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        filter: "blur(0px)",
        duration: 2,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: chartRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Skill bars with wave-like animation
    const skillBars = section.querySelectorAll('.skill-bar');
    skillBars.forEach((bar, index) => {
      const percentage = parseInt(bar.getAttribute('data-value') || '0');
      
      gsap.fromTo(
        bar,
        { 
          width: '0%',
          background: 'hsl(var(--themed-surface))',
          boxShadow: 'none'
        },
        {
          width: `${percentage}%`,
          background: `linear-gradient(90deg, hsl(var(--themed-secondary)), hsl(var(--themed-primary)))`,
          boxShadow: '0 0 20px hsl(var(--themed-glow) / 0.5)',
          duration: 2,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 60%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Add pulsing glow effect
      gsap.to(bar, {
        boxShadow: '0 0 30px hsl(var(--themed-glow) / 0.8)',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: 2 + index * 0.1
      });
    });

    // Floating animation for skill cards
    if (skillsRef.current) {
      const cards = Array.from(skillsRef.current.children);
      cards.forEach((card, index) => {
        gsap.to(card, {
          y: Math.sin(index) * 10,
          rotation: Math.sin(index) * 2,
          duration: 3 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: index * 0.2
        });
      });
    }
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-12 sm:py-20 themed-background section-enhanced relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-themed-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-themed-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-themed-accent/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="scale" className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-section-title font-bold font-poppins mb-4 themed-text-glow" style={{ color: 'hsl(var(--themed-text))' }}>
            <TextReveal animation="wave">Technical Skills</TextReveal>
          </h2>
          <div className="w-16 sm:w-24 h-1 mx-auto rounded-full mb-4 sm:mb-6 relative overflow-hidden" style={{ backgroundColor: 'hsl(var(--themed-primary))' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-themed-primary via-themed-secondary to-themed-accent animate-pulse" />
          </div>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto opacity-90" style={{ color: 'hsl(var(--themed-text-secondary))' }}>
            <TextReveal animation="typewriter">
              A comprehensive overview of my technical expertise and proficiency levels
            </TextReveal>
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Enhanced Skills Grid */}
          <AnimatedSection animation="fadeLeft" stagger={0.2}>
            <div ref={skillsRef} className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
              {skillsData.map((category, index) => (
                <div key={index} className="themed-card rounded-xl p-4 sm:p-6 hover:scale-105 transition-all duration-500 relative overflow-hidden group">
                  {/* Card glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-themed-primary/10 via-transparent to-themed-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-poppins relative z-10" style={{ color: 'hsl(var(--themed-secondary))' }}>
                    {category.category}
                  </h3>
                  <div className="space-y-3 relative z-10">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-sm sm:text-base" style={{ color: 'hsl(var(--themed-text))' }}>{skill.name}</span>
                          <span className="text-xs sm:text-sm opacity-80 font-bold" style={{ color: 'hsl(var(--themed-text-secondary))' }}>{skill.value}%</span>
                        </div>
                        <div className="w-full rounded-full h-3 relative overflow-hidden" style={{ backgroundColor: 'hsl(var(--themed-surface))' }}>
                          <div
                            className="skill-bar h-3 rounded-full transition-all duration-500 relative overflow-hidden"
                            data-value={skill.value}
                            style={{ backgroundColor: 'hsl(var(--themed-secondary))' }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Enhanced Radar Chart */}
          <AnimatedSection animation="fadeRight">
            <div ref={chartRef} className="themed-card rounded-xl p-6 sm:p-8 relative overflow-hidden">
              {/* Chart background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-themed-primary/5 to-themed-secondary/5" />
              <div className="absolute top-4 right-4 w-16 h-16 bg-themed-accent/20 rounded-full blur-xl animate-pulse" />
              
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center font-poppins relative z-10" style={{ color: 'hsl(var(--themed-text))' }}>
                <TextReveal animation="glitch">Skills Overview</TextReveal>
              </h3>
              <div className="h-64 sm:h-80 relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="hsl(var(--themed-primary) / 0.4)" strokeWidth={2} />
                    <PolarAngleAxis 
                      dataKey="skill" 
                      tick={{ 
                        fill: 'hsl(var(--themed-text))', 
                        fontSize: window.innerWidth < 640 ? 12 : 16,
                        fontWeight: 'bold'
                      }}
                    />
                    <PolarRadiusAxis 
                      angle={90} 
                      domain={[0, 100]} 
                      tick={{ 
                        fill: 'hsl(var(--themed-text-secondary))', 
                        fontSize: window.innerWidth < 640 ? 10 : 14 
                      }}
                    />
                    <Radar
                      name="Skills"
                      dataKey="value"
                      stroke="hsl(var(--themed-secondary))"
                      fill="hsl(var(--themed-secondary))"
                      fillOpacity={0.4}
                      strokeWidth={3}
                      dot={{ 
                        fill: 'hsl(var(--themed-primary))', 
                        strokeWidth: 3, 
                        r: window.innerWidth < 640 ? 5 : 7,
                        stroke: 'hsl(var(--themed-accent))'
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
