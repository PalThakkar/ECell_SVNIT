import EventPageTemplate from "@/components/EventPageTemplate";
import { getEventPage } from "@/config/events";

export default function BitcoinWorkshop2025Page() {
  return <EventPageTemplate event={getEventPage("bitcoin-workshop-2025")} />;
}
