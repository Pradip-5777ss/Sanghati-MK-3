import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import EventsGrid from "@/components/EventsGrid";
import Schedule from "@/components/Schedule";
import Gallery from "@/components/Gallery";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-black overflow-x-hidden text-white">

      <Navbar />
      <Hero />
      <About />
      <EventsGrid />
      <Schedule />
      <Gallery />
      <Registration />
      <Footer />
    </main>
  );
}
