import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Proxeraa",
  robots: { index: false, follow: false },
};

export default function Privacy() {
  return (
    <main className="container-x max-w-3xl py-32">
      <a href="/" className="link-u text-sm font-medium">
        Back to home
      </a>
      <h1 className="display mt-8 text-4xl sm:text-5xl">Privacy Policy</h1>
      <p className="mt-6 text-lg leading-relaxed text-graphite">
        This page is a placeholder. Replace this text with your real privacy policy before you launch, ideally one
        reviewed by a lawyer. It should explain what information you collect (for example, what visitors send through the
        contact form), why, how long you keep it and how people can contact you about it.
      </p>
    </main>
  );
}
