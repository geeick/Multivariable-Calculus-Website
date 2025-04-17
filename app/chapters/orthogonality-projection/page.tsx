import Image from "next/image"
import ChapterLayout from "@/components/chapter-layout"
import MathDisplay from "@/components/math-display"

export default function OrthogonalityProjectionPage() {
  return (
    <ChapterLayout
      title="13.3: Orthogonality and Projection"
      prevChapter={{
        title: "Dot Product",
        href: "/chapters/dot-product",
      }}
      nextChapter={{
        title: "Cross Product",
        href: "/chapters/cross-product",
      }}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Orthogonality and Projection</h2>
          <p className="mb-4">
            This section explores the concepts of orthogonality (perpendicularity) between vectors and the projection of
            one vector onto another.
          </p>
          <p className="mb-4">
            The dot product provides a powerful tool for determining when vectors are perpendicular and for calculating
            projections.
          </p>
        </div>
        <div className="border rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14.jpg-lafj2pZlCYv1cNvoYbPAkEqwvXnvpi.jpeg"
            alt="Orthogonality and Projection"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Orthogonality</h2>
        <p className="mb-4">Two vectors are orthogonal (perpendicular) if and only if their dot product is zero.</p>
        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
          <h3 className="text-xl font-medium mb-4">Test for Orthogonality:</h3>
          <MathDisplay
            math="\mathbf{v} \perp \mathbf{w} \text{ if and only if } \mathbf{v} \cdot \mathbf{w} = 0"
            display
          />
        </div>
        <p className="mt-4">
          The standard basis vectors <MathDisplay math="\mathbf{i}" />, <MathDisplay math="\mathbf{j}" />, and{" "}
          <MathDisplay math="\mathbf{k}" /> are mutually orthogonal and have length 1.
        </p>
        <p className="mt-2">
          <MathDisplay math="\mathbf{i} \cdot \mathbf{j} = \mathbf{j} \cdot \mathbf{k} = \mathbf{k} \cdot \mathbf{i} = 0" />
        </p>
        <p className="mt-2">
          <MathDisplay math="\mathbf{i} \cdot \mathbf{i} = \mathbf{j} \cdot \mathbf{j} = \mathbf{k} \cdot \mathbf{k} = 1" />
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Projection</h2>
        <p className="mb-4">
          The projection of a vector <MathDisplay math="\mathbf{u}" /> along a vector <MathDisplay math="\mathbf{v}" />{" "}
          is:
        </p>
        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
          <MathDisplay
            math="\text{proj}_\mathbf{v} \mathbf{u} = \frac{\mathbf{u} \cdot \mathbf{v}}{\mathbf{v} \cdot \mathbf{v}} \mathbf{v} = \frac{\mathbf{u} \cdot \mathbf{v}}{||\mathbf{v}||^2} \mathbf{v}"
            display
          />
          <p className="mt-4">
            The scalar component of <MathDisplay math="\mathbf{u}" /> along <MathDisplay math="\mathbf{v}" /> is:
          </p>
          <MathDisplay
            math="\text{comp}_\mathbf{v} \mathbf{u} = \frac{\mathbf{u} \cdot \mathbf{v}}{||\mathbf{v}||} = ||\mathbf{u}|| \cos \theta"
            display
          />
          <p className="mt-4">
            where <MathDisplay math="\theta" /> is the angle between <MathDisplay math="\mathbf{u}" /> and{" "}
            <MathDisplay math="\mathbf{v}" />.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Vector Decomposition</h2>
        <p className="mb-4">
          Any vector <MathDisplay math="\mathbf{u}" /> can be decomposed into a sum of two vectors: one parallel to{" "}
          <MathDisplay math="\mathbf{v}" /> and one perpendicular to <MathDisplay math="\mathbf{v}" />.
        </p>
        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
          <MathDisplay math="\mathbf{u} = \mathbf{u}_{||v} + \mathbf{u}_{\perp v}" display />
          <p className="mt-4">where:</p>
          <MathDisplay
            math="\mathbf{u}_{||v} = \frac{\mathbf{u} \cdot \mathbf{v}}{\mathbf{v} \cdot \mathbf{v}} \mathbf{v}"
            display
          />
          <MathDisplay math="\mathbf{u}_{\perp v} = \mathbf{u} - \mathbf{u}_{||v}" display />
        </div>
        <p className="mt-4">
          This decomposition is useful in many applications, including finding the work done by a force and determining
          the closest point on a line to a given point.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Work Done by a Force</h3>
          <p>
            The work done by a constant force <MathDisplay math="\mathbf{F}" /> when an object moves along a
            displacement vector <MathDisplay math="\mathbf{d}" /> is:
          </p>
          <MathDisplay math="W = \mathbf{F} \cdot \mathbf{d} = ||\mathbf{F}|| ||\mathbf{d}|| \cos \theta" display />
          <p>
            This is the product of the magnitude of the force, the magnitude of the displacement, and the cosine of the
            angle between them.
          </p>
        </div>

        <div className="space-y-4 mt-6">
          <h3 className="text-xl font-medium">Distance from a Point to a Line</h3>
          <p>
            The distance from a point <MathDisplay math="P" /> to a line passing through point <MathDisplay math="Q" />{" "}
            with direction vector <MathDisplay math="\mathbf{v}" /> is:
          </p>
          <MathDisplay math="d = \frac{||\overrightarrow{QP} \times \mathbf{v}||}{||\mathbf{v}||}" display />
          <p>
            This can also be computed using projections by finding the component of{" "}
            <MathDisplay math="\overrightarrow{QP}" /> perpendicular to <MathDisplay math="\mathbf{v}" />.
          </p>
        </div>
      </div>
    </ChapterLayout>
  )
}
