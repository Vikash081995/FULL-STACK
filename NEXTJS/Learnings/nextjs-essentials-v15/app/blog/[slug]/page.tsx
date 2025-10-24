export default function BlogPostPage({params}:{params: {slug: string}}) {
    return(
        <main>
            <h1>Blog post </h1>
            <p>Slug: {params.slug}</p>
        </main>
    )
}