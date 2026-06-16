import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsSection } from "@/components/StatsSection";
import { MenuShowcase } from "@/components/MenuShowcase";
import { CustomCakeSection } from "@/components/CustomCakeSection";
import { OutletsGrid } from "@/components/OutletsGrid";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shanu Bakes — Hot & Cool Bakery & Café | Tamil Nadu Since 2010" },
      {
        name: "description",
        content:
          "Premium bakery chain with 25+ branches across Tamil Nadu. Freshly baked cakes, live-counter savories, and Hot & Cool refreshments since 2010.",
      },
      { property: "og:title", content: "Shanu Bakes — Hot & Cool Bakery & Café" },
      {
        property: "og:description",
        content:
          "Premium bakery with 25+ branches across Tamil Nadu. Cakes, live savories, and refreshments — fresh daily since 2010.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <StatsSection />
        <MenuShowcase />
        <CustomCakeSection />
        <OutletsGrid />
      </main>
      <Footer />
    </>
  );
}
