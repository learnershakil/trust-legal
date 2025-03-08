import { ArrowLeft, Calendar, Edit, Tag, User } from "lucide-react"

interface Blog {
    id: number
    title: string
    content: string
    author: string
    date: string
    tags: string[]
}

interface BlogViewProps {
    blog: Blog | null
    onEdit: () => void
    onBack: () => void
}

export default function BlogView({ blog, onEdit, onBack }: BlogViewProps) {
    if (!blog) return null

    return (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <button
                    onClick={onBack}
                    className="flex items-center gap-1 text-gray-600 hover:text-[#192841]"
                >
                    <ArrowLeft size={18} />
                    <span>Back to Blog List</span>
                </button>

                <button
                    onClick={onEdit}
                    className="flex items-center gap-2 px-4 py-2 text-[#9e814d] hover:bg-gray-50 border border-[#9e814d] rounded-md"
                >
                    <Edit size={18} />
                    <span>Edit Post</span>
                </button>
            </div>

            <h1 className="text-3xl font-bold text-[#192841] mb-4">{blog.title}</h1>

            <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
                <div className="flex items-center gap-1">
                    <User size={16} />
                    <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                </div>
            </div>

            <div className="prose max-w-none mb-8">
                <p className="text-gray-700 whitespace-pre-line">{blog.content}</p>
            </div>

            {blog.tags.length > 0 && (
                <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center gap-1 text-gray-600 mb-2">
                        <Tag size={16} />
                        <span className="font-medium">Tags:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {blog.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
