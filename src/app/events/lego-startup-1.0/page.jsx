import EventPageTemplate from "@/components/EventPageTemplate";
import { getEventPage } from "@/config/events";

export default function LegoStartup10Page() {
  return <EventPageTemplate event={getEventPage("lego-startup-1.0")} />;
}
