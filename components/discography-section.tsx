import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, ExternalLink } from "lucide-react"

const releases = [
  {
    title: "VIOLENT NOSTALGIA",
    year: "2024",
    type: "LP",
    image: "/placeholder.svg?height=600&width=600",
    description: "Our debut full-length. Ten tracks of pure emotional devastation wrapped in sonic brutality.",
  },
  {
    title: "CINEMA SINS",
    year: "2023",
    type: "EP",
    image: "/placeholder.svg?height=600&width=600",
    description: "Five songs exploring the intersection of memory, violence, and vulnerability.",
  },
  {
    title: "MIDWEST BREAKDOWN",
    year: "2023",
    type: "SINGLE",
    image: "/placeholder.svg?height=600&width=600",
    description: "Where emo meets beatdown. Our heaviest and most melodic work yet.",
  },
]

export function DiscographySection() {
  return (
    <section id="discography" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-[family-name:var(--font-bebas)] tracking-wider mb-4">
            DISCO<span className="text-primary">GRAPHY</span>
          </h2>
          <div className="h-1 w-32 bg-primary mx-auto" />
        </div>

        {/* Releases Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {releases.map((release) => (
            <Card
              key={release.title}
              className="bg-card border-2 border-border overflow-hidden group hover:border-primary transition-all duration-300 grain"
            >
              <div className="aspect-square relative overflow-hidden vhs-effect">
                <img
                  src={release.image || "/placeholder.svg"}
                  alt={release.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 text-xs font-[family-name:var(--font-bebas)] tracking-wider">
                  {release.type}
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-[family-name:var(--font-bebas)] tracking-wider mb-1">{release.title}</h3>
                  <p className="text-sm text-muted-foreground font-[family-name:var(--font-bebas)]">{release.year}</p>
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed">{release.description}</p>
                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90 font-[family-name:var(--font-bebas)] tracking-wider"
                  >
                    <Play className="mr-2 h-4 w-4" />
                    PLAY
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary text-foreground hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
