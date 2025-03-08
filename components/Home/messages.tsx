"use client"

import { Archive, ChevronDown, ChevronLeft, ChevronRight, Filter, Mail, MoreHorizontal, Search, Star, Trash, X } from "lucide-react"
import { useState } from "react"

const Messages = () => {
    const [selectedMessages, setSelectedMessages] = useState<number[]>([])
    const [openMessage, setOpenMessage] = useState<number | null>(null)

    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: "Jane Smith",
            email: "jane.smith@lawfirm.com",
            company: "Smith & Associates",
            subject: "Case Update - Johnson vs. Westfield",
            preview: "I've reviewed the latest documents provided by opposing counsel and have some thoughts on our strategy moving forward...",
            message: "I've reviewed the latest documents provided by opposing counsel in the Johnson vs. Westfield case and have some thoughts on our strategy moving forward. The opposing party has submitted new evidence that actually strengthens our position regarding the contract breach. I recommend we proceed with filing our response by Thursday.",
            time: "10:30 AM",
            isRead: false,
            isStarred: true,
        },
        {
            id: 2,
            sender: "Michael Roberts",
            email: "m.roberts@expert-witness.org",
            company: "Expert Witness Services",
            subject: "Expert Witness Confirmation",
            preview: "Dr. Miller has confirmed availability for the deposition next Tuesday at 2pm. He will need the case files by Friday to prepare properly...",
            message: "Dr. Miller has confirmed his availability for the deposition next Tuesday at 2:00 PM. He will need the complete case files by Friday to prepare properly. He has also requested the complete medical history of the plaintiff and all radiology reports from January 2024 onward.",
            time: "Yesterday",
            isRead: true,
            isStarred: false,
        },
        {
            id: 3,
            sender: "Sarah Johnson",
            email: "s.johnson@lawfirm.com",
            company: "LAWFIRM Legal",
            subject: "Contract Review Request",
            preview: "Could you please review the attached contract for our new client? There are a few clauses I'm concerned about, particularly section 5.3 regarding...",
            message: "Could you please review the attached contract for our new client, Riverstone Properties? There are a few clauses I'm concerned about, particularly section 5.3 regarding limitation of liability. The language seems unusually broad and could potentially expose our client to significant risk.",
            time: "Mar 5",
            isRead: true,
            isStarred: false,
        },
        {
            id: 4,
            sender: "David Chen",
            email: "d.chen@lawfirm.com",
            company: "LAWFIRM Legal",
            subject: "Meeting Rescheduled",
            preview: "Due to a scheduling conflict, I need to reschedule our meeting about the Henderson case. Are you available this Thursday at 11am instead?",
            message: "Due to a scheduling conflict with the court, I need to reschedule our meeting about the Henderson case. Are you available this Thursday at 11:00 AM instead? I've made significant progress on the case preparation and would like to discuss our litigation strategy before filing the motion.",
            time: "Mar 3",
            isRead: true,
            isStarred: true,
        },
        {
            id: 5,
            sender: "Lisa Williams",
            email: "l.williams@lawfirm.com",
            company: "LAWFIRM Legal",
            subject: "New Client Intake",
            preview: "We have a new client intake form for the Thompson family. They're dealing with an estate planning issue that requires immediate attention...",
            message: "We have a new client intake form for the Thompson family. They're dealing with an estate planning issue that requires immediate attention. The family matriarch, Eleanor Thompson (age 82), has been diagnosed with a serious illness and needs to finalize her estate planning documents as soon as possible.",
            time: "Feb 28",
            isRead: true,
            isStarred: false,
        },
        {
            id: 6,
            sender: "Robert Taylor",
            email: "r.taylor@lawfirm.com",
            company: "LAWFIRM Legal",
            subject: "Court Filing Deadline",
            preview: "Just a reminder that we need to file the motion for the Peterson case by this Friday. I've attached the draft for your review...",
            message: "Just a reminder that we need to file the motion for summary judgment in the Peterson case by this Friday, March 12. I've attached the current draft for your review. The key arguments focus on lack of standing by the plaintiff, statute of limitations expiration, and failure to establish prima facie elements of negligence.",
            time: "Feb 25",
            isRead: true,
            isStarred: false,
        },
    ])

    const toggleSelectAll = () => {
        if (selectedMessages.length === messages.length) {
            setSelectedMessages([])
        } else {
            setSelectedMessages(messages.map(message => message.id))
        }
    }

    const toggleSelect = (id: number) => {
        if (selectedMessages.includes(id)) {
            setSelectedMessages(selectedMessages.filter(messageId => messageId !== id))
        } else {
            setSelectedMessages([...selectedMessages, id])
        }
    }

    const toggleStar = (id: number) => {
        setMessages(messages.map(message =>
            message.id === id ? { ...message, isStarred: !message.isStarred } : message
        ))
    }

    const markAsRead = (id: number) => {
        setMessages(messages.map(message =>
            message.id === id ? { ...message, isRead: true } : message
        ))
    }

    const deleteSelected = () => {
        setMessages(messages.filter(message => !selectedMessages.includes(message.id)))
        setSelectedMessages([])
    }

    const openMessageDetail = (id: number) => {
        markAsRead(id)
        setOpenMessage(id)
    }

    const closeMessageDetail = () => {
        setOpenMessage(null)
    }

    const currentMessage = messages.find(m => m.id === openMessage)

    return (
        <>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                {/* Toolbar */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <div className="flex items-center space-x-2">
                        <div className="relative">
                            <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-[#192841] focus:ring-[#9e814d]"
                                checked={selectedMessages.length === messages.length && messages.length > 0}
                                onChange={toggleSelectAll}
                            />
                            <button className="ml-2">
                                <ChevronDown size={16} className="text-gray-500" />
                            </button>
                        </div>

                        <div className="flex items-center space-x-2 ml-4">
                            <button
                                className={`p-1.5 rounded hover:bg-gray-100 ${selectedMessages.length > 0 ? 'text-gray-800' : 'text-gray-400'}`}
                                disabled={selectedMessages.length === 0}
                                onClick={deleteSelected}
                            >
                                <Trash size={18} />
                            </button>
                            <button className={`p-1.5 rounded hover:bg-gray-100 ${selectedMessages.length > 0 ? 'text-gray-800' : 'text-gray-400'}`} disabled={selectedMessages.length === 0}>
                                <Archive size={18} />
                            </button>
                            <button className={`p-1.5 rounded hover:bg-gray-100 ${selectedMessages.length > 0 ? 'text-gray-800' : 'text-gray-400'}`} disabled={selectedMessages.length === 0}>
                                <Mail size={18} />
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="relative mr-2">
                            <input
                                type="text"
                                placeholder="Search mail"
                                className="w-64 pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#9e814d]/50 focus:border-[#9e814d]"
                            />
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                        </div>
                        <button className="p-1.5 rounded hover:bg-gray-100 text-gray-500">
                            <Filter size={18} />
                        </button>
                    </div>
                </div>

                {/* Message list */}
                <div className="divide-y divide-gray-200">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer group ${!message.isRead ? 'bg-blue-50/50' : ''}`}
                            onClick={() => openMessageDetail(message.id)}
                        >
                            <div className="flex items-center mr-4" onClick={e => e.stopPropagation()}>
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-[#192841] focus:ring-[#9e814d]"
                                    checked={selectedMessages.includes(message.id)}
                                    onChange={(e) => {
                                        e.stopPropagation();
                                        toggleSelect(message.id);
                                    }}
                                />
                                <button
                                    className="ml-3"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleStar(message.id);
                                    }}
                                >
                                    <Star
                                        size={18}
                                        className={message.isStarred ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 group-hover:text-gray-400'}
                                    />
                                </button>
                            </div>

                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                    <p className={`text-sm font-medium ${!message.isRead ? 'text-gray-900' : 'text-gray-700'}`}>
                                        {message.sender}
                                    </p>
                                    <p className="text-xs text-gray-500">{message.time}</p>
                                </div>
                                <p className={`text-sm truncate ${!message.isRead ? 'font-medium text-gray-900' : 'font-normal text-gray-700'}`}>
                                    {message.subject}
                                </p>
                                <p className="text-xs text-gray-500 truncate">{message.preview}</p>
                            </div>

                            <div className="ml-4 opacity-0 group-hover:opacity-100" onClick={e => e.stopPropagation()}>
                                <button className="p-1 rounded hover:bg-gray-200">
                                    <MoreHorizontal size={16} className="text-gray-500" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination/Status */}
                <div className="px-4 py-3 border-t border-gray-200 text-xs text-gray-500 flex justify-between items-center">
                    <div>1-{messages.length} of {messages.length}</div>
                    <div className="flex items-center space-x-2">
                        <button className="p-1 rounded hover:bg-gray-100 disabled:opacity-50" disabled>
                            <ChevronLeft size={16} />
                        </button>
                        <button className="p-1 rounded hover:bg-gray-100 disabled:opacity-50" disabled>
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Simplified Email Modal */}
            {openMessage !== null && currentMessage && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-lg">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-[#192841]">Message Details</h2>
                            <button
                                onClick={closeMessageDetail}
                                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-500"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Simplified Content */}
                        <div className="p-6 space-y-4">
                            {/* Full Name */}
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Full Name</p>
                                <p className="font-medium text-gray-900">{currentMessage.sender}</p>
                            </div>

                            {/* Email */}
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Email</p>
                                <p className="text-gray-900">{currentMessage.email}</p>
                            </div>

                            {/* Company Name */}
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Company Name</p>
                                <p className="text-gray-900">{currentMessage.company}</p>
                            </div>

                            {/* Message */}
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Message</p>
                                <div className="bg-gray-50 p-4 rounded-md border border-gray-200 text-gray-800">
                                    {currentMessage.message}
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="p-4 border-t border-gray-200 flex justify-end">
                            <button
                                onClick={closeMessageDetail}
                                className="px-4 py-2 bg-[#192841] text-white rounded-md hover:bg-[#13203a] transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Messages
