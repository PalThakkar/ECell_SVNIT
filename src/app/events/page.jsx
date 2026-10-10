import prisma from "@/lib/prisma";
import EventsLanding from "@/components/EventsLanding";

export const metadata = {
  title: "Events | E-Cell SVNIT",
};

export const dynamic = "force-dynamic";

export default async function EventsPage() {
  const allEvents = await prisma.event.findMany({
    orderBy: { year: 'desc' }
  });

  const formattedEvents = allEvents.map((event) => {
    let mappedStatus = event.status.toLowerCase();
    if (mappedStatus === 'closed' || mappedStatus === 'completed') mappedStatus = 'past';
    else if (mappedStatus === 'open') mappedStatus = 'live';
    else if (mappedStatus === 'draft') mappedStatus = 'upcoming'; // or fallback

    let images = [];
    if (event.galleryPhotos && Array.isArray(event.galleryPhotos)) {
      images = event.galleryPhotos.map((p) => p.src);
    } else if (event.featuredImage) {
      images = [event.featuredImage];
    } else {
      images = ["/placeholder.jpg"];
    }

    return {
      id: event.id,
      title: event.title,
      tagline: event.subtitle || event.heroLine2 || "",
      description: event.description || "",
      year: event.year,
      status: mappedStatus,
      images: images,
      date: event.startDate ? event.startDate.toDateString() : "To be announced",
      time: "Stay tuned for updates",
      location: event.venue || "SVNIT Campus",
      slug: event.slug,
    };
  });

  return <EventsLanding eventsData={formattedEvents} />;
}
