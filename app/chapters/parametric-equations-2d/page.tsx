import Image from "next/image"
import ChapterLayout from "@/components/chapter-layout"
import MathDisplay from "@/components/math-display"

export default function ParametricEquations2DPage() {
  return (
    <ChapterLayout
      title="12.1: Parametric Equations in 2D"
      prevChapter={{
        title: "Planes in 3D",
        href: "/chapters/planes-in-3d",
      }}
      nextChapter={{
        title: "Vector-Valued Functions",
        href: "/chapters/vector-valued-functions",
      }}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Parametric Equations in 2D</h2>
          <p className="mb-4">
            Parametric equations provide a way to represent curves in the plane by expressing the coordinates as
            functions of a parameter.
          </p>
          <p className="mb-4">
            This approach allows for more flexibility in describing curves compared to the standard Cartesian form.
          </p>
        </div>
        <div className="border rounded-lg overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12.jpg-IEluIcaRrOM9spQBBgv68tiXljMKRQ.jpeg"
            alt="Parametric Equations"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Concepts</h2>
        <p className="mb-4">A parametric curve in the plane is defined by a pair of functions:</p>
        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
          <MathDisplay math="x = f(t), \quad y = g(t)" display />
          <p className="mt-4">
            where <MathDisplay math="t" /> is the parameter, typically varying over some interval{" "}
            <MathDisplay math="a \leq t \leq b" />.
          </p>
          <p className="mt-4">
            As <MathDisplay math="t" /> varies, the point <MathDisplay math="(x, y) = (f(t), g(t))" /> traces out a
            curve in the plane.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Examples of Parametric Curves</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-2">Line Segment</h3>
            <p className="mb-2">
              The line segment from point <MathDisplay math="(x_1, y_1)" /> to <MathDisplay math="(x_2, y_2)" /> can be
              parameterized as:
            </p>
            <MathDisplay math="x = x_1 + t(x_2 - x_1), \quad y = y_1 + t(y_2 - y_1), \quad 0 \leq t \leq 1" display />
            <p className="mt-2">
              This is equivalent to the vector form <MathDisplay math="r(t) = (1-t)(x_1, y_1) + t(x_2, y_2)" />.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">Circle</h3>
            <p className="mb-2">
              A circle of radius <MathDisplay math="a" /> centered at the origin can be parameterized as:
            </p>
            <MathDisplay math="x = a\cos t, \quad y = a\sin t, \quad 0 \leq t \leq 2\pi" display />
            <p className="mt-2">
              This parameterization traverses the circle counterclockwise starting from the point{" "}
              <MathDisplay math="(a, 0)" />.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">Ellipse</h3>
            <p className="mb-2">
              An ellipse with semi-major axis <MathDisplay math="a" /> and semi-minor axis <MathDisplay math="b" />{" "}
              centered at the origin can be parameterized as:
            </p>
            <MathDisplay math="x = a\cos t, \quad y = b\sin t, \quad 0 \leq t \leq 2\pi" display />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Converting Between Parametric and Cartesian Forms</h2>
        <p className="mb-4">
          To convert from parametric to Cartesian form, we need to eliminate the parameter <MathDisplay math="t" />{" "}
          between the equations <MathDisplay math="x = f(t)" /> and <MathDisplay math="y = g(t)" />.
        </p>
        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
          <h3 className="text-xl font-medium mb-4">Example: Circle</h3>
          <p className="mb-2">For the parametric equations of a circle:</p>
          <MathDisplay math="x = a\cos t, \quad y = a\sin t" display />
          <p className="mt-2 mb-2">
            We can eliminate <MathDisplay math="t" /> by using the identity{" "}
            <MathDisplay math="\cos^2 t + \sin^2 t = 1" />:
          </p>
          <MathDisplay math="\frac{x^2}{a^2} + \frac{y^2}{a^2} = \cos^2 t + \sin^2 t = 1" display />
          <p className="mt-2 mb-2">Therefore, the Cartesian equation is:</p>
          <MathDisplay math="x^2 + y^2 = a^2" display />
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Vector Form of Parametric Equations</h2>
        <p className="mb-4">Parametric equations can also be expressed in vector form:</p>
        <MathDisplay math="\mathbf{r}(t) = (f(t), g(t))" display />
        <p className="mt-4">
          This representation is particularly useful when working with vector calculus and when extending to three
          dimensions.
        </p>
        <p className="mt-4">For example, the vector form of a circle is:</p>
        <MathDisplay math="\mathbf{r}(t) = (a\cos t, a\sin t)" display />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Motion in the Plane</h3>
          <p>
            Parametric equations are natural for describing the motion of an object in the plane, where the parameter{" "}
            <MathDisplay math="t" /> represents time.
          </p>
          <p className="mt-2">
            For example, the position of a projectile launched with initial velocity{" "}
            <MathDisplay math="(v_0\cos\theta, v_0\sin\theta)" /> from the origin is given by:
          </p>
          <MathDisplay math="x = (v_0\cos\theta)t, \quad y = (v_0\sin\theta)t - \frac{1}{2}gt^2" display />
          <p className="mt-2">
            where <MathDisplay math="g" /> is the acceleration due to gravity.
          </p>
        </div>

        <div className="space-y-4 mt-6">
          <h3 className="text-xl font-medium">Curves Not Representable as Functions</h3>
          <p>
            Parametric equations can represent curves that cannot be expressed as <MathDisplay math="y = f(x)" /> or{" "}
            <MathDisplay math="x = g(y)" />, such as circles and other closed curves.
          </p>
          <p className="mt-2">
            For instance, a vertical line <MathDisplay math="x = a" /> can be parameterized as:
          </p>
          <MathDisplay math="x = a, \quad y = t, \quad -\infty < t < \infty" display />
        </div>
      </div>
    </ChapterLayout>
  )
}
