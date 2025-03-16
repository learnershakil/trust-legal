"use client"

import type React from "react";
import { useState } from "react";

// API function to send the message
const sendMessage = async (messageData: {
  name: string;
  email: string;
  company: string;
  message: string;
}) => {
  const response = await fetch('/api/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: messageData.name,
      email: messageData.email,
      company: messageData.company,
      message: messageData.message
    })
  });

  return response
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing again
    if (error) setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Call the API function instead of using setTimeout
      const result = await sendMessage(formData)
      console.log(result)
      // Check if the API returned a success status
      if (result.ok) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", company: "", message: "" })

        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        // Handle API error response
        setError("Failed to send message. Please try again.")
      }
    } catch (err) {
      // Handle network or unexpected errors
      setError("An error occurred. Please try again later.")
      console.error("Form submission error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="text-sm font-medium leading-none text-slate-600"
        >
          Full Name:
        </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-[#202d4a]/20 bg-white px-3 py-2 text-sm text-[#202d4a] ring-offset-[#ba9669] focus-visible:outline-none focus-visible:border-[#ba9669] focus-visible:ring-1 focus-visible:ring-[#ba9669] disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Full Name"
          required
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-medium leading-none text-slate-600"
        >
          Email:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-[#202d4a]/20 bg-white px-3 py-2 text-sm text-[#202d4a] ring-offset-[#ba9669] focus-visible:outline-none focus-visible:border-[#ba9669] focus-visible:ring-1 focus-visible:ring-[#ba9669] disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Email"
          required
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="company"
          className="text-sm font-medium leading-none text-slate-600"
        >
          Company:
        </label>
        <input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-[#202d4a]/20 bg-white px-3 py-2 text-sm text-[#202d4a] ring-offset-[#ba9669] focus-visible:outline-none focus-visible:border-[#ba9669] focus-visible:ring-1 focus-visible:ring-[#ba9669] disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Company Name"
        />
      </div>
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-medium leading-none text-slate-600"
        >
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="flex min-h-[120px] w-full rounded-md border border-[#202d4a]/20 bg-white px-3 py-2 text-sm text-[#202d4a] ring-offset-[#ba9669] focus-visible:outline-none focus-visible:border-[#ba9669] focus-visible:ring-1 focus-visible:ring-[#ba9669] disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Tell us about your project..."
          required
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-10 w-full items-center justify-center rounded-md bg-[#ba9669] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#ba9669]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#202d4a] disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      {isSubmitted && (
        <div className="rounded-md border border-[#ba9669]/30 bg-[#ba9669]/10 p-4 text-sm text-[#ba9669] shadow-sm">
          Thank you for your message! We&apos;ll get back to you shortly.
        </div>
      )}
      {error && (
        <div className="rounded-md border border-red-300 bg-red-50 p-4 text-sm text-red-800 shadow-sm">
          {error}
        </div>
      )}
    </form>
  )
}
