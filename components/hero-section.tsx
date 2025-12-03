"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function HeroSection() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden grain">
      {/* Background Video Placeholder with VHS effect */}
      <div className="absolute inset-0 vhs-effect">
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background z-10" />
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Band performing live"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <div className="mb-8">
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-[family-name:var(--font-bebas)] tracking-wider mb-4 text-balance">
            ADAM SANDLER
            <br />
            <span className="text-primary">CLUB</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground tracking-widest font-[family-name:var(--font-bebas)]">
            CONCORDIA, ARGENTINA
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-[family-name:var(--font-bebas)] tracking-wider text-lg px-8"
          >
            <Play className="mr-2 h-5 w-5" />
            LISTEN NOW
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-foreground hover:bg-primary hover:text-primary-foreground font-[family-name:var(--font-bebas)] tracking-wider text-lg px-8 bg-transparent"
          >
            UPCOMING SHOWS
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </div>

      {/* Film overlay effect */}
      <div className="absolute inset-0 pointer-events-none z-30 mix-blend-overlay opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      </div>
    </section>
  )
}
