
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    const projects = projectsRef.current;

    if (section && projects) {
      gsap.fromTo(
        '.project-card',
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
  }, [filteredProjects]);

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    if (category === "All") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === category));
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-12 sm:py-20 themed-background section-enhanced">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-section-title font-bold font-poppins mb-4 themed-text-glow" style={{ color: 'hsl(var(--themed-text))' }}>
            Featured Projects
          </h2>
          <div className="w-16 sm:w-24 h-1 mx-auto rounded-full mb-4 sm:mb-6" style={{ backgroundColor: 'hsl(var(--themed-primary))' }}></div>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto opacity-90" style={{ color: 'hsl(var(--themed-text-secondary))' }}>
            Showcasing innovative solutions and technical excellence across various domains
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                activeFilter === category
                  ? 'themed-border-glow shadow-lg'
                  : 'border border-opacity-30 hover:scale-105'
              }`}
              style={{
                backgroundColor: activeFilter === category ? 'hsl(var(--themed-primary))' : 'hsl(var(--themed-surface))',
                color: activeFilter === category ? 'hsl(var(--themed-background))' : 'hsl(var(--themed-text))',
                borderColor: 'hsl(var(--themed-primary))'
              }}
            >
              <Filter className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`project-card themed-card rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span 
                    className="px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                    style={{
                      backgroundColor: 'hsl(var(--themed-primary))',
                      color: 'hsl(var(--themed-background))'
                    }}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-3 font-poppins themed-text-glow" style={{ color: 'hsl(var(--themed-primary))' }}>
                  {project.title}
                </h3>
                
                <p className="mb-4 leading-relaxed text-sm sm:text-base" style={{ color: 'hsl(var(--themed-text-secondary))' }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                      style={{
                        backgroundColor: 'hsl(var(--themed-secondary) / 0.2)',
                        color: 'hsl(var(--themed-secondary))'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  {project.github && (
                    <Button
                      size="sm"
                      className="border transition-all duration-300 hover:scale-105 text-sm"
                      style={{
                        borderColor: 'hsl(var(--themed-primary))',
                        backgroundColor: 'transparent',
                        color: 'hsl(var(--themed-primary))'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'hsl(var(--themed-primary))';
                        e.currentTarget.style.color = 'hsl(var(--themed-background))';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = 'hsl(var(--themed-primary))';
                      }}
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Code
                    </Button>
                  )}
                  {project.live && (
                    <Button
                      size="sm"
                      className="transition-all duration-300 hover:scale-105 text-sm"
                      style={{
                        backgroundColor: 'hsl(var(--themed-secondary))',
                        color: 'hsl(var(--themed-background))'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '0.9';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '1';
                      }}
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Live Demo
                    </Button>
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
