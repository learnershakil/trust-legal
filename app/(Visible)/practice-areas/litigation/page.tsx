import {
  ArrowDownUp,
  BarChart,
  Check,
  ChevronRight,
  FileText,
  Gavel,
  Scale,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LitigationPage() {
  const litigationServices = [
    {
      title: "Civil Litigation",
      description:
        "Comprehensive legal representation in all types of civil disputes, from initial assessment through trial and appeal if necessary.",
      icon: <Scale className="h-6 w-6" />,
      details: [
        "Personal injury claims",
        "Property disputes",
        "Professional malpractice",
        "Insurance disputes",
        "Shareholder disputes",
        "Statutory duty violations",
      ],
    },
    {
      title: "Commercial Disputes",
      description:
        "Strategic advocacy in business-related conflicts, focusing on your commercial objectives and the most efficient path to resolution.",
      icon: <BarChart className="h-6 w-6" />,
      details: [
        "Breach of contract claims",
        "Partnership disputes",
        "Unfair competition claims",
        "Business civil wrongs",
        "Trade secret violations",
        "Commercial fraud cases",
      ],
    },
    {
      title: "Contract Disputes",
      description:
        "Expert analysis and representation in disputes arising from contractual agreements, ensuring enforcement of rights and obligations.",
      icon: <FileText className="h-6 w-6" />,
      details: [
        "Contract breach remedies",
        "Contract interpretation",
        "Warranty claims",
        "Performance disputes",
        "Service level agreements",
        "Termination disputes",
      ],
    },
    {
      title: "Alternative Dispute Resolution",
      description:
        "Skilled representation in mediation, arbitration, and negotiated settlements to resolve disputes without the cost and time of traditional litigation.",
      icon: <ArrowDownUp className="h-6 w-6" />,
      details: [
        "Mediation proceedings",
        "Arbitration representation",
        "Settlement negotiations",
        "Early neutral evaluation",
        "Summary trials",
        "Dispute resolution boards",
      ],
    },
    {
      title: "Debt Recovery",
      description:
        "Effective strategies to recover outstanding debts through demand letters, litigation, and enforcement of judgments.",
      icon: <Gavel className="h-6 w-6" />,
      details: [
        "Demand letter campaigns",
        "Payment plan negotiations",
        "Default judgments",
        "Garnishment orders",
        "Liens against property",
        "Judgment enforcement",
      ],
    },
    {
      title: "Injunctions & Emergency Relief",
      description:
        "Urgent representation to secure court orders preventing harmful actions or preserving the status quo until a dispute is resolved.",
      icon: <Shield className="h-6 w-6" />,
      details: [
        "Interim injunctions",
        "Interlocutory injunctions",
        "Mareva injunctions",
        "Non-disclosure enforcement",
        "Asset preservation orders",
        "Urgent court applications",
      ],
    },
  ];

  const litigationFAQs = [
    {
      question: "How long will my litigation case take to resolve?",
      answer:
        "The timeline for litigation varies significantly depending on case complexity, court schedules, and whether settlement is possible. Simple matters might resolve in 6-9 months, while complex cases can take 1-3 years. Alternative dispute resolution methods like mediation can expedite resolution. During your consultation, we'll provide a realistic timeline estimate based on your specific circumstances in the Ontario court system.",
    },
    {
      question: "What are the potential costs involved in litigation?",
      answer:
        "Litigation costs include legal fees, court filing fees, expert witness fees, document production expenses, and potentially costs awarded to the other party if unsuccessful. We offer various fee arrangements including hourly rates, block fees for certain services, and in some cases, contingency arrangements. We provide transparent cost estimates upfront and regular updates as your case progresses in accordance with the Ontario Rules of Civil Procedure.",
    },
    {
      question: "Is it better to settle or go to trial?",
      answer:
        "The decision to settle or proceed to trial depends on numerous factors including the strength of your case, potential damages, financial and emotional costs of prolonged litigation, risk tolerance, and confidentiality concerns. Settlements offer certainty, confidentiality, and cost control, while trials may be necessary when parties are far apart or important principles are at stake. We help you navigate Ontario's mandatory mediation program and weigh these factors to make an informed decision aligned with your goals.",
    },
    {
      question: "What documents should I preserve if I anticipate litigation?",
      answer:
        "It's crucial to preserve all potentially relevant documents including contracts, correspondence (emails, letters, texts), financial records, photographs, reports, meeting notes, and electronic data. Once litigation is reasonably anticipated, you have a legal duty to preserve evidence. We can help you implement a litigation hold, identify critical documents, and develop a document management strategy to ensure compliance with Ontario's discovery obligations while protecting solicitor-client privilege.",
    },
  ];

  // const statistics = [
  //   { value: "95%", label: "Client Satisfaction Rate" },
  //   { value: "250+", label: "Complex Cases Resolved" },
  //   { value: "30+", label: "Years Combined Experience" },
  //   { value: "85%", label: "Matters Settled Favorably" },
  // ];

  return (
    <div className="flex min-h-screen flex-col">
      <main>
        {/* Hero Section */}
        <section className="relative bg-[#202d4a] text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-0"></div>
          <div className="absolute inset-0 bg-[url('/litigation-hero.jpg')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="container mx-auto px-4 py-28 md:py-36 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4 backdrop-blur-sm">
                Practice Area
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-md">
                Litigation
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow-sm max-w-2xl">
                Strategic representation in disputes, with a focus on efficient
                resolution and protecting your legal and business interests in
                Ontario.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#ba9669] text-white font-medium rounded-md hover:bg-[#ba9669]/90 transition-colors shadow-lg"
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

        {/* Statistics Section */}
        {/* <section className="py-8 bg-[#ba9669]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
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
                  Effective Dispute Resolution Strategies
                </h2>
                <p className="text-[#202d4a]/70 mb-6">
                  At TRUST LEGAL, we understand that disputes can disrupt your
                  business operations and personal life. Our litigation practice
                  combines legal expertise with strategic thinking to resolve
                  conflicts effectively, whether through negotiation,
                  alternative dispute resolution, or advocacy before Ontario
                  courts.
                </p>
                <p className="text-[#202d4a]/70 mb-6">
                  Led by Omung Gupta, our litigation team focuses on achieving
                  optimal outcomes while managing costs and minimizing
                  disruption to your business or personal affairs. We approach
                  each case with meticulous preparation, creative
                  problem-solving, and the tenacity required to protect your
                  rights and interests under Ontario law.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Strategic case assessment",
                    "Cost-effective solutions",
                    "Ontario courtroom experience",
                    "Negotiation expertise",
                    "Thorough preparation",
                    "Results-oriented approach",
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
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
                <Image
                  src="/litigation.jpg"
                  alt="Litigation Services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#202d4a]/60 to-transparent"></div>
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
                Comprehensive Litigation Services
              </h2>
              <p className="mt-4 text-[#202d4a]/70 max-w-3xl mx-auto">
                From pre-litigation strategy to advocacy before Ontario courts
                and enforcement of judgments, our litigation practice offers
                complete dispute resolution services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {litigationServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#ba9669]/30 group"
                >
                  <div className="p-6">
                    <div className="rounded-full bg-[#202d4a]/10 p-3 w-fit text-[#202d4a] mb-4 group-hover:bg-[#ba9669]/20 group-hover:text-[#ba9669] transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#202d4a] mb-3 group-hover:text-[#ba9669] transition-colors">
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
                The Litigation Journey
              </h2>
              <p className="mt-4 text-[#202d4a]/70 max-w-3xl mx-auto">
                Our structured approach to litigation ensures thorough
                preparation, strategic execution, and regular communication
                throughout your case within the Ontario legal system.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
              {[
                {
                  icon: <FileText className="h-6 w-6" />,
                  title: "Case Assessment",
                  description:
                    "We thoroughly evaluate the merits of your case, identify strengths and weaknesses, and determine the optimal strategy for resolution under Ontario law.",
                },
                {
                  icon: <BarChart className="h-6 w-6" />,
                  title: "Case Development",
                  description:
                    "We gather evidence, interview witnesses, research relevant Ontario law, and prepare all necessary documentation to build a compelling case.",
                },
                {
                  icon: <ArrowDownUp className="h-6 w-6" />,
                  title: "Resolution Strategy",
                  description:
                    "We pursue the most appropriate path to resolution, whether through Ontario's mandatory mediation program, arbitration, or court proceedings.",
                },
                {
                  icon: <Gavel className="h-6 w-6" />,
                  title: "Trial & Enforcement",
                  description:
                    "When necessary, we provide skilled advocacy before Ontario courts and ensure that judgments in your favor are properly enforced.",
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-[#f9f9f9] rounded-lg p-6 h-full border border-gray-100 relative z-10 hover:shadow-md transition-shadow hover:border-[#ba9669]/30 group hover:bg-white">
                    <div className="rounded-full bg-[#ba9669]/20 p-3 w-fit text-[#ba9669] mb-4">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 bg-[#ba9669] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-[#202d4a] mb-3 group-hover:text-[#ba9669] transition-colors">
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
                Benefits
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our Litigation Services
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Our strategic approach to litigation provides significant
                advantages that help you achieve favorable outcomes while
                managing risks and costs under Ontario&apos;s legal framework.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Strategic Advantage",
                  description:
                    "Benefit from our experience with Ontario courts, legal insights, and strategic approach to position your case for the best possible outcome.",
                },
                {
                  title: "Cost Management",
                  description:
                    "We focus on efficient resolution strategies that minimize unnecessary expenses while maintaining the quality of your representation.",
                },
                {
                  title: "Risk Assessment",
                  description:
                    "Receive comprehensive evaluations of potential outcomes and risks under Ontario law, allowing you to make informed decisions throughout the litigation process.",
                },
                {
                  title: "Business Continuity",
                  description:
                    "Our approach aims to minimize disruption to your business operations while addressing the legal dispute effectively.",
                },
                {
                  title: "Negotiation Leverage",
                  description:
                    "Strong case preparation and litigation readiness often create leverage for more favorable settlement terms within Ontario's dispute resolution framework.",
                },
                {
                  title: "Peace of Mind",
                  description:
                    "Rest assured knowing that experienced Ontario advocates are protecting your interests and navigating complex legal procedures on your behalf.",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors border border-transparent hover:border-[#ba9669]/30 group"
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

        {/* Testimonials Section */}
        {/* <section className="py-16 md:py-24 bg-[#f9f9f9]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">
                Client Experiences
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#202d4a] mb-6">
                What Our Clients Say
              </h2>
              <p className="text-[#202d4a]/70 max-w-3xl mx-auto">
                Our client&apos;s satisfaction is our greatest measure of
                success. Here&apos;s what they have to say about working with
                our litigation team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "The litigation team at Trust Legal provided exceptional representation in our complex commercial dispute. Their strategic approach saved us time and resources while achieving an optimal outcome.",
                  author: "Shakil Ahmad",
                  position: "Founder, Learner's Arc.",
                },
                {
                  quote:
                    "What impressed me most was how clearly they explained our options and the potential outcomes at each stage. They made a stressful situation manageable with their expertise and attentive service.",
                  author: "Kumar Akash",
                  position: "Founder, GreenStart Solutions",
                },
                {
                  quote:
                    "Their attention to detail and thorough preparation made all the difference in our case. They anticipated the opposition's strategy and positioned us for a favorable settlement.",
                  author: "Rohit Singh",
                  position: "Co-Founder, Learner's Arc",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                >
                  <div className="mb-4 text-[#ba9669]">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 7L9.6 10.5L6 11.5L9.6 12.5L11 16L12.4 12.5L16 11.5L12.4 10.5L11 7Z"
                        fill="currentColor"
                      />
                      <path
                        d="M18 7L17.3 8.5L15.75 9L17.3 9.5L18 11L18.7 9.5L20.25 9L18.7 8.5L18 7Z"
                        fill="currentColor"
                      />
                      <path
                        d="M5 12L4.5 13L3.5 13.5L4.5 14L5 15L5.5 14L6.5 13.5L5.5 13L5 12Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <p className="text-[#202d4a]/80 mb-6 italic">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-bold text-[#202d4a]">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-[#202d4a]/60">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

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
              {litigationFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#f9f9f9] border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow hover:border-[#ba9669]/30"
                >
                  <h3 className="text-xl font-bold text-[#202d4a] mb-3 flex items-start gap-3">
                    <span className="text-[#ba9669] text-lg font-bold">Q:</span>
                    <span>{faq.question}</span>
                  </h3>
                  <div className="pl-6 border-l-2 border-[#ba9669]/30 ml-2">
                    <p className="text-[#202d4a]/70">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-[#202d4a] to-[#304366] text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="inline-block rounded-full bg-white/10 p-3 backdrop-blur-sm mb-6">
                <Gavel className="h-8 w-8 text-[#ba9669]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Discuss Your Legal Dispute?
              </h2>
              <p className="text-gray-300 mb-8">
                Contact TRUST LEGAL today to schedule a consultation with our
                litigation team. We&apos;ll help you evaluate your case and
                develop a strategic approach to protecting your rights and
                interests under Ontario law.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#ba9669] text-white font-medium rounded-md hover:bg-[#ba9669]/90 transition-colors shadow-lg text-lg"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
