import PageHeading from "@/components/UI/PageHeading";
import Container from "@/components/Container/Container";
import Image from "next/image";
import styles from '@/components/Navigation/Navigation.module.css'

export default function About() {
  return (
    <div>
      <PageHeading heading="UX/UI Engineer" />
      <Container className="flex flex-col items-center justify-center lg:flex-row gap-[var(--stacked-component-md)]">
        <Image src="/images/me_espresso.jpg" alt="Emily Duttinger Headshot" className="w-full lg:w-[50%] rounded-sm self-start" width={1600} height={2133} />
        <div className="w-full lg:w-[50%]">
          <h2>Frontend UX/UI Engineer Based in Boynton Beach, FL</h2>
          <p>Hello! I&rsquo;m Emily Duttinger, a Frontend UX/UI Engineer with over 10 years of experience bringing digital ideas to life through thoughtful design and clean, scalable code. With a background in design, I approach every project as both an engineer and a designer&mdash;balancing creativity, usability, and technical precision.</p>
          <p>My background in design shapes the way I build. Every component, animation, and interaction should not only work but feel right. I care deeply about design systems, accessibility, and writing clean, maintainable code that makes the web more intuitive and inclusive.</p>
          <p>I&rsquo;m always looking to partner with teams who value craftsmanship, creativity, and purposeful user experiences.</p>
          <div className={`${styles.navigation} mt-[var(--heading-margin)]`}>
            <ul className="unstyled-list navigation-menu">
              <li>
                <a className="inline-link" href="/pdf/EmilyDuttingerResume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
              </li>
              <li>
                <a className="inline-link" href="https://www.linkedin.com/in/emilyduttinger/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </li>
              <li>
                <a className="inline-link" href="https://github.com/emilyduttinger" target="_blank" rel="noopener noreferrer">GitHub</a>
              </li>
              <li>
                <a className="inline-link" href="mailto:emilyduttinger@gmail.com" target="_blank" rel="noopener noreferrer">Email Me</a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}