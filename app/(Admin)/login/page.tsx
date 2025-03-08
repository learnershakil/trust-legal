"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Call your authentication API here
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/dashboard",
      });

      if (response) {
        if (!response.ok) {
          throw new Error(response.error || "Login failed");
        } else {
          // Success - redirect manually
          router.push(response.url || "/dashboard");
        }
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side: Brand section */}
      <div className="hidden md:flex md:w-1/2 bg-[#1e2b3e] text-white p-8 flex-col justify-between">
        <div>
          <div className="mb-8">
            <Image 
              src="/logo.png" 
              alt="Trust Legal Logo" 
              width={180} 
              height={50} 
              className="mb-6"
            />
            <h1 className="text-3xl font-bold tracking-tight mb-2">
              Welcome to <span className="text-[#ba9669]">Trust Legal</span>
            </h1>
            <p className="text-gray-300 max-w-md">
              Access your secure portal for comprehensive legal services and case management.
            </p>
          </div>
        </div>
        
        <div className="border-t border-[#ba9669]/30 pt-6">
          <p className="text-lg font-medium text-[#ba9669]">Legal Expertise When You Need It</p>
          <p className="text-sm text-gray-300">Reliable legal solutions in Business Law, Litigation, Immigration, and Real Estate.</p>
        </div>
      </div>

      {/* Right side: Login form */}
      <div className="flex-1 flex items-center justify-center p-6 bg-gray-50">
        <div className="w-full max-w-md">
          <div className="md:hidden mb-10 text-center">
            <Image 
              src="/logo.png" 
              alt="Trust Legal Logo" 
              width={160} 
              height={45} 
              className="mx-auto mb-4"
            />
            <h1 className="text-2xl font-bold text-[#1e2b3e]">
              Welcome Back
            </h1>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold text-[#1e2b3e] mb-6 hidden md:block">Sign In</h2>
            
            {error && (
              <div className="mb-4 bg-red-50 border-l-4 border-red-500 p-4">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ba9669] focus:border-transparent"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Link 
                    href="/forgot-password"
                    className="text-sm text-[#ba9669] hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ba9669] focus:border-transparent"
                  placeholder="••••••••"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-2.5 px-4 rounded-md text-white font-medium 
                  ${isLoading ? "bg-[#1e2b3e]/60" : "bg-[#1e2b3e] hover:bg-[#1e2b3e]/90"} 
                  transition-colors duration-200 flex items-center justify-center`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </>
                ) : "Sign In"}
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don&apos;t have an account? 
                <Link href="/contact-us" className="ml-1 text-[#ba9669] hover:underline font-medium">
                  Contact us
                </Link>
              </p>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Trust Legal. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}