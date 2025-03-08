"use client"

import {
    Bell,
    CheckSquare,
    Mail,
    Menu,
    Search,
    X
} from "lucide-react"
import { useEffect, useState } from "react"
import SideBar from "./sidebar"
import Todo from "./Todo"

export default function PageTemplate({ children, title }: { children: React.ReactNode, title: string }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [rightSidebarOpen, setRightSidebarOpen] = useState(false)

    useEffect(() => {
        setIsVisible(true)

        // Close sidebar on small screens by default
        const handleResize = () => {
            if (window.innerWidth < 1024) {
                setSidebarOpen(false)
            } else {
                setSidebarOpen(true)
            }
        }

        // Set initial state
        handleResize()

        // Add event listener
        window.addEventListener('resize', handleResize)

        // Clean up
        return () => window.removeEventListener('resize', handleResize)
    }, [])



    return (
        <div className="flex h-screen bg-gray-50 relative overflow-hidden">
            {/* Overlay for mobile when sidebar is open */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-gray-900 bg-opacity-50 z-20 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            {/* Responsive Sidebar */}
            <div
                className={`fixed lg:relative lg:flex lg:flex-shrink-0 z-30 h-full transition-all duration-300 ease-in-out ${sidebarOpen
                    ? "translate-x-0"
                    : "-translate-x-full lg:translate-x-0"
                    }`}
            >
                <SideBar />
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden w-full">
                {/* Top navbar */}
                <header className="bg-white shadow-sm z-10">
                    <div className="flex items-center justify-between h-16 px-4">
                        <div className="flex items-center">
                            <button
                                onClick={() => setSidebarOpen(!sidebarOpen)}
                                className="text-gray-600 hover:text-[#192841] focus:outline-none h-full"
                                aria-label="Toggle sidebar"
                            >
                                <Menu size={24} />
                            </button>
                            <div className="ml-4">
                                <h1 className="text-xl font-semibold text-[#192841] pl-2 sm:pl-4 truncate">{title}</h1>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2 sm:space-x-4">
                            <div className="relative hidden sm:block">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-32 sm:w-48 lg:w-64 pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9e814d]/50 focus:border-[#9e814d]"
                                />
                                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                            </div>

                            <button
                                className="sm:hidden p-1.5 rounded-full text-gray-600 hover:bg-gray-100"
                                aria-label="Search"
                            >
                                <Search size={20} />
                            </button>

                            <button
                                className="p-1.5 rounded-full text-gray-600 hover:bg-gray-100 relative"
                                aria-label="Notifications"
                            >
                                <Bell size={20} />
                                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-[#9e814d]"></span>
                            </button>

                            <button
                                className="p-1.5 rounded-full text-gray-600 hover:bg-gray-100 relative"
                                aria-label="Messages"
                            >
                                <Mail size={20} />
                                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-[#9e814d]"></span>
                            </button>

                            {/* Task sidebar toggle for mobile */}
                            <button
                                className="p-1.5 rounded-full text-gray-600 hover:bg-gray-100 lg:hidden"
                                onClick={() => setRightSidebarOpen(!rightSidebarOpen)}
                                aria-label="Toggle tasks"
                            >
                                <CheckSquare size={20} />
                            </button>
                        </div>
                    </div>
                </header>

                {/* Main content area */}
                <main className="flex-1 flex overflow-hidden relative">
                    <div
                        className={`flex-1 overflow-y-auto p-3 sm:p-6 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        {children}
                    </div>

                    {/* Right sidebar - fixed on mobile, standard on desktop */}
                    <div
                        className={`lg:block fixed lg:relative right-0 top-0 h-full w-80 max-w-[80vw] bg-white border-l border-gray-200 overflow-y-auto z-40 transition-transform duration-300 transform ${rightSidebarOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
                            }`}
                    >
                        {/* Close button for mobile */}
                        <button
                            className="lg:hidden absolute right-4 top-4 p-1 rounded-full text-gray-500 hover:bg-gray-100"
                            onClick={() => setRightSidebarOpen(false)}
                            aria-label="Close task panel"
                        >
                            <X size={20} />
                        </button>

                        {/* Todo section */}
                        <Todo />
                    </div>
                </main>
            </div>
        </div>
    )
}
