import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"
import type { ReactNode } from "react"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, image, background, stats, onButtonClick, children }: SectionProps & { children?: ReactNode; onButtonClick?: () => void }) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      {background && (
        <div className="absolute inset-0 z-0">
          <img src={background} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
        </div>
      )}
      {image && (
        <motion.div
          className="absolute z-10 right-8 md:right-16 lg:right-24 top-1/2 -translate-y-1/2 w-[40%] max-w-md aspect-square rounded-2xl overflow-hidden border border-neutral-700 hidden md:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/30" />
        </motion.div>
      )}
      {subtitle && (
        <motion.div
          className="relative z-10 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}
      <motion.h2
        className="relative z-10 text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {content && (
        <motion.p
          className="relative z-10 text-lg md:text-xl lg:text-2xl max-w-2xl mt-6 text-neutral-400"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}
      {image && (
        <motion.div
          className="relative z-10 mt-8 w-full max-w-sm aspect-video rounded-2xl overflow-hidden border border-neutral-700 md:hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </motion.div>
      )}
      {stats && (
        <motion.div
          className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FF4D00]">{stat.value}</div>
              <div className="text-sm md:text-base text-neutral-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      )}
      {showButton && !children && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative z-10 mt-12 md:mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={onButtonClick}
            className="text-[#FF4D00] bg-transparent border-[#FF4D00] hover:bg-[#FF4D00] hover:text-black transition-colors"
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
      {children}
    </section>
  )
}