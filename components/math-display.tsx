"use client"

import { useEffect, useRef } from "react"

interface MathDisplayProps {
  math: string
  display?: boolean
}

export default function MathDisplay({ math, display = false }: MathDisplayProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!ref.current) return

    // This is where we would normally use MathJax or KaTeX to render the math
    // For this example, we'll just set the content directly
    // In a real implementation, you would load MathJax or KaTeX and use it to render the math
    ref.current.textContent = math

    // Simulate the effect of math rendering by adding a class
    ref.current.classList.add("math-rendered")

    // In a real implementation with MathJax, you would do something like:
    // if (window.MathJax) {
    //   window.MathJax.typesetPromise([ref.current]);
    // }
  }, [math])

  return (
    <span
      ref={ref}
      className={`math ${display ? "math-display" : "math-inline"}`}
      style={{
        fontFamily: "serif",
        fontStyle: "italic",
        display: display ? "block" : "inline",
        margin: display ? "1rem 0" : "0",
        textAlign: display ? "center" : "left",
      }}
    >
      {math}
    </span>
  )
}
