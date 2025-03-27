import {
  Building,
  Check,
  ChevronRight,
  FileText,
  Lightbulb,
  Shield,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BusinessLawPage() {
  const businessServices = [
    {
      title: "Business Formation & Incorporation",
      description:
        "Strategic guidance on selecting the optimal business structure, preparing and filing required documentation, and ensuring regulatory compliance during the incorporation process in Ontario.",
      icon: <Building className="h-6 w-6" />,
      details: [
        "Ontario corporation registration",
        "Partnership agreements",
        "Sole proprietorship establishment",
        "Not-for-profit corporation formation",
        "Business name registration (NUANS search)",
        "Articles of incorporation",
      ],
    },
    {
      title: "Contract Drafting & Review",
      description:
        "Comprehensive contract services including drafting, negotiation, review, and revision of all types of business agreements to protect your interests and minimize risk under Ontario law.",
      icon: <FileText className="h-6 w-6" />,
      details: [
        "Service agreements",
        "Sales contracts",
        "Partnership agreements",
        "Vendor contracts",
        "Non-disclosure agreements",
        "License agreements",
      ],
    },
    {
      title: "Corporate Governance",
      description:
        "Guidance on establishing effective governance structures, board practices, and corporate policies to ensure compliance with Ontario business regulations and promote sound decision-making.",
      icon: <Users className="h-6 w-6" />,
      details: [
        "Board structure and responsibilities",
        "Corporate bylaws",
        "Shareholder agreements",
        "Board meeting protocols",
        "Corporate record maintenance",
        "Governance policy development",
      ],
    },
    {
      title: "Mergers & Acquisitions",
      description:
        "Expert assistance through all phases of the M&A process, from initial strategy and due diligence to negotiation, documentation, and post-closing integration in the Ontario market.",
      icon: <Building className="h-6 w-6" />,
      details: [
        "Transaction structuring",
        "Due diligence coordination",
        "Purchase agreement negotiation",
        "Regulatory compliance",
        "Asset purchases",
        "Share transactions",
      ],
    },
    {
      title: "Employment Law",
      description:
        "Comprehensive employment law services covering hiring practices, employee handbooks, workplace policies, and representation in employment disputes under Ontario's Employment Standards Act.",
      icon: <Users className="h-6 w-6" />,
      details: [
        "Employment agreements",
        "Workplace policies",
        "Termination procedures",
        "Non-compete agreements",
        "Ontario workplace compliance",
        "HR policy development",
      ],
    },
    {
      title: "Regulatory Compliance",
      description:
        "Navigating complex regulatory landscapes to ensure your business operations remain compliant with federal, provincial, and municipal regulations in Ontario.",
      icon: <Shield className="h-6 w-6" />,
      details: [
        "Regulatory audits",
        "Compliance program development",
        "Ontario industry-specific regulations",
        "Reporting requirements",
        "Compliance training",
        "Risk assessment",
      ],
    },
  ];

  const businessFAQs = [
    {
      question: "When should I incorporate my business in Ontario?",
      answer:
        "The optimal timing for incorporation depends on various factors including liability concerns, tax implications, funding needs, and growth plans. Generally, incorporation becomes beneficial when your business faces increased liability risks, requires external investment, or would benefit from tax advantages available to corporations in Ontario. During your consultation, we can evaluate your specific situation to determine if incorporation is right for your business.",
    },
    {
      question:
        "What's the difference between a corporation and other business structures in Ontario?",
      answer:
        "An Ontario corporation is a separate legal entity distinct from its owners, providing liability protection by separating personal assets from business liabilities. Other structures like sole proprietorships offer simplicity but no liability protection, while partnerships distribute liability among partners. Ontario corporations also offer potential tax advantages, perpetual existence, and greater ease in raising capital, though they involve more regulatory compliance and administrative requirements under the Ontario Business Corporations Act.",
    },
    {
      question: "How can I protect my business from contract disputes?",
      answer:
        "Preventing contract disputes begins with clearly written agreements that explicitly outline all terms, obligations, and remedies under Ontario contract law. Having your contracts professionally drafted or reviewed by an Ontario business lawyer is crucial. Additional protective measures include documenting all communications, maintaining thorough records, establishing clear internal processes for contract management, building dispute resolution mechanisms into agreements, and conducting regular contract audits.",
    },
    {
      question: "What should I consider before acquiring another business?",
      answer:
        "Before proceeding with an acquisition in Ontario, conduct thorough due diligence covering financial health, legal compliance, intellectual property assets, existing contracts, employment matters, and potential liabilities. Consider the strategic fit, integration challenges, customer and supplier relationships, and market position. Develop a clear integration plan, understand regulatory approvals needed in Ontario, and structure the deal appropriately. Our M&A team can guide you through this complex process under Ontario and Canadian law.",
    },
  ];

  // const clientStats = [
  //   { value: "100+", label: "Businesses Served" },
  //   { value: "98%", label: "Client Satisfaction" },
  //   { value: "12+", label: "Years Experience" },
  //   { value: "100%", label: "Ontario-Focused" },
  // ];

  const testimonials = [
    {
      quote: "TRUST LEGAL provided exceptional guidance through our complex corporate restructuring. Their expertise in Ontario business law was invaluable.",
      author: "Shakil Ahmad",
      title: "Founder, Learner's Arc."
    },
    {
      quote: "Their business formation services helped us establish our company with confidence. The team's attention to detail and knowledge of Ontario regulations exceeded our expectations.",
      author: "Kumar Akash",
      title: "Founder, GreenStart Solutions"
    },
    {
      quote: "Working with TRUST LEGAL's business law team gave us the legal foundation we needed to secure major investment and scale our operations across Ontario.",
      author: "Rohit Singh",
      title: "Co-Founder, Learner's Arc"
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <main>
      {/* Hero Section */}
      <section className="relative bg-[#202d4a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-0"></div>
        <div className="absolute inset-0 bg-[url('/business-law-hero.jpg')] bg-cover bg-center opacity-60 z-[-1]"></div>
        <div className="container mx-auto px-4 py-28 md:py-36 relative z-10">
          <div className="max-w-3xl animate-fadeIn">
            <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4 backdrop-blur-sm">
              Practice Area
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slideUp">
              Business Law
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 animate-slideUp animation-delay-150">
              Comprehensive legal solutions for Ontario businesses of all sizes, from
              formation and daily operations to growth strategies and complex
              transactions.
            </p>
            <div className="flex flex-wrap gap-4 animate-slideUp animation-delay-300">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#ba9669] text-white font-medium rounded-md hover:bg-[#ba9669]/90 transition-colors transform hover:scale-105"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-medium rounded-md hover:bg-white/20 transition-colors backdrop-blur-sm transform hover:scale-105"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#202d4a] to-transparent z-10"></div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-10 bg-[#ba9669]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {clientStats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1 transform transition-transform group-hover:scale-110">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">
                Expertise
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#202d4a] mb-6">
                Ontario Business Legal Solutions That Drive Success
              </h2>
              <p className="text-[#202d4a]/70 mb-6">
                At TRUST LEGAL, we understand that businesses face unique
                legal challenges at every stage of their development. Our
                business law practice provides tailored legal solutions that
                support your operational needs while positioning your company
                for sustainable growth and success in Ontario.
              </p>
              <p className="text-[#202d4a]/70 mb-6">
                Led by Omung Gupta, our business law team combines industry
                knowledge with legal expertise to deliver practical,
                business-oriented advice. Whether you&apos;re launching a
                startup, managing day-to-day operations, or planning a major
                transaction, we provide the guidance you need to make informed
                decisions and protect your business interests under Ontario law.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                "Personalized legal strategies",
                "Practical business advice",
                "Risk mitigation focus",
                "Responsive client service",
                "Cost-effective solutions",
                "Ontario-specific knowledge",
                ].map((item, index) => (
                <div key={index} className="flex items-start gap-2 group">
                  <div className="rounded-full bg-[#ba9669]/20 p-1 text-[#ba9669] mt-1 group-hover:bg-[#ba9669] group-hover:text-white transition-colors">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-[#202d4a]/80">{item}</span>
                </div>
                ))}
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02] group">
              <Image
                src="/business-law.jpg"
                alt="Business Law Services"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#202d4a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-[#f9f9f9]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202d4a]">
              Comprehensive Ontario Business Law Services
            </h2>
            <p className="mt-4 text-[#202d4a]/70 max-w-3xl mx-auto">
              From entity formation to complex corporate transactions, our
              business law practice offers a complete range of services to
              address your company&apos;s legal needs in Ontario.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1 hover:border-[#ba9669]/30"
            >
              <div className="p-6">
                <div className="rounded-full bg-[#202d4a]/10 p-3 w-fit text-[#202d4a] mb-4 group-hover:bg-[#202d4a] group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#202d4a] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#202d4a]/70 mb-5">
                  {service.description}
                </p>
                <h4 className="text-sm font-medium text-[#202d4a] mb-3">
                  Services include:
                </h4>
                <ul className="space-y-2 mb-4">
                  {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 group">
                    <div className="rounded-full bg-[#ba9669]/20 p-1 text-[#ba9669] mt-1 group-hover:bg-[#ba9669] group-hover:text-white transition-colors">
                      <svg
                        width="10"
                        height="10"
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
                    <span className="text-sm text-[#202d4a]/80">
                      {detail}
                    </span>
                  </li>
                  ))}
                </ul>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202d4a]">
              How We Work With Ontario Business Clients
            </h2>
            <p className="mt-4 text-[#202d4a]/70 max-w-3xl mx-auto">
              Our structured approach ensures we deliver tailored legal
              solutions that address your business needs while positioning you
              for long-term success in the Ontario market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
            {[
            {
              icon: <Lightbulb className="h-6 w-6" />,
              title: "Understand",
              description:
              "We begin by thoroughly understanding your business model, objectives, challenges, and industry context within Ontario.",
            },
            {
              icon: <FileText className="h-6 w-6" />,
              title: "Analyze",
              description:
              "Our team analyzes your specific situation to identify legal needs and potential risks requiring attention under Ontario law.",
            },
            {
              icon: <Users className="h-6 w-6" />,
              title: "Strategize",
              description:
              "We develop customized legal strategies aligned with your business goals and risk tolerance within Ontario's regulatory framework.",
            },
            {
              icon: <Shield className="h-6 w-6" />,
              title: "Implement & Monitor",
              description:
              "We execute the agreed strategy and provide ongoing support as your business evolves in the Ontario market.",
            },
            ].map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-[#f9f9f9] rounded-lg p-6 h-full border border-gray-100 relative z-10 transition-all duration-300 group-hover:bg-[#202d4a] group-hover:border-[#202d4a] group-hover:shadow-lg">
                <div className="rounded-full bg-[#ba9669]/20 p-3 w-fit text-[#ba9669] mb-4 group-hover:bg-[#ba9669]/40">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-[#202d4a] mb-3 group-hover:text-white transition-colors">
                  {step.title}
                </h3>
                <p className="text-[#202d4a]/70 group-hover:text-white/80 transition-colors">{step.description}</p>
              </div>
              {index < 3 && (
              <div className="hidden lg:block absolute top-1/2 right-[-20px] transform -translate-y-1/2 z-20">
                <ChevronRight className="h-8 w-8 text-[#ba9669]" />
              </div>
              )}
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-16 md:py-24 bg-[#f3f0ea]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">
              Client Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202d4a]">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-[#202d4a]/70 max-w-3xl mx-auto">
              Discover how our business law expertise has helped companies across Ontario
              achieve their legal objectives and business goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md relative group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="text-6xl absolute top-4 left-4 text-[#ba9669]/20 leading-none font-serif">&quot;</div>
                <p className="text-[#202d4a]/80 mb-6 relative z-10">{item.quote}</p>
                <div className="mt-auto">
                  <p className="font-bold text-[#202d4a]">{item.author}</p>
                  <p className="text-sm text-[#202d4a]/60">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Client Benefits */}
      <section className="py-16 md:py-24 bg-[#202d4a] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">
              Benefits
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Our Ontario Business Law Services
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our Ontario-focused legal approach delivers tangible benefits
              that support your company&apos;s growth and success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
            {
              title: "Risk Mitigation",
              description:
              "Proactively identify and address legal risks before they become costly problems through comprehensive Ontario compliance reviews and strategic planning.",
            },
            {
              title: "Business Continuity",
              description:
              "Ensure your business operations continue smoothly with legally sound governance structures, succession planning, and crisis management protocols under Ontario law.",
            },
            {
              title: "Strategic Growth",
              description:
              "Position your business for expansion with legal frameworks that support scaling, new Ontario market entry, and strategic partnerships or acquisitions.",
            },
            {
              title: "Cost Efficiency",
              description:
              "Prevent expensive legal issues through proper documentation, Ontario compliance, and risk management, saving significant costs in the long run.",
            },
            {
              title: "Competitive Advantage",
              description:
              "Leverage legal structures and protections that allow your business to operate more efficiently and capitalize on Ontario market opportunities faster than competitors.",
            },
            {
              title: "Peace of Mind",
              description:
              "Focus on running your business knowing that your Ontario legal matters are being handled by experienced professionals committed to your success.",
            },
            ].map((benefit, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/5 transition-all duration-300 hover:bg-white/15 hover:border-white/20 transform hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-[#ba9669] mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-[#f9f9f9]">
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
            {businessFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#ba9669]/30"
            >
              <h3 className="text-xl font-bold text-[#202d4a] mb-3">
                {faq.question}
              </h3>
              <p className="text-[#202d4a]/70">{faq.answer}</p>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#202d4a] to-[#1a2438] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Discuss Your Ontario Business Legal Needs?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact TRUST LEGAL today to schedule a consultation with our
            business law team. We&apos;ll help you navigate complex legal
            challenges and develop strategies that support your business
            goals under Ontario law.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#ba9669] text-white font-medium rounded-md hover:bg-[#ba9669]/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
      </main>
    </div>
  );
}
