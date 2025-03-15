"use client";

import { useEffect, useState } from "react";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  User,
  AlertCircle,
} from "lucide-react";
import MarkdownIt from "markdown-it";
import OmungGupta from "@/public/OmungGupta.jpeg";

// Enhanced markdown parser configuration
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true,
}).use(require("markdown-it-container"));

// Custom renderer to enhance checkmarks and styling
const defaultRender =
  md.renderer.rules.text ||
  function (tokens, idx, options, env, self) {
    return tokens[idx].content;
  };

// Blog post type
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  date: string;
  category: string;
  image: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function BlogPage({ params }: { params: { slug: string } }) {
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const router = useRouter();
  const { slug } = params;

  useEffect(() => {
    async function fetchBlogData() {
      try {
        const response = await fetch("/api/blog");
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }

        const blogs: BlogPost[] = await response.json();
        const currentBlog = blogs.find((post) => post.slug === slug);

        if (!currentBlog) {
          notFound();
          return;
        }

        setBlog(currentBlog);

        // Find related posts (same category, excluding current)
        const related = blogs
          .filter(
            (post) =>
              post.slug !== slug &&
              (post.category === currentBlog.category || post.featured)
          )
          .slice(0, 2);

        setRelatedPosts(related);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogData();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#ba9669] border-r-transparent align-[-0.125em]"></div>
          <p className="mt-4 text-[#202d4a]">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return notFound();
  }

  const readingTime = Math.ceil(blog.description.split(" ").length / 200); // Rough estimate: 200 words per minute

  // Process markdown with custom styling for better rendering
  const processedContent = blog.description
    // Add proper heading structure
    .replace(
      /^## /gm,
      '<h2 class="text-2xl font-bold text-[#202d4a] mt-8 mb-4">'
    )
    .replace(
      /^### /gm,
      '<h3 class="text-xl font-bold text-[#202d4a] mt-6 mb-3">'
    )
    .replace(
      /^#### /gm,
      '<h4 class="text-lg font-bold text-[#202d4a] mt-5 mb-2">'
    )
    // Style lists
    .replace(
      /- ✅ /g,
      '<li class="flex items-start mb-3"><span class="text-[#ba9669] mr-2 mt-1 flex-shrink-0"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></span>'
    )
    // Style regular list items
    .replace(
      /^- /gm,
      '<li class="flex items-start mb-2"><span class="text-[#ba9669] mr-2 mt-1">•</span>'
    );

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
                {blog.category}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                {blog.title}
              </h1>

              <div className="flex flex-wrap items-center text-sm text-gray-300 mt-4 mb-6">
                <div className="flex items-center mr-6 mb-2">
                  <Calendar className="h-4 w-4 mr-2 text-[#ba9669]" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center mr-6 mb-2">
                  <Clock className="h-4 w-4 mr-2 text-[#ba9669]" />
                  <span>{readingTime} min read</span>
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
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            {/* Custom styled blog content */}
            <div className="prose prose-lg prose-slate max-w-none">
              <style jsx global>{`
                .prose h2 {
                  color: #202d4a;
                  font-size: 1.75rem;
                  font-weight: 700;
                  margin-top: 2rem;
                  margin-bottom: 1rem;
                  border-bottom: 1px solid #eaeaea;
                  padding-bottom: 0.5rem;
                }
                .prose h3 {
                  color: #202d4a;
                  font-size: 1.5rem;
                  font-weight: 600;
                  margin-top: 1.5rem;
                  margin-bottom: 0.75rem;
                }
                .prose h4 {
                  color: #202d4a;
                  font-size: 1.25rem;
                  font-weight: 600;
                  margin-top: 1.25rem;
                  margin-bottom: 0.5rem;
                }
                .prose p {
                  margin-top: 1rem;
                  margin-bottom: 1rem;
                  line-height: 1.7;
                }
                .prose ul {
                  margin-left: 1.5rem;
                  margin-bottom: 1.5rem;
                }
                .prose li {
                  margin-bottom: 0.5rem;
                }
                .prose strong {
                  color: #202d4a;
                  font-weight: 600;
                }
                .prose blockquote {
                  background-color: #f9f9f9;
                  border-left: 4px solid #ba9669;
                  padding: 1rem 1.5rem;
                  margin: 1.5rem 0;
                  border-radius: 0.25rem;
                }
                .prose blockquote p {
                  margin: 0;
                }
                .benefit-item {
                  display: flex;
                  align-items: flex-start;
                  margin-bottom: 0.75rem;
                }
                .check-icon {
                  color: #ba9669;
                  margin-right: 0.5rem;
                  flex-shrink: 0;
                  margin-top: 0.25rem;
                }
              `}</style>
              <div
                className="leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: md.render(blog.description),
                }}
              />
            </div>

            <div className="border-t border-gray-200 mt-12 pt-8">
              <p className="text-sm text-gray-500">
                Disclaimer: This article provides general information and should
                not be construed as legal advice. For advice specific to your
                situation, please consult with a qualified legal professional.
              </p>
            </div>

            {/* Author Bio */}
            <div className="flex items-center gap-4 mt-8 p-6 border rounded-lg bg-[#f9f9f9]">
              <div className="relative h-16 w-16 rounded-full overflow-hidden">
                <Image
                  src={OmungGupta}
                  alt="Omung Gupta"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-[#202d4a]">Omung Gupta</h3>
                <p className="text-sm text-[#ba9669]">
                  Barrister and Solicitor
                </p>
                <p className="text-sm mt-1">
                  Omung Gupta specializes in {blog.category.toLowerCase()} law
                  and commercial transactions, helping clients navigate complex
                  legal matters with a focus on protecting their legal and
                  business interests.
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
                Need Expert Legal Guidance?
              </h2>
              <p className="text-gray-300 mb-6">
                Contact TRUST LEGAL today for professional advice on your{" "}
                {blog.category.toLowerCase()} matters. Our experienced team will
                help you navigate complex legal requirements and protect your
                interests.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#ba9669] text-white font-medium rounded-md hover:bg-[#ba9669]/90 transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <section className="bg-[#f9f9f9] py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-[#202d4a] mb-6">
                  Related Articles
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedPosts.map((post) => (
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="group"
                      key={post.id}
                    >
                      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="relative h-48">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="inline-block rounded-lg bg-[#ba9669]/10 px-3 py-1 text-xs text-[#ba9669] mb-2">
                            {post.category}
                          </div>
                          <h3 className="font-bold text-[#202d4a] group-hover:text-[#ba9669] transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center mt-4 text-xs text-gray-500">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
