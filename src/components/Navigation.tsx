
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';

const navigationItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Blog', href: '#blog' },
  { name: 'Social Media', href: '#social-media' },
  { name: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Animate navigation on load
    gsap.fromTo(
      ".nav-item",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.3 }
    );

    // Intersection Observer for active section detection
    const observerOptions = {
      threshold: 0.6,
      rootMargin: '-20% 0px -70% 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    navigationItems.forEach(({ href }) => {
      const element = document.querySelector(href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span 
              className="text-2xl font-bold font-poppins nav-item themed-text-glow"
              style={{ color: 'hsl(var(--themed-text))' }}
            >
              Yasvanth
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`nav-item px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                    activeSection === item.href.slice(1)
                      ? 'themed-border-glow'
                      : 'hover:themed-border-glow'
                  }`}
                  style={{
                    color: activeSection === item.href.slice(1) 
                      ? 'hsl(var(--themed-text))' 
                      : 'hsl(var(--themed-text-secondary))',
                    background: activeSection === item.href.slice(1) 
                      ? 'hsl(var(--themed-primary) / 0.2)' 
                      : 'transparent'
                  }}
                  aria-label={`Navigate to ${item.name} section`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="nav-item inline-flex items-center justify-center p-2 rounded-md themed-border-glow focus:outline-none focus:ring-2 focus:ring-opacity-50"
              style={{ color: 'hsl(var(--themed-text))' }}
              aria-expanded="false"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 themed-surface">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                  activeSection === item.href.slice(1)
                    ? 'themed-border-glow'
                    : 'hover:themed-border-glow'
                }`}
                style={{
                  color: activeSection === item.href.slice(1) 
                    ? 'hsl(var(--themed-text))' 
                    : 'hsl(var(--themed-text-secondary))',
                  background: activeSection === item.href.slice(1) 
                    ? 'hsl(var(--themed-primary) / 0.2)' 
                    : 'transparent'
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
