"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

/** Adds `is-in` once the element scrolls into view. */
export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType<any>;
}) {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
      style={{ ["--d" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/** Turns *word* into italic emphasis, so headlines can mix upright and italic serif. */
export function emph(text: string): ReactNode {
  return text.split("*").map((part, i) => (i % 2 === 1 ? <em key={i}>{part}</em> : part));
}

/** Headline where each line slides up from a mask. Lines can be text or JSX. */
export function MaskHeading({
  lines,
  as: Tag = "h2",
  className = "",
  delay = 0,
}: {
  lines: ReactNode[];
  as?: ElementType<any>;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLElement>(0.2);
  return (
    <Tag ref={ref} className={`${className} ${inView ? "is-in" : ""}`}>
      {lines.map((l, i) => (
        <span key={i} className="mask-line pb-[0.08em]">
          <span style={{ ["--d" as string]: `${delay + i * 110}ms` }}>{typeof l === "string" ? emph(l) : l}</span>
        </span>
      ))}
    </Tag>
  );
}

export function SectionHead({
  eyebrow,
  lines,
  intro,
  dark = false,
  className = "",
}: {
  eyebrow: string;
  lines: ReactNode[];
  intro?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <Reveal>
        <p className={`eyebrow mb-6 ${dark ? "text-accentlight" : "text-accentdeep"}`}>
          {eyebrow}
        </p>
      </Reveal>
      <MaskHeading lines={lines} className="h-lg" />
      {intro && (
        <Reveal delay={200}>
          <p className={`mt-7 max-w-xl text-lg leading-relaxed ${dark ? "text-mute" : "text-graphite"}`}>
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/** Image placeholder that keeps its aspect ratio. Replace with <Image/> later. */
export function Placeholder({
  label = "IMAGE PLACEHOLDER",
  ratio = "16/10",
  dark = false,
  className = "",
  hint,
  children,
}: {
  label?: string;
  ratio?: string;
  dark?: boolean;
  className?: string;
  hint?: string;
  children?: ReactNode;
}) {
  return (
    <div
      role="img"
      aria-label={`${label}${hint ? ` - ${hint}` : ""}`}
      className={`${dark ? "ph-dark" : "ph-light"} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {["left-3 top-3", "right-3 top-3", "left-3 bottom-3", "right-3 bottom-3"].map((p) => (
        <span
          key={p}
          className={`absolute ${p} h-2.5 w-2.5 ${dark ? "border-bone/25" : "border-ink/25"} ${
            p.includes("left") ? "border-l" : "border-r"
          } ${p.includes("top") ? "border-t" : "border-b"}`}
        />
      ))}
      <div className="px-4 text-center">
        <p className={`eyebrow ${dark ? "text-mute" : "text-slate"}`}>{label}</p>
        {hint && <p className={`mt-1.5 text-xs ${dark ? "text-mute" : "text-slate"}`}>{hint}</p>}
      </div>
      {children}
    </div>
  );
}

/**
 * Drop a file into /public/images with the given name and it shows up here.
 * Until the file exists, the placeholder stays visible.
 */
export function Photo({
  src,
  alt,
  ...ph
}: {
  src: string;
  alt: string;
  label?: string;
  ratio?: string;
  dark?: boolean;
  className?: string;
  hint?: string;
}) {
  const [ok, setOk] = useState(true);
  return (
    <Placeholder {...ph}>
      {ok && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setOk(false)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </Placeholder>
  );
}

export function Arrow() {
  return (
    <span className="arrow" aria-hidden>
      →
    </span>
  );
}
