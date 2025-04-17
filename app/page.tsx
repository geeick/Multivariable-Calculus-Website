import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText, GraduationCap } from "lucide-react"

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Multivariable Calculus</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Course materials based on Calculus by Jon Rogawski, Colin Adams, and Robert Franzosa
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Chapters</CardTitle>
            <CardDescription>Access all chapter materials</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <BookOpen className="h-8 w-8 text-primary" />
              <Button asChild>
                <Link href="/chapters/basics-of-vectors">Browse Chapters</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Homework</CardTitle>
            <CardDescription>Practice problems and examples</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <FileText className="h-8 w-8 text-primary" />
              <Button asChild>
                <Link href="/exams/homework">View Homework</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Exams</CardTitle>
            <CardDescription>Midterm and final exam information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <GraduationCap className="h-8 w-8 text-primary" />
              <Button asChild>
                <Link href="/exams/midterm-1">View Exams</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Course Topics</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Link href="/chapters/basics-of-vectors" className="group">
            <div className="border rounded-lg p-4 transition-all hover:border-primary hover:shadow-md">
              <h3 className="font-medium group-hover:text-primary">Basics of Vectors (13.1)</h3>
              <p className="text-sm text-muted-foreground mt-1">Introduction to vector concepts and operations</p>
            </div>
          </Link>
          <Link href="/chapters/vectors-in-3d" className="group">
            <div className="border rounded-lg p-4 transition-all hover:border-primary hover:shadow-md">
              <h3 className="font-medium group-hover:text-primary">Vectors in 3D (13.2)</h3>
              <p className="text-sm text-muted-foreground mt-1">Extending vector concepts to three dimensions</p>
            </div>
          </Link>
          <Link href="/chapters/dot-product" className="group">
            <div className="border rounded-lg p-4 transition-all hover:border-primary hover:shadow-md">
              <h3 className="font-medium group-hover:text-primary">Dot Product (13.3)</h3>
              <p className="text-sm text-muted-foreground mt-1">Understanding the dot product and its applications</p>
            </div>
          </Link>
          <Link href="/chapters/orthogonality-projection" className="group">
            <div className="border rounded-lg p-4 transition-all hover:border-primary hover:shadow-md">
              <h3 className="font-medium group-hover:text-primary">Orthogonality/Projection (13.3)</h3>
              <p className="text-sm text-muted-foreground mt-1">Perpendicular vectors and projections</p>
            </div>
          </Link>
          <Link href="/chapters/cross-product" className="group">
            <div className="border rounded-lg p-4 transition-all hover:border-primary hover:shadow-md">
              <h3 className="font-medium group-hover:text-primary">Cross Product (13.4)</h3>
              <p className="text-sm text-muted-foreground mt-1">The cross product of vectors in 3D space</p>
            </div>
          </Link>
          <Link href="/chapters/planes-in-3d" className="group">
            <div className="border rounded-lg p-4 transition-all hover:border-primary hover:shadow-md">
              <h3 className="font-medium group-hover:text-primary">Planes in 3D (13.5)</h3>
              <p className="text-sm text-muted-foreground mt-1">Equations and properties of planes in 3D space</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
