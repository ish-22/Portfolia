"use client";

import dynamic from "next/dynamic";

const SplashCursor = dynamic(
  () => import("@/components/ui/SplashCursor"),
  { ssr: false }
);

const CustomCursor = dynamic(
  () => import("@/components/ui/custom-cursor"),
  { ssr: false }
);

const ChatWidget = dynamic(
  () => import("@/components/ui/chat-widget"),
  { ssr: false }
);

const ScrollToTop = dynamic(
  () => import("@/components/ui/scroll-to-top"),
  { ssr: false }
);

export function ClientWidgets() {
  return (
    <>
      <SplashCursor
        rainbow={false}
        colors={["#a3e635", "#22c55e", "#4ade80", "#10b981"]}
        size={1}
        force={1}
        swirl={3}
        trail={1}
        clickSplash
        colorSpeed={1}
        intensity={1}
        momentum={1}
        shading={1}
        glow={0}
        quality="high"
        intro
        contained={false}
      />
      <CustomCursor />
      <ScrollToTop />
      <ChatWidget />
    </>
  );
}

