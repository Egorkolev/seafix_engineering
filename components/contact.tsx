"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+30 69 830 12 050",
    href: "tel:+306983012050",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@seafix.com",
    href: "mailto:info@seafix.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Athens, Greece",
    href: "#",
  },
  {
    icon: Clock,
    title: "24/7 Emergency",
    value: "Always Available",
    href: "#",
  },
]

const services = [
  { value: "engine-repair", label: "Engine Repair" },
  { value: "shaft-line", label: "Shaft Line" },
  { value: "ballast-tank", label: "Ballast Tank Coating" },
  { value: "welding", label: "Welding" },
  { value: "other", label: "Other" },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-[#0D1526]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge
              variant="outline"
              className="border-primary text-primary bg-primary/10 text-xs tracking-wider mb-4"
            >
              GET IN TOUCH
            </Badge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Request a <span className="text-primary">Free Quote</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              Our team is available 24/7 to support your vessel anywhere in the
              world.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Full Name"
                  className="bg-card border-border text-white placeholder:text-muted-foreground focus:border-primary h-12"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-card border-border text-white placeholder:text-muted-foreground focus:border-primary h-12"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-card border-border text-white placeholder:text-muted-foreground focus:border-primary h-12"
                />
                <Select>
                  <SelectTrigger className="bg-card border-border text-muted-foreground focus:border-primary h-12">
                    <SelectValue placeholder="Service Required" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {services.map((service) => (
                      <SelectItem
                        key={service.value}
                        value={service.value}
                        className="text-white hover:bg-primary/20"
                      >
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Input
                placeholder="Vessel Type"
                className="bg-card border-border text-white placeholder:text-muted-foreground focus:border-primary h-12"
              />

              <Textarea
                placeholder="Message"
                rows={4}
                className="bg-card border-border text-white placeholder:text-muted-foreground focus:border-primary resize-none"
              />

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-[#1D4ED8] text-white font-semibold"
              >
                SEND MESSAGE
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card border-border hover:border-primary/50 p-6 flex items-center gap-4 transition-all duration-300 group cursor-pointer">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">
                      {info.title}
                    </p>
                    <p className="text-white font-semibold">{info.value}</p>
                  </div>
                </Card>
              </motion.a>
            ))}

            {/* Map Placeholder */}
            <Card className="bg-card border-border overflow-hidden h-[200px] relative">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1474&auto=format&fit=crop')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-white font-medium">
                  Athens, Greece
                </span>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
