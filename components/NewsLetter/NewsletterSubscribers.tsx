import { Filter, Search, UserPlus, X } from "lucide-react"
import { useState } from "react"

export default function NewsletterSubscribers({ subscribers, onAdd, onRemove, onUpdateStatus }) {
    const [showAddForm, setShowAddForm] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [statusFilter, setStatusFilter] = useState("all")
    const [newSubscriber, setNewSubscriber] = useState({
        email: "",
        name: "",
        tags: ""
    })

    const filteredSubscribers = subscribers.filter(sub => {
        const matchesSearch =
            sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            sub.name.toLowerCase().includes(searchTerm.toLowerCase())

        const matchesStatus = statusFilter === "all" || sub.status === statusFilter

        return matchesSearch && matchesStatus
    })

    const handleAddSubmit = (e) => {
        e.preventDefault()

        // Basic validation
        if (!newSubscriber.email || !newSubscriber.name) return

        // Process tags
        const tags = newSubscriber.tags
            .split(",")
            .map(tag => tag.trim())
            .filter(tag => tag !== "")

        onAdd({
            ...newSubscriber,
            tags
        })

        // Reset form
        setNewSubscriber({
            email: "",
            name: "",
            tags: ""
        })
        setShowAddForm(false)
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center flex-wrap gap-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search subscribers..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9e814d]/50 focus:border-[#9e814d]"
                    />
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                </div>

                <div className="flex items-center gap-2">
                    <div className="relative">
                        <select
                            value={statusFilter}
                            onChange={e => setStatusFilter(e.target.value)}
                            className="pl-10 pr-4 py-2 appearance-none border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9e814d]/50 focus:border-[#9e814d]"
                        >
                            <option value="all">All Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                            <option value="pending">Pending</option>
                        </select>
                        <Filter className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    </div>

                    <button
                        onClick={() => setShowAddForm(true)}
                        className="flex items-center gap-2 px-4 py-2 bg-[#192841] text-white rounded-md hover:bg-[#13203a] transition-colors"
                    >
                        <UserPlus size={18} />
                        <span className="hidden sm:inline">Add Subscriber</span>
                    </button>
                </div>
            </div>

            {showAddForm && (
                <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium text-[#192841]">Add New Subscriber</h3>
                        <button
                            onClick={() => setShowAddForm(false)}
                            className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    <form onSubmit={handleAddSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={newSubscriber.email}
                                    onChange={e => setNewSubscriber({ ...newSubscriber, email: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9e814d]/50 focus:border-[#9e814d]"
                                />
                            </div>

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={newSubscriber.name}
                                    onChange={e => setNewSubscriber({ ...newSubscriber, name: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9e814d]/50 focus:border-[#9e814d]"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-1">
                                Tags (comma separated)
                            </label>
                            <input
                                type="text"
                                id="tags"
                                value={newSubscriber.tags}
                                onChange={e => setNewSubscriber({ ...newSubscriber, tags: e.target.value })}
                                placeholder="e.g. Client, Individual, Corporate"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9e814d]/50 focus:border-[#9e814d]"
                            />
                        </div>

                        <div className="flex justify-end gap-2">
                            <button
                                type="button"
                                onClick={() => setShowAddForm(false)}
                                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-[#192841] text-white rounded-md hover:bg-[#13203a] transition-colors"
                            >
                                Add Subscriber
                            </button>
                        </div>
                    </form>
                </div>
            )}

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name & Email
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Join Date
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Tags
                                </th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredSubscribers.map(subscriber => (
                                <tr key={subscriber.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">{subscriber.name}</div>
                                        <div className="text-sm text-gray-500">{subscriber.email}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${subscriber.status === 'active'
                                            ? 'bg-green-100 text-green-800'
                                            : subscriber.status === 'inactive'
                                                ? 'bg-red-100 text-red-800'
                                                : 'bg-yellow-100 text-yellow-800'
                                            }`}>
                                            {subscriber.status.charAt(0).toUpperCase() + subscriber.status.slice(1)}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {new Date(subscriber.joinDate).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex flex-wrap gap-1">
                                            {subscriber.tags.map(tag => (
                                                <span
                                                    key={tag}
                                                    className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div className="flex justify-end items-center gap-2">
                                            <select
                                                value={subscriber.status}
                                                onChange={e => onUpdateStatus(subscriber.id, e.target.value)}
                                                className="text-xs px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#9e814d]"
                                            >
                                                <option value="active">Active</option>
                                                <option value="inactive">Inactive</option>
                                                <option value="pending">Pending</option>
                                            </select>
                                            <button
                                                onClick={() => onRemove(subscriber.id)}
                                                className="text-red-600 hover:text-red-800"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                            {filteredSubscribers.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                                        No subscribers found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-t border-gray-200">
                    <div className="text-sm text-gray-700">
                        Showing <span className="font-medium">{filteredSubscribers.length}</span> of{" "}
                        <span className="font-medium">{subscribers.length}</span> subscribers
                    </div>
                </div>
            </div>
        </div>
    )
}
