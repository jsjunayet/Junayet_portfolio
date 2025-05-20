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
  forwardedRef: React.RefObject<HTMLDivElement | null>;
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
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Shadcn UI",
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
      ],
    },
    {
      category: "Tools & Others",
      techs: [
        "Git",
        "GitHub",
        "VS Code",
        "Figma",
        "Responsive Design",
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
            I&apos;m a passionate Full Stack Web Developer with a background in
            Computer Science and Engineering. I recently completed a 4-month
            remote paid internship at CloudGen, where I worked on real-world
            projects using React.js, Next.js, Node.js, and MongoDB.
          </p>

          <p className="mb-6">
            I&apos;ve contributed to multiple remote team projects, gaining
            strong collaboration skills. I enjoy solving problems and writing
            clean, scalable code. My tech stack includes TypeScript, Redux,
            PostgreSQL, and Prisma. So far, I’ve built 5+ full-stack
            applications with a focus on performance and user experience.
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
