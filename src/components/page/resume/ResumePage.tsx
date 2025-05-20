import { Button } from "@/components/ui/button";
import { Calendar, Download } from "lucide-react";

const ResumePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Resume
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A comprehensive overview of my professional experience, skills, and
            education.
          </p>
          <Button asChild size="lg" className="gap-2">
            <a href="/Asif_Ahmed_Resume.pdf" download>
              <Download size={18} />
              Download PDF Resume
            </a>
          </Button>
        </div>
      </section>

      {/* Resume Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto bg-card border rounded-xl p-8 shadow-sm">
          {/* Personal Info */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Junayet Shiblu</h2>
            <p className="text-xl text-muted-foreground mb-4">
              Full Stack Web Developer
            </p>
            <div className="border-t border-border pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="font-medium">Dhaka, Bangladesh</p>
                <p className="text-muted-foreground">
                  Available for remote work worldwide
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium">junayetshiblu0@gmail.com</p>
                <p className="text-muted-foreground">+880 1640 011818</p>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4 border-b border-border pb-2">
              Professional Summary
            </h3>
            <p className="text-muted-foreground">
              With 1+ years of experience crafting responsive, user-centric web
              applications and scalable end-to-end solutions. Proficient in
              modern JavaScript frameworks like React, paired with backend
              expertise in Node.js, Express, and databases (PostgreSQL,
              MongoDB). Skilled in translating UI/UX principles into performant,
              visually appealing interfaces while optimizing application speed
              and scalability.
            </p>
          </div>

          {/* Work Experience */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 border-b border-border pb-2">
              Work Experience
            </h3>
            <div className="space-y-8">
              {/* Job 1 */}
              <div className="border-l-2 border-primary pl-6 relative">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <h4 className="text-lg font-bold"> Frontend Developer</h4>
                <div className="md:flex justify-between items-center mb-2">
                  <p className="text-primary font-medium mb-1 md:mb-0">
                    Clooud Gen
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar size={14} className="mr-1" />
                    <span>Aug 2024 - Dec 2024</span>
                  </div>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>
                    Lead the frontend development team in creating responsive
                    web applications
                  </li>
                  <li>
                    Implement modern UI/UX practices and optimize performance
                  </li>
                  <li>
                    Collaborate with designers and backend developers to ensure
                    seamless integration
                  </li>
                  <li>Mentor junior developers and conduct code reviews</li>
                  <li>
                    Technologies used: React, Next.js, TypeScript, Tailwind CSS
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 border-b border-border pb-2">
              Education
            </h3>
            <div className="space-y-8">
              {/* Education 1 */}
              <div className="border-l-2 border-primary pl-6 relative">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <h4 className="text-lg font-bold">
                  Bachelor of Science in Computer Science
                </h4>
                <div className="md:flex justify-between items-center mb-2">
                  <p className="text-primary font-medium mb-1 md:mb-0">
                    University of Dhaka
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar size={14} className="mr-1" />
                    <span>2022 - Present</span>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Focused on web technologies, software engineering, and Full
                  Stack Web Development with AI principles. Participated in
                  multiple hackathons and coding competitions.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-6 relative">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <h4 className="text-lg font-bold">Next Level Web Developer</h4>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-primary font-medium">Programming Hero</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar size={14} className="mr-1" />
                    <span>2024</span>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Trained in modern web development practices, responsive
                  design, JavaScript frameworks (React, Nextjs), and backend
                  technologies (Node.js, Express, SQL/NoSQL databases).
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6 border-b border-border pb-2">
              Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
              {/* Technical Skills */}
              <div>
                <h4 className="text-lg font-medium mb-3">Technical Skills</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>HTML5, CSS3, JavaScript/TypeScript</li>
                  <li>React, Next.js,</li>
                  <li>Tailwind CSS, Bootstrap</li>
                  <li>Node.js, Express.js</li>
                  <li>MongoDB, Firebase</li>
                  <li>RESTful APIs,</li>
                  <li>Git, GitHub</li>
                  <li>Responsive Web Design</li>
                </ul>
              </div>

              {/* Design Skills */}
              <div>
                <h4 className="text-lg font-medium mb-3">
                  Design & Other Skills
                </h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>UI/UX Design</li>
                  <li>Figma</li>
                  <li>Wireframing & Prototyping</li>
                  <li>Performance Optimization</li>
                  <li>Cross-Browser Testing</li>
                  <li>Agile Development</li>
                  <li>Team Collaboration</li>
                  <li>Problem Solving</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4 border-b border-border pb-2">
              Languages
            </h3>
            <ul className="text-muted-foreground">
              <li className="mb-2">
                <span className="font-medium text-foreground">
                  Bengali (Native):{" "}
                </span>
                Native proficiency
              </li>
              <li>
                <span className="font-medium text-foreground">English: </span>
                Professional working proficiency
              </li>
            </ul>
          </div>

          {/* References */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-border pb-2">
              References
            </h3>
            <p className="text-muted-foreground">Available upon request</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-24 text-center py-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Need more information?</h2>
          <p className="text-muted-foreground mb-8">
            Feel free to contact me for a more detailed resume or to discuss how
            my skills and experience could benefit your project or organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="/contact">Contact Me</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="/Asif_Ahmed_Resume.pdf" download>
                <Download size={18} />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResumePage;
