import EventPageTemplate from "@/components/EventPageTemplate";
import { getEventPage } from "@/config/events";

export default function LegoStartup20Page() {
  return <EventPageTemplate event={getEventPage("lego-startup-2.0")} />;
}
