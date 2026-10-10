import prisma from "@/lib/prisma";
import BlogLanding from "@/components/BlogLanding";

/*
const blogPosts = [
  {
    title: "Understanding MVP: The Key to Startup Success",
    excerpt:
      "Learn about MVP (Minimum Viable Product) and how it can drive startup success.",
    slug: "understanding-mvp",
    image: "/mvp blog.jpg",
  },
];
*/

export const metadata = {
  title: "Podcast & Blogs | E-Cell SVNIT",
  description:
    "Ideas, frameworks, and founder stories from the E-Cell SVNIT community.",
};

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const allPosts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { publishedAt: "desc" },
  });

  const formattedPosts = allPosts.map((post) => ({
    title: post.title,
    excerpt: post.excerpt,
    slug: post.slug,
    image: post.coverImage,
  }));

  return <BlogLanding posts={formattedPosts} />;
}
