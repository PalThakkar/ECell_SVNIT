export function constructMetadata({
  title = "E-Cell SVNIT",
  description = "E-Cell SVNIT is an open-source website.",
  image = "/agency.PNG",
  icons = "/favicon.ico",
  noIndex = false,
  url = "https://www.ecellsvnit.vercel.app/",
  siteName = "E-Cell SVNIT",
  themeColor = "#FFF",
}) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@KING_IN_JUNGLE",
    },
    icons,
    metadataBase: new URL(url),
    themeColor,
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
