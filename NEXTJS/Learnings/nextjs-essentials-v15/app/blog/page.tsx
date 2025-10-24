import React from 'react'
import Link from 'next/link'

const BlogPage = () => {
  return (
   <main>
    <h1>The blog</h1>
    <p><Link href="/blog/post-1">Post 1</Link></p>
   </main>
  )
}

export default BlogPage