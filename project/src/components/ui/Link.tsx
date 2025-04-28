import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ 
  href, 
  children, 
  className = '', 
  ...props 
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Handle anchor links
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    } else {
      window.location.href = href;
    }
    
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className={`text-white hover:text-purple-400 transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};