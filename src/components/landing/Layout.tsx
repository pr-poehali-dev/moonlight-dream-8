import { ReactNode } from 'react'
import { Squares } from "./squares-background"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden bg-black relative">
      <div className="absolute inset-0 z-10">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#333"
          hoverFillColor="#222"
        />
      </div>
      <header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-12 py-4">
        <span className="text-white font-semibold text-sm md:text-base tracking-wide">
          Морозов Сергей Михайлович
        </span>
        <a
          href="tel:+79277283276"
          className="text-[#FF4D00] font-semibold text-sm md:text-base hover:text-white transition-colors"
        >
          +7 (927) 728-32-76
        </a>
      </header>
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}