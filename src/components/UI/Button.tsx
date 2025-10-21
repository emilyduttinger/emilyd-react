'use client';

import Link from 'next/link';
import IconArrowRight from '../Icons/IconArrowRight'

export interface ButtonProps {
  theme?: string;
  linkPath?: string;
  external?: boolean;
  renderDiv?: boolean;
  showIcon?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  theme = 'primary',
  linkPath = '',
  external = false,
  renderDiv = false,
  showIcon = true,
  className = '',
  children,
}: ButtonProps) {

  // Button Classes
  const buttonClasses = `btn btn-${theme} ${className}`;

  // Common content (label + icon)
  const content = (
    <>
      <span>
        {children}
      </span>
      {showIcon && (
        <span className="icon">
          <IconArrowRight />
        </span>
      )}
    </>
  );

  // Conditionally render based on props
  if (linkPath) {
    if (external) {
      // Render <a> tag for external or anchor links
      return (
        <a
          href={linkPath}
          className={buttonClasses}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
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