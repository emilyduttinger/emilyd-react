import Link from 'next/link';
import { ReactSVG } from 'react-svg'
import styles from "./Button.module.css";

export interface ButtonProps {
  theme?: string;
  linkPath?: string;
  external?: boolean;
  renderDiv?: boolean;
  showIcon?: boolean;
  iconPath?: string;
  children: React.ReactNode;
}

export default function Button({
  theme = 'primary',
  linkPath = '',
  external = false,
  renderDiv = false,
  showIcon = true,
  iconPath = '/svg/arrow-right.svg',
  children,
}: ButtonProps) {

  // Button Classes
  const buttonClasses = `${styles.btn} btn-${theme}`;
  
  // Check if this is an anchor link (starts with #)
  const isAnchorLink = typeof linkPath === 'string' && linkPath.startsWith('#');

  // Common content (label + icon)
  const content = (
    <>
      <span className="label">
        {children}
      </span>
      {showIcon && (
        <ReactSVG src={iconPath} />
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