'use client'

import { useState } from 'react'

interface Comment {
    id: number
    author: string
    content: string
}

export default function CommentSection() {
    const [comments, setComments] = useState<Comment[]>([])
    const [newComment, setNewComment] = useState({ author: '', content: '' })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (newComment.author && newComment.content) {
            setComments([...comments, { ...newComment, id: Date.now() }])
            setNewComment({ author: '', content: '' })
        }
    }

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-4">
                    <label htmlFor="author" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="author"
                        value={newComment.author}
                        onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">Comment</label>
                    <textarea
                        id="content"
                        value={newComment.content}
                        onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        rows={3}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add Comment
                </button>
            </form>
            <div className="space-y-4">
                {comments.map((comment) => (
                    <div key={comment.id} className="bg-gray-100 p-4 rounded-lg">
                        <h3 className="font-bold">{comment.author}</h3>
                        <p>{comment.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

