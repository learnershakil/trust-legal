"use client";

import { Calendar, ChevronRight, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  featured: boolean;
  slug: string;
}

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);

  // Sample blog articles
  const articles: Article[] = [
    {
      id: 1,
      title: "Key Considerations for Business Incorporation in Ontario",
      excerpt:
        "Learn about the essential legal considerations when incorporating your business in Ontario.",
      date: "March 1, 2025",
      category: "Business Law",
      slug: "business-incorporation-ontario",
      image: "/business.jpg",
      featured: false
    },{
      id: 2,
      title: "Partnership vs. Corporation: Which is Right for You?",
      excerpt:
        "Explore the pros and cons of different business structures to make an informed decision for your venture.",
      date: "March 15, 2025",
      category: "Business Law",
      slug: "partnership-vs-corporation",
      image: "/partnership.jpg",
      featured: true
    },
    {
      id: 3,
      title: "Study in Canada: How to Get a Student Visa",
      excerpt: 
        "A comprehensive guide to navigating the Canadian student visa application process.",
      date: "March 17, 2025",
      category: "Immigration",
      slug: "student-visa-canada",
      image: "/canada-study.jpg",
      featured: true
    },
    {
      id: 4,
      title: "The Role of a Real Estate Lawyer in Property Transactions",
      excerpt: 
        "Understanding how a real estate lawyer can protect your interests and ensure a smooth property transaction process.",
      date: "March 25, 2025",
      category: "Real Estate",
      slug: "real-estate-lawyer-property-transactions",
      image: "/real-estate-law.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Landlord vs. Tenant Rights in Ontario",
      excerpt: 
        "A detailed overview of the legal rights and responsibilities of both landlords and tenants under Ontario law.",
      date: "April 2, 2025",
      category: "Real Estate",
      slug: "landlord-tenant-rights-ontario",
      image: "/landlord-tenant.jpg",
      featured: false
    }
  ];


  const filterArticles = useCallback(() => {
    let results = articles;

    if (activeFilter !== "all") {
      results = results.filter(article => article.category === activeFilter);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query)
      );
    }


    setFilteredArticles(results);
  }, [activeFilter, searchQuery]);

  useEffect(() => {
    filterArticles();
  }, [filterArticles]);


  const featuredArticles = articles.filter(article => article.featured);

  return (
    <div className="flex min-h-screen flex-col">
      <main>
        {/* Hero Section */}
        <section className="relative bg-[#202d4a] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">Our Blog</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Legal Insights & Resources</h1>
              <p className="text-lg text-gray-300">
                Stay informed with the latest legal developments, expert analysis, and practical guidance from the Trust Legal team.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Articles Section */}
        {featuredArticles.length > 0 && (
          <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#202d4a]">Featured Articles</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredArticles.map((article) => (
                  <div key={article.id} className="group bg-[#f9f9f9] rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="relative h-64 w-full">
                      <div className="absolute top-0 left-0 z-10 bg-[#ba9669] text-white px-3 py-1 text-sm font-medium m-4 rounded">
                        Featured
                      </div>
                      <Image
                        src={article.image || "/images/blog/placeholder.jpg"}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3 text-sm text-gray-500">
                        <span className="bg-[#202d4a]/10 text-[#202d4a] px-2 py-1 rounded text-xs font-medium">
                          {article.category}
                        </span>
                        <div className="flex items-center ml-3">
                          <Calendar className="h-3 w-3 mr-1" />
                          {article.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-[#202d4a] mb-3 group-hover:text-[#ba9669] transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-[#202d4a]/70 mb-4">{article.excerpt}</p>
                      <Link href={`/blog/${article.slug}`} className="text-[#ba9669] font-medium inline-flex items-center hover:underline">
                        Read More <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Blog Listing Section */}
        <section className="py-16 md:py-20 bg-[#f9f9f9]">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#202d4a] mb-6">All Articles</h2>

              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div className="relative md:max-w-sm">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#ba9669]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${activeFilter === "all"
                      ? "bg-[#202d4a] text-white"
                      : "bg-gray-200 text-[#202d4a] hover:bg-gray-300"
                      }`}
                    onClick={() => setActiveFilter("all")}
                  >
                    All
                  </button>
                  <button
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${activeFilter === "Business Law"
                      ? "bg-[#202d4a] text-white"
                      : "bg-gray-200 text-[#202d4a] hover:bg-gray-300"
                      }`}
                    onClick={() => setActiveFilter("Business Law")}
                  >
                    Business Law
                  </button>
                  <button
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${activeFilter === "Litigation"
                      ? "bg-[#202d4a] text-white"
                      : "bg-gray-200 text-[#202d4a] hover:bg-gray-300"
                      }`}
                    onClick={() => setActiveFilter("Litigation")}
                  >
                    Litigation
                  </button>
                  <button
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${activeFilter === "Immigration"
                      ? "bg-[#202d4a] text-white"
                      : "bg-gray-200 text-[#202d4a] hover:bg-gray-300"
                      }`}
                    onClick={() => setActiveFilter("Immigration")}
                  >
                    Immigration
                  </button>
                  <button
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${activeFilter === "Real Estate"
                      ? "bg-[#202d4a] text-white"
                      : "bg-gray-200 text-[#202d4a] hover:bg-gray-300"
                      }`}
                    onClick={() => setActiveFilter("Real Estate")}
                  >
                    Real Estate
                  </button>
                </div>
              </div>

              {/* Articles Grid */}
              {filteredArticles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredArticles.map((article) => (
                    <div key={article.id} className="group bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="relative h-48 w-full">
                        <Image
                          src={article.image || "/images/blog/placeholder.jpg"}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex items-center mb-2 text-xs text-gray-500">
                          <span className="bg-[#202d4a]/10 text-[#202d4a] px-2 py-1 rounded text-xs font-medium">
                            {article.category}
                          </span>
                          <div className="flex items-center ml-3">
                            <Calendar className="h-3 w-3 mr-1" />
                            {article.date}
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-[#202d4a] mb-2 group-hover:text-[#ba9669] transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-[#202d4a]/70 mb-3 text-sm line-clamp-3">{article.excerpt}</p>
                        <Link href={`/blog/${article.slug}`} className="text-[#ba9669] text-sm font-medium inline-flex items-center hover:underline">
                          Read More <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10 bg-white rounded-lg border border-gray-200">
                  <p className="text-lg text-[#202d4a]/70">No articles found matching your criteria.</p>
                  <button
                    onClick={() => { setActiveFilter("all"); setSearchQuery(""); }}
                    className="mt-4 px-4 py-2 bg-[#ba9669] text-white rounded-md hover:bg-[#ba9669]/90 transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 bg-[#202d4a] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block rounded-lg bg-[#ba9669]/20 px-3 py-1 text-sm text-[#ba9669] mb-4">Stay Informed</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
              <p className="text-gray-300 mb-8">
                Receive the latest legal insights, news, and updates directly to your inbox. We respect your privacy and will never share your information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-md border border-gray-700 bg-[#202d4a]/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ba9669] flex-grow"
                />
                <button className="px-6 py-3 bg-[#ba9669] text-white font-medium rounded-md hover:bg-[#ba9669]/90 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-4">
                By subscribing, you agree to receive email communications from Trust Legal.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
