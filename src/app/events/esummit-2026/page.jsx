import EventPageTemplate from "@/components/EventPageTemplate";
import { getEventPage } from "@/config/events";

export default function ESummitPage() {
  return <EventPageTemplate event={getEventPage("esummit-2026")} />;
}
