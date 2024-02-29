import HeroComponents from "@/components/Hero";
import NavbarComponents from "@/components/navbar";
import EventList from "@/components/eventList";
import Footer from "@/components/footer";
import Pagination from "@/components/pagination";

export const metadata = {
  title: "Ticketed - Home",
  description: "ticket",
};

export default function Home() {
  return (
    <>
      <NavbarComponents />
      <HeroComponents />
      <EventList />
      <Pagination />
      <Footer />
    </>
  );
}
