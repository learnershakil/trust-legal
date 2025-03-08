"use client"

import PageTemplate from '@/components/Home/page-template'
import { useState } from "react"
import NewsletterCampaigns from './NewsletterCampaigns'
import NewsletterForm from './NewsletterForm'
import NewsletterStats from './NewsletterStats'
import NewsletterSubscribers from './NewsletterSubscribers'

export default function NewsletterPage() {
    const [activeTab, setActiveTab] = useState('subscribers')
    const [subscribers, setSubscribers] = useState([
        { id: 1, email: "john.doe@example.com", name: "John Doe", status: "active", joinDate: "2025-01-15", tags: ["Client", "Corporate"] },
        { id: 2, email: "sarah.johnson@example.com", name: "Sarah Johnson", status: "active", joinDate: "2025-01-20", tags: ["Client", "Individual"] },
        { id: 3, email: "michael.brown@example.com", name: "Michael Brown", status: "inactive", joinDate: "2025-01-25", tags: ["Prospect"] },
        { id: 4, email: "emily.davis@example.com", name: "Emily Davis", status: "active", joinDate: "2025-02-01", tags: ["Client", "Corporate"] },
        { id: 5, email: "david.wilson@example.com", name: "David Wilson", status: "pending", joinDate: "2025-02-05", tags: ["Prospect"] },
        { id: 6, email: "jennifer.smith@example.com", name: "Jennifer Smith", status: "active", joinDate: "2025-02-10", tags: ["Client", "Individual"] },
        { id: 7, email: "robert.miller@example.com", name: "Robert Miller", status: "active", joinDate: "2025-02-15", tags: ["Client", "Corporate"] },
        { id: 8, email: "lisa.taylor@example.com", name: "Lisa Taylor", status: "inactive", joinDate: "2025-02-20", tags: ["Former Client"] },
    ])

    const [newsletters, setNewsletters] = useState([
        { id: 1, title: "January Legal Updates", sentDate: "2025-01-31", opens: 145, clicks: 68, unsubscribes: 2 },
        { id: 2, title: "February Legal Updates", sentDate: "2025-02-28", opens: 156, clicks: 72, unsubscribes: 1 },
        { id: 3, title: "Special: Tax Law Changes", sentDate: "2025-03-05", opens: 178, clicks: 95, unsubscribes: 0 },
    ])

    const [selectedNewsletter, setSelectedNewsletter] = useState(null)

    const handleAddSubscriber = (subscriber) => {
        const newSubscriber = {
            id: Date.now(),
            ...subscriber,
            status: "active",
            joinDate: new Date().toISOString().split('T')[0]
        }
        setSubscribers([...subscribers, newSubscriber])
    }

    const handleRemoveSubscriber = (id) => {
        if (confirm("Are you sure you want to remove this subscriber?")) {
            setSubscribers(subscribers.filter(sub => sub.id !== id))
        }
    }

    const handleUpdateStatus = (id, status) => {
        setSubscribers(subscribers.map(sub =>
            sub.id === id ? { ...sub, status } : sub
        ))
    }

    const handleComposeNewsletter = () => {
        setSelectedNewsletter(null)
        setActiveTab('compose')
    }

    const handleViewNewsletter = (newsletter) => {
        setSelectedNewsletter(newsletter)
        setActiveTab('compose')
    }

    const handleSendNewsletter = (newsletterData) => {
        if (selectedNewsletter) {
            // Update existing newsletter
            setNewsletters(newsletters.map(nl =>
                // @ts-ignore
                nl.id === selectedNewsletter.id ? { ...nl, ...newsletterData } : nl
            ))
        } else {
            // Add new newsletter
            const newNewsletter = {
                id: Date.now(),
                ...newsletterData,
                sentDate: new Date().toISOString().split('T')[0],
                opens: 0,
                clicks: 0,
                unsubscribes: 0
            }
            setNewsletters([...newsletters, newNewsletter])
        }
        setActiveTab('campaigns')
    }

    return (
        <PageTemplate title="Newsletter Management">
            <div className="mb-6 bg-white rounded-lg shadow-sm p-4">
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => setActiveTab('subscribers')}
                        className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'subscribers'
                            ? 'bg-[#192841] text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        Subscribers
                    </button>
                    <button
                        onClick={() => setActiveTab('campaigns')}
                        className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'campaigns'
                            ? 'bg-[#192841] text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        Campaigns
                    </button>
                    <button
                        onClick={() => setActiveTab('stats')}
                        className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'stats'
                            ? 'bg-[#192841] text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        Analytics
                    </button>
                    <button
                        onClick={() => setActiveTab('compose')}
                        className={`px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'compose'
                            ? 'bg-[#192841] text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        Compose
                    </button>
                </div>
            </div>

            {activeTab === 'subscribers' && (
                <NewsletterSubscribers
                    subscribers={subscribers}
                    onAdd={handleAddSubscriber}
                    onRemove={handleRemoveSubscriber}
                    onUpdateStatus={handleUpdateStatus}
                />
            )}

            {activeTab === 'campaigns' && (
                <NewsletterCampaigns
                    newsletters={newsletters}
                    onComposeNew={handleComposeNewsletter}
                    onView={handleViewNewsletter}
                />
            )}

            {activeTab === 'stats' && (
                <NewsletterStats
                    subscribers={subscribers}
                    newsletters={newsletters}
                />
            )}

            {activeTab === 'compose' && (
                <NewsletterForm
                    newsletter={selectedNewsletter}
                    onSend={handleSendNewsletter}
                    onCancel={() => setActiveTab('campaigns')}
                />
            )}
        </PageTemplate>
    )
}
