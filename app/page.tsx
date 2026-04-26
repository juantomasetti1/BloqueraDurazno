import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickInfo from "@/components/QuickInfo";
import Catalog from "@/components/Catalog";
import Payments from "@/components/Payments";
import Delivery from "@/components/Delivery";
import MapSection from "@/components/MapSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <QuickInfo />
      <Catalog />
      <Payments />
      <Delivery />
      <MapSection />
      <Contact />
      <Footer />
    </main>
  );
}
