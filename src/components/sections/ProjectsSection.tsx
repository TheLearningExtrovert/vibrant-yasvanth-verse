
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
    <section id="projects" ref={sectionRef} className="py-20 bg-portfolio-yellow text-portfolio-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-section-title font-bold font-poppins mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-portfolio-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-portfolio-text text-opacity-80 max-w-2xl mx-auto">
            Showcasing innovative solutions and technical excellence across various domains
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => handleFilterChange(category)}
              variant={activeFilter === category ? "default" : "outline"}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-portfolio-primary text-white shadow-lg'
                  : 'border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white'
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`project-card bg-white rounded-xl overflow-hidden card-shadow hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                project.featured ? 'lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-portfolio-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 font-poppins text-portfolio-primary">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-portfolio-secondary bg-opacity-10 text-portfolio-secondary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {project.live && (
                    <Button
                      size="sm"
                      className="bg-portfolio-secondary hover:bg-portfolio-secondary/90 text-white"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
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
