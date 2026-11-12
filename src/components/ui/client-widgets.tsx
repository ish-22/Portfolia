"use client";

import dynamic from "next/dynamic";

const CustomCursor = dynamic(
  () => import("@/components/ui/custom-cursor").then((mod) => mod.CustomCursor),
  { ssr: false }
);

const ChatWidget = dynamic(
  () => import("@/components/ui/chat-widget").then((mod) => mod.ChatWidget),
  { ssr: false }
);

const ScrollToTop = dynamic(
  () => import("@/components/ui/scroll-to-top").then((mod) => mod.ScrollToTop),
  { ssr: false }
);

export function ClientWidgets() {
  return (
    <>
      <CustomCursor />
      <ScrollToTop />
      <ChatWidget />
    </>
  );
}

