import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  scrollToAbout: () => void;
}

export function HeroSection({ scrollToAbout }: HeroSectionProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary to-background -z-10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <p
            className={cn(
              "font-medium text-[#00C951] transition-all duration-700",
              loaded ? "opacity-100" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            Hello, I&apos;m
          </p>
          <h1
            className={cn(
              "text-2xl sm:text-3xl md:text-5xl font-bold mt-2 transition-all duration-700",
              loaded ? "opacity-100" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "400ms" }}
          >
            JUNAYET SHIBLU
          </h1>
          <p
            className={cn(
              "text-2xl sm:text-3xl text-muted-foreground mt-4 transition-all duration-700",
              loaded ? "opacity-100" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "600ms" }}
          >
            Full Stack Web Developer
          </p>
          <p
            className={cn(
              "max-w-2xl text-center mt-6 text-muted-foreground transition-all duration-700",
              loaded ? "opacity-100" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "800ms" }}
          >
            Based in Dhaka, Bangladesh. I create engaging web experiences with a
            focus on performance, accessibility, and beautiful design.
          </p>
          <div
            className={cn(
              "flex flex-col sm:flex-row gap-4 mt-10 transition-all duration-700",
              loaded ? "opacity-100" : "opacity-0 translate-y-4"
            )}
            style={{ transitionDelay: "1000ms" }}
          >
            <Button asChild size="lg" className="rounded-full">
              <Link href="/projects">View My Work</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full"
              asChild
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
          <button
            className={cn(
              "absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-muted-foreground hover:text-foreground  duration-700",
              loaded ? "opacity-100" : "opacity-0"
            )}
            onClick={scrollToAbout}
            style={{ transitionDelay: "1200ms" }}
          >
            <span className="mb-2">Scroll Down</span>
            <ChevronDown className="animate-bounce" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
