"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { track, type AnalyticsEvent } from "@/lib/analytics";

type SectionTrackProps = {
  event: AnalyticsEvent;
  children: ReactNode;
  className?: string;
  id?: string;
};

export function SectionTrack({ event, children, className, id }: SectionTrackProps) {
  const ref = useRef<HTMLDivElement>(null);
  const sent = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !sent.current) {
          sent.current = true;
          track(event);
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [event]);

  return (
    <div ref={ref} id={id} className={className}>
      {children}
    </div>
  );
}
