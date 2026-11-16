"use client";

import { useState, useEffect } from "react";
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
  const [showDesktopEffects, setShowDesktopEffects] = useState(false);
  const [showSecondaryWidgets, setShowSecondaryWidgets] = useState(false);

  useEffect(() => {
    // Only desktop devices with fine pointer (mouse) and hover capability get cursor effects
    const isDesktopPointer =
      typeof window !== "undefined" &&
      window.innerWidth >= 1024 &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    // Defer heavy widgets until after critical paint & idle time to guarantee 95-99% performance
    const scheduleLoad = () => {
      if (isDesktopPointer) {
        setShowDesktopEffects(true);
      }
      setShowSecondaryWidgets(true);
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const handle = (window as unknown as { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback(
        scheduleLoad,
        { timeout: 2500 }
      );
      return () => {
        if ("cancelIdleCallback" in window) {
          (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(handle);
        }
      };
    } else {
      const timer = setTimeout(scheduleLoad, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {showDesktopEffects && (
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
            quality="medium"
            intro={false}
            contained={false}
          />
          <CustomCursor />
        </>
      )}

      {showSecondaryWidgets && (
        <>
          <ScrollToTop />
          <ChatWidget />
        </>
      )}
    </>
  );
}

