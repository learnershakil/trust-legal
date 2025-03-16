import ContactForm from "@/components/Home/contact-form";
import { Calendar, Clock, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main>
        {/* Hero Section */}
        <section className="relative bg-[#202d4a] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">
                Contact Us
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Get In Touch With Us
              </h1>
              <p className="text-lg text-gray-300 mb-6">
                We&apos;re here to provide the legal expertise you need in Ontario. Reach
                out to schedule a consultation or learn more about our services.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information and Map */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#202d4a] mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-[#ba9669]/20 p-3 text-[#ba9669]">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#202d4a] mb-1">
                          Telephone
                        </h3>
                        <p className="text-[#202d4a]/70">+1 (548) 333-4353</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-[#ba9669]/20 p-3 text-[#ba9669]">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#202d4a] mb-1">
                          Email
                        </h3>
                        <p className="text-[#202d4a]/70">info@trustlegal.ca</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-[#ba9669]/20 p-3 text-[#ba9669]">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#202d4a] mb-1">
                          Office Location
                        </h3>
                        <p className="text-[#202d4a]/70">
                          206-6760 Davand Drive,
                          <br />
                          Mississauga, Ontario, L5T 2L9
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-[#ba9669]/20 p-3 text-[#ba9669]">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-[#202d4a] mb-1">
                          Business Hours
                        </h3>
                        <p className="text-[#202d4a]/70">
                          Monday - Friday: 9:00 AM - 5:00 PM
                        </p>
                        <p className="text-[#202d4a]/70">
                          Saturday: By appointment only
                        </p>
                        <p className="text-[#202d4a]/70">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <div className="mb-4">
                    <p className="text-lg font-medium text-[#ba9669]">
                      OMUNG GUPTA
                    </p>
                    <p className="text-sm text-[#202d4a]/70">
                      BARRISTER, SOLICITOR & NOTARY PUBLIC
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#ba9669]/20 p-3 text-[#ba9669]">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-[#202d4a] mb-1">
                        Book a Consultation
                      </h3>
                      <p className="text-[#202d4a]/70">
                        Schedule your initial consultation by telephone or through our secure online booking form.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="lg:col-span-2">
                <div className="h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md border border-gray-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.0936145959837!2d-79.6518937!3d43.6442288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3bee79b2e5b7%3A0x3d51c734f9f58b74!2s6760%20Davand%20Dr%20%23206%2C%20Mississauga%2C%20ON%20L5T%202L9%2C%20Canada!5e0!3m2!1sen!2sus!4v1709823938969!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Our Mississauga Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-[#f9f9f9]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
          <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">
            Contact Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#202d4a] mb-6">
            Request a Consultation
          </h2>
          <p className="text-[#202d4a]/70 mb-6">
            Whether you require assistance with a specific legal matter in Ontario 
            or wish to arrange an initial consultation, our firm is at your service. 
            Complete the form and our team will respond promptly.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-[#202d4a] mb-4">
              Our Service Commitment
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-[#ba9669]/20 p-1 text-[#ba9669] mt-0.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 6L9 17L4 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
                </div>
                <span className="text-[#202d4a]/80">
            Response within one business day
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-[#ba9669]/20 p-1 text-[#ba9669] mt-0.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 6L9 17L4 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
                </div>
                <span className="text-[#202d4a]/80">
            Comprehensive case assessment under Ontario law
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-[#ba9669]/20 p-1 text-[#ba9669] mt-0.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 6L9 17L4 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
                </div>
                <span className="text-[#202d4a]/80">
            Flexible consultation arrangements in Mississauga and Greater Toronto Area
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="rounded-full bg-[#ba9669]/20 p-1 text-[#ba9669] mt-0.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 6L9 17L4 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
                </div>
                <span className="text-[#202d4a]/80">
            Strictly confidential communications protected by solicitor-client privilege
                </span>
              </li>
            </ul>
          </div>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
          <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669]">
          FAQ
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#202d4a] mt-3">
          Frequently Asked Questions
              </h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-[#202d4a] mb-3">
            What should I bring to my first consultation?
          </h3>
          <p className="text-[#202d4a]/70">
            Please bring all relevant documents pertaining to your matter, such as
            agreements, correspondence, court documents, and government-issued identification.
            For real estate matters, include your Property Assessment Notice or land transfer documents.
            This preparation ensures we can provide comprehensive advice under Ontario law.
          </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-[#202d4a] mb-3">
            How long does an initial consultation typically last?
          </h3>
          <p className="text-[#202d4a]/70">
            Initial consultations generally range from 30-60 minutes, contingent upon the
            complexity of your legal matter. This provides sufficient time to thoroughly assess 
            your situation and discuss potential strategies within the Ontario legal framework.
          </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-[#202d4a] mb-3">
            Do you offer virtual consultations?
          </h3>
          <p className="text-[#202d4a]/70">
            Yes, we provide secure virtual consultations via video conference or telephone 
            in accordance with Law Society of Ontario protocols. Virtual meetings are particularly 
            convenient for clients throughout the Greater Toronto Area and beyond. Please specify your 
            preference when booking your appointment.
          </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-[#202d4a] mb-3">
            What are your payment options?
          </h3>
          <p className="text-[#202d4a]/70">
            We accept various payment methods including Interac e-Transfer, major credit cards, 
            debit cards, and cheques. For certain matters, we can establish structured payment 
            arrangements tailored to your circumstances. All fees are transparent and comply 
            with Law Society of Ontario guidelines.
          </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
