import { sectionEnterClass } from "@/lib/section-motion"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section className={cn("py-12 text-center sm:py-14", sectionEnterClass())}>
      <div className="section-hero-frame mx-auto max-w-3xl px-5 py-10 sm:px-10 sm:py-12">
        <p className="section-eyebrow mb-3">Introduction</p>
        <div className="section-divider-gradient mb-8" aria-hidden />
        <h1 className="text-4xl font-bold mb-4">
          <span className="inline-block bg-linear-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
            Hi, Nice to meet you!
          </span>{" "}
          <span className="text-foreground" aria-hidden>
            😊
          </span>
        </h1>
        <p className="text-xl text-muted-foreground">
          AI Student @{" "}
          <span className="font-medium text-primary">CUHK</span>
          {" "}| Computer Vision & LLM Enthusiast
        </p>
      </div>
    </section>
  )
}
