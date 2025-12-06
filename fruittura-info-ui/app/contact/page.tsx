"use client"

import type React from "react"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || `Request failed with status ${res.status}`)
      }

      setIsSubmitted(true)
      setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" })
    } catch (err: any) {
      setError(err?.message || "Something went wrong. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone / WhatsApp",
      value: "+91 96197 94862",
      link: "https://wa.me/918446896952",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@fruittura.in",
      link: "mailto:info@fruittura.in",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Mumbai, Maharashtra, India",
      link: "#",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon - Sat: 9AM - 7PM IST",
      link: "#",
    },
  ]

  const subjects = [
    "Product Inquiry",
    "Bulk Order Request",
    "Export Inquiry",
    "Sample Request",
    "Partnership Opportunity",
    "Other",
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-10 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
              Contact Us
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 text-balance">
              Let&apos;s Start a Conversation
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed px-2">
              Have questions about our products or interested in placing an order? We&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 md:py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {contactInfo.map((info, index) => (
              <Link
                key={index}
                href={info.link}
                className="flex flex-col sm:flex-row items-start gap-2 md:gap-4 p-3 md:p-5 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <info.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-0.5 md:mb-1 text-xs md:text-base">{info.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">{info.value}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Form */}
            <div className="bg-card p-5 md:p-8 lg:p-10 rounded-xl md:rounded-2xl border border-border">
              <h2 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-6 md:mb-8 text-sm md:text-base">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="text-center py-8 md:py-10">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <CheckCircle2 className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg md:text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
                    Thank you for reaching out. We&apos;ll respond to your inquiry shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-primary font-medium hover:underline text-sm md:text-base"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm md:text-base"
                                           />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm md:text-base"
                        
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm md:text-base"
                        
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm md:text-base"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm md:text-base"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none text-sm md:text-base"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 md:px-6 py-3 md:py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 text-sm md:text-base"
                  >
                    <Send className="w-4 h-4 md:w-5 md:h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Quick Contact & Map */}
            <div className="space-y-6 md:space-y-8">
              {/* WhatsApp CTA */}
              <div className="bg-primary p-6 md:p-8 rounded-xl md:rounded-2xl text-center">
                <MessageCircle className="w-10 h-10 md:w-12 md:h-12 text-primary-foreground mx-auto mb-3 md:mb-4" />
                <h3 className="font-serif text-xl md:text-2xl font-bold text-primary-foreground mb-2">
                  Prefer WhatsApp?
                </h3>
                <p className="text-primary-foreground/80 mb-4 md:mb-6 text-sm md:text-base">
                  Get instant responses on WhatsApp. We&apos;re available during business hours.
                </p>
                <Link
                  href="https://wa.me/918446896952?text=Hi%20Fruittura,%20I'd%20like%20to%20know%20more%20about%20your%20products"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-card text-foreground px-5 md:px-6 py-2.5 md:py-3 rounded-full font-semibold hover:bg-card/90 transition-all duration-300 text-sm md:text-base"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </Link>
              </div>

              {/* Map Placeholder */}
              <div className="bg-card rounded-xl md:rounded-2xl border border-border overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center p-6 md:p-8">
                    <MapPin className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 md:mb-4" />
                    <h4 className="font-serif text-lg md:text-xl font-bold text-foreground mb-2">Visit Our Office</h4>
                    <p className="text-muted-foreground text-sm md:text-base">Mumbai, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-card p-4 md:p-6 rounded-xl md:rounded-2xl border border-border">
                <h4 className="font-serif text-base md:text-lg font-bold text-foreground mb-3 md:mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  Business Hours
                </h4>
                <div className="space-y-2 text-xs md:text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground font-medium">9:00 AM - 7:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground font-medium">9:00 AM - 5:00 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
