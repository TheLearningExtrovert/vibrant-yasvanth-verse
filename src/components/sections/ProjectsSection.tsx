import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/animations/AnimatedSection';
import MagneticButton from '@/components/animations/MagneticButton';
import TextReveal from '@/components/animations/TextReveal';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    title: "Memes For You",
    description: "A dynamic meme-sharing application with real-time feeds, user interactions, and social features built with modern web technologies.",
    technologies: ["ReactJS", "Node.js", "MongoDB", "Socket.io"],
    category: "Web",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    github: "https://github.com/Yashi1919/memes-for-you",
    live: "https://meme-verse-archive.vercel.app",
    featured: true
  },
  {
    title: "Musica",
    description: "Music-sharing application with WebSocket real-time communication, allowing users to share and discover music collaboratively.",
    technologies: ["React Native", "Firebase", "WebSocket", "Audio APIs"],
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop",
    live: "https://musica-tau-ecru.vercel.app",
    featured: true
  },
  {
    title: "Social Media Automation",
    description: "Intelligent content automation system that schedules and posts content across multiple social media platforms using AI.",
    technologies: ["Make.com", "Gemini AI", "APIs", "Automation"],
    category: "AI",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    featured: false
  },
  {
    title: "Marketing Agent",
    description: "AI-powered marketing assistant built with CrewAI that analyzes market trends and generates marketing strategies.",
    technologies: ["CrewAI", "Python", "ML", "Analytics"],
    category: "AI",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    featured: false
  }
];

const categories = ["All", "Web", "Mobile", "AI"];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Epic project cards entrance
    gsap.fromTo(
      '.project-card',
      { 
        opacity: 0, 
        y: 100, 
        scale: 0.7,
        rotation: 15,
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        filter: "blur(0px)",
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Continuous floating animation for project cards
    const cards = section.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
      gsap.to(card, {
        y: Math.sin(index * 0.5) * 15,
        rotation: Math.sin(index * 0.3) * 3,
        duration: 4 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: index * 0.3
      });
    });
  }, [filteredProjects]);

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    
    // Animate out current projects
    gsap.to('.project-card', {
      opacity: 0,
      scale: 0.8,
      y: 50,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        if (category === "All") {
          setFilteredProjects(projectsData);
        } else {
          setFilteredProjects(projectsData.filter(project => project.category === category));
        }
      }
    });
  };

  return (
    <section id="projects" ref={sectionRef} className="py-12 sm:py-20 themed-background section-enhanced relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 left-20 w-48 h-48 bg-themed-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-20 w-64 h-64 bg-themed-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-themed-accent/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection animation="scale" className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-section-title font-bold font-poppins mb-4 themed-text-glow" style={{ color: 'hsl(var(--themed-text))' }}>
            <TextReveal animation="wave">Featured Projects</TextReveal>
          </h2>
          <div className="w-16 sm:w-24 h-1 mx-auto rounded-full mb-4 sm:mb-6 relative overflow-hidden" style={{ backgroundColor: 'hsl(var(--themed-primary))' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-themed-primary via-themed-secondary to-themed-accent animate-pulse" />
          </div>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto opacity-90" style={{ color: 'hsl(var(--themed-text-secondary))' }}>
            <TextReveal animation="typewriter">
              Showcasing innovative solutions and technical excellence across various domains
            </TextReveal>
          </p>
        </AnimatedSection>

        {/* Enhanced Project Filters */}
        <AnimatedSection animation="fadeUp" className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {categories.map((category) => (
            <MagneticButton
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all duration-500 text-sm sm:text-base relative overflow-hidden ${
                activeFilter === category
                  ? 'project-filter-button active themed-border-glow shadow-2xl scale-110'
                  : 'project-filter-button border border-opacity-30 hover:scale-105'
              }`}
            >
              <span className="relative z-10 flex items-center">
                <Filter className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                {category}
              </span>
              {activeFilter === category && (
                <div className="absolute inset-0 bg-gradient-to-r from-themed-secondary to-themed-accent opacity-50 animate-pulse" />
              )}
            </MagneticButton>
          ))}
        </AnimatedSection>

        {/* Enhanced Projects Grid */}
        <div ref={projectsRef} className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`project-card themed-card rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 group relative ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
              style={{
                background: 'linear-gradient(135deg, hsl(var(--themed-surface)), hsl(var(--themed-surface) / 0.8))',
                boxShadow: '0 10px 40px hsl(var(--themed-glow) / 0.2)'
              }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-themed-primary/10 via-transparent to-themed-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-themed-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4">
                  <span 
                    className="px-3 py-1 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm"
                    style={{
                      backgroundColor: 'hsl(var(--themed-primary) / 0.8)',
                      color: 'hsl(var(--themed-background))',
                      boxShadow: '0 0 20px hsl(var(--themed-glow) / 0.5)'
                    }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6 relative z-10">
                <h3 className="text-lg sm:text-xl font-bold mb-3 font-poppins themed-text-glow group-hover:scale-105 transition-transform duration-300 text-themed-primary">
                  {project.title}
                </h3>
                
                <p className="mb-4 leading-relaxed text-sm sm:text-base group-hover:text-opacity-100 transition-all duration-300 text-themed-text-secondary">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:scale-110"
                      style={{
                        backgroundColor: 'hsl(var(--themed-secondary) / 0.2)',
                        color: 'hsl(var(--themed-secondary))',
                        border: '1px solid hsl(var(--themed-secondary) / 0.3)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  {project.github && (
                    <MagneticButton
                      className="project-button-github border transition-all duration-300 hover:scale-105 text-sm px-4 py-2 rounded-lg font-medium backdrop-blur-sm"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Code
                    </MagneticButton>
                  )}
                  {project.live && (
                    <MagneticButton
                      className="project-button-live transition-all duration-300 hover:scale-105 text-sm px-4 py-2 rounded-lg font-medium"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Live Demo
                    </MagneticButton>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
