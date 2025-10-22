"use client"

import { LazyMotion, domAnimation } from "motion/react"

export default function AnimationProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}

