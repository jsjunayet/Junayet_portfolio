import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface CTASectionProps {
  forwardedRef: React.RefObject<HTMLDivElement | null>;
  isIntersecting: boolean;
}

export function CTASection({ forwardedRef, isIntersecting }: CTASectionProps) {
  return (
    <section
      ref={forwardedRef}
      className={cn(
        "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center transition-all duration-700",
        isIntersecting
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      )}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Let&apos;s Work Together
        </h2>
        <p className="text-muted-foreground mb-8">
          I’m currently looking for a full-time job opportunities in web
          development. With strong skills in TypeScript, React, Node.js,
          Express, Next.js, MongoDB, PostgreSQL, and more — I’m ready to join a
          team where I can grow, contribute, and build amazing projects. If your
          company is hiring or if you know of any opportunities, I’d really
          appreciate it if you reached out. Let’s connect!
        </p>
        <Button asChild size="lg" className="rounded-full">
          <Link href="/contact">Get In Touch</Link>
        </Button>
      </div>
    </section>
  );
}
