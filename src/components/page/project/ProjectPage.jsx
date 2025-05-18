"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Code, ExternalLink, Github, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const ProjectPage = () => {
  const [filter, setFilter] = useState("");
  const [activeCategory, setActiveCategory] = useState < string > "all";

  // Project data
  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with product catalog, cart functionality, and payment processing.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      category: "fullstack",
      link: "https://ecommerce-demo.asifdev.com",
      github: "https://github.com/asifdev/ecommerce",
      featured: true,
    },
    {
      id: 2,
      title: "Portfolio CMS",
      description:
        "A content management system for designers and developers to showcase their work easily.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity.io"],
      category: "frontend",
      link: "https://portfolio-cms.asifdev.com",
      github: "https://github.com/asifdev/portfolio-cms",
      featured: true,
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A productivity application with task tracking, deadlines, and team collaboration features.",
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&h=400",
      technologies: ["Vue.js", "Firebase", "Vuetify", "PWA"],
      category: "fullstack",
      link: "https://taskmaster.asifdev.com",
      github: "https://github.com/asifdev/task-manager",
      featured: true,
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description:
        "Real-time weather forecasting application with location-based data and interactive maps.",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js", "Leaflet"],
      category: "frontend",
      link: "https://weather-app.asifdev.com",
      github: "https://github.com/asifdev/weather-app",
      featured: false,
    },
    {
      id: 5,
      title: "Personal Finance Tracker",
      description:
        "An application to track personal expenses, income, and financial goals with visualization.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400",
      technologies: ["React", "Redux", "Express", "MongoDB", "D3.js"],
      category: "fullstack",
      link: "https://finance-tracker.asifdev.com",
      github: "https://github.com/asifdev/finance-tracker",
      featured: false,
    },
    {
      id: 6,
      title: "Restaurant Website",
      description:
        "A modern website for a local restaurant with online menu and reservation system.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      category: "frontend",
      link: "https://restaurant-demo.asifdev.com",
      github: "https://github.com/asifdev/restaurant-website",
      featured: false,
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
        <div className="section-container text-center">
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
        <div className="section-container py-4">
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
      <section className="section-container">
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
                      <span className="bg-accent/20 text-accent text-xs px-2 py-1 rounded-full">
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
        <div className="section-container text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Need a custom project?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            I'm always open to discussing new projects and ideas. Let's create
            something amazing together.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get In Touch</likn>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
