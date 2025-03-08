import { BarChart, CalendarClock, Edit, Mail, Send } from "lucide-react"

export default function NewsletterCampaigns({ newsletters, onComposeNew, onView }) {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-[#192841]">Newsletter Campaigns</h2>
                <button
                    onClick={onComposeNew}
                    className="flex items-center gap-2 px-4 py-2 bg-[#192841] text-white rounded-md hover:bg-[#13203a] transition-colors"
                >
                    <Send size={18} />
                    <span className="hidden sm:inline">Compose New</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsletters.map(newsletter => (
                    <div
                        key={newsletter.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col"
                    >
                        <div className="p-6 flex-grow">
                            <h3 className="text-lg font-semibold text-[#192841] mb-2">{newsletter.title}</h3>
                            <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
                                <CalendarClock size={16} />
                                <span>Sent: {new Date(newsletter.sentDate).toLocaleDateString()}</span>
                            </div>

                            <div className="grid grid-cols-3 gap-4 text-center mb-2">
                                <div className="bg-gray-50 p-2 rounded">
                                    <div className="text-sm text-gray-500">Opens</div>
                                    <div className="font-semibold text-[#192841]">{newsletter.opens}</div>
                                </div>
                                <div className="bg-gray-50 p-2 rounded">
                                    <div className="text-sm text-gray-500">Clicks</div>
                                    <div className="font-semibold text-[#192841]">{newsletter.clicks}</div>
                                </div>
                                <div className="bg-gray-50 p-2 rounded">
                                    <div className="text-sm text-gray-500">Unsubs</div>
                                    <div className="font-semibold text-red-500">{newsletter.unsubscribes}</div>
                                </div>
                            </div>

                            <div className="h-2 bg-gray-100 rounded-full mt-4">
                                <div
                                    className="h-2 bg-[#9e814d] rounded-full"
                                    style={{ width: `${Math.min(newsletter.opens / 2, 100)}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className="flex border-t border-gray-200 divide-x divide-gray-200">
                            <button
                                onClick={() => onView(newsletter)}
                                className="flex-1 py-2 flex items-center justify-center gap-1 text-[#192841] hover:bg-gray-50"
                            >
                                <Edit size={16} />
                                <span className="text-sm">Edit</span>
                            </button>
                            <button
                                className="flex-1 py-2 flex items-center justify-center gap-1 text-gray-600 hover:bg-gray-50"
                            >
                                <BarChart size={16} />
                                <span className="text-sm">Stats</span>
                            </button>
                        </div>
                    </div>
                ))}

                {newsletters.length === 0 && (
                    <div className="col-span-full bg-white rounded-lg shadow p-8 text-center">
                        <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                            <Mail size={24} className="text-gray-400" />
                        </div>
                        <p className="text-gray-500 mb-4">No newsletters have been sent yet</p>
                        <button
                            onClick={onComposeNew}
                            className="px-4 py-2 bg-[#192841] text-white rounded-md hover:bg-[#13203a] transition-colors"
                        >
                            Compose Your First Newsletter
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
