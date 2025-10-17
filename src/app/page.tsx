import Image from "next/image";
import Container from "@/components/Container/Container";

export default function Home() {
  const toolKitArray = ['JavaScript', 'TypeScript', 'Vue.js', 'Nuxt.js', 'React', 'HTML5 + CSS3', 'Sass + Less', 'Liquid', 'PHP', 'GraphQL', 'REST API', 'Git', 'Shopify Plus', 'Storybook', 'Design Systems', 'Accessibility', 'WCAG', 'Animation', 'UX/UI Design', 'Figma', 'Adobe Creative Suite', 'Cursor', 'Copilot'];

  return (
    <div className="index">
      <Container>
        <div className="intro">
          <div className="intro-text">
            <h1>I build user-focused applications with a passion for clean code and elegant design</h1>
            <p className="large">I'm a <strong>Frontend UI/UX Engineer</strong> specializing in creating engaging and accessible web experiences. I'm a firm believer in the power of design systems to create scalable and consistent user interfaces.</p>
          </div>
          <div className="toolkit">
            <h2 className="heading-6">My Toolkit</h2>
            <ul className="toolkit-list unstyled-list">
              {
                toolKitArray.map((item, index) => {
                  return <li className="heading-4" key={index}>{item}</li>;
                })
              }
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
