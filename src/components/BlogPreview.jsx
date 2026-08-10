import Link from "next/link";
import Image from "next/image";

const BlogPreview = ({ posts }) => {
  return (
    <div className="mt-24 sm:mt-32 lg:mt-40">
      <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
        Latest Blog Posts
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="bg-white shadow-md rounded-lg p-6 flex transform transition-transform duration-300 hover:scale-105 hover:shadow-4xl shadow-[rgba(0,0,0,0.3)]"
          >
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-8">{post.excerpt}</p>
              <div className="mt-28"> {/* Added margin-top to shift "Read more" down */}
                <Link href={`/blog&podcast/${post.slug}`}>
                  <div className="inline-block bg-[#FBBD58] text-[#111111] px-4 py-2 rounded-full hover:bg-[#F5AB35] shadow-lg hover:shadow-xl border border-[#F5AB35] transition-colors duration-200">
                    Read more
                  </div> 
                </Link>
              </div>
            </div>
            {post.image && (
              <div className="ml-4 w-60 h-50 relative"> {/* Increased width and height */}
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-md"
                  sizes="240px"
                />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8">
  <Link href="/blog&podcast" className="text-black font-medium hover:underline flex items-center">
    View all blog posts
    <span className="ml-2 transform rotate-45">↑</span> {/* Upward arrow */}
  </Link>
</div>
    </div>
  );
};

export default BlogPreview;
