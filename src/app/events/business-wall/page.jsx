import EventPageTemplate from "@/components/EventPageTemplate";
import { getEventPage } from "@/config/events";

export default function BusinessWallPage() {
  return <EventPageTemplate event={getEventPage("business-wall")} />;
}
