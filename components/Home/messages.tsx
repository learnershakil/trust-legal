"use client"

import { Archive, ChevronDown, ChevronLeft, ChevronRight, Filter, Mail, MoreHorizontal, Search, Star, Trash, X } from "lucide-react"
import { useEffect, useState } from "react"

interface Message {
    id: string
    name: string
    email: string
    company: string
    message: string
    Fav: boolean
    date: string
    createdAt: string
    updatedAt: string
}

const Messages = () => {
    const [selectedMessages, setSelectedMessages] = useState<string[]>([])
    const [openMessage, setOpenMessage] = useState<string | null>(null)
    const [messages, setMessages] = useState<Message[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                setLoading(true)
                const data = await getMessages()
                setMessages(data)
            } catch (err) {
                setError("Failed to load messages. Please try again later.")
                console.error(err)
            } finally {
                setLoading(false)
            }
        }

        fetchMessages()
    }, [])

    const getMessages = async () => {
        const response = await fetch('/api/messages')
        if (!response.ok) throw new Error('Failed to fetch messages')
        return response.json()
    }

    const toggleSelectAll = () => {
        if (selectedMessages.length === messages.length) {
            setSelectedMessages([])
        } else {
            setSelectedMessages(messages.map(message => message.id))
        }
    }

    const toggleSelect = (id: string) => {
        if (selectedMessages.includes(id)) {
            setSelectedMessages(selectedMessages.filter(messageId => messageId !== id))
        } else {
            setSelectedMessages([...selectedMessages, id])
        }
    }

    const toggleStar = async (id: string) => {
        // Find the message and get its current Fav status
        const message = messages.find(m => m.id === id)
        if (!message) return

        try {
            // Update UI optimistically
            setMessages(messages.map(msg =>
                msg.id === id ? { ...msg, Fav: !msg.Fav } : msg
            ))

            // Here you would typically update the star status on the server
            // This is a placeholder for the API call that would update the Fav field
            // await fetch(`/api/messages/${id}/star`, {
            //   method: 'PUT',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify({ Fav: !message.Fav })
            // })
        } catch (err) {
            console.error("Failed to update favorite status", err)
            // Revert UI change if API call fails
            setMessages(messages)
        }
    }

    const deleteSelected = async () => {
        try {
            // Optimistically update UI
            const remainingMessages = messages.filter(message => !selectedMessages.includes(message.id))
            setMessages(remainingMessages)

            // Delete each selected message
            for (const id of selectedMessages) {
                await fetch('/api/messages', {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id })
                })
            }

            setSelectedMessages([])
        } catch (err) {
            console.error("Failed to delete messages", err)
            // Fetch messages again to reset state if there was an error
            const data = await getMessages()
            setMessages(data)
        }
    }

    const openMessageDetail = (id: string) => {
        setOpenMessage(id)
    }

    const closeMessageDetail = () => {
        setOpenMessage(null)
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString)
        return date.toLocaleDateString()
    }

    const getPreview = (text: string) => {
        return text.substring(0, 60) + (text.length > 60 ? '...' : '')
    }

    const currentMessage = messages.find(m => m.id === openMessage)

    if (loading) return (
        <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#192841]"></div>
        </div>
    )

    if (error) return (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            <p>{error}</p>
        </div>
    )

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
                    {messages.length === 0 ? (
                        <div className="p-4 text-center text-gray-500">No messages found</div>
                    ) : (
                        messages.map((message) => (
                            <div
                                key={message.id}
                                className="flex items-center px-4 py-3 hover:bg-gray-50 cursor-pointer group"
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
                                            className={message.Fav ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 group-hover:text-gray-400'}
                                        />
                                    </button>
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium text-gray-900">
                                            {message.name}
                                        </p>
                                        <p className="text-xs text-gray-500">{formatDate(message.date)}</p>
                                    </div>
                                    <p className="text-sm truncate font-medium text-gray-900">
                                        Message from {message.company}
                                    </p>
                                    <p className="text-xs text-gray-500 truncate">{getPreview(message.message)}</p>
                                </div>

                                <div className="ml-4 opacity-0 group-hover:opacity-100" onClick={e => e.stopPropagation()}>
                                    <button className="p-1 rounded hover:bg-gray-200">
                                        <MoreHorizontal size={16} className="text-gray-500" />
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
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

            {/* Message Detail Modal */}
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
                                <p className="font-medium text-gray-900">{currentMessage.name}</p>
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

                            {/* Date */}
                            <div>
                                <p className="text-sm text-gray-500 mb-1">Date</p>
                                <p className="text-gray-900">{new Date(currentMessage.date).toLocaleString()}</p>
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
