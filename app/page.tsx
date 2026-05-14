import HeroBanner from "@/components/hero-banner";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col place-items-center gap-y-4">
      <HeroBanner />
    </main>
  );
}
