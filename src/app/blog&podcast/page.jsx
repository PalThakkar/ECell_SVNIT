import BlogPreview from "@/components/BlogPreview";

const blogPosts = [
 
  {
    title: "Understanding MVP: The Key to Startup Success",
    excerpt: "Learn about MVP (Minimum Viable Product) and how it can drive startup success.",
    slug: "understanding-mvp",
    image: "/mvp blog.jpg",
  },
];

export default function BlogPage() {
  return (
    <main className="text-black">
      <div className="container mx-auto px-4 py-1">
        
        
        <BlogPreview posts={blogPosts} />
      </div>
    </main>
  );
}
