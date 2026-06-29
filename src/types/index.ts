import type { ReactNode } from "react"

export interface StatItem {
  value: string
  label: string
}

export interface BulletItem {
  icon: string
  title: string
  text: string
}

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  image?: string
  background?: string
  stats?: StatItem[]
  bullets?: BulletItem[]
}

export interface SectionProps extends Section {
  isActive: boolean
}