import {
  Calendar,
  FileText,
  ChevronRight,
  MessageCircle,
  Video,
  Users,
} from "lucide-react";
import Link from "next/link";

export default function LegalConsultationPage() {
  const consultationTypes = [
    {
      id: "initial-consultation",
      title: "Initial Consultation",
      icon: <FileText className="h-10 w-10" />,
      description:
        "Comprehensive first meeting to understand your legal needs and develop a strategic approach for your case.",
      services: [
        "Case Assessment & Evaluation",
        "Legal Strategy Development",
        "Fee Structure Discussion",
        "Document Review",
        "Next Steps Planning",
        "Risk Assessment",
      ],
    },
    {
      id: "virtual-consultation",
      title: "Virtual Consultation",
      icon: <Video className="h-10 w-10" />,
      description:
        "Convenient and secure remote legal consultations for clients unable to meet in person.",
      services: [
        "Video Conference Meetings",
        "Document Sharing Platform",
        "Electronic Signature Options",
        "Encrypted Communications",
        "Follow-up Email Summary",
        "Remote Case Management",
      ],
    },
    {
      id: "corporate-consultation",
      title: "Corporate Consultation",
      icon: <Users className="h-10 w-10" />,
      description:
        "Specialized consultation services for businesses facing complex legal challenges or seeking ongoing legal support.",
      services: [
        "Business Risk Assessment",
        "Regulatory Compliance Review",
        "Contract & Document Analysis",
        "Corporate Structure Evaluation",
        "Employment Matter Discussion",
        "Strategic Legal Planning",
      ],
    },
    {
      id: "ongoing-legal-support",
      title: "Ongoing Legal Support",
      icon: <Calendar className="h-10 w-10" />,
      description:
        "Continuous legal guidance and representation through regular consultation sessions and accessible communication.",
      services: [
        "Regular Status Meetings",
        "Unlimited Email Support",
        "Priority Response Time",
        "Legal Updates & Alerts",
        "Document Management",
        "Proactive Risk Management",
      ],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <main>
        {/* Hero Section */}
        <section className="relative bg-[#202d4a] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">
                Our Services
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Legal Consultation
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                At TRUST LEGAL, we offer comprehensive consultation services
                designed to provide clarity and direction for your legal
                matters, ensuring you have the guidance needed to make informed
                decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">
                Consultation Options
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#202d4a] mb-6">
                Personalized Legal Guidance
              </h2>
              <p className="text-[#202d4a]/70 text-lg">
                Our consultation services are tailored to meet your specific
                needs, whether you require one-time advice or ongoing legal
                support. Our experienced Barristers and Solicitors provide clear, actionable
                guidance to help you navigate complex legal challenges with
                confidence.
              </p>
            </div>

            {/* Consultation Types Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {consultationTypes.map((type) => (
                <div
                  key={type.id}
                  className="bg-[#f9f9f9] rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="bg-[#202d4a] p-8">
                    <div className="text-[#ba9669] mb-4">{type.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {type.title}
                    </h3>
                    <p className="text-gray-300">{type.description}</p>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-medium text-[#202d4a] mb-4">
                      What&apos;s Included:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {type.services.map((service, index) => (
                        <li key={index} className="flex items-start">
                          <div className="rounded-full bg-[#ba9669]/20 p-1 text-[#ba9669] mr-3 mt-1">
                            <svg
                              width="12"
                              height="12"
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
                          <span className="text-[#202d4a]/80">{service}</span>
                        </li>
                      ))}
                    </ul>
                    {/* <div className="mt-4">
                      <Link
                        href={`/legal-consultation/${type.id}`}
                        className="inline-flex items-center text-[#ba9669] hover:text-[#ba9669]/80 font-medium transition-colors"
                      >
                        Learn More <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Process Section */}
        <section className="py-16 md:py-24 bg-[#f9f9f9]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">
                  Our Process
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#202d4a] mb-6">
                  What to Expect
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#202d4a] text-white h-8 w-8 flex items-center justify-center flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#202d4a] mb-2">
                        Scheduling
                      </h3>
                      <p className="text-[#202d4a]/70">
                        Book your consultation online, by phone, or email. We
                        offer flexible scheduling options to accommodate your
                        needs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#202d4a] text-white h-8 w-8 flex items-center justify-center flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#202d4a] mb-2">
                        Preparation
                      </h3>
                      <p className="text-[#202d4a]/70">
                        Our team will provide guidance on what documents and
                        information to prepare to make the most of your
                        consultation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#202d4a] text-white h-8 w-8 flex items-center justify-center flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#202d4a] mb-2">
                        Consultation Session
                      </h3>
                      <p className="text-[#202d4a]/70">
                        Meet with our experienced Barristers and Solicitors who will listen
                        carefully, analyze your situation, and discuss legal
                        options.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-[#202d4a] text-white h-8 w-8 flex items-center justify-center flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#202d4a] mb-2">
                        Action Plan
                      </h3>
                      <p className="text-[#202d4a]/70">
                        Receive a clear action plan outlining recommended next
                        steps, potential strategies, and fee structure options.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
                <div className="space-y-6">
                  <div>
                    <p className="text-xl font-bold text-[#202d4a] mb-2">
                      The Consultation Advantage
                    </p>
                    <p className="text-[#202d4a]/70">
                      Our consultations provide more than just answers—they
                      offer strategic direction and peace of mind. We focus on
                      understanding your unique situation to provide tailored
                      advice that addresses your specific legal concerns.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-xl font-bold text-[#202d4a] mb-2">
                      Comprehensive Analysis
                    </p>
                    <p className="text-[#202d4a]/70">
                      During your consultation, our legal professionals conduct a thorough
                      analysis of your legal matter, identifying potential
                      challenges and opportunities. This in-depth approach
                      ensures you receive comprehensive guidance for informed
                      decision-making.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-200 mb-6">
                    <div className="mb-4">
                      <p className="text-lg font-medium text-[#ba9669]">
                        SUNITA PATEL
                      </p>
                      <p className="text-sm text-[#202d4a]/70">
                        SENIOR BARRISTER & SOLICITOR
                      </p>
                    </div>
                    <p className="italic text-[#202d4a]/70">
                      &quot;The initial consultation is the foundation of a
                      successful solicitor-client relationship. It&apos;s where we
                      build understanding and trust that carries throughout our
                      representation.&quot;
                    </p>
                  </div>

                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#ba9669] text-white font-medium rounded-md hover:bg-[#ba9669]/90 transition-colors w-full"
                  >
                    Schedule Your Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">
                FAQ
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#202d4a]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#202d4a] mb-3">
                  How long does a typical consultation last?
                </h3>
                <p className="text-[#202d4a]/70">
                  Initial consultations typically last 60-90 minutes, depending
                  on the complexity of your legal matter. This allows sufficient
                  time to discuss your situation in detail, analyze potential
                  approaches, and address your questions.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#202d4a] mb-3">
                  What should I bring to my consultation?
                </h3>
                <p className="text-[#202d4a]/70">
                  We recommend bringing any relevant documents related to your
                  legal matter, such as contracts, correspondence, court papers,
                  or business records. Prior to your appointment, our team will
                  provide specific guidance on what documentation would be most
                  helpful.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#202d4a] mb-3">
                  Is my consultation confidential?
                </h3>
                <p className="text-[#202d4a]/70">
                  Absolutely. All consultations with our legal team are protected
                  by solicitor-client privilege. Information shared during your
                  consultation remains strictly confidential, regardless of
                  whether you ultimately retain our services.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-[#202d4a] mb-3">
                  What is the cost of a legal consultation?
                </h3>
                <p className="text-[#202d4a]/70">
                  Consultation fees vary based on the type of legal matter and
                  the legal professional&apos;s expertise. Some consultations may be offered
                  at a flat rate, while others might be provided at an hourly
                  rate. In certain practice areas, we offer complimentary
                  initial consultations. Please contact our office for specific
                  fee information.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-[#202d4a] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Expert Legal Guidance Today
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Take the first step toward resolving your legal concerns by
              scheduling a consultation with TRUST LEGAL. Our experienced
              Barristers and Solicitors are ready to provide the clear guidance and strategic
              advice you need.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#ba9669] text-white font-medium rounded-md hover:bg-[#ba9669]/90 transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
