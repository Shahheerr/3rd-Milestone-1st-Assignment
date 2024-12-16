import Image from 'next/image'
import image from '../assets/WhatsApp Image 2024-07-13 at 15.39.55_175dd8d0.jpg'

export default function About() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">About My Tech Blog</h1>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <Image
                        src={image}
                        alt="Blog Author"
                        width={400}
                        height={400}
                        className="rounded-lg shadow-lg"
                    />
                </div>
                <div className="space-y-4">
                    <p className="text-lg">
                        Welcome to My Tech Blog! I'm passionate about sharing knowledge and insights on the latest web development technologies and best practices.
                    </p>
                    <p className="text-lg">
                        With over 5 years of experience in the field, I've worked with various frameworks and tools, including React, Next.js, and Tailwind CSS. This blog is my way of giving back to the community and helping fellow developers stay up-to-date with the rapidly evolving world of web development.
                    </p>
                    <p className="text-lg">
                        Here, you'll find in-depth articles, tutorials, and tips on topics ranging from frontend frameworks to backend technologies, performance optimization, and everything in between.
                    </p>
                    <h2 className="text-2xl font-semibold mt-6">What You'll Find Here</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Detailed tutorials on React, Next.js, and other modern web technologies</li>
                        <li>Best practices for writing clean, efficient, and maintainable code</li>
                        <li>Insights on the latest trends and tools in web development</li>
                        <li>Tips for improving website performance and user experience</li>
                        <li>Discussions on software architecture and design patterns</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

