import Image from "next/image"
import ChapterLayout from "@/components/chapter-layout"
import MathDisplay from "@/components/math-display"

export default function DotProductPage() {
  return (
    <ChapterLayout
      title="3.3: Dot Product"
      prevChapter={{
        title: "Vectors in 3D",
        href: "/chapters/vectors-in-3d",
      }}
      nextChapter={{
        title: "Orthogonality/Projection",
        href: "/chapters/orthogonality-projection",
      }}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Dot Product</h2>
          <p className="mb-4">
            The dot product is a fundamental operation between two vectors that results in a scalar value. It measures
            how much two vectors point in the same direction.
          </p>
          <p className="mb-4">The dot product is defined as the sum of the products of corresponding components.</p>
        </div>
        <div className="border rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14.jpg-lafj2pZlCYv1cNvoYbPAkEqwvXnvpi.jpeg"
            alt="Dot Product"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Important Formulas</h2>
        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
          <h3 className="text-xl font-medium mb-4">Definition of the Dot Product:</h3>
          <p className="mb-2">
            The dot product of <MathDisplay math="\mathbf{v} = (a_1, b_1, c_1)" /> and{" "}
            <MathDisplay math="\mathbf{w} = (a_2, b_2, c_2)" /> is:
          </p>
          <MathDisplay math="\mathbf{v} \cdot \mathbf{w} = a_1a_2 + b_1b_2 + c_1c_2" display />

          <h3 className="text-xl font-medium mb-4">Basic Properties of the Dot Product:</h3>
          <p className="mb-2">Commutativity:</p>
          <MathDisplay math="\mathbf{v} \cdot \mathbf{w} = \mathbf{w} \cdot \mathbf{v}" display />

          <p className="mb-2">Pulling out scalars:</p>
          <MathDisplay
            math="(\lambda\mathbf{v}) \cdot \mathbf{w} = \mathbf{v} \cdot (\lambda\mathbf{w}) = \lambda(\mathbf{v} \cdot \mathbf{w})"
            display
          />

          <p className="mb-2">Distributive Law:</p>
          <MathDisplay
            math="\mathbf{u} \cdot (\mathbf{v} + \mathbf{w}) = \mathbf{u} \cdot \mathbf{v} + \mathbf{u} \cdot \mathbf{w}"
            display
          />
          <MathDisplay
            math="(\mathbf{v} + \mathbf{w}) \cdot \mathbf{u} = \mathbf{v} \cdot \mathbf{u} + \mathbf{w} \cdot \mathbf{u}"
            display
          />

          <p className="mb-2">Dot product of a vector with itself:</p>
          <MathDisplay math="\mathbf{v} \cdot \mathbf{v} = ||\mathbf{v}||^2" display />

          <p className="mb-2">Dot product and angle between vectors:</p>
          <MathDisplay math="\mathbf{v} \cdot \mathbf{w} = ||\mathbf{v}|| ||\mathbf{w}|| \cos \theta" display />
          <p className="mb-2">
            where <MathDisplay math="\theta" /> is the angle between <MathDisplay math="\mathbf{v}" /> and{" "}
            <MathDisplay math="\mathbf{w}" /> that satisfies <MathDisplay math="0 \leq \theta \leq \pi" />.
          </p>

          <h3 className="text-xl font-medium mb-4">Test for Orthogonality:</h3>
          <MathDisplay
            math="\mathbf{v} \perp \mathbf{w} \text{ if and only if } \mathbf{v} \cdot \mathbf{w} = 0"
            display
          />

          <h3 className="text-xl font-medium mb-4">Angle Between Vectors:</h3>
          <p className="mb-2">
            The angle between <MathDisplay math="\mathbf{v}" /> and <MathDisplay math="\mathbf{w}" /> is acute if{" "}
            <MathDisplay math="\mathbf{v} \cdot \mathbf{w} > 0" /> and obtuse if{" "}
            <MathDisplay math="\mathbf{v} \cdot \mathbf{w} < 0" />.
          </p>

          <h3 className="text-xl font-medium mb-4">Vector Decomposition:</h3>
          <p className="mb-2">
            Assume <MathDisplay math="\mathbf{v} \neq \mathbf{0}" />. Every vector <MathDisplay math="\mathbf{u}" /> has
            a decomposition:
          </p>
          <MathDisplay math="\mathbf{u} = \mathbf{u}_{||v} + \mathbf{u}_{\perp v}" display />

          <p className="mb-2">where:</p>
          <MathDisplay
            math="\mathbf{u}_{||v} = \left(\frac{\mathbf{u} \cdot \mathbf{v}}{\mathbf{v} \cdot \mathbf{v}}\right) \mathbf{v} = \left(\frac{\mathbf{u} \cdot \mathbf{v}}{||\mathbf{v}||^2}\right) \mathbf{v} = \left(\frac{\mathbf{u} \cdot \mathbf{v}}{||\mathbf{v}||}\right) \mathbf{e}_v"
            display
          />

          <p className="mb-2">and:</p>
          <MathDisplay math="\mathbf{u}_{\perp v} = \mathbf{u} - \mathbf{u}_{||v}" display />

          <h3 className="text-xl font-medium mb-4">Component of a Vector Along Another:</h3>
          <MathDisplay
            math="\text{component of } \mathbf{u} \text{ along } \mathbf{v} = \frac{\mathbf{u} \cdot \mathbf{v}}{||\mathbf{v}||} = ||\mathbf{u}|| \cos \theta"
            display
          />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Projection</h2>
        <p className="mb-4">
          The projection of a vector <MathDisplay math="\mathbf{u}" /> along a vector <MathDisplay math="\mathbf{v}" />{" "}
          is:
        </p>
        <MathDisplay
          math="\text{proj}_\mathbf{v} \mathbf{u} = \frac{\mathbf{u} \cdot \mathbf{v}}{\mathbf{v} \cdot \mathbf{v}} \mathbf{v} = \frac{\mathbf{u} \cdot \mathbf{v}}{||\mathbf{v}||^2} \mathbf{v}"
          display
        />
        <p className="mb-4">
          This represents how much of <MathDisplay math="\mathbf{u}" /> goes in the same direction as{" "}
          <MathDisplay math="\mathbf{v}" />.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Decomposition</h2>
        <p className="mb-4">
          A vector can be decomposed into its projection over a line and its cross product (perpendicularity) over a
          line.
        </p>
        <p className="mb-4">When these lines are the y and x axes, that value is just the components of the vector.</p>
      </div>
    </ChapterLayout>
  )
}
