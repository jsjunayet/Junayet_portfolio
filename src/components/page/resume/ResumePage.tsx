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
            <h2 className="text-3xl font-bold mb-4">Asif Ahmed</h2>
            <p className="text-xl text-muted-foreground mb-4">
              Frontend Developer & UI/UX Designer
            </p>
            <div className="border-t border-border pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="font-medium">Dhaka, Bangladesh</p>
                <p className="text-muted-foreground">
                  Available for remote work worldwide
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium">asif@example.com</p>
                <p className="text-muted-foreground">+880 1712 345678</p>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-4 border-b border-border pb-2">
              Professional Summary
            </h3>
            <p className="text-muted-foreground">
              Frontend Developer and UI/UX Designer with 5+ years of experience
              building responsive, user-friendly web applications. Proficient in
              modern JavaScript frameworks including React and Vue.js, with a
              strong understanding of UI/UX principles and performance
              optimization techniques. Experienced in both team environments and
              self-directed projects, with a track record of delivering
              high-quality solutions that meet client requirements.
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
                <h4 className="text-lg font-bold">Senior Frontend Developer</h4>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-primary font-medium">TechBD Solutions</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar size={14} className="mr-1" />
                    <span>2022 - Present</span>
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

              {/* Job 2 */}
              <div className="border-l-2 border-primary pl-6 relative">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <h4 className="text-lg font-bold">Frontend Developer</h4>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-primary font-medium">
                    Dhaka Innovation Hub
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar size={14} className="mr-1" />
                    <span>2019 - 2022</span>
                  </div>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>
                    Developed and maintained multiple client websites and web
                    applications
                  </li>
                  <li>
                    Focused on responsive design and cross-browser compatibility
                  </li>
                  <li>Participated in daily standups and sprint planning</li>
                  <li>Implemented CI/CD pipelines for frontend projects</li>
                  <li>
                    Technologies used: React, Vue.js, JavaScript, Tailwind CSS,
                    SASS
                  </li>
                </ul>
              </div>

              {/* Job 3 */}
              <div className="border-l-2 border-primary pl-6 relative">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <h4 className="text-lg font-bold">
                  UI/UX Designer & Developer
                </h4>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-primary font-medium">
                    CreativeMinds Agency
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar size={14} className="mr-1" />
                    <span>2017 - 2019</span>
                  </div>
                </div>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>
                    Designed user interfaces and implemented frontend solutions
                  </li>
                  <li>
                    Collaborated with multidisciplinary teams to deliver
                    high-quality web products
                  </li>
                  <li>
                    Created wireframes and prototypes using Figma and Adobe XD
                  </li>
                  <li>
                    Conducted user testing and incorporated feedback into design
                    iterations
                  </li>
                  <li>
                    Technologies used: HTML5, CSS3, JavaScript, jQuery,
                    Bootstrap
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
                <div className="flex justify-between items-center mb-2">
                  <p className="text-primary font-medium">
                    University of Dhaka
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar size={14} className="mr-1" />
                    <span>2014 - 2018</span>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Focused on web technologies, software engineering, and UI/UX
                  design principles. Participated in multiple hackathons and
                  coding competitions.
                </p>
              </div>

              {/* Education 2 */}
              <div className="border-l-2 border-primary pl-6 relative">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <h4 className="text-lg font-bold">
                  Web Development Certification
                </h4>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-primary font-medium">
                    Bangladesh IT Institute
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar size={14} className="mr-1" />
                    <span>2016</span>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Intensive program covering modern web development practices,
                  responsive design, and JavaScript frameworks.
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
                  <li>React, Next.js, Vue.js</li>
                  <li>Tailwind CSS, SASS/SCSS, Bootstrap</li>
                  <li>Node.js, Express.js</li>
                  <li>MongoDB, Firebase</li>
                  <li>RESTful APIs, GraphQL</li>
                  <li>Git, GitHub, GitLab</li>
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
                  <li>Figma, Adobe XD</li>
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
