"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Code, ExternalLink, Github, Search } from "lucide-react";
import { useState } from "react";

const ProjectPage = () => {
  const [filter, setFilter] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Project data
  const projectsData = [
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
      category: "fullstack",
      link: "https://streegrub.vercel.app/", // replace with actual link if available
      github: "https://github.com/jsjunayet/street_food_frontend", // replace with actual link if available
      featured: true,
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
      category: "fullstack",
      link: "https://carwebsite-five.vercel.app/", // replace with actual link if available
      github: "https://github.com/jsjunayet/car_website", // replace with actual link if available
      featured: true,
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
      category: "frontend",
      link: "https://parcel-trade.vercel.app/", // Replace with real URL if deployed
      github: "https://github.com/jsjunayet/percel-trade", // Replace with your GitHub link
      featured: true,
    },
  ];

  // Categories for filtering
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "frontend", name: "Frontend" },
    { id: "fullstack", name: "Full Stack" },
  ];

  // Filter projects based on search term and category
  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(filter.toLowerCase()) ||
      project.description.toLowerCase().includes(filter.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(filter.toLowerCase())
      );

    const matchesCategory =
      activeCategory === "all" || project.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            My Projects
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore a selection of my latest work. Each project represents a
            unique challenge and showcases different aspects of my technical
            skills and creative approach.
          </p>
        </div>
      </section>

      {/* Filter Controls */}
      <section className=" border-b sticky top-16 z-30 py-4 backdrop-blur-sm bg-background/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8   py-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            {/* Category Filters */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    activeCategory === category.id ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search
                size={18}
                className="absolute left-2.5 top-2.5 text-muted-foreground"
              />
              <Input
                type="text"
                placeholder="Search projects..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`bg-card border rounded-xl overflow-hidden shadow-sm card-hover ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    {project.featured && (
                      <span className="text text-accent text-xs px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center bg-secondary text-xs font-medium px-2 py-1 rounded"
                      >
                        <Code size={12} className="mr-1" />
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild size="sm">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={14} className="mr-1" /> Live Demo
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={14} className="mr-1" /> View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-xl font-medium mb-2">No projects found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setFilter("");
                setActiveCategory("all");
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-primary/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Need a custom project?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            I'm always open to discussing new projects and ideas. Let's create
            something amazing together.
          </p>
          <Button asChild size="lg">
            <a href="/contact">Get In Touch</a>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
