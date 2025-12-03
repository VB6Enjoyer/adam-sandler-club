import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Ticket } from "lucide-react"

const shows = [
  {
    date: "MAR 15",
    year: "2025",
    venue: "El Teatro",
    city: "Concordia, AR",
    status: "ON SALE",
  },
  {
    date: "MAR 22",
    year: "2025",
    venue: "La Trastienda",
    city: "Buenos Aires, AR",
    status: "ON SALE",
  },
  {
    date: "APR 05",
    year: "2025",
    venue: "Salón Pueyrredón",
    city: "Mar del Plata, AR",
    status: "SOLD OUT",
  },
  {
    date: "APR 12",
    year: "2025",
    venue: "El Teatrito",
    city: "Rosario, AR",
    status: "ON SALE",
  },
  {
    date: "APR 19",
    year: "2025",
    venue: "Niceto Club",
    city: "Buenos Aires, AR",
    status: "ALMOST SOLD OUT",
  },
]

export function TourSection() {
  return (
    <section id="tour" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-[family-name:var(--font-bebas)] tracking-wider mb-4">
            UPCOMING <span className="text-primary">SHOWS</span>
          </h2>
          <div className="h-1 w-32 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground font-[family-name:var(--font-bebas)] tracking-wider">
            CATCH US LIVE. FEEL THE ENERGY. EXPERIENCE THE CHAOS.
          </p>
        </div>

        {/* Shows List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {shows.map((show, index) => (
            <Card
              key={index}
              className="bg-card border-2 border-border hover:border-primary transition-all duration-300 overflow-hidden group"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  {/* Date */}
                  <div className="flex-shrink-0 text-center md:text-left">
                    <div className="text-4xl font-[family-name:var(--font-bebas)] tracking-wider text-primary">
                      {show.date}
                    </div>
                    <div className="text-sm text-muted-foreground font-[family-name:var(--font-bebas)]">
                      {show.year}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="hidden md:block w-px h-12 bg-border" />

                  {/* Venue Info */}
                  <div className="flex-grow space-y-2">
                    <h3 className="text-xl font-[family-name:var(--font-bebas)] tracking-wider">{show.venue}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{show.city}</span>
                    </div>
                  </div>

                  {/* Status & CTA */}
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <span
                      className={`px-3 py-1 text-xs font-[family-name:var(--font-bebas)] tracking-wider ${
                        show.status === "SOLD OUT"
                          ? "bg-destructive/20 text-destructive border border-destructive"
                          : show.status === "ALMOST SOLD OUT"
                            ? "bg-primary/20 text-primary border border-primary"
                            : "bg-secondary border border-border"
                      }`}
                    >
                      {show.status}
                    </span>
                    {show.status !== "SOLD OUT" && (
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90 font-[family-name:var(--font-bebas)] tracking-wider"
                      >
                        <Ticket className="mr-2 h-4 w-4" />
                        TICKETS
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Shows Nearby CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4 font-[family-name:var(--font-bebas)] tracking-wider">
            {"DON'T"} SEE YOUR CITY?
          </p>
          <Button
            variant="outline"
            className="border-2 border-primary text-foreground hover:bg-primary hover:text-primary-foreground font-[family-name:var(--font-bebas)] tracking-wider text-lg px-8 bg-transparent"
          >
            REQUEST A SHOW
          </Button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full -z-10" />
    </section>
  )
}
