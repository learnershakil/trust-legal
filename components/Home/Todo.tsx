import { AnimatePresence, motion } from "framer-motion"
import { CheckSquare, MoreHorizontal, Plus } from "lucide-react"
import { useRef, useState, useEffect } from "react"

const Todo = () => {
    const [todos, setTodos] = useState<Array<{id: string, text: string, completed: boolean}>>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    // Fetch todos from API
    const fetchTodos = async () => {
        setLoading(true)
        try {
            const response = await fetch('/api/todo')
            if (!response.ok) {
                throw new Error('Failed to fetch todos')
            }
            const data = await response.json()
            setTodos(data)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred')
        } finally {
            setLoading(false)
        }
    }

    // Load todos on component mount
    useEffect(() => {
        fetchTodos()
    }, [])

    const toggleTodo = async (id: string) => {
        try {
            const todoToToggle = todos.find(todo => todo.id === id)
            if (!todoToToggle) return

            const response = await fetch(`/api/todo/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    id,
                    done: !todoToToggle.completed 
                }),
            })

            if (!response.ok) {
                throw new Error('Failed to update todo')
            }
            
            // Refresh todos after update
            fetchTodos()
        } catch (err) {
            console.error('Error updating todo:', err)
        }
    }

    const addTodo = async (text: string) => {
        if (!text.trim()) return
        
        try {
            const response = await fetch('/api/todo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text }),
            })

            if (!response.ok) {
                throw new Error('Failed to add todo')
            }
            
            // Refresh todos after adding
            fetchTodos()
            inputRef.current?.focus()
        } catch (err) {
            console.error('Error adding todo:', err)
        }
    }

    return (
        <div className="p-4 border-b border-gray-200 h-full relative">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 mt-2 lg:mt-0">
                <h3 className="text-lg font-semibold text-[#192841]">Tasks</h3>
                <button
                    className="p-1 rounded-full hover:bg-gray-800 text-[#9e814d]"
                    aria-label="Add task"
                    onClick={() => inputRef.current?.focus()}
                >
                    <Plus size={18} />
                </button>
            </div>

            {/* Task List */}
            <div className="space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto pb-16">
                {loading && todos.length === 0 ? (
                    <p className="text-center text-gray-500">Loading tasks...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    <AnimatePresence>
                        {todos.map((todo) => (
                            <motion.div
                                key={todo.id}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex items-start group p-2 rounded-md hover:bg-gray-100 transition"
                            >
                                <button
                                    onClick={() => toggleTodo(todo.id)}
                                    className={`flex-shrink-0 h-5 w-5 rounded border-2
                                        ${todo.completed
                                            ? "bg-[#9e814d] border-[#9e814d] text-white"
                                            : "border-black hover:border-[#9e814d] bg-gray-300"}
                                        mr-2 mt-0.5 flex items-center justify-center transition-all`}
                                    aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
                                >
                                    {todo.completed && <CheckSquare size={14} />}
                                </button>
                                <span
                                    className={`text-sm transition-all ${todo.completed ? "line-through text-gray-500" : "text-gray-700"}`}
                                >
                                    {todo.text}
                                </span>
                                <button
                                    className="ml-auto opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-gray-600 transition"
                                    aria-label="Task options"
                                >
                                    <MoreHorizontal size={14} />
                                </button>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                )}
            </div>

            {/* Add Task Form */}
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    const input = e.currentTarget.elements.namedItem("newTodo") as HTMLInputElement
                    addTodo(input.value)
                    input.value = ""
                }}
                className="absolute bottom-4 left-4 right-4 flex"
            >
                <input
                    ref={inputRef}
                    name="newTodo"
                    type="text"
                    placeholder="Add a task..."
                    className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#9e814d] focus:border-[#9e814d] transition-all"
                />
                <button
                    type="submit"
                    className="px-3 py-2 bg-[#192841] text-white rounded-r-md hover:bg-[#13203a] transition-colors"
                >
                    Add
                </button>
            </form>
        </div>
    )
}

export default Todo
