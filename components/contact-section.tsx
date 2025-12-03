"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Instagram, Music, Youtube } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Music, label: "Spotify", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
    { icon: Mail, label: "Email", href: "#" },
  ]

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-[family-name:var(--font-bebas)] tracking-wider mb-4">
            GET IN <span className="text-primary">TOUCH</span>
          </h2>
          <div className="h-1 w-32 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground font-[family-name:var(--font-bebas)] tracking-wider max-w-2xl mx-auto">
            BOOKING INQUIRIES, COLLABORATIONS, OR JUST WANT TO SAY HI? {"WE'RE"} ALL EARS.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="md:col-span-3 bg-card border-2 border-border">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-[family-name:var(--font-bebas)] tracking-wider">
                      NAME
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background border-border"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-[family-name:var(--font-bebas)] tracking-wider">
                      EMAIL
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background border-border"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-[family-name:var(--font-bebas)] tracking-wider">
                    SUBJECT
                  </label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="bg-background border-border"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-[family-name:var(--font-bebas)] tracking-wider">
                    MESSAGE
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background border-border min-h-[150px]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 font-[family-name:var(--font-bebas)] tracking-wider text-lg py-6"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Booking Info & Social */}
          <div className="md:col-span-2 space-y-6">
            {/* Booking Card */}
            <Card className="bg-card border-2 border-border">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-bebas)] tracking-wider text-primary">BOOKING</h3>
                <div className="space-y-3 text-sm">
                  <p className="leading-relaxed">For booking inquiries and press, contact our management:</p>
                  <a
                    href="mailto:booking@adamsandlerclub.com"
                    className="block text-primary hover:text-primary/80 transition-colors font-[family-name:var(--font-bebas)] tracking-wider"
                  >
                    BOOKING@ADAMSANDLERCLUB.COM
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card border-2 border-border">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-[family-name:var(--font-bebas)] tracking-wider text-primary">FOLLOW US</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="flex items-center gap-2 p-3 bg-secondary border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                    >
                      <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-sm font-[family-name:var(--font-bebas)] tracking-wider">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="bg-card border-2 border-primary/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-[family-name:var(--font-bebas)] tracking-wider mb-2">BASED IN</h3>
                <p className="text-2xl font-[family-name:var(--font-bebas)] tracking-wider text-primary">
                  CONCORDIA
                  <br />
                  ARGENTINA
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 mt-24 pt-12 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p className="font-[family-name:var(--font-bebas)] tracking-wider">
            © 2025 ADAM SANDLER CLUB. ALL RIGHTS RESERVED.
          </p>
          <p className="font-[family-name:var(--font-bebas)] tracking-wider">HEAVY HEARTS. HEAVIER BREAKDOWNS.</p>
        </div>
      </footer>
    </section>
  )
}
