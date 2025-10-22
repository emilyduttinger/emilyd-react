import Container from "@/components/Container/Container";
import styles from './HomeIntro.module.css';
import Button from "../UI/Button";
import VideoPlayer from "../UI/VideoPlayer";
import Fade from "../Animation/Fade";

export default function HomeIntro() {
  const toolKitArray = ['JavaScript', 'TypeScript', 'Vue.js', 'Nuxt.js', 'React', 'HTML5 + CSS3', 'Sass + Less', 'Liquid', 'PHP', 'GraphQL', 'REST API', 'Git', 'Shopify Plus', 'Storybook', 'Design Systems', 'Accessibility', 'WCAG', 'Animation', 'UX/UI Design', 'Figma', 'Adobe Creative Suite', 'Cursor', 'Copilot'];

  return (
    <div className={styles.homeIntro}>
    <Container>
      <div className={styles.intro}>
        <Fade fadeUp className={styles.introText}>
          <h1>I build user-focused applications with a passion for clean code and elegant design</h1>
          <p className="large">I'm a <strong>Frontend UI/UX Engineer</strong> specializing in creating engaging and accessible web experiences. I'm a firm believer in the power of design systems to create scalable and consistent user interfaces.</p>
          <Button linkPath="/work" className="mt-[var(--heading-margin)]">View My Work</Button>
        </Fade>
        <Fade transitionDelay={0.3} className={styles.toolkit}>
          <h2 className="heading-6">My Toolkit</h2>
          <ul className={`${styles.toolkitList} unstyled-list`}>
            {
              toolKitArray.map((item, index) => {
                return <li className="heading-4 m-0" key={index}>{item}</li>;
              })
            }
          </ul>
        </Fade>
      </div>
    </Container>
    <Fade transitionDelay={0.5} duration={0.8}>
      <VideoPlayer className={styles.introVideo} videoUrl="/video/rainbow-bg-hero.mp4" />
    </Fade>
  </div>
  );
}