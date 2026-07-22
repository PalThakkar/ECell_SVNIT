import EventPageTemplate from "@/components/EventPageTemplate";
import { getEventPage } from "@/config/events";

export default function Ignite2025Page() {
  return <EventPageTemplate event={getEventPage("ignite-2025")} />;
}
