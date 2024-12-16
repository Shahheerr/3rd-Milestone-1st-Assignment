import Link from 'next/link'

// Simulating a database of blog posts
const blogPosts = [
  { id: 1, title: "Getting Started with Next.js", slug: "getting-started-with-nextjs" },
  { id: 2, title: "Why React Hooks are Awesome", slug: "why-react-hooks-are-awesome" },
  { id: 3, title: "The Power of Tailwind CSS", slug: "the-power-of-tailwind-css" },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">My Tech Blog</h1>
      <ul className="space-y-4">
        {blogPosts.map((post) => (
          <li key={post.id} className="bg-white shadow-md rounded-lg p-6">
            <Link href={`/blog/${post.slug}`} className="text-2xl text-blue-600 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

