// Internal dependencies
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import EventsCarousel from "./EventsCarousel";
import EventCard from "./EventCard";

// Content dependencies
import { EVENTS as events } from "@/content/constants";

export default function Events() {
  return (
    <Section offset={4}>
      <Heading align="center">Events</Heading>
      <EventsCarousel
        cards={events.map((details, index) => (
          <EventCard key={index} {...details} />
        ))}
      />
    </Section>
  );
}
