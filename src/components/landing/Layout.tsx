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
        <div className="flex items-center gap-3">
          <img
            src="https://cdn.poehali.dev/projects/1c921831-f452-42a4-a7aa-3bac0357484a/files/5b508336-e5dc-4c11-b5fd-678c57ad5c1e.jpg"
            alt="Логотип"
            className="w-9 h-9 md:w-10 md:h-10 rounded-lg object-cover"
          />
          <span className="font-heading uppercase text-white font-semibold text-sm md:text-base tracking-widest">
            ГНБ-Самара
          </span>
        </div>
        <a
          href="tel:+79277283276"
          className="text-[#FF4D00] font-semibold text-sm md:text-base hover:text-white transition-colors mr-8"
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