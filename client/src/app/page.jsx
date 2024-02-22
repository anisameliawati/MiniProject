import HeroComponents from "@/components/Hero";
import NavbarComponents from "@/components/navbar";

export const metadata = {
  title: "Ticketed - Home",
  description: "ticket",
};

export default function Home() {
  return (
    <>
      <NavbarComponents />
      <HeroComponents />
    </>
  );
}
