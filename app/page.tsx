import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Screenshots from "@/components/Screenshots";
import Documentation from "@/components/Documentation";
import Architecture from "@/components/Architecture";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Screenshots />
      <Documentation />
      <Architecture />
      <TechStack />
      <Footer />
    </main>
  );
}
