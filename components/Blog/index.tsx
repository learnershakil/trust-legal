"use client"

import PageTemplate from '@/components/Home/page-template'
import { useEffect, useState } from "react"
import BlogEditor from './BlogEditor'
import BlogList from './BlogList'
import BlogView from './BlogView'

interface Blog {
    id: number
    title: string
    content: string
    author: string
    date: string
    tags: string[]
}

// API functions for CRUD operations
const fetchBlogs = async () => {
    try {
        const response = await fetch('/api/blog');
        if (!response.ok) throw new Error('Failed to fetch blogs');
        return await response.json();
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return [];
    }
};

const createBlog = async (blog: Omit<Blog, 'id'>) => {
    try {
        const response = await fetch('/api/blog', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: blog.title,
                excerpt: blog.content.substring(0, 150) + (blog.content.length > 150 ? '...' : ''),
                description: blog.content,
                date: blog.date,
                category: blog.tags[0] || 'Uncategorized',
                image: '/images/default-blog.jpg', // Default image path
                featured: false,
                author: blog.author
            })
        });
        if (!response.ok) throw new Error('Failed to create blog');
        return await response.json();
    } catch (error) {
        console.error('Error creating blog:', error);
        return null;
    }
};

const updateBlog = async (blog: Blog) => {
    try {
        const response = await fetch('/api/blog', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: blog.id,
                title: blog.title,
                excerpt: blog.content.substring(0, 150) + (blog.content.length > 150 ? '...' : ''),
                description: blog.content,
                date: blog.date,
                category: blog.tags[0] || 'Uncategorized',
                image: '/images/default-blog.jpg', // Default image path
                featured: false,
                author: blog.author
            })
        });
        if (!response.ok) throw new Error('Failed to update blog');
        return await response.json();
    } catch (error) {
        console.error('Error updating blog:', error);
        return null;
    }
};

const deleteBlog = async (id: number) => {
    try {
        const response = await fetch('/api/blog', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        });
        if (!response.ok) throw new Error('Failed to delete blog');
        return await response.json();
    } catch (error) {
        console.error('Error deleting blog:', error);
        return null;
    }
};

// Helper function to convert API data format to our Blog format
const convertApiToBlogFormat = (apiData: any[]): Blog[] => {
    return apiData.map(item => ({
        id: item.id,
        title: item.title,
        content: item.description,
        author: item.author || 'Unknown',
        date: item.date,
        tags: item.category ? [item.category] : []
    }));
};

export default function BlogPage() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [currentView, setCurrentView] = useState<'list' | 'create' | 'edit' | 'view'>('list');
    const [currentBlog, setCurrentBlog] = useState<Blog | null>(null);

    // Fetch blogs on component mount
    useEffect(() => {
        const loadBlogs = async () => {
            setLoading(true);
            try {
                const data = await fetchBlogs();
                setBlogs(convertApiToBlogFormat(data));
                setError(null);
            } catch (err) {
                setError('Failed to load blogs. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadBlogs();
    }, []);

    const handleCreateNew = () => {
        setCurrentBlog(null);
        setCurrentView('create');
    };

    const handleEdit = (blog: Blog) => {
        setCurrentBlog(blog);
        setCurrentView('edit');
    };

    const handleView = (blog: Blog) => {
        setCurrentBlog(blog);
        setCurrentView('view');
    };

    const handleDelete = async (id: number) => {
        if (confirm("Are you sure you want to delete this blog post?")) {
            try {
                await deleteBlog(id);
                setBlogs(blogs.filter(blog => blog.id !== id));
                setCurrentView('list');
            } catch (err) {
                console.error('Error deleting blog:', err);
                alert('Failed to delete blog post. Please try again later.');
            }
        }
    };

    const handleSave = async (blogData: Omit<Blog, 'id' | 'date'>) => {
        try {
            if (currentView === 'create') {
                // Create new blog
                const newBlogData = {
                    ...blogData,
                    date: new Date().toISOString().split('T')[0]
                };

                const savedBlog = await createBlog(newBlogData);
                if (savedBlog) {
                    // Re-fetch all blogs to ensure we have the latest data
                    const updatedBlogs = await fetchBlogs();
                    setBlogs(convertApiToBlogFormat(updatedBlogs));
                }
            } else if (currentView === 'edit' && currentBlog) {
                // Update existing blog
                const updatedBlog = {
                    ...currentBlog,
                    ...blogData
                };

                await updateBlog(updatedBlog);
                // Re-fetch all blogs to ensure we have the latest data
                const updatedBlogs = await fetchBlogs();
                setBlogs(convertApiToBlogFormat(updatedBlogs));
            }
            setCurrentView('list');
        } catch (err) {
            console.error('Error saving blog:', err);
            alert('Failed to save blog post. Please try again later.');
        }
    };

    const handleCancel = () => {
        setCurrentView('list');
    };

    if (loading && blogs.length === 0) {
        return (
            <PageTemplate title="Blog Management">
                <div className="flex justify-center items-center h-64">
                    <p className="text-gray-500">Loading blogs...</p>
                </div>
            </PageTemplate>
        );
    }

    if (error && blogs.length === 0) {
        return (
            <PageTemplate title="Blog Management">
                <div className="flex flex-col justify-center items-center h-64">
                    <p className="text-red-500 mb-4">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-4 py-2 bg-[#192841] text-white rounded-md"
                    >
                        Retry
                    </button>
                </div>
            </PageTemplate>
        );
    }

    return (
        <PageTemplate title="Blog Management">
            {currentView === 'list' && (
                <BlogList
                    blogs={blogs}
                    onCreateNew={handleCreateNew}
                    onEdit={handleEdit}
                    onView={handleView}
                    onDelete={handleDelete}
                />
            )}

            {(currentView === 'create' || currentView === 'edit') && (
                <BlogEditor
                    // @ts-ignore
                    blog={currentView === 'edit' ? currentBlog || undefined : undefined}
                    onSave={handleSave}
                    onCancel={handleCancel}
                    isEditing={currentView === 'edit'}
                />
            )}

            {currentView === 'view' && currentBlog && (
                <BlogView
                    blog={currentBlog}
                    onEdit={() => handleEdit(currentBlog)}
                    onBack={handleCancel}
                />
            )}
        </PageTemplate>
    );
}
