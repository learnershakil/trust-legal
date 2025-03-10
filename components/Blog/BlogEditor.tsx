import { Save, X } from "lucide-react";
import { useState } from "react";

interface Blog {
    id?: number;
    title: string;
    slug: string;
    content: string;
    author: string;
    tags: string[];
}

interface BlogEditorProps {
    blog?: Blog;
    onSave: (blog: Omit<Blog, 'id' | 'date'>) => void;
    onCancel: () => void;
    isEditing: boolean;
}

export default function BlogEditor({ blog, onSave, onCancel, isEditing }: BlogEditorProps) {
    const [formData, setFormData] = useState<Blog>({
        id: blog?.id,
        title: blog?.title || "",
        slug: blog?.slug || "",
        content: blog?.content || "",
        author: blog?.author || "",
        tags: blog?.tags || []
    });

    const [errors, setErrors] = useState<Partial<Record<keyof Blog, string>>>({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: name === "tags" ? value.split(",").map(tag => tag.trim()) : value
        }));

        if (errors[name as keyof Blog]) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [name]: undefined
            }));
        }
    };

    // Generate slug from title
    const generateSlug = () => {
        const slug = formData.title
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '');

        setFormData(prev => ({
            ...prev,
            slug
        }));
    };

    const validate = (): boolean => {
        const newErrors: Partial<Record<keyof Blog, string>> = {};

        if (!formData.title.trim()) newErrors.title = "Title is required";
        if (!formData.slug.trim()) newErrors.slug = "Slug is required";
        if (!formData.content.trim()) newErrors.content = "Content is required";
        if (!formData.author.trim()) newErrors.author = "Author is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) return;

        setLoading(true);

        try {
            // Pass the blog data to the parent component's onSave handler
            await onSave({
                title: formData.title,
                slug: formData.slug,
                content: formData.content,
                author: formData.author,
                tags: formData.tags
            });
        } catch (error) {
            console.error(error);
            setErrors({ title: "Failed to save blog post" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#192841]">
                    {isEditing ? "Edit Blog Post" : "Create New Blog Post"}
                </h2>
                <button
                    onClick={onCancel}
                    className="p-2 rounded-full hover:bg-gray-100 text-gray-500"
                    aria-label="Cancel"
                >
                    <X size={20} />
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        onBlur={() => !formData.slug && generateSlug()}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none ${errors.title ? "border-red-500" : "border-gray-300"}`}
                        placeholder="Enter blog title"
                    />
                    {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Slug
                        <span className="text-xs text-gray-500 ml-2">(URL-friendly identifier)</span>
                    </label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            name="slug"
                            value={formData.slug}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${errors.slug ? "border-red-500" : "border-gray-300"}`}
                            placeholder="my-blog-post-url"
                        />
                        <button
                            type="button"
                            onClick={generateSlug}
                            className="px-3 py-2 bg-gray-100 text-gray-700 rounded-md text-sm whitespace-nowrap"
                        >
                            Generate from Title
                        </button>
                    </div>
                    {errors.slug && <p className="mt-1 text-sm text-red-500">{errors.slug}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none ${errors.author ? "border-red-500" : "border-gray-300"}`}
                        placeholder="Enter author name"
                    />
                    {errors.author && <p className="mt-1 text-sm text-red-500">{errors.author}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        rows={10}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none ${errors.content ? "border-red-500" : "border-gray-300"}`}
                        placeholder="Write your blog content here..."
                    />
                    {errors.content && <p className="mt-1 text-sm text-red-500">{errors.content}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
                    <input
                        type="text"
                        name="tags"
                        value={formData.tags.join(", ")}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        placeholder="e.g. Legal, Business, Tech"
                    />
                </div>

                <div className="flex justify-end gap-4 pt-4">
                    <button type="button" onClick={onCancel} className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md">
                        Cancel
                    </button>
                    <button type="submit" className="bg-[#192841] text-white px-4 py-2 rounded-md flex items-center gap-2" disabled={loading}>
                        {loading ? "Saving..." : (
                            <>
                                <Save size={18} /> Save Post
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
