import { BarChart, Circle, PenLine, PieChart } from "lucide-react"

export default function NewsletterStats({ subscribers, newsletters }) {
    // Calculate statistics
    const totalSubscribers = subscribers.length
    const activeSubscribers = subscribers.filter(sub => sub.status === "active").length
    const inactiveSubscribers = subscribers.filter(sub => sub.status === "inactive").length
    const pendingSubscribers = subscribers.filter(sub => sub.status === "pending").length

    const totalEmails = newsletters.reduce((sum, nl) => sum + nl.opens, 0)
    const totalClicks = newsletters.reduce((sum, nl) => sum + nl.clicks, 0)
    const clickRate = totalEmails > 0 ? Math.round((totalClicks / totalEmails) * 100) : 0

    // Get tag distribution
    const tagCounts = {}
    subscribers.forEach(sub => {
        sub.tags.forEach(tag => {
            tagCounts[tag] = (tagCounts[tag] || 0) + 1
        })
    })

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold text-[#192841]">Newsletter Analytics</h2>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Total Subscribers</p>
                            <p className="text-2xl font-bold text-[#192841]">{totalSubscribers}</p>
                        </div>
                        <div className="p-2 bg-[#192841]/10 rounded">
                            <BarChart size={24} className="text-[#192841]" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                        <span className="text-green-500 flex items-center">
                            <Circle size={8} fill="currentColor" className="mr-1" />
                            {Math.round((activeSubscribers / totalSubscribers) * 100) || 0}% Active
                        </span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Campaigns Sent</p>
                            <p className="text-2xl font-bold text-[#192841]">{newsletters.length}</p>
                        </div>
                        <div className="p-2 bg-[#9e814d]/10 rounded">
                            <BarChart size={24} className="text-[#9e814d]" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                        <span className="text-blue-500 flex items-center">
                            <Circle size={8} fill="currentColor" className="mr-1" />
                            Last: {newsletters.length > 0 ? new Date(newsletters[newsletters.length - 1].sentDate).toLocaleDateString() : 'Never'}
                        </span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Email Opens</p>
                            <p className="text-2xl font-bold text-[#192841]">{totalEmails}</p>
                        </div>
                        <div className="p-2 bg-green-100 rounded">
                            <PieChart size={24} className="text-green-600" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                        <span className="text-gray-500 flex items-center">
                            <Circle size={8} fill="currentColor" className="mr-1" />
                            {Math.round(totalEmails / totalSubscribers) || 0} per subscriber
                        </span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Click Rate</p>
                            <p className="text-2xl font-bold text-[#192841]">{clickRate}%</p>
                        </div>
                        <div className="p-2 bg-purple-100 rounded">
                            <PenLine size={24} className="text-purple-600" />
                        </div>
                    </div>
                    <div className="mt-4 flex items-center text-sm">
                        <span className="text-purple-500 flex items-center">
                            <Circle size={8} fill="currentColor" className="mr-1" />
                            {totalClicks} total clicks
                        </span>
                    </div>
                </div>
            </div>

            {/* Subscriber Status */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-medium text-[#192841] mb-4">Subscriber Status</h3>

                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700">Active</span>
                                <span className="text-sm font-medium text-gray-700">{activeSubscribers}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-green-500 h-2 rounded-full"
                                    style={{ width: `${(activeSubscribers / totalSubscribers) * 100}%` }}
                                ></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700">Inactive</span>
                                <span className="text-sm font-medium text-gray-700">{inactiveSubscribers}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-red-500 h-2 rounded-full"
                                    style={{ width: `${(inactiveSubscribers / totalSubscribers) * 100}%` }}
                                ></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium text-gray-700">Pending</span>
                                <span className="text-sm font-medium text-gray-700">{pendingSubscribers}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className="bg-yellow-500 h-2 rounded-full"
                                    style={{ width: `${(pendingSubscribers / totalSubscribers) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tag Distribution */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-medium text-[#192841] mb-4">Tag Distribution</h3>

                    {Object.keys(tagCounts).length > 0 ? (
                        <div className="space-y-4">
                            {Object.entries(tagCounts)
                                .sort((a, b) => b[1] - a[1])
                                .map(([tag, count]) => (
                                    <div key={tag}>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-sm font-medium text-gray-700">{tag}</span>
                                            <span className="text-sm font-medium text-gray-700">{count}</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-[#9e814d] h-2 rounded-full"
                                                style={{ width: `${(count / totalSubscribers) * 100}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    ) : (
                        <p className="text-center text-gray-500 py-4">No tags found</p>
                    )}
                </div>
            </div>

            {/* Newsletter Performance */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium text-[#192841] mb-4">Newsletter Performance</h3>

                {newsletters.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Title
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Sent Date
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Opens
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Clicks
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Click Rate
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {newsletters.map(newsletter => {
                                    const nlClickRate = newsletter.opens > 0
                                        ? Math.round((newsletter.clicks / newsletter.opens) * 100)
                                        : 0

                                    return (
                                        <tr key={newsletter.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {newsletter.title}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {new Date(newsletter.sentDate).toLocaleDateString()}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {newsletter.opens}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {newsletter.clicks}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <span className="text-sm text-gray-900 mr-2">{nlClickRate}%</span>
                                                    <div className="w-24 bg-gray-200 rounded-full h-2">
                                                        <div
                                                            className="bg-[#9e814d] h-2 rounded-full"
                                                            style={{ width: `${nlClickRate}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-center text-gray-500 py-4">No newsletters have been sent yet</p>
                )}
            </div>

            {/* Growth Trends */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium text-[#192841] mb-4">Subscriber Growth</h3>

                <div className="flex items-center justify-center p-4 h-64 bg-gray-50 rounded-lg">
                    <div className="text-center text-gray-500">
                        <BarChart size={48} className="mx-auto text-gray-400 mb-2" />
                        <p>Growth chart visualization would appear here</p>
                        <p className="text-sm mt-2">Showing data from the last 6 months</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
