"use client"

import * as m from "motion/react-m"

export interface AnimationProps {
  fadeUp?: boolean;
  scrolling?: boolean;
  className?: string;
  transitionDelay?: number;
  duration?: number;
  children: React.ReactNode;
}

export default function Fade({ fadeUp = false, scrolling = false, className = "", transitionDelay = 0, duration = 0.5, children }: AnimationProps) {
  const animationAttributes = fadeUp ? {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: transitionDelay, duration: duration, ease: "easeInOut" }
  } : scrolling ? {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { amount: 0.5, once: true },
    transition: { delay: transitionDelay, duration: duration, ease: "easeInOut" }
  } : {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: transitionDelay, duration: duration, ease: "easeInOut" }
  }
  
  return (
    <m.div {...(animationAttributes as React.ComponentProps<typeof m.div>)} className={className}>
      {children}
    </m.div>
  );
}