import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="max-w-7xl mx-auto  py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Junayet Shiblu</h3>
            <p className="text-muted-foreground">
              Full Stack Web Developer from Dhaka, Bangladesh with expertise in
              building responsive and performant web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/resume"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <a
                  href="mailto:junayetshiblu0@gmail.com"
                  className="text-muted-foreground hover:text-foreground"
                >
                  junayetshiblu0@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <a
                  href="tel:+8801640011818"
                  className="text-muted-foreground hover:text-foreground"
                >
                  +880 1640 011818
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Github size={16} className="text-primary" />
                <a
                  href="https://github.com/jsjunayet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  github.com/jsjunayet
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin size={16} className="text-primary" />
                <a
                  href="https://www.linkedin.com/in/jsjunayet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  linkedin.com/in/jsjuanyet
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Junayet Shiblu. All rights reserved.
          </p>
          <p className="mt-2">
            Full stack Web Developer based in Dhaka, Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
