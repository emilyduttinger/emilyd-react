"use client"

import Container from "../Container/Container";
import Button from "./Button";
import { motion } from "motion/react"

export interface PageHeadingProps {
  heading: string;
  url?: string;
  buttonLabel?: string;
  buttonExternal?: boolean;
}

export default function PageHeading({heading, url, buttonLabel, buttonExternal = false}: PageHeadingProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y:0 }}
      transition={{ delay: 0, duration: 0.5, ease: "easeInOut" }}
      className="pt-[var(--stacked-component-lg)]"
    >
      <Container className="sm:flex sm:justify-between sm:items-center text-center sm:text-left">
        <h1 className="mb-0 heading-lg">{heading}</h1>
        {
          typeof url === 'string' && typeof buttonLabel === 'string' && (
            <Button linkPath={url} className="mt-[var(--heading-margin)] sm:mt-0" external={buttonExternal}>{buttonLabel}</Button>
          )
        }
      </Container>
    </motion.div>
  );
}