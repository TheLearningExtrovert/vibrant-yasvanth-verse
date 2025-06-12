
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  magneticStrength?: number;
  style?: React.CSSProperties;
}

const MagneticButton = ({ 
  children, 
  className = '', 
  onClick,
  magneticStrength = 0.3,
  style
}: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(button, {
        duration: 0.3,
        x: x * magneticStrength,
        y: y * magneticStrength,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        duration: 0.5,
        x: 0,
        y: 0,
        ease: "elastic.out(1, 0.3)"
      });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [magneticStrength]);

  return (
    <button
      ref={buttonRef}
      className={`${className} transform transition-all duration-300 hover:shadow-2xl`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default MagneticButton;
