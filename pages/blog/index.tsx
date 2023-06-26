import '@app/globals.css'
import { useState } from 'react'

export default function Blog() {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", content: "This is the first post" },
    { id: 2, title: "Second Post", content: "This is the second post" },
    // 假设这些数据来自于你的API
  ])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-wrap items-center justify-around max-w-4xl sm:w-full">
        {posts.map((post) => (
          <a
            key={post.id}
            href="#"
            className="m-6 w-72 p-6 border border-blue-300 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">{post.title}</h3>
            <p className="mt-4 text-xl">{post.content}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
