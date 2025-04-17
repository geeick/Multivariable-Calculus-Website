import type { ReactNode } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ChapterLayoutProps {
  title: string
  children: ReactNode
  prevChapter?: {
    title: string
    href: string
  }
  nextChapter?: {
    title: string
    href: string
  }
}

export default function ChapterLayout({ title, children, prevChapter, nextChapter }: ChapterLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="prose prose-slate max-w-none dark:prose-invert">{children}</div>
      <div className="mt-12 flex justify-between">
        {prevChapter ? (
          <Button variant="outline" asChild>
            <Link href={prevChapter.href} className="flex items-center">
              <ChevronLeft className="mr-2 h-4 w-4" />
              {prevChapter.title}
            </Link>
          </Button>
        ) : (
          <div></div>
        )}
        {nextChapter && (
          <Button variant="outline" asChild>
            <Link href={nextChapter.href} className="flex items-center">
              {nextChapter.title}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}
