"use client"

import { useState } from 'react';
import ChatBot from './index';

export default function ChatBotWrapper() {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const handleToggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <>
            {/* Chat Toggle Button */}
            <button
                className="fixed bottom-14 right-10 w-12 h-12 bg-indigo-600 text-white rounded-full shadow-lg flex items-center justify-center text-2xl hover:bg-indigo-700 focus:outline-none z-50"
                onClick={handleToggleChat}
                aria-label="Toggle chat"
            >
                💬
            </button>

            {/* ChatBot Component */}
            <ChatBot isOpen={isChatOpen} onClose={handleToggleChat} />
        </>
    )
}