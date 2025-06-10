
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Instagram, Facebook, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/yashwanth-pendyala-785569237",
    icon: Linkedin,
    color: "bg-blue-600",
    followers: "500+",
    description: "Professional network and career updates"
  },
  {
    platform: "GitHub",
    url: "https://github.com/Yashi1919",
    icon: Github,
    color: "bg-gray-800",
    followers: "50+",
    description: "Open source projects and code repositories"
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/your-username", // Placeholder as specified
    icon: Instagram,
    color: "bg-gradient-to-br from-purple-600 to-pink-600",
    followers: "Coming Soon",
    description: "Behind-the-scenes and personal projects"
  },
  {
    platform: "Facebook",
    url: "https://facebook.com/your-username", // Placeholder as specified
    icon: Facebook,
    color: "bg-blue-700",
    followers: "Coming Soon",
    description: "Community engagement and updates"
  }
];

const SocialMediaSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (section && cards) {
      gsap.fromTo(
        cards.children,
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating animation for social icons
      gsap.to(cards.children, {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2
      });
    }
  }, []);

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="social-media" ref={sectionRef} className="py-20 bg-portfolio-orange text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-section-title font-bold font-poppins mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-white text-opacity-90 max-w-2xl mx-auto">
            Follow my journey and connect with me across various social platforms
          </p>
        </div>

        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <div
                key={index}
                onClick={() => handleSocialClick(social.url)}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 card-shadow hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${social.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 font-poppins group-hover:text-white transition-colors">
                    {social.platform}
                  </h3>
                  
                  <p className="text-white text-opacity-80 text-sm mb-3 leading-relaxed">
                    {social.description}
                  </p>
                  
                  <div className="text-lg font-semibold mb-4 text-portfolio-secondary">
                    {social.followers}
                  </div>
                  
                  <div className="inline-flex items-center text-white hover:text-portfolio-secondary transition-colors duration-300">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Visit Profile</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 font-poppins">Stay Updated</h3>
            <p className="text-white text-opacity-90 mb-6 leading-relaxed">
              Get the latest updates on my projects, blog posts, and professional journey. 
              Connect with me on your preferred platform!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.slice(0, 2).map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleSocialClick(social.url)}
                    className={`inline-flex items-center px-6 py-3 ${social.color} text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                  >
                    <IconComponent className="w-5 h-5 mr-2" />
                    Follow on {social.platform}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
