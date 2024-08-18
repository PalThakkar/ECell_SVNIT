import { useRouter } from 'next/router';



  const blogPosts = [
    {
      title: "How to Kickstart Your Startup Journey",
      content: "This is the full content of the Kickstart Your Startup Journey article.",
      slug: "kickstart-your-startup",
    },
    {
      title: "Networking for Entrepreneurs: A Comprehensive Guide",
      content: "This is the full content of the Networking for Entrepreneurs article.",
      slug: "networking-for-entrepreneurs",
    },
    {
      title: "Top 10 Resources for Budding Entrepreneurs",
      content: "This is the full content of the Top 10 Resources for Budding Entrepreneurs article.",
      slug: "top-resources-for-entrepreneurs",
    },
    {
      title: "Understanding MVP: The Key to Startup Success",
      content: `Welcome to our Startup Lingo Series! Today, we’re diving into the world of MVP, or Minimum Viable Product. If you’re embarking on a startup journey, this term is crucial for understanding how to launch your idea successfully.

      **What is an MVP?**
      A Minimum Viable Product (MVP) is the most basic version of a product that includes only the essential features needed to meet the core needs of early users. It is designed to quickly enter the market, gather feedback, and validate business assumptions with minimal investment, allowing for iterative improvements based on real-world usage.

      **Facebook’s MVP story**
      In 2004, Facebook launched as “TheFacebook” with a minimal set of features—profile creation, friend requests, and messaging—exclusively for Harvard students. This MVP allowed Zuckerberg and his team to quickly test the concept and gather feedback. The initial success led to expansion to other universities and the addition of new features, validating the idea and paving the way for Facebook’s evolution into a global social networking platform.

      **Conclusion**
      For a new startup, an MVP strategy facilitates rapid market entry with minimal resources. It enables validation of key concepts through real user feedback and iterative enhancement. This method reduces risk and lays the groundwork for scaling and refining the offering based on genuine market needs.`,
      slug: "understanding-mvp",
    },
  ];

  export default function BlogPost() {
    const router = useRouter();
    const { slug } = router.query;
  
    const post = blogPosts.find((post) => post.slug === slug);
  
    if (!post) {
      return <p>Post not found</p>;
    }
  
    return (
      <main className="text-black">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">{post.title}</h1>
          <div className="prose prose-lg">
            <p>{post.content}</p>
          </div>
        </div>
      </main>
    );
  }