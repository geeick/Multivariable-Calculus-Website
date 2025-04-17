import ChapterLayout from "@/components/chapter-layout"
import MathDisplay from "@/components/math-display"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Midterm1Page() {
  return (
    <ChapterLayout
      title="Midterm 1 Information"
      prevChapter={{
        title: "Homework Problems",
        href: "/exams/homework",
      }}
      nextChapter={{
        title: "Midterm 2",
        href: "/exams/midterm-2",
      }}
    >
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Midterm 1 Details</CardTitle>
            <CardDescription>Important information about the first midterm exam</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium">Date and Time</h3>
                <p>October 15, 2025</p>
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
                <CardTitle className="text-lg">Vectors in a Plane (13.1)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Vector representation and notation</li>
                  <li>Vector addition and scalar multiplication</li>
                  <li>Vector magnitude and direction</li>
                  <li>Unit vectors</li>
                  <li>Triangle inequality</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Vectors in 3D Space (13.2)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Three-dimensional coordinate system</li>
                  <li>Vector operations in 3D</li>
                  <li>Distance between points</li>
                  <li>Parametric equations of lines</li>
                  <li>Spheres and cylinders</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Dot Product (13.3)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Definition and properties</li>
                  <li>Angle between vectors</li>
                  <li>Orthogonal vectors</li>
                  <li>Projections</li>
                  <li>Vector decomposition</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Cross Product (13.4)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Definition and properties</li>
                  <li>Geometric interpretation</li>
                  <li>Area of parallelogram and triangle</li>
                  <li>Triple scalar product</li>
                  <li>Volume of parallelepiped</li>
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
                  Given vectors <MathDisplay math="\mathbf{u} = (2, -1, 3)" /> and{" "}
                  <MathDisplay math="\mathbf{v} = (4, 2, -2)" />:
                </p>
                <ol className="list-alpha pl-6 space-y-1">
                  <li>
                    Find <MathDisplay math="\mathbf{u} + \mathbf{v}" /> and{" "}
                    <MathDisplay math="2\mathbf{u} - 3\mathbf{v}" />.
                  </li>
                  <li>
                    Calculate <MathDisplay math="\mathbf{u} \cdot \mathbf{v}" /> and interpret the result.
                  </li>
                  <li>
                    Find the angle between <MathDisplay math="\mathbf{u}" /> and <MathDisplay math="\mathbf{v}" />.
                  </li>
                  <li>
                    Calculate <MathDisplay math="\mathbf{u} \times \mathbf{v}" />.
                  </li>
                  <li>
                    Find the area of the parallelogram with sides <MathDisplay math="\mathbf{u}" /> and{" "}
                    <MathDisplay math="\mathbf{v}" />.
                  </li>
                </ol>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Problem 2</h3>
                <p>
                  Find parametric equations for the line through the point <MathDisplay math="(1, 3, -2)" /> that is
                  parallel to the vector <MathDisplay math="\mathbf{v} = (2, 0, -4)" />.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Problem 3</h3>
                <p>
                  Find the equation of the plane that contains the points <MathDisplay math="A = (1, 0, 2)" />,{" "}
                  <MathDisplay math="B = (3, 1, 0)" />, and <MathDisplay math="C = (2, 2, 1)" />.
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
                  Review all homework problems, especially those involving vector operations and geometric
                  interpretations.
                </li>
                <li>Practice calculating dot products, cross products, and their applications.</li>
                <li>
                  Make sure you understand how to find equations of lines and planes from different given information.
                </li>
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
