import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, User, CheckCircle, XCircle } from "lucide-react";
import HeroPic from "@/public/partnership.jpg";
import OmungGupta from "@/public/OmungGupta.jpeg";

export default function PartnershipVsCorporation() {
  return (
    <div className="flex min-h-screen flex-col">
      <main>
        {/* Hero Section */}
        <section className="relative bg-[#202d4a] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Link
                href="/blogs"
                className="inline-flex items-center text-[#ba9669] hover:underline mb-6"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to blog
              </Link>
              <br />
              <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">
                Business Law
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Partnership vs. Corporation: Which is Right for You?
              </h1>

              <div className="flex flex-wrap items-center text-sm text-gray-300 mt-4 mb-6">
                <div className="flex items-center mr-6 mb-2">
                  <Calendar className="h-4 w-4 mr-2 text-[#ba9669]" />
                  <span>March 15, 2025</span>
                </div>
                <div className="flex items-center mr-6 mb-2">
                  <Clock className="h-4 w-4 mr-2 text-[#ba9669]" />
                  <span>7 min read</span>
                </div>
                <div className="flex items-center mb-2">
                  <User className="h-4 w-4 mr-2 text-[#ba9669]" />
                  <span>by Omung Gupta, Barrister and Solicitor</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <div className="relative h-[400px] md:h-[500px]">
          <Image
            src={HeroPic}
            alt="Partnership vs Corporation Business Structures"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            {/* Table of Contents */}
            <div className="mb-10 p-6 bg-[#f9f9f9] rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-[#202d4a] mb-4">Contents</h3>
              <ul className="space-y-2 text-[#202d4a]">
                <li><a href="#overview" className="hover:text-[#ba9669] transition-colors">Business Structure Overview</a></li>
                <li><a href="#partnerships" className="hover:text-[#ba9669] transition-colors">Types of Partnerships</a></li>
                <li><a href="#corporations" className="hover:text-[#ba9669] transition-colors">Corporation Structure</a></li>
                <li><a href="#comparison" className="hover:text-[#ba9669] transition-colors">Direct Comparison</a></li>
                <li><a href="#tax" className="hover:text-[#ba9669] transition-colors">Tax Considerations</a></li>
                <li><a href="#decision" className="hover:text-[#ba9669] transition-colors">Making Your Decision</a></li>
              </ul>
            </div>
            
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="lead text-xl text-[#202d4a] font-medium">
                Choosing the right legal structure for your business is one of the most significant decisions entrepreneurs face. Both partnerships and corporations offer distinct advantages and limitations that can substantially impact your business operations, tax obligations, personal liability, and growth potential in Ontario.
              </p>

              <h2 id="overview" className="text-2xl font-bold text-[#202d4a] mt-10 mb-6 border-b border-gray-200 pb-2">Business Structure Overview: The Foundation of Your Business</h2>

              <p>
                Your choice of business structure establishes the legal framework for how your company operates, determining everything from tax treatment to management responsibilities and personal liability protection. Before exploring specific structures, consider these fundamental factors that should influence your decision:
              </p>

              <div className="bg-gradient-to-r from-[#f9f9f9] to-[#f5f5f5] p-6 rounded-lg my-8 border-l-4 border-[#ba9669] shadow-sm">
                <h3 className="text-xl font-bold text-[#202d4a] mb-4">
                  Key Factors in Choosing Your Business Structure
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ba9669] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Liability Protection:</strong> How much personal asset protection do you require?
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ba9669] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Tax Implications:</strong> Which structure offers optimal tax treatment for your situation?
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ba9669] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Capital Requirements:</strong> What are your funding needs and sources?
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ba9669] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Operational Control:</strong> How will management decisions be made?
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ba9669] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Regulatory Requirements:</strong> What ongoing compliance obligations are you prepared to manage?
                    </span>
                  </li>
                </ul>
              </div>

              <h2 id="partnerships" className="text-2xl font-bold text-[#202d4a] mt-10 mb-6 border-b border-gray-200 pb-2">Types of Partnerships in Ontario</h2>

              <p>
                Partnerships are business arrangements where two or more individuals or entities agree to share in the profits, losses, and management responsibilities. Ontario recognizes several types of partnerships, each with distinct characteristics:
              </p>

              <h3 className="text-xl font-semibold text-[#202d4a] mt-6">1. General Partnerships</h3>

              <p>
                A general partnership is the most straightforward partnership structure governed by Ontario&apos;s Partnership Act. In this arrangement, all partners share in the management and are jointly and severally liable for the partnership&apos;s obligations.
              </p>

              <h4 className="text-lg font-medium text-[#202d4a] mt-4">Key Characteristics:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Simple and inexpensive to establish</li>
                <li>Pass-through taxation (income flows directly to partners)</li>
                <li>Each partner has unlimited personal liability</li>
                <li>Equal management rights unless otherwise specified</li>
                <li>Minimal ongoing regulatory requirements</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#202d4a] mt-6">2. Limited Partnerships</h3>

              <p>
                Limited partnerships (LPs) consist of at least one general partner with unlimited liability and one or more limited partners whose liability is restricted to their investment. These are regulated under the Limited Partnerships Act (Ontario).
              </p>

              <h4 className="text-lg font-medium text-[#202d4a] mt-4">Key Characteristics:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Limited partners have liability protection</li>
                <li>General partners maintain management control</li>
                <li>Pass-through taxation benefits</li>
                <li>Formal registration required with the Ontario Business Registry</li>
                <li>Limited partners cannot participate in management</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#202d4a] mt-6">3. Limited Liability Partnerships</h3>

              <p>
                Limited Liability Partnerships (LLPs) in Ontario are primarily available for certain professions like lawyers, accountants, and other regulated professionals. They provide liability protection for partners from the negligent acts of other partners.
              </p>

              <h4 className="text-lg font-medium text-[#202d4a] mt-4">Key Characteristics:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Partners are protected from liability arising from other partners&apos; negligence</li>
                <li>All partners can participate in management</li>
                <li>Pass-through taxation</li>
                <li>Registration and annual filings required</li>
                <li>Limited to certain professional services in Ontario</li>
              </ul>

              <h2 id="corporations" className="text-2xl font-bold text-[#202d4a] mt-10 mb-6 border-b border-gray-200 pb-2">Corporation Structure and Key Features</h2>

              <p>
                Corporations are distinct legal entities separate from their shareholders, providing the strongest liability protection. In Ontario, corporations can be formed provincially under the Ontario Business Corporations Act (OBCA) or federally under the Canada Business Corporations Act (CBCA).
              </p>

              <h3 className="text-xl font-semibold text-[#202d4a] mt-6">Core Features of Corporations</h3>

              <div className="bg-[#202d4a]/5 p-6 rounded-lg my-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ba9669] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Separate Legal Entity:</strong> Exists independently of its shareholders with perpetual existence
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ba9669] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Limited Liability:</strong> Shareholder&apos;s risk is limited to their investment
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ba9669] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Ownership Transferability:</strong> Shares can be freely transferred (subject to restrictions)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ba9669] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Centralized Management:</strong> Board of directors oversees operations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ba9669] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Capital Flexibility:</strong> Multiple options for raising capital through different share classes
                    </span>
                  </li>
                </ul>
              </div>

              <p>
                While corporations offer significant advantages, they also come with more formalities and compliance requirements:
              </p>

              <ul className="list-disc pl-6 space-y-1 mt-4">
                <li>Required corporate record-keeping and minute books</li>
                <li>Regular director and shareholder meetings</li>
                <li>Annual corporate filings</li>
                <li>More complex tax returns and accounting</li>
                <li>Higher formation and maintenance costs</li>
              </ul>

              <h2 id="comparison" className="text-2xl font-bold text-[#202d4a] mt-10 mb-6 border-b border-gray-200 pb-2">Direct Comparison: Partnership vs. Corporation</h2>

              <div className="overflow-x-auto my-6">
                <table className="min-w-full border-collapse border border-gray-200">
                  <thead>
                    <tr className="bg-[#202d4a] text-white">
                      <th className="border border-gray-300 px-4 py-2 text-left">Feature</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Partnership</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Corporation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Formation</td>
                      <td className="border border-gray-300 px-4 py-2">Simple, can be formed through agreement</td>
                      <td className="border border-gray-300 px-4 py-2">Formal process requiring articles of incorporation</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-medium">Liability</td>
                      <td className="border border-gray-300 px-4 py-2">Unlimited personal liability (except limited partners)</td>
                      <td className="border border-gray-300 px-4 py-2">Limited to shareholder investment</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Taxation</td>
                      <td className="border border-gray-300 px-4 py-2">Pass-through taxation</td>
                      <td className="border border-gray-300 px-4 py-2">Corporate tax rate, potential for double taxation</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-medium">Control</td>
                      <td className="border border-gray-300 px-4 py-2">Shared among partners</td>
                      <td className="border border-gray-300 px-4 py-2">Board of directors and officers</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Raising Capital</td>
                      <td className="border border-gray-300 px-4 py-2">Limited to partner contributions</td>
                      <td className="border border-gray-300 px-4 py-2">Multiple options (equity, debt, etc.)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-medium">Continuity</td>
                      <td className="border border-gray-300 px-4 py-2">Dissolves upon partner departure without agreement</td>
                      <td className="border border-gray-300 px-4 py-2">Perpetual existence regardless of ownership changes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">Regulatory Burden</td>
                      <td className="border border-gray-300 px-4 py-2">Minimal</td>
                      <td className="border border-gray-300 px-4 py-2">More extensive compliance requirements</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 id="tax" className="text-2xl font-bold text-[#202d4a] mt-10 mb-6 border-b border-gray-200 pb-2">Tax Considerations in Ontario</h2>

              <p>
                Taxation often plays a crucial role in determining the most advantageous business structure. Here&apos;s how partnerships and corporations are taxed in Ontario:
              </p>

              <h3 className="text-xl font-semibold text-[#202d4a] mt-6">Partnership Taxation</h3>
              
              <p>
                Partnerships are not taxable entities. Instead, income &quot;flows through&quot; to partners who report their share on personal tax returns:
              </p>

              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Partners pay personal income tax rates on their share of income</li>
                <li>Business losses can offset other income on personal returns</li>
                <li>Partnership files information return (T5013) but doesn&apos;t pay taxes</li>
                <li>Partners can take draws without additional tax consequences</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#202d4a] mt-6">Corporation Taxation</h3>
              
              <p>
                Corporations file their own tax returns and pay corporate tax:
              </p>

              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Small business tax rate of approximately 12.2% on first $500,000 of active business income (combined federal and Ontario rates)</li>
                <li>General corporate tax rate of approximately 26.5% on income above the small business limit</li>
                <li>Potential for dividend tax credit when distributing profits to shareholders</li>
                <li>Income splitting possibilities through strategic salary and dividend payments</li>
                <li>Tax deferral opportunities by retaining earnings in the corporation</li>
              </ul>

              <div className="bg-[#202d4a]/5 p-5 rounded-md my-8">
                <p className="text-sm font-medium text-[#202d4a]">
                  <strong>Tax Planning Opportunity:</strong> The integration principle in Canadian tax law aims to make the overall tax burden similar whether business income is earned personally or through a corporation. However, significant tax deferral advantages exist when retaining earnings in a corporation, allowing business owners to reinvest pre-personal tax dollars back into operations.
                </p>
              </div>

              <h2 id="decision" className="text-2xl font-bold text-[#202d4a] mt-10 mb-6 border-b border-gray-200 pb-2">Making Your Decision: When to Choose Each Structure</h2>

              <h3 className="text-xl font-semibold text-[#202d4a] mt-6">Partnership May Be Preferable When:</h3>

              <div className="bg-white p-6 rounded-lg my-6 border border-gray-200 shadow-sm">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ba9669] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Your business is in early stages</strong> with expected initial losses that can offset other income
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ba9669] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>You want operational simplicity</strong> with minimal regulatory requirements
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ba9669] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Your business operates in a low-liability industry</strong> with minimal risk of lawsuits
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ba9669] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>You and your partners want direct control</strong> over all business decisions
                    </span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-[#202d4a] mt-6">Corporation May Be Preferable When:</h3>

              <div className="bg-white p-6 rounded-lg my-6 border border-gray-200 shadow-sm">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ba9669] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Personal liability protection</strong> is a significant concern
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ba9669] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Your business is profitable</strong> and can benefit from tax deferral by retaining earnings
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ba9669] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>You plan to seek external investment</strong> or eventually sell the business
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ba9669] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>You want income splitting opportunities</strong> with family members through salaries and dividends
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ba9669] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>You need credibility with customers, suppliers, or lenders</strong> who prefer working with incorporated entities
                    </span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-[#202d4a] mt-8">Common Misconceptions</h3>

              <div className="space-y-4 my-6">
                <div className="bg-white p-4 rounded-md border-l-4 border-[#ba9669] shadow-sm">
                  <strong className="text-[#202d4a]">Incorporation always results in tax savings</strong> - While potential tax advantages exist, they depend on specific circumstances and must be weighed against increased compliance costs
                </div>
                <div className="bg-white p-4 rounded-md border-l-4 border-[#ba9669] shadow-sm">
                  <strong className="text-[#202d4a]">Partnerships are always simpler to manage</strong> - Complex partnership agreements with multiple partners can be as complicated to administer as a small corporation
                </div>
                <div className="bg-white p-4 rounded-md border-l-4 border-[#ba9669] shadow-sm">
                  <strong className="text-[#202d4a]">Corporate liability protection is absolute</strong> - In reality, personal guarantees, director liabilities, and &quot;piercing the corporate veil&quot; can still create personal exposure
                </div>
              </div>

              <h2 className="text-2xl font-bold text-[#202d4a] mt-10 mb-6 border-b border-gray-200 pb-2">Conclusion</h2>

              <p>
                The choice between partnership and corporation should be based on a thorough assessment of your business goals, risk tolerance, tax situation, and growth plans. While partnerships offer simplicity and operational flexibility, corporations provide stronger liability protection and potential tax planning advantages.
              </p>

              <p>
                Many businesses begin as partnerships and later incorporate as they grow and face increased liability or complexity. The optimal structure for your business may also change over time as your operations evolve and tax laws are modified.
              </p>

              <p>
                At TRUST LEGAL, we recommend consulting with both legal and accounting professionals before making this critical decision to ensure your business structure aligns with your short and long-term objectives. Our experienced business law team can help you navigate the nuances of Ontario partnership and corporate law to find the structure that best serves your specific circumstances.
              </p>

              <div className="p-5 border-l-4 border-[#ba9669] bg-[#f9f9f9] my-8">
                <p className="italic text-[#202d4a]">
                &quot;The most suitable business structure balances legal protection, tax efficiency, and operational flexibility in a way that specifically supports your business model and future growth plans.&quot;
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 mt-12 pt-8">
              <p className="text-sm text-gray-500">
                Disclaimer: This article provides general information about business structures in Ontario and does not constitute legal or tax advice. Business structure decisions have significant legal and tax implications. For guidance specific to your situation, please consult with qualified legal and accounting professionals.
              </p>
            </div>

            {/* Author Bio */}
            <div className="flex items-center gap-4 mt-8 p-6 border rounded-lg bg-gradient-to-r from-[#f9f9f9] to-white shadow-sm">
              <div className="relative h-20 w-20 rounded-full overflow-hidden border-2 border-[#ba9669]">
                <Image
                  src={OmungGupta}
                  alt="Omung Gupta"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-[#202d4a] text-lg">Omung Gupta, LL.B.</h3>
                <p className="text-sm text-[#ba9669] font-medium">
                  Barrister and Solicitor, Member of the Law Society of Ontario
                </p>
                <p className="text-sm mt-2">
                  Omung Gupta specializes in Canadian business law and corporate transactions, with extensive experience helping entrepreneurs establish and scale their businesses throughout Ontario and across Canada.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="bg-[#202d4a] text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Need Help Structuring Your Business?
              </h2>
              <p className="text-gray-300 mb-6">
                Contact TRUST LEGAL today for personalized guidance on selecting the optimal
                business structure for your unique circumstances and goals.
              </p>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#ba9669] text-white font-medium rounded-md hover:bg-[#ba9669]/90 transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </section>
              {/* Related Posts Section */}
    <section className="bg-[#f9f9f9] py-12">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-[#202d4a] mb-6">
                    Related Articles
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <Link
                        href="/blog/business-incorporation-ontario"
                        className="group"
                    >
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="relative h-48">
                                <Image
                                    src="/business.jpg"
                                    alt="Business Incorporation in Ontario"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="inline-block rounded-lg bg-[#ba9669]/10 px-3 py-1 text-xs text-[#ba9669] mb-2">
                                    Business Law
                                </div>
                                <h3 className="font-bold text-[#202d4a] group-hover:text-[#ba9669] transition-colors">
                                    Key Considerations for Business Incorporation in Ontario
                                </h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    Learn about the essential legal considerations when incorporating your business in Ontario.
                                </p>
                                <div className="flex items-center mt-4 text-xs text-gray-500">
                                    <Calendar className="h-3 w-3 mr-1" />
                                    <span>March 1, 2025</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link
                        href="/blog/student-visa-canada"
                        className="group"
                    >
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="relative h-48">
                                <Image
                                    src="/canada-study.jpg"
                                    alt="Study in Canada"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="inline-block rounded-lg bg-[#ba9669]/10 px-3 py-1 text-xs text-[#ba9669] mb-2">
                                    Immigration
                                </div>
                                <h3 className="font-bold text-[#202d4a] group-hover:text-[#ba9669] transition-colors">
                                    Study in Canada: How to Get a Student Visa
                                </h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    A comprehensive guide to navigating the Canadian student visa application process.
                                </p>
                                <div className="flex items-center mt-4 text-xs text-gray-500">
                                    <Calendar className="h-3 w-3 mr-1" />
                                    <span>March 17, 2025</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </section>
        </main>
    </div>
  );
}