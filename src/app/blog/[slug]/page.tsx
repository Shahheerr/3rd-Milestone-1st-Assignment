'use client'

import { useParams } from 'next/navigation'
import CommentSection from '@/app/components/CommentSection'

// Simulating a database of blog posts

export default function BlogPost() {
    const params = useParams()
    const slug = params.slug as string
    const post = {
        "getting-started-with-nextjs": {
            title: "Getting Started with Next.js",
            content: "Next.js is a powerful React framework that makes it easy to build server-side rendered and statically generated web applications...",
        },
        "why-react-hooks-are-awesome": {
            title: "Why React Hooks are Awesome",
            content: "React Hooks have revolutionized the way we write React components. They allow us to use state and other React features without writing a class...",
        },
        "the-power-of-tailwind-css": {
            title: "The Power of Tailwind CSS",
            content: "Tailwind CSS is a utility-first CSS framework that allows you to rapidly build custom user interfaces. It provides low-level utility classes that let you build completely custom designs...",
        },
    }[slug]

    if (!post) {
        return <div className="container mx-auto px-4 py-8">Post not found</div>
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="prose max-w-none mb-8">
                <p>{post.content}</p>
            </div>
            <CommentSection />
        </div>
    )
}

