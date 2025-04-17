import ChapterLayout from "@/components/chapter-layout"
import MathDisplay from "@/components/math-display"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomeworkPage() {
  return (
    <ChapterLayout
      title="Homework Problems"
      nextChapter={{
        title: "Midterm 1",
        href: "/exams/midterm-1",
      }}
    >
      <p className="mb-6">
        This page contains practice problems and examples for each chapter of the course. Use these to prepare for exams
        and deepen your understanding of the material.
      </p>

      <Tabs defaultValue="vectors" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <TabsTrigger value="vectors">Vectors</TabsTrigger>
          <TabsTrigger value="3d-vectors">3D Vectors</TabsTrigger>
          <TabsTrigger value="dot-product">Dot Product</TabsTrigger>
          <TabsTrigger value="cross-product">Cross Product</TabsTrigger>
          <TabsTrigger value="planes">Planes in 3D</TabsTrigger>
        </TabsList>

        <TabsContent value="vectors" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Vectors in a Plane (13.1)</CardTitle>
              <CardDescription>Practice problems for basic vector operations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Problem 1: Vector Addition and Scalar Multiplication</h3>
                <p>
                  Given vectors <MathDisplay math="\mathbf{u} = (3, -2)" /> and{" "}
                  <MathDisplay math="\mathbf{v} = (-1, 4)" />, compute:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    <MathDisplay math="\mathbf{u} + \mathbf{v}" />
                  </li>
                  <li>
                    <MathDisplay math="2\mathbf{u} - 3\mathbf{v}" />
                  </li>
                  <li>
                    <MathDisplay math="||\mathbf{u}||" /> and <MathDisplay math="||\mathbf{v}||" />
                  </li>
                </ol>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Problem 2: Unit Vectors</h3>
                <p>
                  Find the unit vector in the direction of <MathDisplay math="\mathbf{w} = (5, 12)" />.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Problem 3: Vector Applications</h3>
                <p>
                  A boat is moving with a velocity of 5 km/h east, while the current is pushing it at 3 km/h in the
                  direction N30°E (30° east of north). Find the resultant velocity of the boat.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="3d-vectors" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Vectors in 3D Space (13.2)</CardTitle>
              <CardDescription>Practice problems for three-dimensional vectors</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Problem 1: Distance Between Points</h3>
                <p>
                  Find the distance between the points <MathDisplay math="P = (2, -1, 3)" /> and{" "}
                  <MathDisplay math="Q = (5, 2, -4)" />.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Problem 2: Parametric Equations</h3>
                <p>
                  Find parametric equations for the line through the point <MathDisplay math="(1, 2, 3)" /> in the
                  direction of the vector <MathDisplay math="\mathbf{v} = \langle 2, -1, 4 \rangle" />.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Problem 3: Line Through Two Points</h3>
                <p>
                  Find parametric equations for the line through the points <MathDisplay math="P = (3, 0, 2)" /> and{" "}
                  <MathDisplay math="Q = (1, -2, 5)" />.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dot-product" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Dot Product (13.3)</CardTitle>
              <CardDescription>Practice problems for dot product and projections</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Problem 1: Dot Product Calculation</h3>
                <p>
                  Calculate the dot product of <MathDisplay math="\mathbf{u} = (2, -3, 4)" /> and{" "}
                  <MathDisplay math="\mathbf{v} = (-1, 2, 5)" />.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Problem 2: Angle Between Vectors</h3>
                <p>
                  Find the angle between the vectors <MathDisplay math="\mathbf{a} = (1, 1, 1)" /> and{" "}
                  <MathDisplay math="\mathbf{b} = (1, 0, -1)" />.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Problem 3: Vector Projection</h3>
                <p>
                  Find the projection of <MathDisplay math="\mathbf{u} = (3, 2, -1)" /> onto{" "}
                  <MathDisplay math="\mathbf{v} = (2, 2, 1)" />.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Problem 4: Vector Decomposition</h3>
                <p>
                  Decompose the vector <MathDisplay math="\mathbf{w} = (4, 5, 6)" /> into components parallel and
                  perpendicular to <MathDisplay math="\mathbf{v} = (1, 2, 2)" />.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cross-product" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Cross Product (13.4)</CardTitle>
              <CardDescription>Practice problems for cross product, area, and volume</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Problem 1: Cross Product Calculation</h3>
                <p>
                  Calculate the cross product <MathDisplay math="\mathbf{u} \times \mathbf{v}" /> for{" "}
                  <MathDisplay math="\mathbf{u} = (2, 0, -3)" /> and <MathDisplay math="\mathbf{v} = (1, 4, 2)" />.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Problem 2: Area of a Parallelogram</h3>
                <p>
                  Find the area of the parallelogram with adjacent sides <MathDisplay math="\mathbf{a} = (3, 1, 2)" />{" "}
                  and <MathDisplay math="\mathbf{b} = (1, -1, 4)" />.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Problem 3: Volume of a Parallelepiped</h3>
                <p>
                  Find the volume of the parallelepiped with edges <MathDisplay math="\mathbf{a} = (1, 0, 2)" />,{" "}
                  <MathDisplay math="\mathbf{b} = (0, 3, 1)" />, and <MathDisplay math="\mathbf{c} = (2, 1, 0)" />.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Problem 4: Normal Vector</h3>
                <p>
                  Find a vector perpendicular to both <MathDisplay math="\mathbf{u} = (1, 2, 3)" /> and{" "}
                  <MathDisplay math="\mathbf{v} = (4, 5, 6)" />.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="planes" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Planes in 3D Space (13.5)</CardTitle>
              <CardDescription>Practice problems for planes and their equations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Problem 1: Plane Equation</h3>
                <p>
                  Find the equation of the plane passing through the point <MathDisplay math="(2, 3, 1)" /> with normal
                  vector <MathDisplay math="\mathbf{n} = (3, -2, 4)" />.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Problem 2: Plane Through Three Points</h3>
                <p>
                  Find the equation of the plane passing through the points <MathDisplay math="A = (1, 0, 2)" />,{" "}
                  <MathDisplay math="B = (3, 1, 0)" />, and <MathDisplay math="C = (2, 2, 1)" />.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Problem 3: Distance from Point to Plane</h3>
                <p>
                  Find the distance from the point <MathDisplay math="P = (3, 1, 4)" /> to the plane{" "}
                  <MathDisplay math="2x - y + 3z = 5" />.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Problem 4: Intersection of Planes</h3>
                <p>
                  Find the line of intersection of the planes <MathDisplay math="x + y + z = 1" /> and{" "}
                  <MathDisplay math="2x - y + z = 3" />.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </ChapterLayout>
  )
}
