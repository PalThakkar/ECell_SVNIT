import EventPageTemplate from "@/components/EventPageTemplate";
import { getEventPage } from "@/config/events";

export default function CorporateCatastrophePage() {
  return (
    <EventPageTemplate event={getEventPage("corporate-catastrophe-1.0")} />
  );
}
