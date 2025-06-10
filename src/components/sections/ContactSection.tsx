
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send, Download, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const form = formRef.current;
    const info = infoRef.current;

    if (section && form && info) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      });

      tl.fromTo(
        info.children,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }
      )
      .fromTo(
        form.children,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" },
        "-=0.6"
      );
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pendyalayasvanth@gmail.com",
      link: "mailto:pendyalayasvanth@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7993521142",
      link: "tel:+917993521142"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ongole, Andhra Pradesh, India",
      link: "#"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-portfolio-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-section-title font-bold font-poppins mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-white text-opacity-90 max-w-2xl mx-auto">
            Let's collaborate on your next project or discuss exciting opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div ref={infoRef} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 font-poppins">Let's Connect</h3>
              <p className="text-white text-opacity-90 leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with talented individuals. 
                Whether you have a project in mind, want to discuss opportunities, or just want to 
                say hello, I'd love to hear from you!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{item.label}</div>
                      {item.link !== "#" ? (
                        <a
                          href={item.link}
                          className="text-white text-opacity-80 hover:text-white transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-white text-opacity-80">{item.value}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Resume Download */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 card-shadow">
              <h4 className="text-xl font-bold mb-4 font-poppins">Resume</h4>
              <p className="text-white text-opacity-90 mb-4">
                Download my latest resume to learn more about my experience and skills.
              </p>
              <Button
                className="bg-portfolio-secondary hover:bg-portfolio-secondary/90 text-portfolio-text font-semibold"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 card-shadow">
            <h3 className="text-2xl font-bold mb-6 font-poppins flex items-center">
              <MessageCircle className="w-6 h-6 mr-3" />
              Send Message
            </h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-white bg-opacity-20 border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:border-portfolio-secondary focus:ring-portfolio-secondary"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white bg-opacity-20 border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:border-portfolio-secondary focus:ring-portfolio-secondary"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-white bg-opacity-20 border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:border-portfolio-secondary focus:ring-portfolio-secondary resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-portfolio-secondary hover:bg-portfolio-secondary/90 text-portfolio-text font-semibold py-3 transition-all duration-300 transform hover:scale-105"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-white border-opacity-20">
          <p className="text-white text-opacity-80">
            © 2024 Pendyala Yasvanth. Built with ❤️ using React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
