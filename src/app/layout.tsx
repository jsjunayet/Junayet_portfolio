import { MobileNav } from "@/components/hooks/mobile-nav";
import { Footer } from "@/components/share/Footer";
import { Navbar } from "@/components/share/Navbar";
import { ThemeProvider } from "@/components/share/Them-provider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppin = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider defaultTheme="light">
        <body className={poppin.className}>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16">{children}</main>
            <Footer />
            <MobileNav />
          </div>
        </body>
      </ThemeProvider>
    </html>
  );
}
