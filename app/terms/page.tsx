import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Proxeraa",
  robots: { index: false, follow: false },
};

export default function Terms() {
  return (
    <main className="container-x max-w-3xl py-32">
      <a href="/" className="link-u text-sm font-medium">
        Back to home
      </a>
      <h1 className="display mt-8 text-4xl sm:text-5xl">Terms of Service</h1>
      <p className="mt-6 text-lg leading-relaxed text-graphite">
        This page is a placeholder. Replace this text with your real terms of service before you launch, ideally ones
        reviewed by a lawyer. They should cover how you work with clients, payment terms, ownership of delivered work and
        the limits of your liability.
      </p>
    </main>
  );
}
