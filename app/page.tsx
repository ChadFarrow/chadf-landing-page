import Background from '@/components/Background';
import Header from '@/components/Header';
import ProjectSection from '@/components/ProjectSection';
import SocialLinks from '@/components/SocialLinks';
import Footer from '@/components/Footer';
import { projectSections } from '@/data/projects';

export default function Home() {
  return (
    <>
      <Background />
      <div className="container">
        <Header />
        {projectSections.map((section) => (
          <ProjectSection key={section.title} section={section} />
        ))}
        <SocialLinks />
        <Footer />
      </div>
    </>
  );
}
