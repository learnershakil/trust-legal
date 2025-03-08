import { ArrowLeft, Clock, FileText, Send, Users } from "lucide-react"
import { useEffect, useState } from "react"

export default function NewsletterForm({ newsletter, onSend, onCancel }) {
    const [formData, setFormData] = useState({
        title: "",
        subject: "",
        content: "",
        preheader: "",
        recipientGroups: []
    })

    // Set initial form data if editing an existing newsletter
    useEffect(() => {
        if (newsletter) {
            setFormData({
                title: newsletter.title || "",
                subject: newsletter.subject || "",
                content: newsletter.content || "",
                preheader: newsletter.preheader || "",
                recipientGroups: newsletter.recipientGroups || []
            })
        }
    }, [newsletter])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleCheckboxChange = (tag) => {
        const updatedGroups = formData.recipientGroups.includes(tag)
            ? formData.recipientGroups.filter(t => t !== tag)
            : [...formData.recipientGroups, tag]

        setFormData(prev => ({
            ...prev,
            recipientGroups: updatedGroups
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // Basic validation
        if (!formData.title || !formData.subject || !formData.content) {
            alert("Please fill in all required fields")
            return
        }

        onSend(formData)
    }

    // Available recipient groups/tags
    const availableTags = ["Client", "Corporate", "Individual", "Prospect", "Former Client"]

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <button
                        onClick={onCancel}
                        className="mr-3 p-2 rounded-full hover:bg-gray-100"
                    >
                        <ArrowLeft size={20} className="text-gray-500" />
                    </button>
                    <h2 className="text-xl font-semibold text-[#192841]">
                        {newsletter ? "Edit Newsletter" : "Compose New Newsletter"}
                    </h2>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="flex items-center gap-2 px-4 py-2 bg-[#192841] text-white rounded-md hover:bg-[#13203a] transition-colors"
                    >
                        <Send size={18} />
                        <span>{newsletter ? "Update" : "Send"}</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Form */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                                Newsletter Title <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Monthly Legal Updates - March 2025"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9e814d]/50 focus:border-[#9e814d]"
                                required
                            />
                            <p className="mt-1 text-xs text-gray-500">
                                This is for your reference and won't be shown to recipients
                            </p>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Subject <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Important Legal Updates for March 2025"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9e814d]/50 focus:border-[#9e814d]"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="preheader" className="block text-sm font-medium text-gray-700 mb-1">
                                Preheader Text
                            </label>
                            <input
                                type="text"
                                id="preheader"
                                name="preheader"
                                value={formData.preheader}
                                onChange={handleChange}
                                placeholder="Stay updated on the latest legal changes affecting your business"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9e814d]/50 focus:border-[#9e814d]"
                            />
                            <p className="mt-1 text-xs text-gray-500">
                                Preview text that appears in email clients (optional)
                            </p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="mb-4">
                            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Content <span className="text-red-500">*</span>
                            </label>
                            <div className="border border-gray-300 rounded-md overflow-hidden">
                                <div className="bg-gray-50 px-4 py-2 border-b flex items-center gap-2 text-sm">
                                    <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">
                                        Bold
                                    </button>
                                    <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">
                                        Italic
                                    </button>
                                    <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">
                                        Link
                                    </button>
                                    <button className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300">
                                        List
                                    </button>
                                </div>
                                <textarea
                                    id="content"
                                    name="content"
                                    value={formData.content}
                                    onChange={handleChange}
                                    rows={15}
                                    className="w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#9e814d]/50 focus:border-[#9e814d]"
                                    placeholder="Write your newsletter content here..."
                                    required
                                ></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-medium text-[#192841] mb-4 flex items-center gap-2">
                            <Clock size={18} />
                            Scheduling
                        </h3>

                        <div className="mb-4">
                            <div className="flex items-center mb-2">
                                <input
                                    type="radio"
                                    id="sendNow"
                                    name="schedule"
                                    className="h-4 w-4 text-[#9e814d] focus:ring-[#9e814d]"
                                    defaultChecked
                                />
                                <label htmlFor="sendNow" className="ml-2 block text-sm text-gray-700">
                                    Send immediately
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="schedule"
                                    name="schedule"
                                    className="h-4 w-4 text-[#9e814d] focus:ring-[#9e814d]"
                                />
                                <label htmlFor="schedule" className="ml-2 block text-sm text-gray-700">
                                    Schedule for later
                                </label>
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <div className="opacity-50">
                                <label htmlFor="scheduleDate" className="block text-sm font-medium text-gray-700 mb-1">
                                    Date & Time
                                </label>
                                <input
                                    type="datetime-local"
                                    id="scheduleDate"
                                    disabled
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                />
                                <p className="mt-1 text-xs text-gray-500">
                                    Premium feature - Upgrade to enable
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-medium text-[#192841] mb-4 flex items-center gap-2">
                            <Users size={18} />
                            Recipients
                        </h3>

                        <div className="mb-4">
                            <span className="block text-sm font-medium text-gray-700 mb-2">
                                Select recipient groups:
                            </span>

                            <div className="space-y-2">
                                {availableTags.map(tag => (
                                    <div key={tag} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id={`tag-${tag}`}
                                            checked={formData.recipientGroups.includes(tag)}
                                            onChange={() => handleCheckboxChange(tag)}
                                            className="h-4 w-4 text-[#9e814d] focus:ring-[#9e814d]"
                                        />
                                        <label htmlFor={`tag-${tag}`} className="ml-2 block text-sm text-gray-700">
                                            {tag}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-md bg-gray-50 p-4">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <FileText className="h-5 w-5 text-blue-400" />
                                </div>
                                <div className="ml-3">
                                    <h3 className="text-sm font-medium text-blue-800">
                                        Recipient Summary
                                    </h3>
                                    <div className="mt-2 text-sm text-blue-700">
                                        <p>
                                            {formData.recipientGroups.length > 0
                                                ? `This newsletter will be sent to all subscribers with tags: ${formData.recipientGroups.join(", ")}`
                                                : "Please select at least one recipient group"
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-medium text-[#192841] mb-4">
                            Newsletter Preview
                        </h3>

                        <div className="p-4 border border-gray-200 rounded-md bg-gray-50">
                            <p className="font-medium text-gray-800 mb-1">
                                {formData.subject || "Email Subject"}
                            </p>
                            <p className="text-sm text-gray-500 mb-4">
                                {formData.preheader || "Preheader text will appear here"}
                            </p>
                            <div className="text-sm text-gray-700 max-h-36 overflow-y-auto">
                                {formData.content || "Your content will appear here..."}
                            </div>
                        </div>

                        <div className="mt-4 text-center">
                            <button
                                className="text-sm text-[#9e814d] hover:text-[#7a633b]"
                            >
                                Open full preview
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
