import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";
import Link from "next/link";
import SkillsSection from "./SkillSection";

const AboutPage = () => {
  // Experience data
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechBD Solutions",
      period: "2022 - Present",
      description:
        "Leading the frontend development team in creating responsive web applications using React, Next.js, and TypeScript. Implementing modern UI/UX practices and optimizing performance.",
    },
    {
      title: "Frontend Developer",
      company: "Dhaka Innovation Hub",
      period: "2019 - 2022",
      description:
        "Developed and maintained multiple client websites and web applications, focusing on responsive design and cross-browser compatibility using React, Vue.js, and Tailwind CSS.",
    },
    {
      title: "UI/UX Designer & Developer",
      company: "CreativeMinds Agency",
      period: "2017 - 2019",
      description:
        "Designed user interfaces and implemented frontend solutions for various clients, collaborating with multidisciplinary teams to deliver high-quality web products.",
    },
  ];

  // Education data
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Dhaka",
      period: "2014 - 2018",
      description:
        "Focused on web technologies, software engineering, and UI/UX design principles. Participated in multiple hackathons and coding competitions.",
    },
    {
      degree: "Web Development Certification",
      institution: "Bangladesh IT Institute",
      period: "2016",
      description:
        "Intensive program covering modern web development practices, responsive design, and JavaScript frameworks.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                About Me
              </h1>
              <p className="text-lg mb-4">
                I&apos;m <strong>Asif Ahmed</strong>, a passionate Frontend
                Developer and UI/UX Designer from Dhaka, Bangladesh with over 5
                years of industry experience.
              </p>
              <p className="text-muted-foreground mb-8">
                My journey in web development started in 2017, and since then,
                I&apos;ve been creating engaging digital experiences for clients
                across various industries.
              </p>
              <Button asChild variant="outline">
                <a
                  href="/Asif_Ahmed_Resume.pdf"
                  download
                  className="flex items-center"
                >
                  Download Resume
                </a>
              </Button>
            </div>
            <div className="bg-card shadow-md rounded-2xl overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Personal Info</h3>
                <ul className="space-y-4">
                  <li className="flex gap-2">
                    <span className="font-medium w-24">Name:</span>
                    <span className="text-muted-foreground">Asif Ahmed</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium w-24">Location:</span>
                    <span className="text-muted-foreground">
                      Dhaka, Bangladesh
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium w-24">Email:</span>
                    <a
                      href="mailto:asif@example.com"
                      className="text-primary hover:underline"
                    >
                      asif@example.com
                    </a>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium w-24">Phone:</span>
                    <a
                      href="tel:+8801712345678"
                      className="text-primary hover:underline"
                    >
                      +880 1712 345678
                    </a>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium w-24">Availability:</span>
                    <span className="text-[#00C951]">Available for Job</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 inline-block relative after:content-['] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-[#00C951]">
          Work Experience
        </h2>
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:-translate-x-1/2 before:h-full before:bg-border">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse text-left md:text-right"
              }`}
            >
              <div
                className={`md:w-1/2 relative mb-8 md:mb-0 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="bg-card p-6 rounded-lg border shadow-sm card-hover">
                  <div className="flex items-center mb-3">
                    <Briefcase size={18} className="text-[#00C951] mr-2" />
                    <h3 className="text-xl font-bold">{experience.title}</h3>
                  </div>
                  <p className="text-primary font-medium mb-2">
                    {experience.company}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar size={14} className="mr-1" />
                    <span>{experience.period}</span>
                  </div>
                  <p className="text-muted-foreground">
                    {experience.description}
                  </p>
                </div>
                <div
                  className={`absolute top-6 h-5 w-5 rounded-full bg-[#00C951] border-4 border-background ${
                    index % 2 === 0
                      ? "right-[-10.5px] md:right-[-12.5px]"
                      : "left-[-10.5px] md:left-[-12.5px]"
                  }`}
                />
              </div>
              <div className="md:w-1/2" />
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 bg-secondary">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 inline-block relative after:content-['] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-[#00C951]">
          Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm border card-hover"
            >
              <div className="flex items-center mb-3">
                <GraduationCap size={18} className="text-[#00C951] mr-2" />
                <h3 className="text-xl font-bold">{item.degree}</h3>
              </div>
              <p className="text-primary font-medium mb-2">
                {item.institution}
              </p>
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <Calendar size={14} className="mr-1" />
                <span>{item.period}</span>
              </div>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* CTA Section */}
      <section className="bg-primary/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Want to work together?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Contact Me</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">View My Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
