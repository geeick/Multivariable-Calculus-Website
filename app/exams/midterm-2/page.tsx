import ChapterLayout from "@/components/chapter-layout"
import MathDisplay from "@/components/math-display"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Midterm2Page() {
  return (
    <ChapterLayout
      title="Midterm 2 Information"
      prevChapter={{
        title: "Midterm 1",
        href: "/exams/midterm-1",
      }}
      nextChapter={{
        title: "Final",
        href: "/exams/final",
      }}
    >
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Midterm 2 Details</CardTitle>
            <CardDescription>Important information about the second midterm exam</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium">Date and Time</h3>
                <p>November 20, 2025</p>
                <p>6:00 PM - 7:30 PM</p>
              </div>
              <div>
                <h3 className="font-medium">Location</h3>
                <p>Main Campus, Building A</p>
                <p>Room 101</p>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-medium mb-2">Format</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>90-minute exam</li>
                <li>5 multi-part problems</li>
                <li>Closed book, closed notes</li>
                <li>Scientific calculator allowed (no graphing calculators)</li>
                <li>One double-sided formula sheet (8.5" x 11") allowed</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-2xl font-bold mb-4">Topics Covered</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Planes in 3D (13.5)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Equation of a plane</li>
                  <li>Finding planes from points and normal vectors</li>
                  <li>Distance from a point to a plane</li>
                  <li>Intersection of planes</li>
                  <li>Traces of planes</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Parametric Equations in 2D (12.1)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Parametric representation of curves</li>
                  <li>Converting between parametric and Cartesian forms</li>
                  <li>Parametric equations for common curves</li>
                  <li>Eliminating the parameter</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Vector-Valued Functions (14.1)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Definition and properties</li>
                  <li>Limits and continuity</li>
                  <li>Parametric curves in space</li>
                  <li>Smooth curves</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Calculus on Vector-Valued Functions (14.2)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Derivatives of vector-valued functions</li>
                  <li>Tangent vectors and tangent lines</li>
                  <li>Integrals of vector-valued functions</li>
                  <li>Fundamental theorem for vector-valued functions</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Sample Problems</h2>
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Problem 1</h3>
                <p>
                  Find the equation of the plane that contains the line{" "}
                  <MathDisplay math="r(t) = (1, 2, 3) + t(2, -1, 1)" /> and the point{" "}
                  <MathDisplay math="P = (3, 0, 4)" />.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Problem 2</h3>
                <p>
                  Consider the curve given by the parametric equations <MathDisplay math="x = t^2 - 1" />,{" "}
                  <MathDisplay math="y = t^3 + t" />.
                </p>
                <ol className="list-alpha pl-6 space-y-1">
                  <li>Find the Cartesian equation of the curve by eliminating the parameter.</li>
                  <li>Find the points on the curve where the tangent line is horizontal.</li>
                </ol>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Problem 3</h3>
                <p>
                  For the vector-valued function <MathDisplay math="r(t) = (t^2, t\cos t, t\sin t)" />:
                </p>
                <ol className="list-alpha pl-6 space-y-1">
                  <li>
                    Find <MathDisplay math="r'(t)" /> and <MathDisplay math="r''(t)" />.
                  </li>
                  <li>
                    Find the tangent vector at <MathDisplay math="t = \pi/2" />.
                  </li>
                  <li>
                    Find <MathDisplay math="\int_0^1 r(t) \, dt" />.
                  </li>
                </ol>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Problem 4</h3>
                <p>
                  A particle moves along the curve <MathDisplay math="r(t) = (t, t^2, t^3)" />. Find the velocity and
                  acceleration vectors at <MathDisplay math="t = 1" />.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Study Tips</h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Review all homework problems related to planes, parametric equations, and vector-valued functions.
                </li>
                <li>Practice finding equations of planes from different given information.</li>
                <li>Make sure you understand how to convert between parametric and Cartesian forms.</li>
                <li>Practice computing derivatives and integrals of vector-valued functions.</li>
                <li>Create a well-organized formula sheet with key formulas and properties.</li>
                <li>Form study groups to discuss challenging concepts and problems.</li>
                <li>Attend office hours if you have specific questions or need clarification.</li>
                <li>Complete practice exams under timed conditions to simulate the actual exam environment.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </ChapterLayout>
  )
}
