import Image from "next/image"
import ChapterLayout from "@/components/chapter-layout"
import MathDisplay from "@/components/math-display"

export default function BasicsOfVectorsPage() {
  return (
    <ChapterLayout
      title="3.1: Vectors in a Plane"
      nextChapter={{
        title: "Vectors in 3D",
        href: "/chapters/vectors-in-3d",
      }}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Introduction to Vectors</h2>
          <p className="mb-4">
            This chapter talks about how to represent vectors in a plane. Vectors are quantities that have both
            magnitude and direction.
          </p>
          <p className="mb-4">
            A vector in a plane can be represented as an ordered pair of numbers, typically written as{" "}
            <MathDisplay math="v = (a, b)" />.
          </p>
          <p className="mb-4">
            Vectors can be visualized as arrows in the coordinate plane, with the tail at the origin and the head at the
            point <MathDisplay math="(a, b)" />.
          </p>
        </div>
        <div className="border rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.jpg-bgvY2dtI1c1LTJVMIeZWSF5byfGL1a.jpeg"
            alt="Vectors in a plane"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Important Formulas</h2>
        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
          <h3 className="text-xl font-medium mb-4">Length or magnitude:</h3>
          <MathDisplay math="||v|| = \sqrt{a^2 + b^2}" display />

          <h3 className="text-xl font-medium mb-4">Scalar multiplication:</h3>
          <p className="mb-2">
            <MathDisplay math="\lambda v" /> is the vector of length <MathDisplay math="|\lambda| ||v||" /> in the same
            direction as <MathDisplay math="v" /> if <MathDisplay math="\lambda > 0" />, and in the opposite direction
            if <MathDisplay math="\lambda < 0" />. In components:
          </p>
          <MathDisplay math="\lambda (v_1, v_2) = (\lambda v_1, \lambda v_2)" display />

          <h3 className="text-xl font-medium mb-4">Parallel vectors:</h3>
          <p className="mb-2">
            Nonzero vectors <MathDisplay math="v" /> and <MathDisplay math="w" /> are parallel if{" "}
            <MathDisplay math="w = \lambda v" /> for some scalar <MathDisplay math="\lambda" />.
          </p>

          <h3 className="text-xl font-medium mb-4">Unit vector making an angle with the positive x-axis:</h3>
          <MathDisplay math="e = (\cos \theta, \sin \theta)" display />

          <h3 className="text-xl font-medium mb-4">Unit vector in the direction of v ≠ 0:</h3>
          <MathDisplay math="e_v = \frac{1}{||v||} v" display />

          <h3 className="text-xl font-medium mb-4">Components of a vector making an angle with the positive x-axis:</h3>
          <p className="mb-2">
            If <MathDisplay math="v = (v_1, v_2)" /> makes an angle <MathDisplay math="\theta" /> with the positive
            x-axis, then:
          </p>
          <MathDisplay
            math="v_1 = ||v|| \cos \theta, \quad v_2 = ||v|| \sin \theta, \quad e_v = (\cos \theta, \sin \theta)"
            display
          />

          <h3 className="text-xl font-medium mb-4">Triangle Inequality:</h3>
          <MathDisplay math="||v + w|| \leq ||v|| + ||w||" display />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Vector Operations</h2>
        <p className="mb-4">
          Vectors can be added, subtracted, and multiplied by scalars. These operations follow specific rules:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <strong>Addition:</strong> <MathDisplay math="v + w = (v_1 + w_1, v_2 + w_2)" />
          </li>
          <li>
            <strong>Subtraction:</strong> <MathDisplay math="v - w = (v_1 - w_1, v_2 - w_2)" />
          </li>
          <li>
            <strong>Scalar Multiplication:</strong> <MathDisplay math="\lambda v = (\lambda v_1, \lambda v_2)" />
          </li>
        </ul>
        <p>Vector addition can be visualized using the parallelogram law or the triangle law.</p>
      </div>
    </ChapterLayout>
  )
}
