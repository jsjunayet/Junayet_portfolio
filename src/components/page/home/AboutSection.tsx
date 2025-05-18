import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface Skill {
  category: string;
  techs: string[];
}

interface AboutSectionProps {
  forwardedRef: React.RefObject<HTMLDivElement>;
  isIntersecting: boolean;
}

export function AboutSection({
  forwardedRef,
  isIntersecting,
}: AboutSectionProps) {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  const skills: Skill[] = [
    {
      category: "Frontend",
      techs: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React",
        "Vue.js",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "SASS",
      ],
    },
    {
      category: "Backend",
      techs: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "Firebase",
        "RESTful APIs",
        "GraphQL",
      ],
    },
    {
      category: "Tools & Others",
      techs: [
        "Git",
        "GitHub",
        "VS Code",
        "Figma",
        "Adobe XD",
        "Responsive Design",
        "UI/UX",
        "Performance Optimization",
      ],
    },
  ];

  return (
    <section
      ref={forwardedRef}
      className={cn(
        " transition-all duration-700 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 ",
        isIntersecting
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-5 inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-[#00C951] pb-2">
            About Me
          </h2>
          <p className="mb-4">
            I&apos;m a passionate Frontend Developer from Dhaka, Bangladesh with
            5+ years of experience in building responsive and user-friendly web
            applications.
          </p>
          <p className="mb-4">
            My expertise lies in creating clean, efficient code using modern
            frameworks and libraries, with a keen eye for design and user
            experience.
          </p>
          <p className="mb-6">
            I&apos;m constantly learning and staying up-to-date with the latest
            technologies and best practices in web development to deliver
            high-quality solutions.
          </p>
          <Button asChild>
            <Link href="/about">
              Learn More <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
        <div className="bg-muted rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-4">Skills & Expertise</h3>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div
                key={skill.category}
                className="border border-border rounded-lg overflow-hidden"
              >
                <button
                  className={`w-full p-4 text-left font-medium flex justify-between items-center ${
                    activeSkill === index
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-secondary"
                  }`}
                  onClick={() =>
                    setActiveSkill(activeSkill === index ? null : index)
                  }
                >
                  {skill.category}
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      activeSkill === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all ${
                    activeSkill === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-4 flex flex-wrap gap-2">
                    {skill.techs.map((tech) => (
                      <span key={tech} className="skill-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
