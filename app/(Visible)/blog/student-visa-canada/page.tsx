import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  CheckCircle,
  XCircle,
} from "lucide-react";
import HeroPic from "@/public/canada-study.jpg";
import OmungGupta from "@/public/OmungGupta.jpeg";

export default function StudentVisaCanada() {
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
                Immigration
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Study in Canada: How to Get a Student Visa
              </h1>

              <div className="flex flex-wrap items-center text-sm text-gray-300 mt-4 mb-6">
                <div className="flex items-center mr-6 mb-2">
                  <Calendar className="h-4 w-4 mr-2 text-[#ba9669]" />
                  <span>March 17, 2025</span>
                </div>
                <div className="flex items-center mr-6 mb-2">
                  <Clock className="h-4 w-4 mr-2 text-[#ba9669]" />
                  <span>8 min read</span>
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
            alt="Canadian University Campus with International Students"
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
              <h3 className="text-lg font-semibold text-[#202d4a] mb-4">
                Contents
              </h3>
              <ul className="space-y-2 text-[#202d4a]">
                <li>
                  <a
                    href="#overview"
                    className="hover:text-[#ba9669] transition-colors"
                  >
                    Study Permit Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#eligibility"
                    className="hover:text-[#ba9669] transition-colors"
                  >
                    Eligibility Requirements
                  </a>
                </li>
                <li>
                  <a
                    href="#application"
                    className="hover:text-[#ba9669] transition-colors"
                  >
                    Application Process
                  </a>
                </li>
                <li>
                  <a
                    href="#documents"
                    className="hover:text-[#ba9669] transition-colors"
                  >
                    Required Documents
                  </a>
                </li>
                <li>
                  <a
                    href="#working"
                    className="hover:text-[#ba9669] transition-colors"
                  >
                    Working While Studying
                  </a>
                </li>
                <li>
                  <a
                    href="#post-graduation"
                    className="hover:text-[#ba9669] transition-colors"
                  >
                    Post-Graduation Options
                  </a>
                </li>
                <li>
                  <a
                    href="#mistakes"
                    className="hover:text-[#ba9669] transition-colors"
                  >
                    Common Mistakes to Avoid
                  </a>
                </li>
              </ul>
            </div>

            <div className="prose prose-lg prose-slate max-w-none">
              <p className="lead text-xl text-[#202d4a] font-medium">
                Canada consistently ranks among the world&apos;s top destinations for
                international education, offering high-quality programs, diverse
                cultural experiences, and potential pathways to permanent
                residency. Securing a Canadian study permit is the crucial first
                step toward achieving your educational goals in this welcoming
                North American nation.
              </p>

              <h2
                id="overview"
                className="text-2xl font-bold text-[#202d4a] mt-10 mb-6 border-b border-gray-200 pb-2"
              >
                Canadian Study Permit: The Essentials
              </h2>

              <p>
                A Canadian study permit is the official document that allows
                international students to study at designated learning
                institutions (DLIs) in Canada. While often referred to as a
                &quot;student visa&quot;, the technical term in Canada is &quot;study permit.&quot;
                The visa itself is simply the document that allows you to enter
                Canada, while the study permit authorizes your stay as a
                student.
              </p>

              <div className="bg-gradient-to-r from-[#f9f9f9] to-[#f5f5f5] p-6 rounded-lg my-8 border-l-4 border-[#ba9669] shadow-sm">
                <h3 className="text-xl font-bold text-[#202d4a] mb-4">
                  Key Facts About Canadian Study Permits
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ba9669] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Validity:</strong> Generally valid for the
                      duration of your program plus 90 days
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ba9669] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Work Authorization:</strong> Permits full-time
                      work during scheduled breaks and up to 20 hours per week
                      during academic sessions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ba9669] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Post-Graduation:</strong> Can lead to a
                      Post-Graduation Work Permit (PGWP) of up to 3 years
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ba9669] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Processing Times:</strong> Varies by country
                      (typically 4-16 weeks)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ba9669] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Requirements:</strong> Acceptance at a DLI,
                      financial proof, and intent to leave Canada after studies
                    </span>
                  </li>
                </ul>
              </div>

              <p>
                It&apos;s important to note that not all educational programs require
                a study permit. Short courses under 6 months can typically be
                completed on a visitor visa. However, if you might want to
                continue studying or work part-time during your studies,
                applying for a study permit is recommended even for shorter
                programs.
              </p>

              <h2
                id="eligibility"
                className="text-2xl font-bold text-[#202d4a] mt-10 mb-6 border-b border-gray-200 pb-2"
              >
                Eligibility Requirements for a Canadian Study Permit
              </h2>

              <p>
                Before applying for a Canadian study permit, you must meet
                several fundamental eligibility criteria established by
                Immigration, Refugees and Citizenship Canada (IRCC):
              </p>

              <h3 className="text-xl font-semibold text-[#202d4a] mt-6">
                1. Acceptance at a Designated Learning Institution
              </h3>

              <p>
                You must have been accepted at a Designated Learning Institution
                (DLI) in Canada. All primary and secondary schools in Canada are
                DLIs, and post-secondary institutions must have this designation
                to host international students.
              </p>

              <div className="bg-[#202d4a]/5 p-5 rounded-md my-6">
                <p className="text-sm font-medium text-[#202d4a]">
                  <strong>Important:</strong> Your offer letter from a Canadian
                  institution must include specific information including your
                  program details, start and end dates, and tuition fees. Verify
                  that your chosen institution appears on the{" "}
                  <a
                    href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/designated-learning-institutions-list.html"
                    className="text-[#ba9669] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    official DLI list
                  </a>
                  .
                </p>
              </div>

              <h3 className="text-xl font-semibold text-[#202d4a] mt-6">
                2. Proof of Financial Support
              </h3>

              <p>
                You must demonstrate that you have enough funds to pay your:
              </p>

              <ul className="list-disc pl-6 space-y-1 mt-4">
                <li>Tuition fees (as indicated in your acceptance letter)</li>
                <li>
                  Living expenses for yourself and any accompanying family
                  members
                </li>
                <li>Return transportation costs</li>
              </ul>

              <p className="mt-4">
                As of 2025, IRCC requires proof of at least CAD $20,635 per year
                (plus tuition) for a single student, with additional amounts for
                accompanying family members. This amount is subject to change,
                so always check the latest requirements.
              </p>

              <h3 className="text-xl font-semibold text-[#202d4a] mt-6">
                3. Good Health and Character
              </h3>

              <p>You may need to:</p>

              <ul className="list-disc pl-6 space-y-1 mt-4">
                <li>
                  Complete a medical examination by an IRCC-approved physician
                </li>
                <li>
                  Provide police certificates to demonstrate you have no
                  criminal record
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-[#202d4a] mt-6">
                4. Genuine Intent to Leave Canada
              </h3>

              <p>
                As a temporary resident, you must convince immigration officials
                that you will leave Canada at the end of your authorized stay.
                This doesn&apos;t mean you can&apos;t later apply for permanent residence,
                but at the time of your study permit application, your stated
                intent must be to return home after completing your studies.
              </p>

              <h2
                id="application"
                className="text-2xl font-bold text-[#202d4a] mt-10 mb-6 border-b border-gray-200 pb-2"
              >
                The Study Permit Application Process
              </h2>

              <p>
                The application process for a Canadian study permit involves
                several key steps that must be carefully completed:
              </p>

              <ol className="space-y-6 my-6">
                <li>
                  <h3 className="text-lg font-semibold text-[#202d4a]">
                    1. Secure Admission to a DLI
                  </h3>
                  <p className="mt-2">
                    Before applying for a study permit, you must first apply to
                    and receive an acceptance letter from a Canadian Designated
                    Learning Institution. This letter is a crucial document in
                    your study permit application.
                  </p>
                </li>

                <li>
                  <h3 className="text-lg font-semibold text-[#202d4a]">
                    2. Create an Online Account
                  </h3>
                  <p className="mt-2">
                    Most applicants apply online through the IRCC portal. Create
                    an account and gather all necessary documents in digital
                    format before beginning your application.
                  </p>
                </li>

                <li>
                  <h3 className="text-lg font-semibold text-[#202d4a]">
                    3. Complete the Application Forms
                  </h3>
                  <p className="mt-2">
                    The main form is IMM 1294 (Application for a Study Permit
                    Made Outside of Canada). Answer all questions accurately and
                    completely, as inconsistencies or omissions can lead to
                    refusal.
                  </p>
                </li>

                <li>
                  <h3 className="text-lg font-semibold text-[#202d4a]">
                    4. Pay the Required Fees
                  </h3>
                  <p className="mt-2">
                    The study permit processing fee is currently CAD $150. If
                    biometrics are required (typically valid for 10 years),
                    there is an additional fee of CAD $85 for an individual or
                    CAD $170 for a family.
                  </p>
                </li>

                <li>
                  <h3 className="text-lg font-semibold text-[#202d4a]">
                    5. Attend Biometrics Appointment
                  </h3>
                  <p className="mt-2">
                    After submitting your application, you may receive
                    instructions to provide biometrics (fingerprints and photo)
                    at a Visa Application Centre (VAC) or Application Support
                    Center (ASC).
                  </p>
                </li>

                <li>
                  <h3 className="text-lg font-semibold text-[#202d4a]">
                    6. Possible Interview
                  </h3>
                  <p className="mt-2">
                    In some cases, you may be called for an interview at the
                    local Canadian embassy or consulate. This is more common for
                    applicants from countries with high refusal rates.
                  </p>
                </li>

                <li>
                  <h3 className="text-lg font-semibold text-[#202d4a]">
                    7. Receive Decision
                  </h3>
                  <p className="mt-2">
                    If approved, you&apos;ll receive a Port of Entry (POE) Letter of
                    Introduction and, if applicable, a temporary resident visa
                    (TRV) or Electronic Travel Authorization (eTA) to enter
                    Canada.
                  </p>
                </li>

                <li>
                  <h3 className="text-lg font-semibold text-[#202d4a]">
                    8. Arrive in Canada
                  </h3>
                  <p className="mt-2">
                    Present your documents to immigration officials at the
                    Canadian port of entry, who will issue your actual study
                    permit.
                  </p>
                </li>
              </ol>

              <div
                id="timeline"
                className="bg-[#202d4a]/5 p-6 rounded-lg my-10 border border-[#202d4a]/10"
              >
                <h3 className="text-xl font-bold text-[#202d4a] mb-3">
                  Suggested Application Timeline
                </h3>
                <p className="mb-4">
                  For the best chance of success, plan your application
                  according to this timeline:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-[#ba9669] text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                      1
                    </div>
                    <span>
                      <strong>12-18 months before program start:</strong>{" "}
                      Research institutions and programs
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-[#ba9669] text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                      2
                    </div>
                    <span>
                      <strong>10-12 months before:</strong> Apply to educational
                      institutions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-[#ba9669] text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                      3
                    </div>
                    <span>
                      <strong>6-8 months before:</strong> Receive acceptance and
                      apply for study permit
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-[#ba9669] text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                      4
                    </div>
                    <span>
                      <strong>3-4 months before:</strong> Prepare for departure
                      (housing, travel arrangements)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-5 w-5 rounded-full bg-[#ba9669] text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                      5
                    </div>
                    <span>
                      <strong>2 weeks before:</strong> Confirm all documentation
                      is in order for port of entry
                    </span>
                  </li>
                </ul>
              </div>

              <h2
                id="documents"
                className="text-2xl font-bold text-[#202d4a] mt-10 mb-6 border-b border-gray-200 pb-2"
              >
                Essential Documents for Your Study Permit Application
              </h2>

              <p>
                A complete and well-organized application package significantly
                increases your chances of approval. The following documents are
                typically required:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="font-semibold text-[#202d4a] mb-3">
                    Core Documents
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#ba9669] flex-shrink-0 mt-1" />
                      <span>
                        Valid passport (valid for at least 6 months beyond your
                        expected stay)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#ba9669] flex-shrink-0 mt-1" />
                      <span>Acceptance letter from your DLI</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#ba9669] flex-shrink-0 mt-1" />
                      <span>Proof of financial support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#ba9669] flex-shrink-0 mt-1" />
                      <span>Digital photo meeting specifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#ba9669] flex-shrink-0 mt-1" />
                      <span>
                        Immigration medical examination results (if required)
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="font-semibold text-[#202d4a] mb-3">
                    Supporting Documents
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#ba9669] flex-shrink-0 mt-1" />
                      <span>Statement of purpose/study plan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#ba9669] flex-shrink-0 mt-1" />
                      <span>Academic transcripts and certificates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#ba9669] flex-shrink-0 mt-1" />
                      <span>
                        English/French language proficiency test results
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#ba9669] flex-shrink-0 mt-1" />
                      <span>Proof of ties to home country</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-[#ba9669] flex-shrink-0 mt-1" />
                      <span>Police certificates (if required)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-[#202d4a] mt-6">
                Proof of Financial Support Details
              </h3>

              <p>
                Financial documentation is scrutinized carefully by visa
                officers. Acceptable forms include:
              </p>

              <ul className="list-disc pl-6 space-y-1 mt-4">
                <li>
                  Bank statements from the past 4-6 months showing sufficient
                  funds
                </li>
                <li>Proof of a Canadian bank account with transferred funds</li>
                <li>Proof of a student/education loan</li>
                <li>Paid tuition and housing fees</li>
                <li>
                  A letter from a person/institution providing financial support
                </li>
                <li>
                  Proof of funding from within Canada if you have a scholarship
                  or Canadian-funded program
                </li>
              </ul>

              <div className="p-5 border-l-4 border-[#ba9669] bg-[#f9f9f9] my-8">
                <p className="italic text-[#202d4a]">
                &quot;Financial documentation should demonstrate stability, not
                  just amount. Bank statements showing a recent large deposit
                  without history may raise questions. Visa officers look for
                  consistent financial capacity over time.&quot;
                </p>
              </div>

              <h2
                id="working"
                className="text-2xl font-bold text-[#202d4a] mt-10 mb-6 border-b border-gray-200 pb-2"
              >
                Working While Studying in Canada
              </h2>

              <p>
                One of the advantages of the Canadian study permit is the
                built-in work authorization it provides. Understanding these
                work privileges can help you plan your finances and gain
                valuable Canadian work experience:
              </p>

              <h3 className="text-xl font-semibold text-[#202d4a] mt-6">
                On-Campus Employment
              </h3>

              <p>
                As a full-time student at a post-secondary institution, you can
                work on-campus without additional work permits. These positions
                include:
              </p>

              <ul className="list-disc pl-6 space-y-1 mt-4">
                <li>
                  Jobs in campus buildings (libraries, cafeterias, bookstores)
                </li>
                <li>
                  Work for faculty members (research assistants, teaching
                  assistants)
                </li>
                <li>Jobs with student organizations</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#202d4a] mt-6">
                Off-Campus Employment
              </h3>

              <p>
                Your study permit also authorizes off-campus work under these
                conditions:
              </p>

              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  You must be a full-time student at an eligible institution
                </li>
                <li>
                  You can work up to 20 hours per week during regular academic
                  sessions
                </li>
                <li>
                  You can work full-time during scheduled breaks (spring break,
                  summer vacation, winter holidays)
                </li>
                <li>
                  Your Social Insurance Number (SIN) must be obtained before
                  beginning work
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-[#202d4a] mt-6">
                Co-op/Internship Work Permits
              </h3>

              <p>
                If your program includes a mandatory work component such as a
                co-op term or internship, you&apos;ll need to apply for a co-op work
                permit in addition to your study permit. This is:
              </p>

              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Free of charge</li>
                <li>
                  Required even if the work represents less than 50% of your
                  program
                </li>
                <li>
                  Only available for work that is an essential part of your
                  academic program
                </li>
              </ul>

              <h2
                id="post-graduation"
                className="text-2xl font-bold text-[#202d4a] mt-10 mb-6 border-b border-gray-200 pb-2"
              >
                Post-Graduation Pathways in Canada
              </h2>

              <p>
                Canada offers attractive post-graduation options that make it a
                particularly appealing destination for international students
                planning long-term career and immigration goals:
              </p>

              <h3 className="text-xl font-semibold text-[#202d4a] mt-6">
                Post-Graduation Work Permit (PGWP)
              </h3>

              <p>
                The PGWP allows graduates from eligible Canadian DLIs to remain
                in Canada and gain valuable work experience after completing
                their studies:
              </p>

              <div className="bg-[#202d4a]/5 p-6 rounded-lg my-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ba9669] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Duration:</strong> Varies from 8 months to 3
                      years, depending on your program length
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ba9669] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Eligibility:</strong> Must have completed a
                      full-time program of at least 8 months at an eligible DLI
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ba9669] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Work Rights:</strong> Open work permit allowing
                      you to work for almost any employer
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ba9669] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Application Window:</strong> Must apply within 180
                      days of receiving final marks
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ba9669] flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Limitation:</strong> Generally available only once
                      in a lifetime
                    </span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-[#202d4a] mt-6">
                Pathways to Permanent Residency
              </h3>

              <p>
                Canadian work experience gained through the PGWP can
                significantly enhance your eligibility for permanent residency
                through programs such as:
              </p>

              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  <strong>Express Entry</strong> - Federal Skilled Worker,
                  Federal Skilled Trades, Canadian Experience Class
                </li>
                <li>
                  <strong>Provincial Nominee Programs (PNPs)</strong> - Many
                  provinces have immigration streams specifically for
                  international graduates
                </li>
                <li>
                  <strong>Quebec Experience Program</strong> - For those who
                  studied in Quebec and meet language requirements
                </li>
                <li>
                  <strong>Atlantic Immigration Program</strong> - For graduates
                  from institutions in Atlantic provinces
                </li>
              </ul>

              <p className="mt-4">
                Canadian education and work experience are highly valued in
                immigration programs, often awarding significant points in
                selection systems. This creates a clear path from student to
                permanent resident for those who plan accordingly.
              </p>

              <h2
                id="mistakes"
                className="text-2xl font-bold text-[#202d4a] mt-10 mb-6 border-b border-gray-200 pb-2"
              >
                Common Mistakes to Avoid in Study Permit Applications
              </h2>

              <p>
                Many study permit applications are refused due to preventable
                errors. Avoid these common pitfalls:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white p-4 rounded-md border-l-4 border-[#ba9669] shadow-sm">
                  <strong className="text-[#202d4a]">
                    Insufficient financial documentation
                  </strong>{" "}
                  - This is the most common reason for refusal. Ensure your
                  documentation clearly demonstrates you can cover all expenses
                  without needing to work in Canada.
                </div>
                <div className="bg-white p-4 rounded-md border-l-4 border-[#ba9669] shadow-sm">
                  <strong className="text-[#202d4a]">
                    Poor explanation of study plans
                  </strong>{" "}
                  - Failing to provide a clear rationale for your chosen
                  program, particularly if it represents a change from your
                  previous education or career path.
                </div>
                <div className="bg-white p-4 rounded-md border-l-4 border-[#ba9669] shadow-sm">
                  <strong className="text-[#202d4a]">
                    Weak ties to home country
                  </strong>{" "}
                  - Not providing enough evidence that you have significant
                  reasons to return home after completing your studies.
                </div>
                <div className="bg-white p-4 rounded-md border-l-4 border-[#ba9669] shadow-sm">
                  <strong className="text-[#202d4a]">
                    Incomplete or inaccurate forms
                  </strong>{" "}
                  - Missing information or providing inconsistent details can
                  lead to refusal. Double-check all forms before submission.
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#202d4a] mt-10 mb-6 border-b border-gray-200 pb-2">
                Conclusion
            </h2>

            <p>
                Obtaining a Canadian study permit requires careful planning, thorough documentation, and attention to detail. The comprehensive process reflects Canada&apos;s commitment to welcoming qualified international students while ensuring they have the resources to succeed academically and support themselves financially.
            </p>

            <p>
                The benefits of studying in Canada extend far beyond quality education. With work privileges during your studies, post-graduation work opportunities, and clear pathways to permanent residency, Canada offers international students a unique combination of educational excellence and long-term immigration potential.
            </p>

            <p>
                At TRUST LEGAL, we recommend starting the application process early and seeking professional guidance for complex situations or if you&apos;ve had previous immigration difficulties. Our experienced immigration team can help you navigate the nuances of Canadian study permits to maximize your chances of approval and establish a strong foundation for your educational and career goals in Canada.
            </p>

            <div className="p-5 border-l-4 border-[#ba9669] bg-[#f9f9f9] my-8">
                <p className="italic text-[#202d4a]">
                &quot;A Canadian education opens doors worldwide, but its greatest value may be in opening the door to Canada itself—a country that increasingly recognizes international graduates as ideal candidates for permanent residence and citizenship.&quot;
                </p>
            </div>
            <div className="border-t border-gray-200 mt-12 pt-8">
                <p className="text-sm text-gray-500">
                    Disclaimer: This article provides general information about Canadian study permits and does not constitute legal advice. Immigration regulations change frequently. For guidance specific to your situation, please consult with a qualified immigration professional before proceeding with your application.
                </p>

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
                        href="/blog/partnership-vs-corporation"
                        className="group"
                    >
                        <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="relative h-48">
                                <Image
                                    src="/partnership.jpg"
                                    alt="Partnership vs. Corporation"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="inline-block rounded-lg bg-[#ba9669]/10 px-3 py-1 text-xs text-[#ba9669] mb-2">
                                    Business Law
                                </div>
                                <h3 className="font-bold text-[#202d4a] group-hover:text-[#ba9669] transition-colors">
                                    Partnership vs. Corporation: Which is Right for You?
                                </h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    Explore the pros and cons of different business structures to make an informed decision for your venture.
                                </p>
                                <div className="flex items-center mt-4 text-xs text-gray-500">
                                    <Calendar className="h-3 w-3 mr-1" />
                                    <span>March 15, 2025</span>
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