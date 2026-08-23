import { put } from "@vercel/blob";

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get("filename");

  if (!filename) {
    return Response.json({ message: "Missing filename" }, { status: 400 });
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return Response.json(
      {
        message:
          "Image uploads aren't configured yet. Add a BLOB_READ_WRITE_TOKEN env var (Vercel Blob) or paste an image URL directly.",
      },
      { status: 501 },
    );
  }

  try {
    const blob = await put(filename, request.body, {
      access: "public",
      addRandomSuffix: true,
    });

    return Response.json({ url: blob.url });
  } catch (error) {
    console.error("Upload error:", error);
    return Response.json({ message: "Upload failed" }, { status: 500 });
  }
}
