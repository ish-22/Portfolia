"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import type { CarouselItem } from "@/components/ui/CircularCarousel";

const CircularCarousel = dynamic(
  () => import("@/components/ui/CircularCarousel"),
  { ssr: false }
);

const projectCarouselItems: CarouselItem[] = [
  {
    src: "/projects/smart_bus.png",
    alt: "Track My Bus — IoT Fleet Transit Interface",
    title: "Track My Bus",
    subtitle: "Real-Time Fleet Transit",
    slug: "track-my-bus"
  },
  {
    src: "/projects/pharmacy_inventory.png",
    alt: "MediSync Core — Clinical AI Portal",
    title: "MediSync Core",
    subtitle: "Clinical AI Copilot",
    slug: "medisync-core"
  },
  {
    src: "/projects/study_assistant.png",
    alt: "AI Study Assistant — RAG Ingestion Platform",
    title: "AI Study Assistant",
    subtitle: "Bedrock RAG Engine",
    slug: "ai-study-assistant"
  },
  {
    src: "/projects/fix_now.png",
    alt: "FixNow — On-Demand Service Platform",
    title: "FixNow Platform",
    subtitle: "Service Dispatch Hub",
    slug: "fix-now"
  },
  {
    src: "/projects/ocean_view.png",
    alt: "Ocean View Resort — Spring Boot Suite",
    title: "Ocean View Resort",
    subtitle: "Hospitality Management",
    slug: "ocean-view-resort"
  },
  {
    src: "/projects/pahana_bookshop.png",
    alt: "Pahana Bookshop — Retail Inventory POS",
    title: "Pahana Bookshop",
    subtitle: "Desktop Inventory POS",
    slug: "pahana-bookshop"
  },
  {
    src: "/projects/fitzone.png",
    alt: "FitZone Fitness — Member Management",
    title: "FitZone Portal",
    subtitle: "Subscription Platform",
    slug: "fitzone"
  },
  {
    src: "/projects/luxe_vista.png",
    alt: "Luxe Vista — Reservation Engine",
    title: "Luxe Vista Villa",
    subtitle: "Booking Experience",
    slug: "luxe-vista"
  }
];

export function VisualShowcase() {
  const router = useRouter();

  const handleItemClick = (item: CarouselItem) => {
    if (item.slug) {
      router.push(`/projects/${item.slug}`);
    }
  };

  return (
    <section
      className="relative section bg-[--bg] border-t border-[--border] overflow-hidden"
      aria-label="3D Project Carousel Showcase"
    >
      <div className="container-xl mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[--lime]" />
              <span className="label-muted">INTERACTIVE 3D SHOWCASE</span>
              <span className="font-mono text-xs text-[--muted]">/</span>
              <span className="label-lime">CIRCULAR CYLINDER</span>
            </div>
            <h2 className="display-lg text-[--text]">
              IMMERSIVE<br />
              <span className="text-[--lime] font-extrabold">PROJECT</span><br />
              PERSPECTIVE.
            </h2>
          </div>
          <div className="flex flex-col sm:items-end gap-2 font-mono text-xs text-[--muted]">
            <span className="inline-flex items-center gap-2 border border-[--border] bg-[--surface] px-3 py-1.5 rounded-full text-[--text] font-semibold">
              <span className="h-2 w-2 rounded-full bg-[--lime] animate-pulse" />
              <span>DRAG TO ROTATE · CLICK TO INSPECT</span>
            </span>
            <span className="text-[10px] text-[--muted]">
              8 Production Builds In 3D Space
            </span>
          </div>
        </div>
      </div>

      {/* 3D Cylindrical Carousel Frame */}
      <div className="w-full flex justify-center">
        <div style={{ width: "100%", height: "560px", position: "relative" }}>
          <CircularCarousel
            items={projectCarouselItems}
            preset="cylinder"
            intro="rise"
            cardWidth={220}
            aspectRatio={1}
            speed={14}
            captions={false}
            gap={25}
            tilt={-5}
            curve={1}
            perspective={2500}
            autoplay="drift"
            interval={3}
            direction="left"
            momentum={0.6}
            snap
            pauseOnHover
            focusOnClick
            draggable
            parallax={0.3}
            stretch={0.5}
            fadeColor="var(--bg)"
            depthFade={0.55}
            innerShade={0.6}
            cornerRadius={12}
            onItemClick={handleItemClick}
          />
        </div>
      </div>
    </section>
  );
}

export default VisualShowcase;
