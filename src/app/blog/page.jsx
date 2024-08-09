import Head from "next/head";
import PageIntro from "@/components/PageIntro";

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Blog | E-Cell SVNIT</title>
        <meta
          name="description"
          content="Explore the latest articles and news from E-Cell SVNIT. Stay updated with trends in entrepreneurship and innovation."
        />
        <link rel="canonical" href="https://ecellsvnit.com/blog" />
      </Head>
      <PageIntro eyebrow="Blog" title="The latest articles and news">
        <p>
          Stay up-to-date with the latest industry news as our marketing teams
          finds new ways to re-purpose old CSS tricks articles.
        </p>
      </PageIntro>
    </>
  );
};

export default BlogPage;
