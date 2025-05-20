"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { AboutSection } from "./AboutSection";
import BlogPost from "./BlogPost";
import { CTASection } from "./CTAsection";
import { HeroSection } from "./HeroSection";
import { ProjectsSection } from "./ProjectSection";

const HomePage = () => {
  const aboutSection = useScrollAnimation();
  const projectsSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  const scrollToAbout = () => {
    aboutSection.ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HeroSection scrollToAbout={scrollToAbout} />

      <AboutSection
        forwardedRef={aboutSection.ref}
        isIntersecting={aboutSection.isIntersecting}
      />

      <ProjectsSection
        forwardedRef={projectsSection.ref}
        isIntersecting={projectsSection.isIntersecting}
      />

      <CTASection
        forwardedRef={ctaSection.ref}
        isIntersecting={ctaSection.isIntersecting}
      />
      <BlogPost />
    </>
  );
};

export default HomePage;
