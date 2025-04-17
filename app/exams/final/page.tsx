import ChapterLayout from "@/components/chapter-layout"
import MathDisplay from "@/components/math-display"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function FinalPage() {
  return (
    <ChapterLayout
      title="Final Exam Information"
      prevChapter={{
        title: "Midterm 2",
        href: "/exams/midterm-2",
      }}
    >
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Final Exam Details</CardTitle>
            <CardDescription>Important information about the final exam</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium">Date and Time</h3>
                <p>December 15, 2025</p>
                <p>3:00 PM - 6:00 PM</p>
              </div>
              <div>
                <h3 className="font-medium">Location</h3>
                <p>Main Campus, Building B</p>
                <p>Auditorium 201</p>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-medium mb-2">Format</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>3-hour comprehensive exam</li>
                <li>10 multi-part problems</li>
                <li>Closed book, closed notes</li>
                <li>Scientific calculator allowed (no graphing calculators)</li>
                <li>Two double-sided formula sheets (8.5" x 11") allowed</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-2xl font-bold mb-4">Topics Covered</h2>
          <p className="mb-4">
            The final exam is comprehensive and covers all topics from the course, with emphasis on the following:
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Vectors and Vector Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Vector algebra in 2D and 3D</li>
                  <li>Dot product and applications</li>
                  <li>Cross product and applications</li>
                  <li>Lines and planes in 3D space</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Vector-Valued Functions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Parametric curves</li>
                  <li>Derivatives and integrals</li>
                  <li>Arc length and speed</li>
                  <li>Curvature and normal vectors</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Motion in Space</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Velocity and acceleration</li>
                  <li>Tangential and normal components</li>
                  <li>Projectile motion</li>
                  <li>Planetary motion and Kepler's laws</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Functions of Several Variables</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Partial derivatives</li>
                  <li>Directional derivatives</li>
                  <li>Gradient vector</li>
                  <li>Tangent planes and normal lines</li>
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
                  A particle moves along the helix <MathDisplay math="r(t) = (\cos t, \sin t, t)" /> for{" "}
                  <MathDisplay math="0 \leq t \leq 2\pi" />.
                </p>
                <ol className="list-alpha pl-6 space-y-1">
                  <li>
                    Find the velocity and acceleration vectors at any time <MathDisplay math="t" />.
                  </li>
                  <li>
                    Find the speed of the particle at any time <MathDisplay math="t" />.
                  </li>
                  <li>
                    Find the arc length of the helix from <MathDisplay math="t = 0" /> to{" "}
                    <MathDisplay math="t = 2\pi" />.
                  </li>
                </ol>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Problem 2</h3>
                <p>
                  Find the equation of the plane that contains the point <MathDisplay math="(1, 2, 3)" /> and is
                  perpendicular to the line of intersection of the planes <MathDisplay math="x + y + z = 1" /> and{" "}
                  <MathDisplay math="2x - y + z = 0" />.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Problem 3</h3>
                <p>
                  For the function <MathDisplay math="f(x, y, z) = x^2y + yz^3 - 2xz" />:
                </p>
                <ol className="list-alpha pl-6 space-y-1">
                  <li>Find all partial derivatives.</li>
                  <li>
                    Find the gradient vector at the point <MathDisplay math="(1, -1, 2)" />.
                  </li>
                  <li>
                    Find the directional derivative at <MathDisplay math="(1, -1, 2)" /> in the direction of{" "}
                    <MathDisplay math="\mathbf{v} = (1, 1, 1)" />.
                  </li>
                  <li>
                    Find the equation of the tangent plane to the level surface of <MathDisplay math="f" /> at the point{" "}
                    <MathDisplay math="(1, -1, 2)" />.
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Study Tips</h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="list-disc pl-6 space-y-2">
                <li>Start reviewing early and create a study schedule that covers all topics.</li>
                <li>Focus on understanding concepts rather than memorizing formulas.</li>
                <li>Review all homework problems, midterm exams, and quizzes.</li>
                <li>Practice solving problems from each section of the textbook.</li>
                <li>Create comprehensive formula sheets that organize key concepts by topic.</li>
                <li>Form study groups to discuss challenging problems and concepts.</li>
                <li>Attend review sessions and office hours for clarification on difficult topics.</li>
                <li>Complete practice exams under timed conditions to simulate the actual exam environment.</li>
                <li>Get plenty of rest the night before the exam and arrive early to the exam location.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </ChapterLayout>
  )
}
