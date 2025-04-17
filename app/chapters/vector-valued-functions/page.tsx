import ChapterLayout from "@/components/chapter-layout"

export default function VectorValuedFunctionsPage() {
  return (
    <ChapterLayout
      title="14.1: Vector-Valued Functions"
      prevChapter={{
        title: "Parametric Equations in 2D",
        href: "/chapters/parametric-equations-2d",
      }}
      nextChapter={{
        title: "Calculus on Vector-Valued Functions",
        href: "/chapters/calculus-vector-functions",
      }}
    >
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Vector-Valued Functions</h2>
          <p className="mb-4">
            Vector-valued functions are functions that output vectors rather than scalar values. They provide a powerful way to describe curves in space.
          </p>
          <p className="mb-4">
            These functions extend the concept of parametric equations to three dimensions and beyond.
          </p>
        </div>
        <div className="border rounded-lg\
