"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const chapters = [
  { title: "Basics of Vectors (13.1)", href: "/chapters/basics-of-vectors" },
  { title: "Vectors in 3D (13.2)", href: "/chapters/vectors-in-3d" },
  { title: "Dot Product (13.3)", href: "/chapters/dot-product" },
  { title: "Orthogonality/Projection (13.3)", href: "/chapters/orthogonality-projection" },
  { title: "Cross Product of 3D Vectors (13.4)", href: "/chapters/cross-product" },
  { title: "Cross Product, Volume and Area (13.4)", href: "/chapters/cross-product-volume-area" },
  { title: "Planes in 3D (13.5)", href: "/chapters/planes-in-3d" },
  { title: "Parametric Equations in 2D (12.1)", href: "/chapters/parametric-equations-2d" },
  { title: "Vector-Valued Functions (14.1)", href: "/chapters/vector-valued-functions" },
  { title: "Calculus on Vector-Valued Functions (14.2)", href: "/chapters/calculus-vector-functions" },
  { title: "Arc Length and Speed (14.3)", href: "/chapters/arc-length-speed" },
]

const examPages = [
  { title: "Homework Problems", href: "/exams/homework" },
  { title: "Midterm 1", href: "/exams/midterm-1" },
  { title: "Midterm 2", href: "/exams/midterm-2" },
  { title: "Final", href: "/exams/final" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">Multivariable Calculus</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className={`transition-colors hover:text-foreground/80 ${
                pathname === "/" ? "text-foreground" : "text-foreground/60"
              }`}
            >
              Home
            </Link>
            <div className="relative group">
              <button
                className={`transition-colors hover:text-foreground/80 ${
                  pathname.startsWith("/chapters") ? "text-foreground" : "text-foreground/60"
                }`}
              >
                Chapters
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block bg-background border rounded-md shadow-md p-2 w-64 z-50">
                <div className="flex flex-col space-y-1 max-h-[70vh] overflow-y-auto">
                  {chapters.map((chapter) => (
                    <Link
                      key={chapter.href}
                      href={chapter.href}
                      className={`px-3 py-2 text-sm rounded-md hover:bg-accent ${
                        pathname === chapter.href ? "bg-accent" : ""
                      }`}
                    >
                      {chapter.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative group">
              <button
                className={`transition-colors hover:text-foreground/80 ${
                  pathname.startsWith("/exams") ? "text-foreground" : "text-foreground/60"
                }`}
              >
                Exams & Homework
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block bg-background border rounded-md shadow-md p-2 w-64 z-50">
                <div className="flex flex-col space-y-1">
                  {examPages.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className={`px-3 py-2 text-sm rounded-md hover:bg-accent ${
                        pathname === page.href ? "bg-accent" : ""
                      }`}
                    >
                      {page.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between md:justify-end">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link href="/" className="flex items-center space-x-2 mb-6" onClick={() => setIsOpen(false)}>
                <span className="font-bold text-xl">Multivariable Calculus</span>
              </Link>
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className={`text-sm ${pathname === "/" ? "text-foreground" : "text-foreground/60"}`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <div className="flex flex-col space-y-2">
                  <div className="font-medium text-sm">Chapters</div>
                  <div className="flex flex-col space-y-2 pl-2">
                    {chapters.map((chapter) => (
                      <Link
                        key={chapter.href}
                        href={chapter.href}
                        className={`text-sm ${pathname === chapter.href ? "text-foreground" : "text-foreground/60"}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {chapter.title}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="font-medium text-sm">Exams & Homework</div>
                  <div className="flex flex-col space-y-2 pl-2">
                    {examPages.map((page) => (
                      <Link
                        key={page.href}
                        href={page.href}
                        className={`text-sm ${pathname === page.href ? "text-foreground" : "text-foreground/60"}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {page.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
