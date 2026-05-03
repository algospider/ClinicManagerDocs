import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import Features from "@/components/Features";
import UserFlow from "@/components/UserFlow";
import Screenshots from "@/components/Screenshots";
import Documentation from "@/components/Documentation";
import Architecture from "@/components/Architecture";
import TechStack from "@/components/TechStack";
import FutureScope from "@/components/FutureScope";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <Features />
      <UserFlow />
      <Screenshots />
      <Documentation />
      <Architecture />
      <TechStack />
      <FutureScope />
      <CTASection />
      <Footer />
    </main>
  );
}
