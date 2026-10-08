"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article";
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
};

export default function ScrollReveal({
  children,
  className = "",
  as = "div",
  delay,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const classes = [
    "reveal",
    visible ? "reveal-visible" : "",
    delay ? `reveal-delay-${delay}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const Tag = as;

  return (
    <Tag ref={ref as React.Ref<HTMLDivElement>} className={classes}>
      {children}
    </Tag>
  );
}
