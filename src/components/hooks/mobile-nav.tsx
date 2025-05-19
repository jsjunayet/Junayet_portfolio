"use client";
import { cn } from "@/lib/utils";
import { FileText, FolderKanban, Home, Mail, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileNav() {
  const pathname = usePathname();

  const routes = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Projects", href: "/project", icon: FolderKanban },
    { name: "Resume", href: "/resume", icon: FileText },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md border-t z-40">
      <nav className="flex justify-around items-center h-16">
        {routes.map((route) => {
          const isActive = pathname === route.href;
          return (
            <Link
              key={route.name}
              href={route.href}
              className={cn(
                "flex flex-col items-center justify-center px-3 py-2 text-xs transition-colors",
                isActive
                  ? " text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <route.icon className="h-5 w-5 mb-1" />
              <span>{route.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
