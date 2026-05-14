import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col place-items-center mx-4 my-16 gap-y-4">
      <p className="font-bold text-6xl">404</p>
      <p className="font-bold">Product Not Found</p>
      <p>We couldn&apos;t find the item you&apos;re looking for.</p>
      <Link href="/products">View all products</Link>
    </main>
  );
}
