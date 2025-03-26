import { Briefcase, Building2, ChevronRight, Globe, Scale } from "lucide-react";
import Link from "next/link";

export default function PracticeAreasPage() {
  const practiceAreas = [
    {
      id: "business-law",
      title: "Business Law",
      icon: <Briefcase className="h-10 w-10" />,
      description: "Comprehensive legal solutions for businesses of all sizes across Ontario, from formation to compliance and beyond.",
      services: [
        "Ontario Business Formation & Incorporation",
        "Contract Drafting & Review",
        "Corporate Governance",
        "Mergers & Acquisitions",
        "Ontario Employment Law",
        "Provincial Regulatory Compliance"
      ]
    },
    {
      id: "litigation",
      title: "Litigation",
      icon: <Scale className="h-10 w-10" />,
      description: "Strategic representation in disputes before Ontario courts, with a focus on efficient resolution and protecting your interests.",
      services: [
        "Ontario Civil Litigation",
        "Commercial Disputes",
        "Contract Disputes",
        "Alternative Dispute Resolution",
        "Debt Recovery",
        "Injunctions & Emergency Relief"
      ]
    },
    {
      id: "immigration",
      title: "Immigration",
      icon: <Globe className="h-10 w-10" />,
      description: "Expert guidance through Canadian immigration processes for individuals, families, and businesses settling in Ontario.",
      services: [
        "Permanent Residency Applications",
        "Work Permits & Study Permits",
        "Ontario Immigrant Nominee Program",
        "Family Sponsorship",
        "Canadian Citizenship Applications",
        "Federal & Provincial Immigration Appeals"
      ]
    },
    {
      id: "real-estate",
      title: "Real Estate",
      icon: <Building2 className="h-10 w-10" />,
      description: "Our team of qualified Ontario lawyers provides thorough legal counsel for all residential and commercial real estate matters.",
      services: [
        "Commercial Property Transactions",
        "Residential Real Estate Closings",
        "Ontario Lease Agreements",
        "Land Registry Title Review",
        "Ontario Land Development",
        "Real Estate Litigation"
      ]
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <main>
      {/* Hero Section */}
      <section className="relative bg-[#202d4a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#202d4a]/80 to-transparent z-0"></div>
        <div className="container mx-auto px-4 py-28 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4 backdrop-blur-sm">Our Expertise</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Expert Legal Solutions For Every Challenge</h1>
            <p className="text-lg text-gray-100 mb-8 leading-relaxed max-w-2xl">
              At TRUST LEGAL, we provide comprehensive legal solutions across various practice areas,
              ensuring our Ontario clients receive expert guidance tailored to their specific needs.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#ba9669] text-white font-semibold rounded-md hover:bg-[#ba9669]/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">How We Help</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202d4a] mb-6">Legal Solutions For Your Needs</h2>
            <p className="text-[#202d4a]/70 text-lg">
              Our diverse expertise allows us to handle a wide range of Ontario legal matters with precision and care.
              Whether you require assistance with business matters, litigation, immigration, or real estate transactions,
              our skilled legal team is ready to advocate for your best interests under Ontario law.
            </p>
          </div>

          {/* Practice Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            {practiceAreas.map((area) => (
              <div key={area.id} className="bg-[#f9f9f9] rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-[#202d4a] p-8 relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#ba9669]/10 rounded-bl-full"></div>
                  <div className="text-[#ba9669] mb-4">{area.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{area.title}</h3>
                  <p className="text-gray-300">{area.description}</p>
                </div>
                <div className="p-8">
                  <h4 className="text-lg font-medium text-[#202d4a] mb-4">Our Services Include:</h4>
                  <ul className="space-y-3 mb-6">
                    {area.services.map((service, index) => (
                      <li key={index} className="flex items-start group">
                        <div className="rounded-full bg-[#ba9669]/20 p-1 text-[#ba9669] mr-3 mt-1 group-hover:bg-[#ba9669] group-hover:text-white transition-colors">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-[#202d4a]/80 group-hover:text-[#202d4a] transition-colors">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link
                      href={`/practice-areas/${area.id}`}
                      className="inline-flex items-center text-[#ba9669] hover:text-[#ba9669]/80 font-medium transition-colors group"
                    >
                      Learn More <ChevronRight className="ml-1 h-4 w-4 group-hover:ml-2 transition-all" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section (Redesigned Approach Section) */}
      <section className="py-20 md:py-28 bg-[#f5f7fa]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">Our Process</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202d4a] mb-6">How We Work With You</h2>
            <p className="text-[#202d4a]/70 text-lg max-w-3xl mx-auto">
              We&apos;ve developed a streamlined process to ensure your legal matters are handled efficiently and effectively,
              keeping you informed every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 h-20 w-20 bg-[#ba9669]/10 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
              <div className="rounded-full bg-[#202d4a] text-white h-12 w-12 flex items-center justify-center text-xl font-bold mb-6 group-hover:bg-[#ba9669] transition-colors">1</div>
              <h3 className="text-xl font-bold text-[#202d4a] mb-3">Initial Consultation</h3>
              <p className="text-[#202d4a]/70 relative z-10">
                We begin with a thorough consultation to understand your specific Ontario legal needs, objectives, and circumstances.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 h-20 w-20 bg-[#ba9669]/10 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
              <div className="rounded-full bg-[#202d4a] text-white h-12 w-12 flex items-center justify-center text-xl font-bold mb-6 group-hover:bg-[#ba9669] transition-colors">2</div>
              <h3 className="text-xl font-bold text-[#202d4a] mb-3">Strategic Planning</h3>
              <p className="text-[#202d4a]/70 relative z-10">
                Our legal team develops a tailored strategy designed to achieve your goals efficiently within Ontario&apos;s legal framework.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 h-20 w-20 bg-[#ba9669]/10 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
              <div className="rounded-full bg-[#202d4a] text-white h-12 w-12 flex items-center justify-center text-xl font-bold mb-6 group-hover:bg-[#ba9669] transition-colors">3</div>
              <h3 className="text-xl font-bold text-[#202d4a] mb-3">Execution & Advocacy</h3>
              <p className="text-[#202d4a]/70 relative z-10">
                We implement the strategy with meticulous attention to detail and advocate strongly on your behalf in all legal venues.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 h-20 w-20 bg-[#ba9669]/10 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500"></div>
              <div className="rounded-full bg-[#202d4a] text-white h-12 w-12 flex items-center justify-center text-xl font-bold mb-6 group-hover:bg-[#ba9669] transition-colors">4</div>
              <h3 className="text-xl font-bold text-[#202d4a] mb-3">Ongoing Support</h3>
              <p className="text-[#202d4a]/70 relative z-10">
                We provide continuous guidance and regular updates, ensuring you&apos;re informed throughout your Ontario legal matter.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link
              href="/about-us"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#202d4a] text-white font-medium rounded-md hover:bg-[#202d4a]/90 transition-all shadow-md hover:shadow-lg"
            >
              Learn More About Our Approach
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#202d4a] mb-6">Common Questions</h2>
            <p className="text-[#202d4a]/70 text-lg max-w-3xl mx-auto">
              We&apos;ve answered some of the most frequently asked questions about our services and processes.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-[#ba9669] transition-colors hover:shadow-md">
              <h3 className="text-xl font-bold text-[#202d4a] mb-3">How do I know which practice area my legal issue falls under?</h3>
              <p className="text-[#202d4a]/70">
                Many legal matters can span multiple practice areas. During your initial consultation, we&apos;ll assess your situation and determine which of our legal teams is best suited to handle your needs under Ontario law. Often, we take a collaborative approach to provide comprehensive service.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-[#ba9669] transition-colors hover:shadow-md">
              <h3 className="text-xl font-bold text-[#202d4a] mb-3">What types of clients do you typically represent?</h3>
              <p className="text-[#202d4a]/70">
                We represent a diverse Ontario clientele including individuals, families, startups, small to medium-sized businesses, and established corporations. Our services are tailored to meet the specific needs of each client, regardless of size or industry within the Ontario market.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-[#ba9669] transition-colors hover:shadow-md">
              <h3 className="text-xl font-bold text-[#202d4a] mb-3">How are legal fees structured?</h3>
              <p className="text-[#202d4a]/70">
                Fee structures vary depending on the nature of your case. We offer hourly rates, flat fees for specific services, and contingency arrangements where permitted by the Law Society of Ontario. We provide transparent fee information at the outset of our engagement and work to ensure our services deliver value.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:border-[#ba9669] transition-colors hover:shadow-md">
              <h3 className="text-xl font-bold text-[#202d4a] mb-3">How quickly can you respond to urgent legal matters?</h3>
              <p className="text-[#202d4a]/70">
                We understand that legal issues can arise unexpectedly and require immediate attention. Our team is committed to responding promptly to urgent matters and can provide expedited services when necessary within Ontario&apos;s legal timeframes. For emergencies, please contact our office directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-[#202d4a] to-[#2a3a5f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discuss Your Legal Needs?</h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            Contact TRUST LEGAL today to schedule a consultation with our experienced Ontario legal team. We&apos;ll help you navigate the complexities of Ontario law and develop strategic solutions for your specific situation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#ba9669] text-white font-medium rounded-md hover:bg-[#ba9669]/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
      </main>
    </div>
  );
}
