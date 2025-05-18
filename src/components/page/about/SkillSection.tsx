import {
  ArrowRight,
  Code,
  Cpu,
  Database,
  Figma,
  FileJson,
  Github,
  Globe,
  TerminalSquare,
} from "lucide-react";
import React from "react";
import SkillCard from "./SkillCard";

const SkillsSection: React.FC = () => {
  const frontendSkills = [
    { name: "HTML5", icon: Code },
    { name: "CSS3", icon: Code },
    { name: "JavaScript", icon: FileJson },
    { name: "TypeScript", icon: FileJson },
    { name: "React", icon: Code },
    { name: "Tailwind CSS", icon: Code },
    { name: "Sass", icon: Code },
  ];

  const backendSkills = [
    { name: "Node.js", icon: TerminalSquare },
    { name: "Express", icon: TerminalSquare },
    { name: "MongoDB", icon: Database },
    { name: "RESTful APIs", icon: Globe },
    { name: "Firebase", icon: Database },
  ];

  const toolsSkills = [
    { name: "Git", icon: ArrowRight },
    { name: "GitHub", icon: Github },
    { name: "Figma", icon: Figma },
    { name: "UI/UX Design", icon: Figma },
    { name: "Responsive Design", icon: Code },
    { name: "Performance", icon: Cpu },
  ];

  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard
            title="Frontend Development"
            skills={frontendSkills}
            className="border-t-4 border-blue-500"
          />
          <SkillCard
            title="Backend Knowledge"
            skills={backendSkills}
            className="border-t-4 border-green-500"
          />
          <SkillCard
            title="Tools & Design"
            skills={toolsSkills}
            className="border-t-4 border-purple-500"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
