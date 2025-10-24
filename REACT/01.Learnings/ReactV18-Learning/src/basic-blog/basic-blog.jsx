import { useState, useEffect } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSaving(true);
    const formData = new FormData(event.target);
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: formData,
    });
    setIsSaving(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Post Title" required />
        <button disabled={isSaving} type="submit">
          {isSaving ? "Saving..." : "Add Post"}
        </button>
      </form>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};
