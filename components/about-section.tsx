export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative grain">
            <div className="aspect-square relative overflow-hidden">
              <img
                src="/placeholder.svg?height=800&width=800"
                alt="Adam Sandler Club band photo"
                className="w-full h-full object-cover vhs-effect"
              />
              <div className="absolute inset-0 border-4 border-primary/30" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 -z-10" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-bebas)] tracking-wider mb-2 text-balance">
                THE <span className="text-primary">STORY</span>
              </h2>
              <div className="h-1 w-24 bg-primary" />
            </div>

            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p className="text-lg">
                Born in the underground scene of Concordia, Argentina, Adam Sandler Club emerged as a force that refuses
                to be categorized. We blend the crushing weight of downtuned beatdown hardcore with the raw emotional
                depth of {"90s"} Midwest emo and post-punk.
              </p>
              <p className="text-lg">
                Our sound is a collision of two worlds: the aggressive, breakdown-heavy intensity that makes you move,
                and the introspective, melody-driven moments that make you feel. {"It's"} brutal. {"It's"} vulnerable.{" "}
                {"It's"} cinema.
              </p>
              <p className="text-lg">
                Named with a tongue-in-cheek nod to Hollywood nostalgia, we channel the gritty aesthetic of {"90s"}{" "}
                cinema—VHS tapes, film grain, and that unmistakable sense of raw, unpolished authenticity. This is music
                for the misfits, the outsiders, the ones who feel everything too deeply.
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-2xl font-[family-name:var(--font-bebas)] tracking-wider mb-3 text-primary">
                INFLUENCES
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "KNOCKED LOOSE",
                  "AMERICAN FOOTBALL",
                  "CONVERGE",
                  "SUNNY DAY REAL ESTATE",
                  "HATEBREED",
                  "CAP'N JAZZ",
                ].map((influence) => (
                  <span
                    key={influence}
                    className="px-3 py-1 bg-secondary border border-border text-sm font-[family-name:var(--font-bebas)] tracking-wider"
                  >
                    {influence}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
