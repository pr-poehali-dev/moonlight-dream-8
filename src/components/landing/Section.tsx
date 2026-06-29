import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import type { SectionProps } from "@/types"
import type { ReactNode } from "react"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, image, background, stats, bullets, onButtonClick, children }: SectionProps & { children?: ReactNode; onButtonClick?: () => void }) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      {background && (
        <div className="absolute inset-0 z-0">
          <img src={background} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
        </div>
      )}
      {image && !bullets && (
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
        className="relative z-10 font-heading uppercase text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.05] tracking-tight max-w-4xl text-white"
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
      {image && !bullets && (
        <motion.div
          className="relative z-10 mt-8 w-full max-w-sm aspect-video rounded-2xl overflow-hidden border border-neutral-700 md:hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </motion.div>
      )}
      {bullets && (
        <motion.div
          className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mt-8 md:mt-10 max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {bullets.map((b) => (
            <div
              key={b.title}
              className="flex gap-4 p-4 md:p-5 rounded-xl border border-neutral-800 bg-white/5 backdrop-blur-sm hover:border-[#FF4D00]/60 transition-colors"
            >
              <div className="shrink-0 w-11 h-11 rounded-lg bg-[#FF4D00]/15 flex items-center justify-center">
                <Icon name={b.icon} size={22} className="text-[#FF4D00]" />
              </div>
              <div>
                <h3 className="font-heading uppercase tracking-wide text-white text-base md:text-lg leading-tight">{b.title}</h3>
                <p className="text-sm text-neutral-400 mt-1">{b.text}</p>
              </div>
            </div>
          ))}
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
            size="lg"
            onClick={onButtonClick}
            className="font-heading uppercase tracking-wider text-base text-black bg-[#FF4D00] border border-[#FF4D00] hover:bg-[#ff6a2b] hover:text-black transition-colors animate-pulse-glow"
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
      {children}
    </section>
  )
}