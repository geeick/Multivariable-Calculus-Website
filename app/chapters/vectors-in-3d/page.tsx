import Image from "next/image"
import ChapterLayout from "@/components/chapter-layout"
import MathDisplay from "@/components/math-display"

export default function VectorsIn3DPage() {
  return (
    <ChapterLayout
      title="3.2: Three Dimensional Space"
      prevChapter={{
        title: "Basics of Vectors",
        href: "/chapters/basics-of-vectors",
      }}
      nextChapter={{
        title: "Dot Product",
        href: "/chapters/dot-product",
      }}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Vectors in 3D Space</h2>
          <p className="mb-4">
            This chapter extends the concepts of vectors to three-dimensional space. While the concepts are similar to
            2D vectors, working in 3D space introduces additional complexity.
          </p>
          <p className="mb-4">
            The right-hand rule is an important concept in 3D space that helps determine the orientation of vectors and
            coordinate systems.
          </p>
        </div>
        <div className="border rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11.jpg-KyrjTqQ4jnB7oLT4V6fXDafkUtoNz1.jpeg"
            alt="Vectors in 3D space"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Important Formulas</h2>
        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
          <h3 className="text-xl font-medium mb-4">Linear Combination of Standard Basis Vectors:</h3>
          <p className="mb-2">Every vector is a linear combination of the standard basis vectors:</p>
          <MathDisplay
            math="(a, b, c) = a (1, 0, 0) + b (0, 1, 0) + c (0, 0, 1) = a\mathbf{i} + b\mathbf{j} + c\mathbf{k}"
            display
          />
          <p className="mb-2">For example:</p>
          <MathDisplay math="(-9, -4, 17) = -9\mathbf{i} - 4\mathbf{j} + 17\mathbf{k}" display />

          <h3 className="text-xl font-medium mb-4">Vector Parametrization of a Line:</h3>
          <p className="mb-2">
            The line through <MathDisplay math="P_0 = (x_0, y_0, z_0)" /> with direction vector{" "}
            <MathDisplay math="v = (a, b, c)" />:
          </p>
          <MathDisplay math="r(t) = \overrightarrow{OP_0} + t\mathbf{v} = (x_0, y_0, z_0) + t(a, b, c)" display />
          <p className="mb-2">Parametric equations:</p>
          <MathDisplay math="x = x_0 + at, \quad y = y_0 + bt, \quad z = z_0 + ct" display />

          <h3 className="text-xl font-medium mb-4">Line Through Two Points:</h3>
          <p className="mb-2">
            To obtain the line through <MathDisplay math="P = (a_1, b_1, c_1)" /> and{" "}
            <MathDisplay math="Q = (a_2, b_2, c_2)" />, take direction vector:
          </p>
          <MathDisplay math="\mathbf{v} = \overrightarrow{PQ} = (a_2 - a_1, b_2 - b_1, c_2 - c_1)" display />
          <p className="mb-2">
            The segment <MathDisplay math="PQ" /> is parametrized by <MathDisplay math="r(t)" /> for{" "}
            <MathDisplay math="0 \leq t \leq 1" />.
          </p>

          <h3 className="text-xl font-medium mb-4">Sphere and Cylinder Equations:</h3>
          <p className="mb-2">
            Sphere of radius <MathDisplay math="R" /> and center <MathDisplay math="(a, b, c)" />:
          </p>
          <MathDisplay math="(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2" display />
          <p className="mb-2">
            Cylinder of radius <MathDisplay math="R" /> with central axis through <MathDisplay math="(a, b, 0)" />:
          </p>
          <MathDisplay math="(x - a)^2 + (y - b)^2 = R^2" display />

          <h3 className="text-xl font-medium mb-4">Distance Between Points:</h3>
          <p className="mb-2">
            The distance between points <MathDisplay math="P" /> and <MathDisplay math="Q" /> is:
          </p>
          <MathDisplay math="||P - Q|| = \sqrt{(a_2 - a_1)^2 + (b_2 - b_1)^2 + (c_2 - c_1)^2}" display />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Parameterization of Lines</h2>
        <p className="mb-4">
          In 3D space, we can parameterize lines using a point and a direction vector. This is similar to the 2D case
          but with an additional coordinate.
        </p>
        <p className="mb-4">
          You can also parameterize lines to find curves. For example, a vector <MathDisplay math="<4,4>" /> is like how{" "}
          <MathDisplay math="y = x" /> over <MathDisplay math="0 < x < 4" />.
        </p>
        <p className="mb-4">
          This can become more complicated for 3D curves, which require parametric equations for all three coordinates.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Surfaces in 3D Space</h2>
        <p className="mb-4">
          Surfaces happen when you set a variable to a value. For example, setting <MathDisplay math="x = 3" /> creates
          a plane parallel to the yz-plane.
        </p>
        <p className="mb-4">Common surfaces in 3D space include:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Planes (defined by linear equations)</li>
          <li>Spheres (defined by quadratic equations)</li>
          <li>Cylinders (defined by quadratic equations in two variables)</li>
          <li>Quadric surfaces (defined by general quadratic equations)</li>
        </ul>
      </div>
    </ChapterLayout>
  )
}
