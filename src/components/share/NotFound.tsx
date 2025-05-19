"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const NotFound = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-9xl font-bold text-primary mb-4">
          404
        </h1>
        <p className="text-xl md:text-2xl font-medium mb-4">
          Oops! Page not found
        </p>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/" className="flex items-center gap-2">
              <Home size={18} />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft size={18} />
              Previous Page
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
