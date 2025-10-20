"use client"

import Container from "../Container/Container";
import { motion } from "motion/react"

export interface PageHeadingProps {
  heading: string;
}

export default function PageHeading({heading}: PageHeadingProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y:0 }}
      transition={{ delay: 0, duration: 0.5, ease: "easeInOut" }}
      className="pt-[var(--stacked-component-lg)]"
    >
      <Container>
        <h1 className="mb-0 heading-lg">{heading}</h1>
      </Container>
    </motion.div>
  )
}