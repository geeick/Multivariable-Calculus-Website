import Image from "next/image"
import ChapterLayout from "@/components/chapter-layout"
import MathDisplay from "@/components/math-display"

export default function CrossProductVolumeAreaPage() {
  return (
    <ChapterLayout
      title="13.4: Cross Product, Volume and Area"
      prevChapter={{
        title: "Cross Product",
        href: "/chapters/cross-product",
      }}
      nextChapter={{
        title: "Planes in 3D",
        href: "/chapters/planes-in-3d",
      }}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Cross Product Applications: Volume and Area</h2>
          <p className="mb-4">
            The cross product has important applications in calculating areas and volumes in three-dimensional space.
          </p>
          <p className="mb-4">
            This section explores how the cross product can be used to find areas of parallelograms and triangles, as
            well as volumes of parallelepipeds.
          </p>
        </div>
        <div className="border rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15.jpg-pIZLAhtTFTBFancLwWm17ijvvP4BSM.jpeg"
            alt="Cross Product Applications"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Area Calculations</h2>
        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
          <h3 className="text-xl font-medium mb-4">Area of a Parallelogram:</h3>
          <p className="mb-2">
            The area of the parallelogram spanned by vectors <MathDisplay math="\mathbf{v}" /> and{" "}
            <MathDisplay math="\mathbf{w}" /> is:
          </p>
          <MathDisplay
            math="\text{area} = ||\mathbf{v} \times \mathbf{w}|| = ||\mathbf{v}|| ||\mathbf{w}|| \sin \theta"
            display
          />
          <p className="mt-4 mb-2">
            where <MathDisplay math="\theta" /> is the angle between <MathDisplay math="\mathbf{v}" /> and{" "}
            <MathDisplay math="\mathbf{w}" />.
          </p>

          <h3 className="text-xl font-medium mb-4 mt-6">Area of a Triangle:</h3>
          <p className="mb-2">
            The area of the triangle with vertices <MathDisplay math="A" />, <MathDisplay math="B" />, and{" "}
            <MathDisplay math="C" /> is:
          </p>
          <MathDisplay
            math="\text{area} = \frac{1}{2} ||\overrightarrow{AB} \times \overrightarrow{AC}|| = \frac{1}{2} ||\mathbf{v} \times \mathbf{w}||"
            display
          />
          <p className="mt-4 mb-2">
            where <MathDisplay math="\mathbf{v} = \overrightarrow{AB}" /> and{" "}
            <MathDisplay math="\mathbf{w} = \overrightarrow{AC}" /> are vectors from one vertex to the other two
            vertices.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Volume Calculations</h2>
        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
          <h3 className="text-xl font-medium mb-4">Scalar Triple Product:</h3>
          <p className="mb-2">
            The scalar triple product of three vectors <MathDisplay math="\mathbf{u}" />,{" "}
            <MathDisplay math="\mathbf{v}" />, and <MathDisplay math="\mathbf{w}" /> is defined as:
          </p>
          <MathDisplay math="\mathbf{u} \cdot (\mathbf{v} \times \mathbf{w})" display />
          <p className="mt-4 mb-2">It can also be computed using a determinant:</p>
          <MathDisplay
            math="\mathbf{u} \cdot (\mathbf{v} \times \mathbf{w}) = \det\begin{pmatrix} u_1 & u_2 & u_3 \\ v_1 & v_2 & v_3 \\ w_1 & w_2 & w_3 \end{pmatrix}"
            display
          />

          <h3 className="text-xl font-medium mb-4 mt-6">Volume of a Parallelepiped:</h3>
          <p className="mb-2">
            The volume of the parallelepiped spanned by vectors <MathDisplay math="\mathbf{u}" />,{" "}
            <MathDisplay math="\mathbf{v}" />, and <MathDisplay math="\mathbf{w}" /> is:
          </p>
          <MathDisplay
            math="\text{volume} = |\mathbf{u} \cdot (\mathbf{v} \times \mathbf{w})| = |(\mathbf{u} \times \mathbf{v}) \cdot \mathbf{w}|"
            display
          />
          <p className="mt-4 mb-2">
            This can be interpreted as the product of the base area{" "}
            <MathDisplay math="||\mathbf{v} \times \mathbf{w}||" /> and the height{" "}
            <MathDisplay math="||\mathbf{u}|| \cos \phi" />, where <MathDisplay math="\phi" /> is the angle between{" "}
            <MathDisplay math="\mathbf{u}" /> and the normal to the plane containing <MathDisplay math="\mathbf{v}" />{" "}
            and <MathDisplay math="\mathbf{w}" />.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Properties of the Scalar Triple Product</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <MathDisplay math="\mathbf{u} \cdot (\mathbf{v} \times \mathbf{w}) = \mathbf{v} \cdot (\mathbf{w} \times \mathbf{u}) = \mathbf{w} \cdot (\mathbf{u} \times \mathbf{v})" />
          </li>
          <li>
            <MathDisplay math="\mathbf{u} \cdot (\mathbf{v} \times \mathbf{w}) = -\mathbf{u} \cdot (\mathbf{w} \times \mathbf{v}) = -\mathbf{v} \cdot (\mathbf{u} \times \mathbf{w}) = -\mathbf{w} \cdot (\mathbf{v} \times \mathbf{u})" />
          </li>
          <li>
            The scalar triple product is zero if and only if the three vectors are linearly dependent (i.e., they lie in
            the same plane).
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Finding the Area of a Triangle in 3D Space</h3>
          <p>
            Given three points <MathDisplay math="A = (x_1, y_1, z_1)" />, <MathDisplay math="B = (x_2, y_2, z_2)" />,
            and <MathDisplay math="C = (x_3, y_3, z_3)" /> in 3D space, the area of the triangle ABC is:
          </p>
          <MathDisplay math="\text{area} = \frac{1}{2} ||\overrightarrow{AB} \times \overrightarrow{AC}||" display />
          <p>
            where <MathDisplay math="\overrightarrow{AB} = (x_2 - x_1, y_2 - y_1, z_2 - z_1)" /> and{" "}
            <MathDisplay math="\overrightarrow{AC} = (x_3 - x_1, y_3 - y_1, z_3 - z_1)" />.
          </p>
        </div>

        <div className="space-y-4 mt-6">
          <h3 className="text-xl font-medium">Finding the Volume of a Tetrahedron</h3>
          <p>
            Given four points <MathDisplay math="A" />, <MathDisplay math="B" />, <MathDisplay math="C" />, and{" "}
            <MathDisplay math="D" /> in 3D space, the volume of the tetrahedron ABCD is:
          </p>
          <MathDisplay
            math="\text{volume} = \frac{1}{6} |(\overrightarrow{AB} \times \overrightarrow{AC}) \cdot \overrightarrow{AD}|"
            display
          />
          <p>
            This is one-sixth of the volume of the parallelepiped spanned by the vectors{" "}
            <MathDisplay math="\overrightarrow{AB}" />, <MathDisplay math="\overrightarrow{AC}" />, and{" "}
            <MathDisplay math="\overrightarrow{AD}" />.
          </p>
        </div>
      </div>
    </ChapterLayout>
  )
}
