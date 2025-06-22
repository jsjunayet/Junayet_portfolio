import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  github: string;
}

interface ProjectsSectionProps {
  forwardedRef: React.RefObject<HTMLDivElement | null>;
  isIntersecting: boolean;
}

export function ProjectsSection({
  forwardedRef,
  isIntersecting,
}: ProjectsSectionProps) {
  const projects: Project[] = [
    {
      id: 1,
      title: "StreedGrub",
      description:
        "A full-stack street food discovery platform with role-based access control, JWT authentication, premium content, real-time moderation, and payment integration via ShurjoPay.",
      image: "https://i.ibb.co/gM1FgzCP/Screenshot-2025-06-22-093424.png",
      technologies: [
        "NextJS",
        "TypeScript",
        "ShadcnUI",
        "Prisma",
        "Node.js",
        "PostgreSQL",
        "Express.js",
        "JWT",
        "ShurjoPay",
      ],
      link: "https://streegrub.vercel.app/", // replace with actual link if available
      github: "https://github.com/jsjunayet/street_food_frontend", // replace with actual link if available
    },
    {
      id: 2,
      title: "CartBazzars",
      description:
        "A secure full-stack car shop application with smart filtering, JWT-based authentication, real-time product management, and a responsive UI integrated with SurjoPay.",
      image: "https://i.ibb.co/84XkTmsm/Screenshot-2025-06-22-093331.png",
      technologies: [
        "React",
        "TypeScript",
        "Redux",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "SurjoPay",
      ],
      link: "https://carwebsite-five.vercel.app/", // replace with actual link if available
      github: "https://github.com/jsjunayet/car_website", // replace with actual link if available
    },
    {
      id: 3,
      title: "Parcel Trade",
      description:
        "A modern e-commerce platform featuring multi-category product browsing, cart management, manual payment processing, dynamic shipping charge calculator, and role-based interface. I was responsible for developing the full frontend UI and interactions.",
      image: "https://i.ibb.co/Y4fQ7qL9/Screenshot-2025-06-22-094431.png", // Replace with real project image if you have one
      technologies: [
        "NextJS",
        "Tailwind CSS",
        "Redux",
        "Formik",
        "Zod",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
      ],
      link: "https://parcel-trade.vercel.app/", // Replace with real URL if deployed
      github: "https://github.com/jsjunayet/percel-trade", // Replace with your GitHub link
    },
  ];

  return (
    <section
      ref={forwardedRef}
      className={cn(
        "bg-secondary py-16 sm:py-24 transition-all duration-700 ",
        isIntersecting
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-5 inline-block relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-[#00C951] pb-2">
            Featured Projects
          </h2>
          <Button asChild>
            <Link href="/projects">
              View All Projects <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "bg-card border rounded-xl overflow-hidden shadow-sm card-hover transition-all duration-700",
                isIntersecting
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-secondary text-xs font-medium px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button asChild size="sm">
                    <Link href={project.link}>
                      <ExternalLink size={14} className="mr-1" /> View Project
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={14} className="mr-1" /> Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
