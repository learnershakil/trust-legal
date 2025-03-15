import { BookCheck, FileCheck, ChevronRight, Shield, Building, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function CorporateCompliancePage() {
  const complianceServices = [
    {
      id: "regulatory-compliance",
      title: "Regulatory Compliance",
      icon: <FileCheck className="h-10 w-10" />,
      description: "Comprehensive guidance on navigating complex regulatory requirements across various industries.",
      services: [
        "Regulatory Risk Assessment",
        "Compliance Policy Development",
        "Regulatory Filings & Reports",
        "Compliance Monitoring Systems",
        "Regulatory Change Management",
        "Industry-Specific Compliance"
      ]
    },
    {
      id: "corporate-governance",
      title: "Corporate Governance",
      icon: <Building className="h-10 w-10" />,
      description: "Established frameworks to ensure proper oversight, transparency, and accountability in your organization.",
      services: [
        "Board Structure & Processes",
        "Director & Officer Duties",
        "Shareholder Relations",
        "Governance Policies",
        "ESG Framework Development",
        "Board Training & Education"
      ]
    },
    {
      id: "compliance-audits",
      title: "Compliance Audits",
      icon: <BookCheck className="h-10 w-10" />,
      description: "Thorough reviews to identify compliance gaps and develop remediation strategies to protect your business.",
      services: [
        "Comprehensive Compliance Reviews",
        "Gap Analysis & Risk Identification",
        "Due Diligence Assessments",
        "Audit Response Support",
        "Remediation Planning",
        "Ongoing Compliance Monitoring"
      ]
    },
    {
      id: "risk-management",
      title: "Risk Management",
      icon: <Shield className="h-10 w-10" />,
      description: "Proactive strategies to identify, assess, and mitigate compliance and regulatory risks facing your organization.",
      services: [
        "Enterprise Risk Assessment",
        "Risk Management Frameworks",
        "Compliance Risk Matrices",
        "Crisis Management Planning",
        "Business Continuity Planning",
        "Third-Party Risk Management"
      ]
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <main>
      {/* Hero Section */}
      <section className="relative bg-[#202d4a] text-white">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">Corporate Services</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Corporate Compliance</h1>
          <p className="text-lg text-gray-300 mb-8">
          At TRUST LEGAL, we help organizations navigate complex regulatory landscapes with tailored compliance solutions
          that mitigate risk, protect reputation, and ensure adherence to legal requirements.
          </p>
        </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">Compliance Solutions</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#202d4a] mb-6">Protecting Your Business Through Compliance</h2>
          <p className="text-[#202d4a]/70 text-lg">
          Our corporate compliance services help businesses establish robust governance frameworks, implement effective policies, 
          and stay ahead of regulatory changes. We provide practical solutions that integrate seamlessly with your operations
          while ensuring legal and regulatory requirements are met.
          </p>
        </div>

        {/* Compliance Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {complianceServices.map((service) => (
          <div key={service.id} className="bg-[#f9f9f9] rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-[#202d4a] p-8">
            <div className="text-[#ba9669] mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
            </div>
            <div className="p-6">
            <h4 className="text-lg font-medium text-[#202d4a] mb-4">Our Services Include:</h4>
            <ul className="space-y-2 mb-6">
              {service.services.map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="rounded-full bg-[#ba9669]/20 p-1 text-[#ba9669] mr-3 mt-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                </div>
                <span className="text-[#202d4a]/80">{item}</span>
              </li>
              ))}
            </ul>
            <div className="mt-4">
              <Link
              href={`/corporate-compliance/${service.id}`}
              className="inline-flex items-center text-[#ba9669] hover:text-[#ba9669]/80 font-medium transition-colors"
              >
              Learn More <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            </div>
          </div>
          ))}
        </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 md:py-24 bg-[#f9f9f9]">
        <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
          <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">Our Methodology</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#202d4a] mb-6">Comprehensive Compliance Framework</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
            <div className="rounded-full bg-[#202d4a] text-white h-8 w-8 flex items-center justify-center flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#202d4a] mb-2">Compliance Assessment</h3>
              <p className="text-[#202d4a]/70">
              We conduct thorough assessments of your current compliance posture, identifying gaps and opportunities for improvement.
              </p>
            </div>
            </div>
            <div className="flex items-start gap-4">
            <div className="rounded-full bg-[#202d4a] text-white h-8 w-8 flex items-center justify-center flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#202d4a] mb-2">Policy Development</h3>
              <p className="text-[#202d4a]/70">
              Our legal team creates tailored compliance policies and procedures that address your specific regulatory requirements.
              </p>
            </div>
            </div>
            <div className="flex items-start gap-4">
            <div className="rounded-full bg-[#202d4a] text-white h-8 w-8 flex items-center justify-center flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#202d4a] mb-2">Implementation & Training</h3>
              <p className="text-[#202d4a]/70">
              We guide implementation of compliance frameworks and provide training to ensure organization-wide understanding.
              </p>
            </div>
            </div>
            <div className="flex items-start gap-4">
            <div className="rounded-full bg-[#202d4a] text-white h-8 w-8 flex items-center justify-center flex-shrink-0">
              4
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#202d4a] mb-2">Monitoring & Maintenance</h3>
              <p className="text-[#202d4a]/70">
              Ongoing compliance monitoring, regular reviews, and updates to ensure continuous adherence to changing regulations.
              </p>
            </div>
            </div>
          </div>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
          <div className="space-y-6">
            <div>
            <p className="text-xl font-bold text-[#202d4a] mb-2">The Compliance Advantage</p>
            <p className="text-[#202d4a]/70">
              Effective compliance is more than just avoiding penalties—it builds stakeholder trust, improves operational efficiency, and provides competitive advantages. Our approach integrates compliance into your business strategy for sustainable growth.
            </p>
            </div>

            <div className="pt-6 border-t border-gray-200">
            <p className="text-xl font-bold text-[#202d4a] mb-2">Proactive Risk Management</p>
            <p className="text-[#202d4a]/70">
              Rather than reacting to compliance issues, we help you anticipate and address potential risks before they become problems. Our forward-looking strategies protect your business while creating opportunities for responsible growth.
            </p>
            </div>

            <div className="pt-6 border-t border-gray-200 mb-6">
            <div className="mb-4">
              <p className="text-lg font-medium text-[#ba9669]">AMRITA SHARMA</p>
              <p className="text-sm text-[#202d4a]/70">CORPORATE COMPLIANCE DIRECTOR</p>
            </div>
            <p className="italic text-[#202d4a]/70">
              &quot;In today&apos;s complex regulatory environment, proper compliance is not just about checking boxes—it&apos;s about creating a culture of integrity that permeates every level of your organization.&quot;
            </p>
            </div>

            <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#ba9669] text-white font-medium rounded-md hover:bg-[#ba9669]/90 transition-colors w-full"
            >
            Schedule a Compliance Consultation
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
          <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">FAQ</div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#202d4a]">Compliance Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-[#202d4a] mb-3">What industries do your compliance services cover?</h3>
          <p className="text-[#202d4a]/70">
            Our compliance services span across multiple industries including financial services, healthcare, manufacturing, technology, and more. We tailor our approach to address industry-specific regulations while ensuring adherence to general compliance requirements.
          </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-[#202d4a] mb-3">How frequently should compliance policies be updated?</h3>
          <p className="text-[#202d4a]/70">
            Compliance policies should be reviewed at least annually, but updates may be needed more frequently in rapidly changing regulatory environments or after significant business changes. We offer ongoing monitoring services to ensure your policies remain current with evolving regulations.
          </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-[#202d4a] mb-3">What are the risks of non-compliance?</h3>
          <p className="text-[#202d4a]/70">
            Non-compliance risks include regulatory penalties, legal sanctions, reputational damage, lost business opportunities, and potential personal liability for directors and officers. Our services help you identify and mitigate these risks through proactive compliance management.
          </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-bold text-[#202d4a] mb-3">How do you handle cross-border compliance issues?</h3>
          <p className="text-[#202d4a]/70">
            For businesses operating in multiple jurisdictions, we develop comprehensive compliance frameworks that address varied regulatory requirements. Our team stays current on international regulations and can help harmonize your compliance approach across different regions while respecting local requirements.
          </p>
          </div>
        </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-[#202d4a] text-white">
        <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Strengthen Your Compliance Position</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Contact TRUST LEGAL today to discuss how our corporate compliance services can help protect your business, enhance governance, and ensure regulatory adherence while supporting your strategic objectives.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3 bg-[#ba9669] text-white font-medium rounded-md hover:bg-[#ba9669]/90 transition-colors"
        >
          Request a Compliance Assessment
        </Link>
        </div>
      </section>
      </main>
    </div>
  );
}