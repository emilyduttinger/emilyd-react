'use client';

import Link from 'next/link';
import IconArrowRight from '../Icons/IconArrowRight'
import IconArrowDown from '../Icons/IconArrowDown'

export interface ButtonProps {
  theme?: string;
  linkPath?: string;
  external?: boolean;
  renderDiv?: boolean;
  showIcon?: boolean;
  arrowDirection?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  theme = 'primary',
  linkPath = '',
  external = false,
  renderDiv = false,
  showIcon = true,
  arrowDirection = 'right',
  className = '',
  children,
}: ButtonProps) {

  // Button Classes
  const buttonClasses = `btn btn-${theme} ${className}`;
  
  // Check if this is an anchor link (starts with #)
  const isAnchorLink = typeof linkPath === 'string' && linkPath.startsWith('#');

  // Smooth scroll handler for anchor links
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isAnchorLink) {
      e.preventDefault();
      const scrollToElement = document.querySelector(linkPath);
      if (scrollToElement !== null) {
        window.scrollTo({
          top: scrollToElement.getBoundingClientRect().top + window.scrollY,
          behavior: 'smooth'
        });
      }
    }
  };

  // Common content (label + icon)
  const content = (
    <>
      <span>
        {children}
      </span>
      {showIcon && (
        <span className={`icon icon-arrow-${arrowDirection}`}>
          {arrowDirection === 'down' ? <IconArrowDown /> 
            : <IconArrowRight />}
        </span>
      )}
    </>
  );

  // Conditionally render based on props
  if (linkPath) {
    if (external || isAnchorLink) {
      // Render <a> tag for external or anchor links
      return (
        <a
          href={linkPath}
          className={buttonClasses}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          onClick={isAnchorLink ? handleAnchorClick : undefined}
        >
          {content}
        </a>
      );
    } else {
      // Render Next.js Link for internal navigation
      return (
        <Link href={linkPath} className={buttonClasses}>
          {content}
        </Link>
      );
    }
  } else if (renderDiv) {
    // Render <div>
    return (
      <div className={buttonClasses}>
        {content}
      </div>
    );
  }

  // Default: render <button>
  return (
    <button className={buttonClasses} type="button">
      {content}
    </button>
  );
}