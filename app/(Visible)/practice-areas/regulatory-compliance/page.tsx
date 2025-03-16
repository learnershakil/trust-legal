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
  
  export default function regulatoryComplianceLawPage() {
    const regulatoryServices = [
      {
        title: "Industry-Specific Compliance",
        description:
          "Tailored guidance on navigating complex sector-specific regulations that affect your business operations across Canada, including federal and provincial requirements.",
        icon: <Building className="h-6 w-6" />,
        details: [
          "Financial services regulations",
          "Healthcare compliance",
          "Energy sector requirements",
          "Telecommunications regulations",
          "Transportation regulatory frameworks",
          "Manufacturing compliance",
        ],
      },
      {
        title: "Financial Regulatory Compliance",
        description:
          "Comprehensive support for navigating Canadian financial regulations, including reporting requirements, anti-money laundering provisions, and compliance with securities laws.",
        icon: <FileText className="h-6 w-6" />,
        details: [
          "FINTRAC compliance",
          "Canadian securities regulations",
          "Banking and financial reporting",
          "Anti-money laundering protocols",
          "Financial consumer protection",
          "Provincial securities compliance",
        ],
      },
      {
        title: "Privacy & Data Protection",
        description:
          "Strategic guidance on compliance with PIPEDA, provincial privacy laws, and international data regulations affecting Canadian businesses and their cross-border operations.",
        icon: <Shield className="h-6 w-6" />,
        details: [
          "PIPEDA compliance frameworks",
          "Provincial privacy legislation",
          "Data breach response protocols",
          "Cross-border data transfers",
          "Consumer privacy rights",
          "Data governance structures",
        ],
      },
      {
        title: "Environmental Compliance",
        description:
          "Expert assistance navigating Canada's complex environmental regulations at federal, provincial, and municipal levels, including permits, assessments, and reporting requirements.",
        icon: <Lightbulb className="h-6 w-6" />,
        details: [
          "Environmental assessment compliance",
          "Emissions reporting requirements",
          "Waste management regulations",
          "Natural resource regulations",
          "Environmental permits and approvals",
          "Climate change compliance obligations",
        ],
      },
      {
        title: "Health & Safety Regulations",
        description:
          "Comprehensive guidance on occupational health and safety requirements across Canadian jurisdictions to protect your workforce and maintain compliant operations.",
        icon: <Users className="h-6 w-6" />,
        details: [
          "Provincial health & safety standards",
          "Workplace safety policies",
          "Safety training compliance",
          "Incident reporting protocols",
          "Workplace hazard assessments",
          "COVID-19 safety requirements",
        ],
      },
      {
        title: "Corporate Governance",
        description:
          "Development of robust governance structures and compliance programs to ensure your organization meets its regulatory obligations under Canadian corporate law.",
        icon: <Building className="h-6 w-6" />,
        details: [
          "Compliance program development",
          "Board governance structures",
          "Regulatory risk assessments",
          "Compliance monitoring systems",
          "Corporate reporting requirements",
          "Officer and director obligations",
        ],
      },
    ];
  
    const regulatoryFAQs = [
      {
        question: "How do I ensure my business is compliant with Canadian regulations?",
        answer:
          "Ensuring regulatory compliance in Canada requires a systematic approach: first, identify which federal, provincial, and industry-specific regulations apply to your business; second, develop compliance policies aligned with these requirements; third, implement robust monitoring systems; fourth, provide staff training on compliance obligations; and finally, conduct regular audits and updates as regulations evolve. Our team can guide you through this process with a customized compliance framework tailored to your specific industry and operational needs.",
      },
      {
        question: "What are the key privacy regulations affecting Canadian businesses?",
        answer:
          "Canadian businesses must primarily comply with the Personal Information Protection and Electronic Documents Act (PIPEDA) at the federal level, which governs the collection, use, and disclosure of personal information. Quebec, British Columbia, and Alberta have their own provincial privacy legislation that may apply instead of PIPEDA for intra-provincial activities. Additionally, organizations handling health information must adhere to various provincial health information protection acts. International regulations like GDPR may also apply if you serve European customers or process EU residents' data.",
      },
      {
        question: "How often should we review our regulatory compliance program?",
        answer:
          "Canadian regulatory compliance programs should undergo comprehensive reviews at least annually to address regulatory changes and operational shifts. However, more frequent quarterly assessments are recommended for high-risk industries or during periods of significant regulatory reform. Additionally, trigger events such as business expansion, new product launches, or compliance incidents should prompt immediate reviews. Our team can establish an optimal review schedule based on your industry, risk profile, and the Canadian regulatory landscape specific to your operations.",
      },
      {
        question: "What penalties might we face for non-compliance with Canadian regulations?",
        answer:
          "Non-compliance consequences in Canada vary widely by regulatory area and can include substantial financial penalties, criminal sanctions, director liability, business restrictions, and reputational damage. For example, competition law violations can result in fines up to $25 million and imprisonment, privacy breaches under PIPEDA can lead to fines up to $100,000, and environmental violations can trigger millions in penalties. Beyond direct financial impact, non-compliance can lead to operational disruptions, loss of licenses, and damaged business relationships. Our regulatory team helps clients understand their specific risk exposure and implement mitigation strategies.",
      },
    ];
  
    return (
      <div className="flex min-h-screen flex-col">
        <main>
        {/* Hero Section */}
        <section className="relative bg-[#202d4a] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">
            Practice Area
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Regulatory Compliance
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
            Navigate the complex Canadian regulatory landscape with confidence through our expert compliance guidance for businesses of all sizes and industries.
            </p>
            <div className="flex flex-wrap gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#ba9669] text-white font-medium rounded-md hover:bg-[#ba9669]/90 transition-colors"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-medium rounded-md hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Explore Services
            </Link>
            </div>
          </div>
          </div>
        </section>
  
        {/* Overview Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
            <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">
              Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202d4a] mb-6">
              Canadian Regulatory Compliance Solutions That Protect Your Business
            </h2>
            <p className="text-[#202d4a]/70 mb-6">
              At TRUST LEGAL, we understand that navigating Canada&apos;s complex regulatory landscape 
              is challenging for businesses of all sizes. Our regulatory compliance practice provides 
              strategic guidance to help you meet legal obligations while maintaining operational efficiency.
            </p>
            <p className="text-[#202d4a]/70 mb-6">
              Our team combines deep knowledge of Canadian federal and provincial regulations with 
              industry-specific expertise to deliver practical compliance solutions. We help you 
              transform regulatory challenges into opportunities for enhanced governance, risk management, 
              and competitive advantage in the Canadian marketplace.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
              "Federal & provincial expertise",
              "Industry-specific knowledge",
              "Practical compliance frameworks",
              "Risk-based assessments",
              "Comprehensive audit support",
              "Ongoing compliance monitoring",
              ].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="rounded-full bg-[#ba9669]/20 p-1 text-[#ba9669] mt-1">
                <Check className="h-4 w-4" />
                </div>
                <span className="text-[#202d4a]/80">{item}</span>
              </div>
              ))}
            </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/regulatory-compliance.jpg"
              alt="Regulatory Compliance Services"
              fill
              className="object-cover"
            />
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
            Comprehensive Canadian Regulatory Compliance Services
            </h2>
            <p className="mt-4 text-[#202d4a]/70 max-w-3xl mx-auto">
            Our expertise spans federal and provincial regulations across multiple sectors, 
            providing you with tailored compliance solutions for your specific industry challenges.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regulatoryServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="p-6">
              <div className="rounded-full bg-[#202d4a]/10 p-3 w-fit text-[#202d4a] mb-4">
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
                <li key={idx} className="flex items-start gap-2">
                  <div className="rounded-full bg-[#ba9669]/20 p-1 text-[#ba9669] mt-1">
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
            How We Establish Regulatory Compliance
            </h2>
            <p className="mt-4 text-[#202d4a]/70 max-w-3xl mx-auto">
            Our methodical approach ensures your business meets all applicable Canadian 
            regulatory requirements while maintaining operational efficiency.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
            {[
            {
              icon: <FileText className="h-6 w-6" />,
              title: "Assessment",
              description:
              "We conduct a comprehensive review of your operations against applicable federal and provincial regulations to identify compliance gaps.",
            },
            {
              icon: <Lightbulb className="h-6 w-6" />,
              title: "Design",
              description:
              "Our team develops tailored compliance frameworks and policies aligned with Canadian regulatory requirements for your specific industry.",
            },
            {
              icon: <Users className="h-6 w-6" />,
              title: "Implementation",
              description:
              "We assist with implementing compliance systems, training staff, and establishing monitoring protocols to ensure ongoing adherence.",
            },
            {
              icon: <Shield className="h-6 w-6" />,
              title: "Maintenance",
              description:
              "Regular reviews, updates, and continuous monitoring keep your compliance program current with evolving Canadian regulations.",
            },
            ].map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-[#f9f9f9] rounded-lg p-6 h-full border border-gray-100 relative z-10">
              <div className="rounded-full bg-[#ba9669]/20 p-3 w-fit text-[#ba9669] mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-[#202d4a] mb-3">
                {step.title}
              </h3>
              <p className="text-[#202d4a]/70">{step.description}</p>
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
  
        {/* Client Benefits */}
        <section className="py-16 md:py-24 bg-[#202d4a] text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">
                        Client Benefits
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        The Strategic Value of Proactive Regulatory Compliance
                    </h2>
                    <p className="text-gray-300 max-w-3xl mx-auto">
                        Our comprehensive approach to Canadian regulatory compliance delivers measurable benefits 
                        that safeguard your business while creating sustainable competitive advantages.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Shield className="h-6 w-6" />,
                            title: "Risk Mitigation",
                            description:
                                "Strategically minimize exposure to regulatory penalties, enforcement actions, and litigation through comprehensive compliance with Canadian federal and provincial requirements.",
                        },
                        {
                            icon: <FileText className="h-6 w-6" />,
                            title: "Operational Excellence",
                            description:
                                "Transform compliance obligations into opportunities to optimize operations, enhance documentation protocols, and streamline business processes across your organization.",
                        },
                        {
                            icon: <Users className="h-6 w-6" />,
                            title: "Enhanced Market Credibility",
                            description:
                                "Establish trusted relationships with Canadian customers, partners, and stakeholders by demonstrating an unwavering commitment to regulatory excellence and ethical operations.",
                        },
                        {
                            icon: <Building className="h-6 w-6" />,
                            title: "Secured Market Access",
                            description:
                                "Ensure uninterrupted access to Canadian markets through meticulous compliance with evolving industry-specific requirements and emerging regulatory standards.",
                        },
                        {
                            icon: <Lightbulb className="h-6 w-6" />,
                            title: "Sustainable Growth Framework",
                            description:
                                "Establish a robust foundation for strategic expansion with scalable compliance frameworks designed to accommodate growth across Canadian provinces and territories.",
                        },
                        {
                            icon: <Check className="h-6 w-6" />,
                            title: "Strategic Competitive Advantage",
                            description:
                                "Leverage your regulatory expertise as a key differentiator in the Canadian marketplace, particularly for securing contracts where compliance excellence is a prerequisite.",
                        },
                    ].map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/5 hover:bg-white/15 transition-all duration-300"
                        >
                            <div className="rounded-full bg-[#ba9669]/20 p-3 w-fit text-[#ba9669] mb-4">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#ba9669] mb-3">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
  
        {/* Case Study or Example */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
            <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">
              Case Study
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202d4a] mb-6">
              Transforming Compliance for a Canadian Healthcare Provider
            </h2>
            <p className="text-[#202d4a]/70 mb-4">
              A growing healthcare services provider operating across multiple Canadian provinces 
              faced significant challenges managing their complex regulatory obligations.
            </p>
            <div className="space-y-6 mb-6">
              <div>
              <h3 className="text-lg font-medium text-[#202d4a] mb-2">
                The Challenge
              </h3>
              <p className="text-[#202d4a]/70">
                The company needed to navigate provincial healthcare regulations, 
                privacy requirements under PIPEDA and provincial laws, professional licensing 
                standards, and health and safety regulations while scaling operations across Canada.
              </p>
              </div>
              <div>
              <h3 className="text-lg font-medium text-[#202d4a] mb-2">
                Our Approach
              </h3>
              <p className="text-[#202d4a]/70">
                We developed an integrated compliance framework addressing all regulatory areas, 
                implemented a centralized compliance monitoring system, established 
                province-specific protocols, and created comprehensive staff training programs 
                tailored to Canadian healthcare requirements.
              </p>
              </div>
              <div>
              <h3 className="text-lg font-medium text-[#202d4a] mb-2">
                The Result
              </h3>
              <p className="text-[#202d4a]/70">
                The client successfully expanded into three additional provinces without 
                compliance incidents, passed regulatory inspections with exemplary results, 
                reduced compliance management costs by 30%, and leveraged their regulatory 
                excellence to secure major contracts with Canadian public healthcare institutions.
              </p>
              </div>
            </div>
            </div>
            <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/regulatory-case-study.jpg"
              alt="Canadian Healthcare Regulatory Compliance"
              fill
              className="object-cover"
            />
            </div>
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
            {regulatoryFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
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
        <section className="py-16 md:py-24 bg-[#202d4a] text-white">
          <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Canadian Regulatory Compliance?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact TRUST LEGAL today to discuss how our regulatory compliance expertise 
            can help your business navigate Canadian requirements while supporting your 
            growth objectives in today&apos;s complex regulatory environment.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#ba9669] text-white font-medium rounded-md hover:bg-[#ba9669]/90 transition-colors"
          >
            Schedule a Consultation
          </Link>
          </div>
        </section>
        </main>
      </div>
    );
  }
  