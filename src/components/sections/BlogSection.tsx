
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    title: "AI in Modern Development",
    excerpt: "Exploring how CrewAI and other AI tools are revolutionizing the development workflow and automating complex tasks.",
    date: "June 2025",
    readTime: "5 min read",
    category: "AI",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
    featured: true
  },
  {
    title: "React Native Best Practices",
    excerpt: "Tips and strategies for optimizing mobile app performance, improving user experience, and maintaining clean code architecture.",
    date: "May 2025",
    readTime: "7 min read",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
    featured: false
  },
  {
    title: "The Future of Full-Stack Development",
    excerpt: "Discussing emerging technologies, frameworks, and methodologies shaping the future of web development.",
    date: "April 2025",
    readTime: "6 min read",
    category: "Web",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
    featured: false
  }
];

const BlogSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const postsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const posts = postsRef.current;

    if (section && posts) {
      gsap.fromTo(
        posts.children,
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
  }, []);

  return (
    <section id="blog" ref={sectionRef} className="py-20 bg-portfolio-teal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-section-title font-bold font-poppins mb-4">
            Latest Blog Posts
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-white text-opacity-90 max-w-2xl mx-auto">
            Sharing insights, experiences, and knowledge from my development journey
          </p>
        </div>

        <div ref={postsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-xl overflow-hidden card-shadow hover:bg-opacity-20 transition-all duration-300 transform hover:-translate-y-2 ${
                post.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-portfolio-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                {post.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-portfolio-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center text-white text-opacity-70 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 font-poppins line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-white text-opacity-90 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <Button
                  variant="ghost"
                  className="text-white hover:bg-white hover:bg-opacity-20 p-0 h-auto font-medium group"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-portfolio-teal font-semibold px-8 py-3 rounded-lg transition-all duration-300"
          >
            View All Posts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
