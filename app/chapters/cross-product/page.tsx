import Image from "next/image"
import ChapterLayout from "@/components/chapter-layout"
import MathDisplay from "@/components/math-display"

export default function CrossProductPage() {
  return (
    <ChapterLayout
      title="3.4: Cross Product"
      prevChapter={{
        title: "Orthogonality/Projection",
        href: "/chapters/orthogonality-projection",
      }}
      nextChapter={{
        title: "Cross Product, Volume and Area",
        href: "/chapters/cross-product-volume-area",
      }}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Cross Product</h2>
          <p className="mb-4">
            The cross product is a vector operation that results in a vector perpendicular to both input vectors. It is
            only defined for vectors in three-dimensional space.
          </p>
          <p className="mb-4">
            The cross product measures the area spanned by two vectors AND is the vector orthogonal to both.
          </p>
        </div>
        <div className="border rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15.jpg-pIZLAhtTFTBFancLwWm17ijvvP4BSM.jpeg"
            alt="Cross Product"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Important Formulas</h2>
        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
          <h3 className="text-xl font-medium mb-4">Definition of the Cross Product:</h3>
          <p className="mb-2">
            The cross product <MathDisplay math="\mathbf{v} \times \mathbf{w}" /> is the unique vector with the
            following three properties:
          </p>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li>
              <MathDisplay math="\mathbf{v} \times \mathbf{w}" /> is orthogonal to <MathDisplay math="\mathbf{v}" /> and{" "}
              <MathDisplay math="\mathbf{w}" />.
            </li>
            <li>
              <MathDisplay math="\mathbf{v} \times \mathbf{w}" /> has length{" "}
              <MathDisplay math="||\mathbf{v}|| ||\mathbf{w}|| \sin \theta" /> (where <MathDisplay math="\theta" /> is
              the angle between <MathDisplay math="\mathbf{v}" /> and <MathDisplay math="\mathbf{w}" />
              ).
            </li>
            <li>
              The vectors <MathDisplay math="\{\mathbf{v}, \mathbf{w}, \mathbf{v} \times \mathbf{w}\}" /> form a
              right-handed system.
            </li>
          </ol>

          <h3 className="text-xl font-medium mb-4">Determinant Formula:</h3>
          <p className="mb-2">
            For <MathDisplay math="\mathbf{v} = (v_1, v_2, v_3)" /> and{" "}
            <MathDisplay math="\mathbf{w} = (w_1, w_2, w_3)" />:
          </p>
          <MathDisplay
            math="\mathbf{v} \times \mathbf{w} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ v_1 & v_2 & v_3 \\ w_1 & w_2 & w_3 \end{vmatrix} = \begin{pmatrix} v_2 w_3 - v_3 w_2 \\ v_3 w_1 - v_1 w_3 \\ v_1 w_2 - v_2 w_1 \end{pmatrix}"
            display
          />

          <h3 className="text-xl font-medium mb-4">Properties of the Cross Product:</h3>
          <p className="mb-2">Anti-commutativity:</p>
          <MathDisplay math="\mathbf{w} \times \mathbf{v} = -\mathbf{v} \times \mathbf{w}" display />

          <p className="mb-2">Scalar multiplication:</p>
          <MathDisplay
            math="(\lambda\mathbf{v}) \times \mathbf{w} = \mathbf{v} \times (\lambda\mathbf{w}) = \lambda(\mathbf{v} \times \mathbf{w})"
            display
          />

          <p className="mb-2">Distributive property:</p>
          <MathDisplay
            math="(\mathbf{u} + \mathbf{v}) \times \mathbf{w} = \mathbf{u} \times \mathbf{w} + \mathbf{v} \times \mathbf{w}"
            display
          />
          <MathDisplay
            math="\mathbf{v} \times (\mathbf{u} + \mathbf{w}) = \mathbf{v} \times \mathbf{u} + \mathbf{v} \times \mathbf{w}"
            display
          />

          <h3 className="text-xl font-medium mb-4">Cross Product of Standard Basis Vectors:</h3>
          <MathDisplay
            math="\mathbf{i} \times \mathbf{j} = \mathbf{k}, \quad \mathbf{j} \times \mathbf{k} = \mathbf{i}, \quad \mathbf{k} \times \mathbf{i} = \mathbf{j}"
            display
          />
          <MathDisplay
            math="\mathbf{j} \times \mathbf{i} = -\mathbf{k}, \quad \mathbf{k} \times \mathbf{j} = -\mathbf{i}, \quad \mathbf{i} \times \mathbf{k} = -\mathbf{j}"
            display
          />
          <MathDisplay
            math="\mathbf{i} \times \mathbf{i} = \mathbf{j} \times \mathbf{j} = \mathbf{k} \times \mathbf{k} = \mathbf{0}"
            display
          />

          <h3 className="text-xl font-medium mb-4">Area and Volume:</h3>
          <p className="mb-2">
            The area of the parallelogram spanned by <MathDisplay math="\mathbf{v}" /> and{" "}
            <MathDisplay math="\mathbf{w}" /> is:
          </p>
          <MathDisplay math="\text{area} = ||\mathbf{v} \times \mathbf{w}||" display />

          <p className="mb-2">
            The area of the triangle spanned by <MathDisplay math="\mathbf{v}" /> and <MathDisplay math="\mathbf{w}" />{" "}
            is:
          </p>
          <MathDisplay math="\text{area} = \frac{||\mathbf{v} \times \mathbf{w}||}{2}" display />

          <p className="mb-2">Cross-product identity:</p>
          <MathDisplay
            math="||\mathbf{v} \times \mathbf{w}||^2 = ||\mathbf{v}||^2 ||\mathbf{w}||^2 - (\mathbf{v} \cdot \mathbf{w})^2"
            display
          />

          <p className="mb-2">
            The scalar triple product is defined by{" "}
            <MathDisplay math="\mathbf{u} \cdot (\mathbf{v} \times \mathbf{w})" />. We have:
          </p>
          <MathDisplay
            math="\mathbf{u} \cdot (\mathbf{v} \times \mathbf{w}) = \det\begin{pmatrix} u_1 & u_2 & u_3 \\ v_1 & v_2 & v_3 \\ w_1 & w_2 & w_3 \end{pmatrix}"
            display
          />

          <p className="mb-2">
            The volume of the parallelepiped spanned by <MathDisplay math="\mathbf{u}" />,{" "}
            <MathDisplay math="\mathbf{v}" />, and <MathDisplay math="\mathbf{w}" /> is:
          </p>
          <MathDisplay math="\text{volume} = |\mathbf{u} \cdot (\mathbf{v} \times \mathbf{w})|" display />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Perpendicular/Orthogonal Vectors</h2>
        <p className="mb-4">
          The cross product of any two of the standard basis vectors <MathDisplay math="\mathbf{i}" />,{" "}
          <MathDisplay math="\mathbf{j}" />, and <MathDisplay math="\mathbf{k}" /> is equal to the third, possibly with
          a minus sign.
        </p>
        <p className="mb-4">
          <MathDisplay math="\mathbf{i} \times \mathbf{j} = \mathbf{k}" />,{" "}
          <MathDisplay math="\mathbf{j} \times \mathbf{k} = \mathbf{i}" />,{" "}
          <MathDisplay math="\mathbf{k} \times \mathbf{i} = \mathbf{j}" />
        </p>
        <p className="mb-4">
          <MathDisplay math="\mathbf{j} \times \mathbf{i} = -\mathbf{k}" />,{" "}
          <MathDisplay math="\mathbf{k} \times \mathbf{j} = -\mathbf{i}" />,{" "}
          <MathDisplay math="\mathbf{i} \times \mathbf{k} = -\mathbf{j}" />
        </p>
        <p className="mb-4">
          <MathDisplay math="\mathbf{i} \times \mathbf{i} = \mathbf{j} \times \mathbf{j} = \mathbf{k} \times \mathbf{k} = \mathbf{0}" />
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Applications in 3D</h2>
        <p className="mb-4">In 3D space, the cross product has several important applications:</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Finding a vector perpendicular to two given vectors</li>
          <li>Computing the area of a parallelogram or triangle</li>
          <li>Computing the volume of a parallelepiped</li>
          <li>Determining the right-hand rule orientation</li>
          <li>Finding the normal vector to a plane</li>
        </ul>
      </div>
    </ChapterLayout>
  )
}
