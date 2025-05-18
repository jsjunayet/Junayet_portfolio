"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useRef } from "react";
import { AboutSection } from "./AboutSection";
import { CTASection } from "./CTAsection";
import { HeroSection } from "./HeroSection";
import { ProjectsSection } from "./ProjectSection";

const HomePage = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  const aboutSection = useScrollAnimation();
  const projectsSection = useScrollAnimation();
  const ctaSection = useScrollAnimation();

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HeroSection scrollToAbout={scrollToAbout} />

      <AboutSection
        forwardedRef={(el) => {
          aboutRef.current = el as HTMLDivElement;
          aboutSection.ref.current = el as HTMLDivElement;
        }}
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
    </>
  );
};

export default HomePage;
