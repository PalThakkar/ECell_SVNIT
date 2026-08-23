import BlogLanding from "@/components/BlogLanding";

const blogPosts = [
  {
    title: "Understanding MVP: The Key to Startup Success",
    excerpt:
      "Learn about MVP (Minimum Viable Product) and how it can drive startup success.",
    slug: "understanding-mvp",
    image: "/mvp blog.jpg",
  },
];

export const metadata = {
  title: "Podcast & Blogs | E-Cell SVNIT",
  description:
    "Ideas, frameworks, and founder stories from the E-Cell SVNIT community.",
};

export default function BlogPage() {
  return <BlogLanding posts={blogPosts} />;
}
