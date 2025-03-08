import { Edit, Eye, PlusCircle, Trash2 } from "lucide-react"

interface Blog {
    id: number
    title: string
    content: string
    author: string
    date: string
    tags: string[]
}

interface BlogListProps {
    blogs: Blog[]
    onCreateNew: () => void
    onEdit: (blog: Blog) => void
    onView: (blog: Blog) => void
    onDelete: (id: number) => void
}

export default function BlogList({ blogs, onCreateNew, onEdit, onView, onDelete }: BlogListProps) {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-[#192841]">Blog Posts</h2>
                <button
                    onClick={onCreateNew}
                    className="flex items-center gap-2 px-4 py-2 bg-[#192841] text-white rounded-md hover:bg-[#13203a] transition-colors"
                >
                    <PlusCircle size={18} />
                    <span className="hidden sm:inline">New Post</span>
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <div
                        key={blog.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col"
                    >
                        <div className="p-6 flex-grow">
                            <h3 className="text-lg font-semibold text-[#192841] mb-2 line-clamp-2">{blog.title}</h3>
                            <div className="text-sm text-gray-500 mb-3">
                                {blog.author} • {new Date(blog.date).toLocaleDateString()}
                            </div>
                            <p className="text-gray-700 line-clamp-3 mb-3">{blog.content}</p>
                            <div className="flex flex-wrap gap-2 mb-3">
                                {blog.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex border-t border-gray-200 divide-x divide-gray-200">
                            <button
                                onClick={() => onView(blog)}
                                className="flex-1 py-2 flex items-center justify-center gap-1 text-gray-600 hover:bg-gray-50"
                            >
                                <Eye size={16} />
                                <span className="text-sm">View</span>
                            </button>
                            <button
                                onClick={() => onEdit(blog)}
                                className="flex-1 py-2 flex items-center justify-center gap-1 text-[#9e814d] hover:bg-gray-50"
                            >
                                <Edit size={16} />
                                <span className="text-sm">Edit</span>
                            </button>
                            <button
                                onClick={() => onDelete(blog.id)}
                                className="flex-1 py-2 flex items-center justify-center gap-1 text-red-600 hover:bg-gray-50"
                            >
                                <Trash2 size={16} />
                                <span className="text-sm">Delete</span>
                            </button>
                        </div>
                    </div>
                ))}

                {blogs.length === 0 && (
                    <div className="col-span-full bg-white rounded-lg shadow p-8 text-center">
                        <p className="text-gray-500 mb-4">No blog posts found</p>
                        <button
                            onClick={onCreateNew}
                            className="px-4 py-2 bg-[#192841] text-white rounded-md hover:bg-[#13203a] transition-colors"
                        >
                            Create Your First Post
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}
