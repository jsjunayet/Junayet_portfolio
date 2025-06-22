import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronRight, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Sample blog data
const featuredPosts = [
  {
    id: 1,
    title: "Design Principles for Creating Effective User Interfaces",
    excerpt:
      "Explore the fundamental principles that guide effective UI design and learn how to apply them in your next project.",
    date: "May 15, 2023",
    readTime: "5 min read",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Getting Started with React Hooks: A Complete Guide",
    excerpt:
      "Learn how React Hooks can simplify your code and make your components more reusable and maintainable.",
    date: "April 23, 2023",
    readTime: "8 min read",
    category: "Development",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "The Role of Typography in Modern Web Design",
    excerpt:
      "Typography plays a crucial role in user experience and brand identity. Discover how to make the right typographic choices.",
    date: "March 10, 2023",
    readTime: "6 min read",
    category: "Design",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

const BlogPost = () => {
  return (
    <section
      className={cn(
        "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24  transition-all duration-700  "
      )}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-4 pb-8 md:flex-row">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Latest Articles
            </h2>
            <p className="text-muted-foreground mt-2">
              Insights, thoughts, and tutorials from my professional journey
            </p>
          </div>
          <Button asChild variant="ghost" className="gap-1">
            <Link href="/blog">
              View All Posts <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <Link href={`/blog/${post.id}`} className="block relative">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    height={500}
                    width={500}
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 right-4 bg-blog text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {post.category}
                </div>
              </Link>
              <CardHeader className="p-4 pb-2">
                <Link
                  href={`/blog/${post.id}`}
                  className="font-serif font-bold text-xl hover:text-blog transition-colors"
                >
                  {post.title}
                </Link>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <div className="flex items-center text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-xs font-medium text-blog hover:underline"
                >
                  Read More
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
