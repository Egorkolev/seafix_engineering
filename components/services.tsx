"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Settings, Compass, Droplets, Flame, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const services = [
  {
    icon: Settings,
    title: "Engine Repair",
    description:
      "Overhaul and maintenance of marine diesel engines, turbochargers, and propulsion systems.",
    image:
      "https://images.unsplash.com/photo-1565689157206-0fddef7589a2?q=80&w=1470&auto=format&fit=crop",
  },
  {
    icon: Compass,
    title: "Shaft Line Services",
    description:
      "Alignment, inspection, and repair of propeller shaft lines and stern tubes.",
    image:
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=1470&auto=format&fit=crop",
  },
  {
    icon: Droplets,
    title: "Ballast Tank Coating",
    description:
      "Professional surface preparation and painting of ballast tanks to prevent corrosion.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1476&auto=format&fit=crop",
  },
  {
    icon: Flame,
    title: "Welding Works",
    description:
      "Certified underwater and topside welding for hull repairs, structural elements and pipework.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1470&auto=format&fit=crop",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-[#0A0E1A]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Badge
                variant="outline"
                className="border-primary text-primary bg-primary/10 text-xs tracking-wider mb-4"
              >
                WHAT WE DO
              </Badge>
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              ENGINEERING. REPAIR.{" "}
              <span className="text-primary">RELIABILITY.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href="#"
              className="inline-flex items-center text-primary hover:text-[#1D4ED8] font-semibold mt-4 md:mt-0 transition-colors"
            >
              VIEW ALL SERVICES
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden h-full hover:shadow-lg hover:shadow-primary/10">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-primary hover:text-[#1D4ED8] font-medium text-sm transition-colors group-hover:gap-2"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
