import Image from "next/image"
import ChapterLayout from "@/components/chapter-layout"
import MathDisplay from "@/components/math-display"

export default function PlanesIn3DPage() {
  return (
    <ChapterLayout
      title="3.5: Planes in 3D Space"
      prevChapter={{
        title: "Cross Product, Volume and Area",
        href: "/chapters/cross-product-volume-area",
      }}
      nextChapter={{
        title: "Parametric Equations in 2D",
        href: "/chapters/parametric-equations-2d",
      }}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Planes in 3D Space</h2>
          <p className="mb-4">
            A linear equation ax + by = c makes a line in R2. Similarly, an equation ax + by + cz = d makes a line in
            R3.
          </p>
          <p className="mb-4">
            To identify a plane, we need a vector n perpendicular to it (called the normal vector) and a point on the
            plane.
          </p>
        </div>
        <div className="border rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16.jpg-M1SXPHohG70OTQvAyBE0fLCk4tWqKp.jpeg"
            alt="Planes in 3D Space"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Important Formulas</h2>
        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
          <h3 className="text-xl font-medium mb-4">Plane Equation Forms:</h3>
          <p className="mb-2">
            Plane through <MathDisplay math="P_0 = (x_0, y_0, z_0)" /> with normal vector{" "}
            <MathDisplay math="\mathbf{n} = (a, b, c)" />:
          </p>

          <p className="mb-2">Vector form:</p>
          <MathDisplay math="\mathbf{n} \cdot (x, y, z) = d" display />

          <p className="mb-2">Scalar forms:</p>
          <MathDisplay math="a(x - x_0) + b(y - y_0) + c(z - z_0) = 0" display />
          <MathDisplay math="ax + by + cz = d" display />

          <p className="mb-2">
            where <MathDisplay math="d = \mathbf{n} \cdot (x_0, y_0, z_0) = ax_0 + by_0 + cz_0" />.
          </p>

          <h3 className="text-xl font-medium mb-4">Finding a Plane:</h3>
          <p className="mb-2">A plane can be determined in each of the following cases:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Three noncollinear points</li>
            <li>Two lines that intersect in a point</li>
            <li>A line and a point not on it</li>
            <li>Two distinct parallel lines</li>
          </ul>

          <h3 className="text-xl font-medium mb-4">Trace of a Plane:</h3>
          <p className="mb-2">
            The intersection of a plane <MathDisplay math="\mathcal{P}" /> with a coordinate plane or a plane parallel
            to a coordinate plane is called a trace.
          </p>
          <p className="mb-2">
            The trace in the yz-plane is obtained by setting <MathDisplay math="x = 0" /> in the equation of the plane
            (and similarly for the traces in the xz- and xy-planes).
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Finding a Plane from Different Scenarios</h2>

        <h3 className="text-xl font-medium mb-4">1. From Three Non-Collinear Points</h3>
        <p className="mb-4">Steps:</p>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li>
            Compute two vectors in the plane: <MathDisplay math="\mathbf{AB} = \mathbf{B} - \mathbf{A}" /> and{" "}
            <MathDisplay math="\mathbf{AC} = \mathbf{C} - \mathbf{A}" />
          </li>
          <li>
            Take the cross product of these vectors to find a normal vector:{" "}
            <MathDisplay math="\mathbf{n} = \mathbf{AB} \times \mathbf{AC}" />
          </li>
          <li>
            Use point A and the normal vector n to find the plane equation:{" "}
            <MathDisplay math="n_x(x - A_x) + n_y(y - A_y) + n_z(z - A_z) = 0" />
          </li>
        </ol>

        <h3 className="text-xl font-medium mb-4">2. From Two Intersecting Lines</h3>
        <p className="mb-4">Steps:</p>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li>Since the lines intersect, there is a common point P on both lines.</li>
          <li>The direction vectors v₁ and v₂ lie on the plane.</li>
          <li>Take the cross product n = v₁ × v₂ to get the normal vector.</li>
          <li>Use the point of intersection and n to write the plane equation.</li>
        </ol>

        <h3 className="text-xl font-medium mb-4">3. From a Line and a Point Not On It</h3>
        <p className="mb-4">Steps:</p>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li>The line gives a direction vector v.</li>
          <li>Create a vector from any point on the line to the external point Q.</li>
          <li>The plane contains both v and w.</li>
          <li>Compute the normal vector: n = v × w.</li>
          <li>Use point Q and normal vector n to find the plane equation.</li>
        </ol>

        <h3 className="text-xl font-medium mb-4">4. From Two Distinct Parallel Lines</h3>
        <p className="mb-4">Steps:</p>
        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li>Parallel lines never intersect, but if they're not coincident, they still lie on the same plane.</li>
          <li>Take a vector between a point on each line: w = p₂ - p₁.</li>
          <li>Both lines have the same direction vector v.</li>
          <li>Compute normal vector: n = v × w.</li>
          <li>Use one of the points and n to find the plane equation.</li>
        </ol>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Trace</h2>
        <p className="mb-4">
          The intersection of a plane P with a coordinate plane or a plane parallel to a coordinate plane is called a
          trace. The trace is a line unless it's parallel to the coordinate plane (in which case, the trace is empty or
          P itself).
        </p>
        <p className="mb-4">Essentially, set one variable equal to zero and see what line the rest makes.</p>
      </div>
    </ChapterLayout>
  )
}
